---
title: 【低代码平台之万物互联】怎么打通物料，渲染器，属性设置器？
theme: default
tag: InformalEssay
time: 2022.8.10
---

## 序

低代码平台核心的三个概念：物料、渲染器、属性设置器。那 Low-Code Engine 怎么将他们串联起来形成一个整体，并保持高拓展性，只要你动手做过低代码, 你就会发现前文提到的协议的重要性了。

> [《低代码引擎搭建协议规范》](https://lowcode-engine.cn/lowcode)

> [《低代码引擎物料协议规范》](https://lowcode-engine.cn/material)

> [《低代码引擎资产包协议规范》](https://lowcode-engine.cn/assets)

## 什么是物料？

![物料](/articles/material.png)

物料是页面搭建的原料，按照粒度可分为组件、区块和模板：

- 组件：组件是页面搭建最小的可复用单元，其只对外暴露配置项，用户无需感知其内部实现；
- 区块：区块是一小段符合低代码协议的 schema，其内部会包含一个或多个组件，用户向设置器中拖入一个区块后可以随意修改其内部内容；
- 模板：模板和区块类似，也是一段符合低代码协议的 schema，不过其根节点的 componentName 需固定为 Page，它常常用于初始化一个页面；

低代码编辑器中的物料需要进行一定的配置和处理，才能让用户在低代码平台使用起来。这个过程中，需要一份一份配置文件，也就是资产包。资产包文件中，针对每个物料定义了它们在低代码编辑器中的使用描述。

#### 先看一下一份简单的 Button 物料配置

```js
{
    snippets: [
    {
        title: '主按钮',
        screenshot:'',
        schema: {
        componentName: 'Button',
        props: {
            type: 'primary',
            children: '主按钮'
        }
        },
        id: '默认分组_通用_Button_主按钮'
    },
    ],
    componentName: 'Button',
    title: '按钮',
    category: '通用',
    props: [
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
        {
            name: 'children',
            title: {
            label: '内容',
            tip: 'children | 内容'
            },
            propType: {
            type: 'oneOfType',
            value: ['node', 'string']
            },
            setter: ['SlotSetter', 'StringSetter', 'VariableSetter']
        },
        {
            name: 'htmlType',
            title: {
            label: '原生类型',
            tip: 'htmlType | 设置 `button` 原生的 `type` 值'
            },
            propType: {
            type: 'oneOf',
            value: ['submit', 'reset', 'button']
            },
            setter: [
            {
                componentName: 'RadioGroupSetter',
                props: {
                options: [
                    {
                    title: 'Submit',
                    value: 'submit'
                    },
                    {
                    title: 'Reset',
                    value: 'reset'
                    },
                    {
                    title: 'Button',
                    value: 'button'
                    }
                ]
                }
            },
            'VariableSetter'
            ],
            defaultValue: 'button'
        },
        {
            name: 'href',
            title: {
            label: '跳转地址',
            tip: 'href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致'
            },
            propType: 'string',
            setter: ['StringSetter', 'VariableSetter']
        },
        {
            name: 'target',
            title: {
            label: 'Target',
            tip: 'target | 相当于 a 链接的 target 属性，href 存在时生效'
            },
            propType: {
            type: 'oneOf',
            value: ['_self', '_blank', '_parent', '_top']
            },
            setter: [
            {
                componentName: 'SelectSetter',
                props: {
                options: [
                    {
                    title: '本窗口跳转',
                    value: '_self'
                    },
                    {
                    title: '打开新标签页',
                    value: '_blank'
                    },
                    {
                    title: '父窗口跳转',
                    value: '_parent'
                    },
                    {
                    title: '顶层窗口跳转',
                    value: '_top'
                    }
                ]
                }
            },
            'StringSetter',
            'VariableSetter'
            ]
        }
        ]
    },
    {
        title: '外观',
        display: 'block',
        type: 'group',
        items: [
        {
            name: 'type',
            title: {
            label: '类型',
            tip: 'type | 设置按钮类型'
            },
            propType: {
            type: 'oneOf',
            value: ['primary', 'ghost', 'dashed', 'danger', 'link', 'text']
            },
            setter: [
            {
                componentName: 'SelectSetter',
                props: {
                options: [
                    {
                    title: '主按钮',
                    value: 'primary'
                    },
                    {
                    title: '虚线框按钮',
                    value: 'dashed'
                    },
                    {
                    title: '危险按钮',
                    value: 'danger'
                    },
                    {
                    title: '链接按钮',
                    value: 'link'
                    },
                    {
                    title: '类文本按钮',
                    value: 'text'
                    }
                ]
                }
            },
            'VariableSetter'
            ]
        },
        {
            name: 'size',
            title: {
            label: '尺寸',
            tip: 'size | 设置按钮大小'
            },
            propType: {
            type: 'oneOf',
            value: ['large', 'middle', 'small']
            },
            setter: [
            {
                componentName: 'RadioGroupSetter',
                props: {
                options: [
                    {
                    title: '大',
                    value: 'large'
                    },
                    {
                    title: '中',
                    value: 'middle'
                    },
                    {
                    title: '小',
                    value: 'small'
                    }
                ]
                }
            },
            'VariableSetter'
            ],
            defaultValue: 'middle'
        },
        {
            name: 'shape',
            title: {
            label: '形状',
            tip: 'shape | 设置按钮形状，可选值为 `circle`、 `round` 或者不设'
            },
            propType: {
            type: 'oneOf',
            value: ['default', 'circle', 'round']
            },
            defaultValue: 'default',
            setter: [
            {
                componentName: 'RadioGroupSetter',
                props: {
                options: [
                    {
                    title: '默认',
                    value: 'default'
                    },
                    {
                    title: '圆形',
                    value: 'circle'
                    },
                    {
                    title: '圆角',
                    value: 'round'
                    }
                ]
                }
            },
            'VariableSetter'
            ]
        },
        {
            name: 'icon',
            title: {
            label: '图标',
            tip: 'icon | 设置按钮的图标组件'
            },
            propType: 'node',
            setter: {
            componentName: 'SlotSetter',
            initialValue: {
                type: 'JSSlot',
                value: [
                {
                    componentName: 'Icon',
                    props: {
                    type: 'SearchOutlined',
                    size: 14
                    }
                }
                ]
            }
            }
        },
        {
            name: 'block',
            title: {
            label: '自适应',
            tip: 'block | 将按钮宽度调整为其父宽度的选项'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: false
        },
        {
            name: 'danger',
            title: {
            label: '危险按钮',
            tip: 'danger | 设置危险按钮'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: false
        },
        {
            name: 'ghost',
            title: {
            label: '幽灵属性',
            tip: 'ghost | 幽灵属性，使按钮背景透明'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: false
        }
        ]
    },
    {
        title: '状态',
        display: 'block',
        type: 'group',
        items: [
        {
            name: 'loading',
            title: {
            label: '载入状态',
            tip: 'loading | 设置按钮载入状态'
            },
            propType: 'bool',
            setter: ['BoolSetter', 'VariableSetter']
        },
        {
            name: 'disabled',
            title: {
            label: '是否禁用',
            tip: 'disabled | 是否为禁用状态'
            },
            propType: 'bool',
            setter: ['BoolSetter', 'VariableSetter'],
            defaultValue: false
        }
        ]
    },
    {
        title: '事件',
        display: 'block',
        type: 'group',
        items: [
        {
            name: 'onClick',
            title: {
            label: '点击回调',
            tip: '点击按钮时的回调'
            },
            propType: 'func'
        }
        ]
    }
    ],
    configure: {
    supports: {
        events: [
        {
            name: 'onClick',
            template:
            "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}"
        }
        ],
        style: true
    }
    },
    npm: {
    package: '@alilc/lowcode-materials',
    version: '1.0.3',
    exportName: 'Button',
    main: 'build/antd-lowcode/view.js',
    destructuring: true
    },
    group: {
    zh_CN: '默认分组',
    en_US: 'DefaultGroup',
    type: 'i18n'
    },
    priority: 0
},
```

其中基本上涵盖了绝大部分我们编码过程中可能需要的属性参数，从物料就可以看见他与渲染器，属性设置器之间的关联，

- `snippets 代码片段` 定义了组件不同状态下的低代码 schema (可以有多个)，用户从组件面板拖入组件到设置器时会向页面 schema 中插入 snippets 中定义的组件低代码 schema

- `props 组件属性信息` 定义了属性设置器需要的参数，包含了每一个属性的 setter，参数默认值等等，

- `configure 编辑体验增强` 定义各种定制编辑能力的配置信息

  - props 属性面板配置

    > 用于属性面板能力描述

  - component 组件能力配置

    > 与组件相关的能力、约束、行为等描述，有些信息可从组件视图实例上直接获取

  - supports 通用扩展配置能力支持性

    > 用于通用扩展面板能力描述

  - advanced 高级特性配置

    > 用户可以在这些配置通过引擎上下文控制组件在设置器中的表现，例如自动初始化组件的子组件、截获组件的操作事件进行个性化处理等

    ```js
    {
    "configure": {
        // 支持的事件枚举
        "supports": {
        // 支持事件列表
        "events": ["onClick", "onChange"],
        // 支持循环设置
        "loop": true,
        // 支持条件设置
        "condition": true,
        // 支持样式设置
        "styles": true,
        }
    }
    }
    ```

## 什么是设置器？

设置器主要用于低代码组件属性值的设置，顾名思义叫"设置器"，又称为 Setter。由于组件的属性有各种类型，需要有与之对应的设置器支持，每一个设置器对应一个值的类型。

其中包含四类设置器：

- 属性：展示该物料常规的属性
- 样式：展示该物料样式的属性
- 事件：如果该物料有声明事件，则会出现事件面板，用于绑定事件。
- 高级：两个逻辑相关的属性，条件渲染和循环

![物料](/articles/setter.png)

刚才我们在物料中看见的`setter` 配置就是给设置器的，Low-Code Engine 官方提供了常用的设置器，当然也可以自定义，

[Low-Code Engine 设置器列表](https://www.yuque.com/lce/doc/oc220p?view=doc_embed&from=kb&from=kb&outline=1&title=1#fl46)

```js
 {
    name: 'type',
    title: {
    label: '类型',
    tip: 'type | 设置按钮类型'
    },
    propType: {
    type: 'oneOf',
    },
    setter: [
    {
        componentName: 'SelectSetter',
        props: {
        options: [
            ...
          ]
        }
    },
    'VariableSetter'
    ]
 }
```

### 什么是渲染器？

渲染器就是画布，提供物料编排能力，交互能力。物料的 `snippets` 提供的渲染器的基本渲染视图描述

> 渲染依赖于 schema 和 components。其中 schema 和 components 需要一一对应，schema 中使用到的组件都需要在 components 中进行声明，否则无法正常渲染。

#### 重要组成

- schema

  > 搭建基础协议数据，渲染模块将基于 schema 中的内容进行实时渲染。

- components

  > 渲染模块渲染页面需要用到的组件依赖的实例，components 对象中的 Key 需要和搭建 schema 中的 componentName 字段对应。

- componentsMap

  > 配置规范参见《低代码引擎搭建协议规范》，主要在搭建场景中使用，用于提升用户搭建体验。

  - 属性配置校验：用户可以配置组件特定属性的 propTypes，在搭建场景中用户输入的属性值不满足 propType 配置时，渲染模块会将当前属性设置为 undefined，避免组件抛错导致编辑器崩溃；
  - isContainer 标记：当组件被设置为容器组件且当前容器组件内没有其他组件时，用户可以通过拖拽方式将组件直接添加到容器组件内部；

  - parentRule 校验：当用户使用的组件未出现在组件配置的 parentRule 组件内部时，渲染模块会使用 visualDom 组件进行占位，避免组件抛错的同时在下钻编辑场景也能够不阻塞用户配置，典型的场景如 Step.Item、Table.Column、Tab.Item 等等。

- appHelper

  > appHelper 主要用于设置渲染模块的全局上下文，目前 appHelper 支持设置以下上下文：

  - utils：全局公共函数
  - constants：全局常量
  - location：react-router 的 location 实例
  - history：react-router 的 history 实例

## 最后

兵马未动，粮草先行，Low-Code Engine 定义了基础协议，致力于解决低代码平台概念不通、物料孤岛、生态隔离的一系列问题，其实做任务复杂系统都可以如此，先设计，在编码，好过瞎弄一通，最后发现开始就错了，又推翻重来。

- 先思考，后动手 🍖

- 先规范，后实现 🌮

- 先摸鱼、后摆烂 🍛
