---
title: 【低代码平台之哈姆雷特】千变万化的属性设置器
theme: default
tag: InformalEssay
time: 2022.8.21
---

## 序

一个低代码平台最核心部分，可能大多数人都觉得是渲染器部分，而我更觉得属性设置器才是正正的灵魂所在，渲染器，物料决定了一个低代码平台的下线，而属性设置器决定了上线。就像一千个观众眼中有一千个哈姆雷特一样。今天就带大家看看 lowcode-engine 是怎么实现属性设置器的。

## 什么是属性设置器

我们先来梳理一下，我们来写 vue 的时候，使用一个组件，肯定会有很多属性，事件，样式需要我们去定义，低代码平台也一样，只是简化了我们使用的成本，利用这种可视化的方式去设置，组件的这些参数依然需要有地方去告诉组件，该怎么去渲染。这是就是属性设置器发挥作用的地方了。

> 设置器主要用于低代码组件属性值的设置，顾名思义叫"设置器"，又称为 Setter。由于组件的属性有各种类型，需要有与之对应的设置器支持，每一个设置器对应一个值的类型。—— lowcode-engine 官方定义

![物料](/articles/setter.png)

我们可以很清晰的看见 lowcode-engine 将设置器分为四类：

- 属性：展示该物料常规的属性
- 样式：展示该物料样式的属性
- 事件：如果该物料有声明事件，则会出现事件面板，用于绑定事件。
- 高级：两个逻辑相关的属性，**条件渲染**和**循环**

其实从上面不难看出，这四个分类基本上涵盖了绝大部分场景的需要。我们在后期只需要根据不同的使用对象开放相对应的功能即可。

## 该如何实现一个属性设置器

简单的梳理了一下思路与官方可能不完全一致，lowcode-engine 实现的相当复杂，再加上是 React 代码，没有写过，看起来还是有点吃力，这种复杂的系统，lowcode-engine 官方采用了面向对象的写法。每一个属性设置器都是一个 setter 类，他们之间可以相互嵌套，通过 path 路径操作具体的值，不了解的可以看一下[【lodashjs】](https://www.lodashjs.com/)get 和 set 方法的实现。这样就可以和具体的每一个设置器之间分开来，只需要每个设置抛出对应的值变化。触发事件显示对应值即可。

![setter](/articles/setter1.png)

通过上图我们可以清晰的看见，物料与渲染器，与属性设置器之间的联系，setter 与 setter 的关系，其实也就对应着我们的具体属性结构，有多少个属性就会生成多少 setter，彼此之间构成一个树形结构，path 路径作为沟通桥梁，获取值修改值。

贴一段官方代码，这个就是 setter 实现的一个接口，定义每一个 setter 拥有的属性方法，都贴心的给出了注释

```typescript
export interface SettingTarget {
  /**
   * 同样类型的节点
   */
  readonly isSameComponent: boolean;

  /**
   * 一个
   */
  readonly isSingle: boolean;

  /**
   * 多个
   */
  readonly isMultiple: boolean;

  /**
   * 编辑器引用
   */
  readonly editor: IEditor;

  /**
   * 访问路径
   */
  readonly path: Array<string | number>;

  /**
   * 顶端
   */
  readonly top: SettingTarget;

  /**
   * 父级
   */
  readonly parent: SettingTarget;

  /**
   * 获取当前值
   */
  getValue: () => any;

  /**
   * 设置当前值
   */
  setValue: (value: any) => void;

  /**
   * 取得子项
   */
  get: (propName: string | number) => SettingTarget | null;

  /**
   * 取得子项
   */
  getProps?: () => SettingTarget;

  /**
   * 获取子项属性值
   */
  getPropValue: (propName: string | number) => any;

  /**
   * 设置子项属性值
   */
  setPropValue: (propName: string | number, value: any) => void;

  /**
   * 清除已设置值
   */
  clearPropValue: (propName: string | number) => void;

  /**
   * 获取顶层附属属性值
   */
  getExtraPropValue: (propName: string) => any;

  /**
   * 设置顶层附属属性值
   */
  setExtraPropValue: (propName: string, value: any) => void;

  // @todo 补充 node 定义
  /**
   * 获取 node 中的第一项
   */
  getNode: () => any;
}
```

当然这个是内部实现了，要实现一个具体的 setter，不需要怎么复杂，这个只是内部 lowcode-engine 内部流转，
下面官方给出的几个设置器，有兴趣可以去看看怎么去实现的，最核心的部分是 ArraySetter 和 ObjectSetter,这两个 setter 提供属性嵌套的能力，也是最常用的.

[【官方设置器源码仓库】](https://github.com/alibaba/lowcode-engine-ext)

[【官方设置器列表说明】](https://www.yuque.com/lce/doc/oc220p#fl46)

![setter](/articles/setter2.png)

## 最后

优秀的属性设置器，

- 需要有优秀的扩展性
- 优秀的交互性
- 简化设置优先原则
