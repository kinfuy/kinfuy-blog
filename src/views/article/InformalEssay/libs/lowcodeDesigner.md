---
title: 【低代码系列之万物之初】重生之梦回Dreamweaver？
theme: default
tag: InformalEssay
time: 2022.8.2
---

## 背景

上期，简单了说了一下低代码平台的现状以及认识,有小伙伴说这不就是 Dreamweaver 吗？拖拉拽，生成代码。只能说是这样也不是这样，Dreamweaver 能算作可视化编程的一个解决方案吧，但不能完全代表低代码平台。笔者并没有使用过 Dreamweaver（入手便是 vscode🥭）。所以网上冲浪了一下看网友的总结 Dreamweaver:

- 1.生成的代码基本无法维护，生成一坨屎， 如果下一个接手这个项目的人不用 DW， 那人就蒙圈了
- 2.无法使用前端生态，与什么 vue，React 之类的框架水土不服，npm 你都不好引入
- 3.不利于开发者自身发展，对代码的认识很非常浅，长期 DW 会导致不能深入技术
- 4.不能编写复杂的系统，比如一些没有 UI 的算法库

这基本也是开发低代码平台的难点，这一期来说说，怎么搭建一个低代码平台吧。浅析一下阿里低代码引擎（ Low-Code Engine）到底做了些什么。他们怎么解决这些难题的。

![image.png](/articles/lowcode1.png)

## 标准化协议

协议对于开发来说并不陌生，我们常见的什么 HTTP 协议、DNS 协议、TCP/IP 协议等等，一份优秀的协议能未后面省去不少麻烦。也能规范多人协作的效率。

在[《低代码引擎技术白皮书》](https://developer.aliyun.com/ebook/read/7507)中介绍了什么是协议

> 从建设背景出发，共建小组明确了低代码引擎的建设理念：协议先行，最小内核，最强生态。
> 协议先行
> 一份共同遵守的协议是整个体系的基石，决定了整个体系是否能够足够包容，兼容足够多的上层场景，同时也是整体技术体系能否足够稳定发展的基石，后续所有的引擎实现都是服务于协议的。

- 打破物料孤岛 🥝

- 低代码生态的基础 🍌

- 低代码引擎实现标准 🍉

### 协议链接

[《低代码引擎搭建协议规范》](https://lowcode-engine.cn/lowcode)

[《低代码引擎物料协议规范》](https://lowcode-engine.cn/material)

[《低代码引擎资产包协议规范》](https://lowcode-engine.cn/assets)

## 最小内核

Low-Code Engine 把低代码平台拆分出四个核心模块,涵盖了低代码平台的整个生命周期。

- 入料模块

  > 入料能力，让组件在低代码平台使用更容易

- 编排模块

  > 精心打造的编排模块，让拖拽、配置能力集成变得更简单

- 渲染模块

  > 运行时渲染，快速提供协议的渲染能力

- 出码模块
  > 出码能力，提升低代码的扩展性和性能

## 最强生态

- 物料生态
  物料是页面搭建的原料也是低代码的基础

  ![image.png](/articles/material.png)

- 设计器生态
  设计器优化基础物料的编排属性

  ![image.png](/articles/setter.png)

- 插件生态
  插件功能赋予低代码引擎更高的灵活性，低代码引擎的生态提供了一些官方的插件，但是无法满足所有人的需求，所以提供了强大的插件定制功能。
  通过定制插件，在和低代码引擎解耦的基础上，我们可以和引擎核心模块进行交互，从而满足多样化的功能。不仅可以自定义插件的 UI，还可以实现一些非 UI 的逻辑：

  ![image.png](/articles/plugin.png)

## 最后

看完 Low-Code Engine 的设计，还觉得低代码平台就是简单的拖拉拽吗？下期再说说看 Low-Code Engine 怎么打通物料，渲染器，设计器，怎么优雅的数据通信。

## 链接

- [低代码引擎](https://lowcode-engine.cn/)
