import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // 使用白嫖代理不设置后缀
  // base: '/blog/',
  ignoreDeadLinks: true,
  lang: 'zh-cn',
  title: "Ymri",
  description: '逃离现实|思考',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    lastUpdatedText: '上次更新于',
    logo: '/logo.png',
    cleanUrls: true,
    lastUpdated: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '关于作者', link: 'https://github.com/ymriri' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Ymriri/Haven'
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
