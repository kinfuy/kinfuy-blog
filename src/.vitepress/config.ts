import type { UserConfig } from 'vitepress';
import { head } from './config/head';
const config: UserConfig = {
  title: 'Kinfu',
  description: 'Kinfu的笔记小屋！',
  head,
  lang: 'zh-cn',
  outDir: '../docs',
};
export default config;
