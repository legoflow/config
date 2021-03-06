<h1 align="center"> Config </h1>

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img alt="Licence" src="https://img.shields.io/badge/license-MIT-green.svg" />
    </a>
    <a href="">
        <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-green.svg" />
    </a>
</p>

<p align="center">
    <strong>公共全局设置参数</strong>
</p>

## 作用

提供公共的全局设置参数以及读写方法，给予上层模块使用

## 参数配置

名称 | 类型 | 默认值 | 备注
-----|------- | -----|-------
user | String | null | 用户名
port | Number | 3000 | 开发工作流端口号
editor | String | VSCode | 常用编辑器，可选值 VSCode / Atom / sublimeText3 / WebStorm
autoOpenChrome | Boolean | true | 工作流是否自动打开 chrome
lab | Boolean | false | 是否打开 实验性功能
customProjectPath | String | null | 自定义项目类型脚手架路径（ [详情](https://legoflow.com/wiki/#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B9%E7%9B%AE%E7%B1%BB%E5%9E%8B) ）
NodeBin | String | null | Shell 模块的扩展（ [详情](https://github.com/legoflow/legoflow/wiki/9.5.-%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-node-bin) ）
loadNPMLegoFlowTemplate | Boolean | false | 加载 NPM LegoFlow 项目类型模板

## 许可

[MIT](./LICENSE)
