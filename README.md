# 语雀+Elog+Vitepress+Sugarat/theme主题

## 仓库介绍

仓库主要在[yuque-vitepress](https://github.com/elog-x/)基础上整合[@Sugarat/theme](https://github.com/ATQQ/sugar-blog)主题，实现用语雀写文档，发布后自动更新到博客，大部分教程内容可以在上面两个仓库找到，不在重复说明。

主要分为下面两部分

* [Elog](https://github.com/LetTTGACO/elog) ：用来同步语雀文档
* vitepress+@Sugarat/theme：负责博客运行



## 文档配置

根据[文档说明](https://elog.1874.cool/notion/write-platform)在`.elog.env`配置语雀信息



## 运行本项目

同步完整命令见[elog文档](https://elog.1874.cool/notion/bry3d3lwe206xuor)，博客相关命令见[主题文档](https://theme.sugarat.top/sop/quickStart.html) 



安装依赖

```
yarn install
```

同步语雀文档。注：因为同步命令经常使用，我把本地同步简化成了`snyc` ，和原`yuque-vitepress` 有点区别

```
yarn run sync
```

开发启动

```sh
yarn run dev
```

构建
```sh
yarn run build
```

预览产物
```sh
yarn run serve
```
---
## 更新和升级

它们是两个独立的项目，都支持独立更新和升级，功能上也不存在耦合。

**@sugarat/theme**主题更新

```shell

# 更新主题
pnpm add @sugarat/theme@latest

# 更新vitepress
pnpm add vitepress@latest
```

**elog**更新

```
elog upgrade
```



