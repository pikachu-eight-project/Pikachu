# 项目展示

说明：皮卡丘团队开发的博客项目

## 运行流程

### 1. 开发中调试

- 使用命令行 `yarn dev` 开发模式下开发此项目

### 2. 打包调试

- 使用命令行 `yarn build` 编译此项目，并完成打包
- 使用命令行 `yarn start` 打开本地服务器，运行打包后的项目

## 目录

```
Pikachu
    ├── public                                                  静态资源文件夹，用于存放图片等静态资源，使用路径以 / 开头
    ├── src  
    │   ├── assets                                              静态文件（css、等其他）  
    │   ├── components                                          通用组件
    │   ├── layouts                                             全局布局样式组件
    │   ├── pages                                               页面组件目录（路由组件目录） 
    │       ├── about                                           页面路由组件：路由为 /about
    │       ├── relation                                        页面路由组件：路由为 /relation
    │       ├── resume                                          页面路由组件：路由为 /resume
    │       ├── works                                           页面路由组件：路由为 /works
    │       ├── _app.tsx                                        全局布局组件（主入口组件）
    │       ├── index.tsx                                       页面路由组件：路由为 /
    │       ├── index.module.scss                               页面路由组件：路由为 / 的局部样式     
    │       ├── styles.scss                                     全局样式   
    │
    ├── node_modules                                            依赖库
    ├── package.json                                            webpack 配置项
    ├── tsconfig.json                                           typescript 配置项
    ├── next-env.d.ts                                           typescript 声明文件
    ├── next.config.js                                          nextjs配置项
    ...

```

## 技术栈

1. UI界面：react、nextjs、scss
2. 后端：nodejs、koa
3. 数据库：mysql

## 规范

1. Typescript

