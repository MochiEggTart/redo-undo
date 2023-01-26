import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'en-US',
  title: 'MochiRedoUndo',
  description: 'Vite & Vue powered static site generator.',
  base: '/redo-undo/',
  themeConfig: {
    nav: [
      { text: '導引', link: '/description' },
      /*
      { text: '展示', link: '/working' }
      ,
      {
        text: '語系',
        items: [
          { text: '繁體中文', link: '/item-1' }
        ],
      }
      */
    ],
    sidebar: [
      {
        text: '引言', 
        collapsible: true,
        items: [
          { text: '甚麼是redo-undo?', link: '/description' },
          { text: '安裝與用法', link: '/introduction' },
          /*{ text: '用法', link: '/usage' }*/
        ]
      },
      {
        text: '屬性',
        collapsible: true,
        items: [
          { text: 'count', link: '/count' }
        ]
      },
      {
        text: '方法',
        collapsible: true,
        items: [
          { text: 'add', link: '/add' },
          { text: 'clearAll', link: '/clearAll' },
          { text: 'getData', link: '/getData' },
          { text: 'getDataList', link: '/getDataList' },
          { text: 'redo', link: '/redo' },
          { text: 'undo', link: '/undo' },
        ]
      },
      {
        text: '看看我們其他的開源專案',
        collapsible: true,
        items: [
          { text: 'redo-undo', link: 'https://github.com/MochiEggTart/redo-undo' }
        ]
      },
    ],
  },
});
