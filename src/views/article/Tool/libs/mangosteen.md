---
title: '✨每个前端都应该拥有自己的快速模板CLI工具'
theme: default
tag: Tool
time: 2022.6.29
---

## ✨ 每个前端都应该拥有自己的快速模板 CLI 工具

### 背景

作为工作一年的前端小码农，也写了不少项目，就想着是不是应该有个总结，正好最近在写脚手架工具，就给以前的项目，弄了一套快速生成模板的工具，再也不用担心，每次开新项目，环境配置半天，都还没有还是写代码。

### 需求分析

- 可以配置 eslint，husky 等项目配套设施

- 需要快速生成对应项目模板（如：谷歌插件，node-cli 等）

- 模板与 cli 分解，更新模板不需要更新 cli

### 万物之初

首先我们介绍 kolorist、minimist、prompts 三个必不可少的开源库

- [kolorist](https://github.com/marvinhagemeister/kolorist) 改变控制台颜色,可以看着 chalk 的替代品

  ![kolorist](/articles/kolorist.svg)

- [minimist](https://github.com/substack/minimist) 极简的命令行解析工具

  ```js
  var argv = require('minimist')(process.argv.slice(2));
  console.log(argv);
  ```

  ```shell

  $ node example/parse.js -a beep -b boop
  { _: [], a: 'beep', b: 'boop' }

  $ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
  { _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }

  ```

- [prompts](https://github.com/terkelg/prompts) 轻量级、美观且用户友好的交互式提示

```js
const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: 'How old are you?',
    validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
  });

  console.log(response); // => { value: 24 }
})();
```

![prompts](/articles/prompts.gif)

### 撸起袖子开干

> 有了上面三个工具库，一个脚手架工具就变得特别简单了

#### 首先分析一下一个 cli 脚手架。

- 就是一段脚本文件，用 node 只需要在文件头部加入声明`#!/usr/bin/env node` 即可

- 然后再 package.json 用 bin 声明命令

```json
  "bin": {
    "mo": "index.js"
  },
```

- 现在我们重点来写我们的逻辑 index.js 文件

  - 远程更新方案，通过 git clone 克隆模板仓库，替换本地模板即可，一些配置文件也可以分离到模板库里

  - 只要需工具 prompts 提问获取的用户配置根据配置渲染模板即可

#### 主要逻辑代码，其他关联函数可访问仓库查看

[Mangosteen（山竹)](https://github.com/kinfuy/mangosteen)

```js
import { join, resolve } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import minimist from 'minimist';
import { bgGreen, bgYellow, green } from 'kolorist';

import { getUserConfig } from './generator/question';
import { emptyDir, formatTargetDir } from './utils/utils';
import { render } from './generator/render';
import { run } from './generator/shell';
import moPkg from './package.json';
import { downloadRepo } from './generator/update';
const cwd = process.cwd();
const def = {
  defaultTargetDir: 'mangosteen-project',
};

// 人口函数，别人用刚才我们声明的bin时候就会走到这里
const init = async () => {
  // 这里通过刚才说明minimist库解析命令行参数
  const argv = minimist(process.argv.slice(2), {
    string: ['_'],
    alias: {
      version: ['v'],
      update: ['up'],
    },
  });
  // update的时候，调用更新模板函数
  if (argv._[0] === 'update') {
    downloadRepo();
    return;
  }
  // -v version 返回版本号
  if (argv.version) {
    console.log(`v${moPkg.version}`);
    return;
  }

  // 获取prompts的问题结果
  const config = await getUserConfig({ targetDir: formatTargetDir(argv._[0]) });
  const {
    targetDir,
    overwrite,
    projectName,
    packageName = projectName ?? def.defaultTargetDir,
    description,
    author,
    eslint,
    template,
    commitlint,
    stylelint,
    readme,
    packageManager = 'pnpm',
  } = config;

  const root = join(cwd, targetDir ?? def.defaultTargetDir);

  if (existsSync(root) && overwrite) {
    emptyDir(root);
  } else if (!existsSync(root)) {
    mkdirSync(root);
  }

  const pkg = {
    name: packageName,
    description: description ?? '',
    author: author ?? '',
  };
  writeFileSync(resolve(root, 'package.json'), JSON.stringify(pkg, null, 2));

  const templateRoot = resolve(__dirname, 'mo-templates/templates');

  if (!existsSync(templateRoot)) {
    await downloadRepo();
  }
  if (template) {
    render(root, templateRoot, `${template}`);
  }
  if (eslint) {
    render(root, templateRoot, 'eslint');
  }
  if (stylelint) {
    render(root, templateRoot, 'stylelint');
  }
  if (readme) {
    render(root, templateRoot, 'readme');
  }
  if (commitlint) {
    render(root, templateRoot, 'commitlint');
  }
  console.log(`${bgGreen('mangosteen')}: 模板渲染成功`);
  console.log(`${bgYellow('mangosteen')}: git初始化...`);
  await run('git init', root);
  console.log(`${bgGreen('mangosteen')}: git初始化成功`);
  console.log(`${bgYellow('mangosteen')}: 依赖安装中...`);

  if (packageManager === 'yarn') {
    await run(`${packageManager}`, root);
  } else {
    await run(`${packageManager} install`, root);
  }
  console.log(`${bgGreen('mangosteen')}: 依赖安装成功`);
  console.log(`\n\t${green(`cd ${targetDir}`)}`);
  console.log(`\t${green(`${packageManager} run serve`)}\n`);
};

init().catch((e) => {
  console.error(e);
});
```

### [Mangosteen（山竹)](https://github.com/alqmc/mangosteen)

> 本项目支持

- 谷歌插件项目快速模板

- node-cli 项目快速模板

### 参考

1、[create-vue](https://github.com/vuejs/create-vue) vue 官方脚手架工具

2、[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) vite 官方脚手架工具
