---
title: 极简的git账号与npm registry管理工具
theme: default
tag: Tool
time: 2022.11.7
---

## 极简的 git 账号与 npm registry 管理工具

极简的 git 账号与 npm registry 管理工具（ Git Account Management Tools & NPM Registry Manager ）

### Why Do

- 需要经常切换 git 账户，懂的都懂！！

- 当前 nrm 的最新版本nrm@1.2.5 不显示当前源地址[Pana/nrm#111](https://github.com/Pana/nrm/issues/111)  过了一年也没有修复。

### Features

- ✨ git 账户与 npm registry 管理工具（ 无缝切换)

- 🚀 极简的操作方式，just like nvm

- 😊 gacm [gnrm] ls 自动添加本地 git 账户或者本地 npm registry 管理工具

- 👋 gnrm 灵活配置，无污染，区分包管理器

### Getting Started

```
pnpm add gacm -g

yarn add gacm -g

npm install gacm -g

```

### Usage

#### 切换 git 账户

```shell
## just like nvm

## 查看用户列表，会自动添加本地用户
gacm ls


## 切换git账户
gacm use xxx --local

gacm use xxx --global


## 添加用户，--alias 可选  定义用户别名
gacm add --name xxx --email xxx [--alias xxx]

## 定义用户别名
gacm alias xxxx xxxx

## 删除用户
gacm delete user

```

#### 切换 NPM Registry

```shell
## just like nvm

## 查看NPM Registry 列表，会自动添加本地NPM Registry
gnrm ls [-p xxxx]


## 切换 npm registry default npm
gacm use xxx [-p yarn]

gacm use xxx [-p cnpm]


## 添加registry  --alias 可选  定义 registry 别名
gacm add --name xxx --registry xxx [--alias xxx]

## 定义registry别名
gacm alias xxxx xxxx

## 删除 registry
gacm delete xxx

```

### link

[github](https://github.com/alqmc/gacm)

