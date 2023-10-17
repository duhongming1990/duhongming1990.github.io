## 杜洪明最佳实践

[TOCM]
[TOC]

<!--ts-->
<!--te-->

## Windows安装开发环境软件

[https://scoop.sh/](https://scoop.sh/)

```
scoop bucket add lzwme_scoop-proxy-cn https://github.com/lzwme/scoop-proxy-cn
scoop install corretto11-jdk corretto17-jdk corretto8-jdk git git-lfs go gradle groovy lua lua51 luajit maven nginx openresty openssl python python310 python38 python39 scala sslscan visualvm notepadplusplus apifox
```

| app             | version                                                                                        |
|-----------------|------------------------------------------------------------------------------------------------|
| apifox          | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/apifox?bucket=extras)          |
| corretto11-jdk  | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/corretto11-jdk?bucket=java)    |
| corretto17-jdk  | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/corretto17-jdk?bucket=java)    |
| corretto8-jdk   | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/corretto8-jdk?bucket=java)     |
| git             | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/git?bucket=main)               |
| git-lfs         | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/git-lfs?bucket=main)           |
| go              | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/go?bucket=main)                |
| gradle          | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/gradle?bucket=main)            |
| groovy          | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/groovy?bucket=main)            |
| lua             | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/lua?bucket=main)               |
| lua51           | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/lua51?bucket=versions)         |
| luajit          | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/luajit?bucket=main)            |
| maven           | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/maven?bucket=main)             |
| nginx           | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/nginx?bucket=main)             |
| notepadplusplus | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/notepadplusplus?bucket=extras) |
| openresty       | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/openresty?bucket=main)         |
| openssl         | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/openssl?bucket=main)           |
| python          | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/python?bucket=main)            |
| python310       | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/python310?bucket=versions)     |
| python38        | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/python38?bucket=versions)      |
| python39        | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/python39?bucket=versions)      |
| scala           | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/scala?bucket=main)             |
| sslscan         | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/sslscan?bucket=main)           |
| visualvm        | ![Scoop Version (extras bucket)](https://img.shields.io/scoop/v/visualvm?bucket=java)          |

## 更换软件源

### Ubuntu 软件仓库镜像使用

[https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)

### Debian 软件仓库镜像使用

[https://mirrors.tuna.tsinghua.edu.cn/help/debian/](https://mirrors.tuna.tsinghua.edu.cn/help/debian/)

### Alpine 镜像使用

[https://mirror.tuna.tsinghua.edu.cn/help/alpine/](https://mirror.tuna.tsinghua.edu.cn/help/alpine/)

### Anaconda 镜像使用

[https://mirror.tuna.tsinghua.edu.cn/help/anaconda/](https://mirror.tuna.tsinghua.edu.cn/help/anaconda/)

### PyPI 镜像使用

[https://mirrors.tuna.tsinghua.edu.cn/help/pypi/](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)

### npm 镜像使用

```
npm config set registry https://registry.npm.taobao.org
npm update
```

## IDEA

### java注释

[点击设置](jetbrains://idea/settings?name=Editor--Live+Templates)

```
/**
 * $END$
 * @author duhongming
 * @see
 * @since 1.0.0
 */
```

## 开发

### 启用HTTP2

```
server.http2.enabled=true
```

### 配置HTTPS

[点击配置](C:\Windows\System32\drivers\etc\HOSTS)

```
127.0.0.1 localhost
```

[点击配置](C:\Users\duhongming\scoop\apps\nginx\current\conf\nginx.conf)

```
http {
	...
	include conf.d/*.conf;
}
```

[https://letsencrypt.org/zh-cn/docs/certificates-for-localhost/](https://letsencrypt.org/zh-cn/docs/certificates-for-localhost/)

[点击配置](C:\Users\duhongming\scoop\apps\nginx\current\conf\conf.d\localhost.conf)

```
server {
	listen       443 ssl;
	server_name  localhost;

	ssl_certificate      conf.d/localhost.crt;
	ssl_certificate_key  conf.d/localhost.key;

	ssl_session_cache    shared:SSL:1m;
	ssl_session_timeout  5m;

	ssl_ciphers  HIGH:!aNULL:!MD5;
	ssl_prefer_server_ciphers  on;

	location / {
		proxy_pass   http://localhost:8080;
	}
}
```

Windows启动脚本
[https://nginx.org/en/docs/windows.html](https://nginx.org/en/docs/windows.html)

```
#start-nginx.bat
start nginx
tasklist /fi "imagename eq nginx.exe"


#stop-nginx.bat
nginx -s stop


#status-nginx.bat
tasklist /fi "imagename eq nginx.exe"
pause
```

### 使用Files、Paths而不是File

```
Files.createTempDirectory()
```

## 数据库主从

### 部署 MySQL 主从集群

[https://www.rainbond.com/docs/installation/ha-deployment/overview/mysql-ha](https://www.rainbond.com/docs/installation/ha-deployment/overview/mysql-ha)

## batch

### check-git-commit-push.bat

```
@rem 在批处理运行命令的时候不会一条一条的显示执行的命令
@echo off

@rem /D 获取目录
for /D %%i in (*) do (
	echo "project %%i checking ......"

	cd %%i

	git status

	cd ../

	@rem 换行
	echo.
	echo.
	echo.
)

@rem 请按任意键继续. . .
pause
```

## 免密登录

```
ssh-keygen -C xxx
```

### git 免密登录

- github: [https://github.com/settings/keys](https://github.com/settings/keys)
- gitee: [https://gitee.com/profile/sshkeys](https://gitee.com/profile/sshkeys)
- gitlab: [https://gitlab.chehejia.com/-/profile/keys](https://gitlab.chehejia.com/-/profile/keys)

### host 免密登录

```
ssh-copy-id host
```
