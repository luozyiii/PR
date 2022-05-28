# 技术选型

```
1、主要技术栈：next.js + React + node
2、学习目标：通过 next.js 实战 SSR 项目，并部署
```

## 搭建

### 项目初始化

```bash
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
```

### 配置 Vscode + ESLint + StyleLint + Prettier（都强烈要求配置）

#### ESLint：主要用于代码校验，能够在开发阶段发现很多潜在的问题

- 1、vscode 安装 eslint 插件
- 2、.eslintrc.json 项目里的配置文件

```
{
  "extends": ["next/core-web-vitals", "eslint: recommended"]
}

```

#### StyleList：主要用于 CSS 样式进行代码格式化

- 1、vscode 安装 StyleList 插件
- 2、项目安装

```bash
yarn add sass stylelint stylelint-config-standard-scss -D
```

- 3、.stylelintrc.json

#### Prettier：主要用于代码格式化，可以让大家的风格趋于统一，方便后续维护迭代

- 1、vscode 安装 Prettier 插件
- 2、.prettierrc.js

#### Vscode：安装对应的插件并开启保存自动格式化

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "tabnine.experimentalAutoImports": true
}
```

### 搭建 Mock Server

在真实的工作场景中，前后端的工作基本都是并行开发的，一般都是相互约定好接口 API 后，分别进入开发。所以，根据接口 API mock 数据，方便我们开发

#### Mock 数据的三种常见情景

- 直接写死数据，使用 settimeout 模拟接口延时
- 本地起一个 node 服务，配合 mock.js 生成接口假数据，自己实现接口 API
- 使用已经搭建好的在线 Mock 服务，如：Postman、EasyMock
