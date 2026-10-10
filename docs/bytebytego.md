# ByteByteGo 风格笔记（Demo）

> 此页面为演示用示例页，用于验证 MkDocs 构建流程。

## 什么是 API 网关

API 网关是客户端与后端服务之间的唯一入口，负责统一处理鉴权、限流、路由、协议转换等横切关注点。

| 职责 | 说明 | 示例 |
| --- | --- | --- |
| 路由 | 按请求路径/头分发到后端服务 | `/users` → 用户服务 |
| 鉴权 | 统一校验 Token | JWT / OAuth2 |
| 限流 | 防止突发流量打垮下游 | 令牌桶、滑动窗口 |
| 聚合 | 合并多个后端的返回 | BFF 模式 |
| 协议转换 | HTTP ↔ gRPC | envoy filter |

## 一个简单的网关配置示例（Envoy 风格）

```yaml
static_resources:
  listeners:
    - address:
        socket_address:
          address: 0.0.0.0
          port_value: 8080
      filter_chains:
        - filters:
            - name: envoy.filters.network.http_connection_manager
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
                route_config:
                  virtual_hosts:
                    - name: backend
                      domains: ["*"]
                      routes:
                        - match: { prefix: "/users" }
                          route: { cluster: user_service }
```

## 小结

- 网关把「通用能力」从业务代码中剥离出来；
- 多团队协作时，网关是统一的治理控制面；
- 注意新增的链路延迟，以及网关本身的单点高可用。