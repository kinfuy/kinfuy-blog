/**
 * 整理文章出口
 */
import { resolve } from 'path';
import { readFile, writeFile } from 'fs/promises';
import fsGlob from 'fast-glob';
import dayjs from 'dayjs';
import { getArticleHeader } from '../config/template';
import { tags } from '../config/tags';
interface ArticleInfo {
  title: string;
  tag: string;
  path: string;
  time: string;
}
const getEnterFile = async () => {
  const list = await fsGlob(['**/article/**/*.md', '!**/*index.md']);
  return list;
};

const getArticleInfo = async (path: string): Promise<ArticleInfo> => {
  const article = await readFile(path, 'utf-8');
  const info = article.match(/^---([\s\S]*)---/g);
  const title = info && info[0].match(/title:(.*)/g);
  const tag = info && info[0].match(/tag:(.*)/g);
  const time = info && info[0].match(/time:(.*)/g);

  const link = path.replace('.md', '').match(/libs(.*)/);
  return {
    title: title ? title[0].replace(/title:(\s)*/, '') : '',
    time: time ? time[0].replace(/time:(\s)*/, '') : '',
    tag: tag ? tag[0].replace(/tag:(\s)*/, '') : '',
    path: link ? `./${link[0]}` : '',
  };
};

const writeEnter = async (articleInfo: ArticleInfo[]) => {
  tags.forEach(async (tag) => {
    const articles = articleInfo
      .filter((x) => x.tag === tag)
      .sort((a, b) => {
        return dayjs(a.time).isBefore(dayjs(b.time)) ? 1 : -1;
      });
    if (articles.length === 0) return;
    const header = getArticleHeader(tag);
    const code = articles
      .map((file) => {
        return `- [${file.title}](${file.path}) ${file.time}\n`;
      })
      .join('\n');
    await writeFile(
      resolve(header.path, 'index.md'),
      header.template + code,
      'utf-8'
    );
  });
};
const generateEnter = async () => {
  const articleInfoList: ArticleInfo[] = [];
  const articles = await getEnterFile();
  for (let i = 0; i < articles.length; i++) {
    const articleInfo = await getArticleInfo(articles[i]);
    articleInfoList.push(articleInfo);
  }
  await writeEnter(articleInfoList);
};

(async () => {
  await generateEnter();
})();
