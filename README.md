# vue-data-visualization

## 项目简介

这是一个使用 Vue 3 和 TypeScript 开发的数据可视化项目，根据 B 站视频[2023最新：ECharts 数据可视化大屏项目](https://www.bilibili.com/video/BV1yu411E7cm/?share_source=copy_web&vd_source=66f8d344b9115034fca635056e902452)重构。

## 踩坑

1. 按下空格出现的 Tailwind 代码提示需要在 VSCode 中安装插件 [Tailwind CSS IntelliSense - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
2. 要使用 TypeScript 作为 Tailwind 的配置文件请在命令行中输入 `npx tailwindcss init -p --ts`
3. `postcss.config.ts` 在 Vite 项目中无法识别，请使用 `postcss.config.js`

## 差异化

1. 使用 unplugin-auto-impor 和 unplugin-vue-components 完成了 API 和组件的自动导入。
2. 使用 [ESLint](https://eslint.org/) 和 [Prettier](https://prettier.io/) 格式化代码。
3. 监听图表容器的大小并改变图表大小。

## 安装

确保安装了依赖项：

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## 开发服务器

在 `http://localhost:5174` 上启动开发服务器：

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

![printscreen](printscreen.png)
