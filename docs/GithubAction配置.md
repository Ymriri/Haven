---
title: GithubAction配置
date: 2023-12-23T15:26:38.000Z
description: 配置GithubAction和WorkFlows
top: 2
tag:
  - 配置
---
# GithubAction配置
![atanas-malamov-oxdr4njBsTA.jpg](images/56e0a783143af4d8624c9acb11d93c31.jpeg)

## 持续集成
借用elog原来的流程图，我们从语雀发布后会触发**Hooks**，但是**hooks**并不支持直接调用**github action api**，所以我们需要借助第三方工具转发更新，好在[yuque-vitepress](https://github.com/elog-x/yuque-vitepress)提供了免费的[serverless](https://github.com/elog-x/serverless-api)。
![image.png](images/18aac33ef54d3b72d8dc65a076fd2ea8.png)
强烈建议先看原来的[新手文档](https://github.com/elog-x/yuque-vitepress)，我只是补充部分内容，不适合新手！！

部署Vercel 部分比较简单，看文档就行。
## Workflows配置
仓库自带一个Workflows，仓库上方`Action`有个`Sync Docs`，具体配置文件在`./github/workflows/sync.yaml`，参数含义就不一一介绍了。
![image.png](images/210beb8f5bfba681547aec6447dc7741.png)

配置**Token**：[https://elog.1874.cool/notion/gvnxobqogetukays#github](https://elog.1874.cool/notion/gvnxobqogetukays#github)
如果出现下面错误，需要开启workflows权限，在**Setting**->**Action**->**Actions permissions**
![image.png](images/5be461797d089388d445946bb3a749d7.png)
![image.png](images/cf92f57e957d8893c63bb9edb7ca20d8.png)

自动化Action测试：[https://github.com/elog-x/serverless-api](https://github.com/elog-x/serverless-api)

