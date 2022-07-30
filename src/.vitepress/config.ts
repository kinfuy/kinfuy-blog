import type { UserConfig } from 'vitepress';
import { head } from './config/head';
const config: UserConfig = {
  title: '阿乐去买菜',
  description: '阿乐的笔记小屋！',
  head,
  lang: 'zh-cn',
  outDir: '../docs',
};
export default config;
