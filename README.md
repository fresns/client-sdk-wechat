<p align="center"><a href="https://fresns.org/zh-Hans/" target="_blank"><img src="https://assets.fresns.com/images/logos/fresns.png" width="300"></a></p>

<p align="center">
<img src="https://img.shields.io/badge/WeChat-Mini%20Program-blueviolet" alt="WeChat">
<img src="https://img.shields.io/badge/Fresns%20API-3.x-orange" alt="Fresns API">
<img src="https://img.shields.io/badge/License-Apache--2.0-green" alt="License">
</p>

## 介绍

Fresns 是一款免费开源的社交网络服务软件，专为跨平台而打造的通用型社区产品，支持灵活多样的内容形态，可以满足多种运营场景，符合时代潮流，更开放且更易于二次开发。

- [点击了解产品 16 个功能特色](https://fresns.org/zh-Hans/intro/features.html)
- 使用者请阅读[安装教程](https://fresns.org/zh-Hans/guide/install.html)和[运营文档](https://fresns.org/zh-Hans/intro/operating.html)
- 扩展插件开发者请阅读[扩展文档](https://docs.fresns.com/zh-Hans/open-source/)和[数据字典](https://docs.fresns.com/zh-Hans/open-source/database/)
- 客户端开发者（网站端、小程序、App）请阅读 [API 文档](https://docs.fresns.com/zh-Hans/clients/api/)

## SDK 介绍

- 采用 Skyline 渲染引擎和 glass-easel 组件框架
- 编辑器采用 WeUI 样式库

## 使用说明

**源码方式**

- 将仓库中的 `/sdk/` 文件夹复制到你的小程序根目录。

**npm 方式**

> *开发中*

## 使用演示

[https://github.com/fresns/client-demo-wechat](https://github.com/fresns/client-demo-wechat)

## 初始化

- 在小程序 `app.js` 中引用，放置在 `onShow` 用于初始化小程序配置。

```js
import { fresnsInit } from '/sdk/services';

await fresnsInit();
```

- 将 `/sdk/` 文件夹中 `env.example.js` 文件复制到小程序根目录，并改为 `env.js` 文件名。

## 开发文档

- [API](https://docs.fresns.com/zh-Hans/clients/sdk/wechat/api.html)
- [功能函数](https://docs.fresns.com/zh-Hans/clients/sdk/wechat/functions.html)
- [插件扩展](https://docs.fresns.com/zh-Hans/clients/sdk/wechat/extensions.html)
- [编辑器](https://docs.fresns.com/zh-Hans/clients/sdk/wechat/editor.html)
- [工具包](https://docs.fresns.com/zh-Hans/clients/sdk/wechat/toolkit.html)

**小程序隐私保护指引**

- 选中的照片或视频信息：用于`发表附带图片或视频的内容`
- 选中的文件：用于`发表附带文件的内容`
- 选择的位置信息：用于`发表附带位置信息的内容` （未启用 `chooseLocation` 功能则无需选择该隐私功能）
- 发布内容：用于`发表帖子和评论`
- 剪切板：用于`复制分享链接和帖子内容中的超链接`
- 设备信息：用于`记录互动和错误问题的日志`
