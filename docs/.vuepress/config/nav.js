// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript教程》笔记', link: '/note/javascript/' },
          { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
          { text: '《JavaScript DOM 编程艺术》笔记', link: '/note/dom/' },
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' },
          { text: '《React》笔记', link: '/note/react/' },
          {
            text: '《Git》学习笔记',
            link: '/note/git/',
          },
          {
            text: '《TypeScript》学习笔记',
            link: '/pages/51afd6/',
          },
        ],
      },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/c8f128/' },
    ],
  },
  {
    text: '后端',
    link: '/technology/',
    items: [],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: '关于', link: '/about/' },
]
