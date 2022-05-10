import { resolve } from 'path';
const createTemplate = (tag: string) => {
  return `---\ntitle: '${tag}'\nactive: 'blog'\narticle: true\ntag: '${tag}'\n---\n`;
};

export const getArticleHeader = (tag: string) => {
  return {
    tag,
    template: createTemplate(tag),
    path: resolve(__dirname, `../src/views/article/${tag}`),
  };
};
