module.exports = {
  base: '/effective-fe/',
  title: '高效前端',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        crossorigin: 'anonymous',
        integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
      },
    ],
  ],

  description: '高效前端学习笔记',
  userName: '狸子同学',
  themeConfig: {
    displayAllHeaders: true,

    sidebar: [
      {
        title: 'HTML/CSS 优化', // required
        // path: '/chapter-01/01.md', // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
        children: [['/chapter-01/01.md', '能用 HTML/CSS 解决的就不要用 JS']],
      },
    ],
    lastUpdated: 'Last Updated', // string | boolean
  },
};
