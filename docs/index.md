# 杜莱恩特

本站使用 [MkDocs](https://www.mkdocs.org) 构建，托管于 GitHub Pages。

## 站点内容

- **AI 模型输出对比** — 侧边 `vs/` 目录下的各主题 HTML 对比页（时序图、向量数据库、AI 网关等）
- **技术笔记** — ByteByteGo 风格的系统设计笔记、IDEA 使用技巧等

## 快速开始

本地预览：

```sh
# 使用项目内的虚拟环境（首次需 .venv/bin/pip install -r requirements.txt）
.venv/bin/mkdocs serve
```

构建静态站点：

```sh
.venv/bin/mkdocs build
```

发布到 GitHub Pages：

```sh
.venv/bin/mkdocs gh-deploy
```

## 如何新增页面

1. 在 `docs/` 下新建 `xxx.md`；
2. 在 `mkdocs.yml` 的 `nav` 中加入一行，例如 `- 我的新页面: xxx.md`。

无需任何构建步骤之外的额外配置。