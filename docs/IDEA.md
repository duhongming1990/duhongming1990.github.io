# IntelliJ IDEA 使用技巧（Demo）

> 此页面为演示用示例页，用于验证 MkDocs 构建流程。

## 常用快捷键

| 操作 | Windows / Linux | macOS |
| --- | --- | --- |
| 全局搜索 | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| 快速修复 | `Alt + Enter` | `Option + Enter` |
| 重命名 | `Shift + F6` | `Shift + F6` |
| 跳到实现 | `Ctrl + Alt + B` | `Cmd + Option + B` |
| 最近文件 | `Ctrl + E` | `Cmd + E` |

## 代码模板

自定义 Live Template 示例：

```xml
<template name="logm" description="方法入口日志" toReformat="true">
  <variable name="method" expression="methodName()"/>
  <context>
    <option name="JAVA_STATEMENT" value="true"/>
  </context>
  <code>
    log.info("[$method$] enter");$END$
  </code>
</template>
```

## 小结

- 善用 `Alt + Enter` 快速修复，减少手动改动；
- 用 Live Templates 固化团队内的编码习惯；
- 定期 `File > Invalidate Caches` 排查 IDE 卡顿。