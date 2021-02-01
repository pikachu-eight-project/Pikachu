# 项目展示

说明：皮卡丘团队开发的博客项目

## 开发流程

1. 使用命令行 `yarn dev` 开发模式下开发此项目
2. 使用命令行 `yarn build` 编译此项目，并完成打包
3. 使用命令行 `yarn start` 打开本地服务器，运行打包后的项目

## 目录

```
Pikachu
    ├── src  
    │   ├── pages                                               页面组件目录（路由组件目录）   
    │       ├── _app.tsx                                        全局布局组件（入口组件）
    │       ├── index.tsx                                       首页页面组件（路由为：/ 时匹配）
    │       ├── index.module.scss                               首页页面组件的模块样式         
    │       ├── api                                             Api路由目录
    │           ├── book.ts                                     Api路由，导出一个函数，函数可以使用服务器端的req和res，完成对数据的响应，通过 /api/book 获取该数据
    │
    │
    ├── node_modules                                            依赖库
    ├── package.json                                            webpack 配置项
    ├── tsconfig.json                                           typescript 配置项
    ├── next-env.d.ts                                           typescript 声明文件
    ├── next.config.js                                          nextjs的配置文件
    ...

```

## 技术栈

1. UI界面：reactjs、nextjs、scss
2. 后端：nodejs、koa
3. 数据库：mysql

## 规范

1. Typescript

