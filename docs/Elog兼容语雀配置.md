---
title: Elog兼容语雀配置
date: 2023年12月23日
description: 关于elog导出的一些修改
top: 1
tag:
  - Haven
---
# Elog兼容语雀配置
![marc-marchal-o9sQxsixlng.jpg](images/e780d49eaaade96d2c3c51e449189e9f.jpeg)
## 保证markdown文档兼容主题
目前使用本地保存静态资源，后续也会测试其他图床的兼容性。

原**elog**使用语雀账号密码模式导出**markdown**文档存在小问题，详见[issues52](https://github.com/LetTTGACO/elog/issues/52)。为了适配主题，我们需要修改一点点配置。

原语雀默认删除**frontMatter**，但是[主题使用frontMatter控制页面](https://theme.sugarat.top/config/frontmatter.html)，好在elog考虑到了这点，但是需要我们小小的修改下配置，使其兼容`sugarat/theme`。

在`elog.config.js`文件的`deploy`使用下面配置，详见[参数解释](https://elog.1874.cool/notion/raqyleng501h23p1)
```javascript
deploy: {
  platform: 'local',
    local: {
    outputDir: './docs/',
      filename: 'title',
      format: 'matter-markdown', // 保留frontMatter
    catalog: true,
      // formatExt: './elog.format.js', // 移除elog格式处理，
      frontMatter: {
      enable: true,
        include: ['top','descriptionHTML','sticky','publish','tag','description',
                  'recommend','hiddenCover','author','comment','date'], // 只输出include包含的属性
        exclude: ['cover'], // 不输出exclude包含的属性
        }
  }
},
```

- 注意`include`请根据自己需要引入主题需要的**fronetMatter**，不然会被elog自动过滤
- **注释**`formatExt`，防止elog自定义配置导致**frontMatter**失效
- 请在语雀链接后面加上`/markdown` 查看语雀导出markdown文件，防止输入奇怪字符
- 语雀导出的**cover**不可用（**防盗链**)，但是主题会自动拿第一张图当封面，所以需要禁止elog自动生成cover，在`exclude`添加上`cover`
