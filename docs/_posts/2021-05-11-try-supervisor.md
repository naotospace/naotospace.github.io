---
layout: post
title:  "Try supervisor"
date:   2021-05-11 00:00:00 +0900
categories: blog
tags:
  - supervisor
  - docker
---

# 背景
Seleniumをコンテナで起動したときにどうやって常駐させているのか気になったので、公式リポジトリを見ていたら `supervisor` に出会った。

お初だったので簡単に調査してみた。

# supervisorとは

常時起動させたいスクリプトなどをデーモンプロセスとして動かしたいときに使うプロセス管理/デーモン化のツール。

# nginxをsupervisorで常時起動させるサンプル

参考リンク先の設定をお借りします
```dockerfile
FROM ubuntu:14.04

#Install nginx
RUN apt-get update && apt-get -y install nginx curl
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

#Install Supervisor and config
RUN apt-get install -y supervisor
RUN touch /etc/supervisord.conf
RUN echo '[supervisord]'  >> /etc/supervisord.conf
RUN echo 'nodaemon=true'  >> /etc/supervisord.conf
RUN echo '[program:nginx]' >> /etc/supervisord.conf
RUN echo 'command=nginx'   >> /etc/supervisord.conf

EXPOSE 80
CMD /usr/bin/supervisord -c /etc/supervisord.conf
```

## Build & 起動
```bash
docker build . -t supervisor-nginx
docker run -p 80:80 -it --rm supervisor-nginx
2021-04-30 06:26:25,643 CRIT Supervisor running as root (no user in config file)
2021-04-30 06:26:25,653 INFO supervisord started with pid 9
2021-04-30 06:26:26,658 INFO spawned: 'nginx' with pid 12
2021-04-30 06:26:27,708 INFO success: nginx entered RUNNING state, process has stayed up for > than 1 seconds (startsecs)
```
## /etc/supervisord.conf
- nodaemon=trueにするとdeamon化されずに実行される
- program:hogeはコマンド名を設定
- command= には実行コマンド（パスや引数含む）を設定
```bash
# supervisord.conf
[supervisord]
nodaemon=true
[program:nginx]
command=nginx
```

参考：
- [Configuration File — Supervisor 4.2.2 documentation](http://supervisord.org/configuration.html)
- [Configuration File — Supervisor 4.2.2 documentation #program-x-section-values](http://supervisord.org/configuration.html#program-x-section-values)

## nodaemonについて

コンテナ内ではBackgroundプロセスで起動するとすぐに終了してしまうため、Foregroudプロセスとして起動する必要がある。

デーモン化するツールなのにnginx, supervisorともにnodaemonにしているのはそういった理由から。

### daemonとしてビルド起動してみた

Dockerfileを以下のようにしてBuild&Runしてみたがすぐに終了された。

```docker
FROM ubuntu:14.04

#Install nginx
RUN apt-get update && apt-get -y install nginx curl
# RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80
CMD /usr/sbin/nginx
```

ForegroudとBackgroundについては以下の記事がわかりやすい。

- [原理原則で理解するフォアグラウンドプロセスとバックグラウンドプロセスの違い - Qiita](https://qiita.com/tajima_taso/items/c5553762af5e1a599fed#%E3%83%95%E3%82%A9%E3%82%A2%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%81%A8%E3%83%90%E3%83%83%E3%82%AF%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9)


## programセクションのsample

かなり色々と設定できる

[Configuration File — Supervisor 4.2.2 documentation#program-x-section-example](http://supervisord.org/configuration.html#program-x-section-example)

```
[program:cat]
command=/bin/cat
process_name=%(program_name)s
numprocs=1
directory=/tmp
umask=022
priority=999
autostart=true
autorestart=unexpected
startsecs=10
startretries=3
exitcodes=0
stopsignal=TERM
stopwaitsecs=10
stopasgroup=false
killasgroup=false
user=chrism
redirect_stderr=false
stdout_logfile=/a/path
stdout_logfile_maxbytes=1MB
stdout_logfile_backups=10
stdout_capture_maxbytes=1MB
stdout_events_enabled=false
stderr_logfile=/a/path
stderr_logfile_maxbytes=1MB
stderr_logfile_backups=10
stderr_capture_maxbytes=1MB
stderr_events_enabled=false
environment=A="1",B="2"
serverurl=AUTO
```

# 開発したプログラムを実行してみる

以下のプログラムをsupervisorで常時実行させる(Daemon化)

```bash
#!/bin/sh

while true
do
  sleep 1
  date
done
```

実行権限を変更

```
chmod a+x myscript
```

## Dockerfile.myscript

```Dockerfile
FROM ubuntu:14.04

RUN apt-get update

#Install Supervisor and config
RUN apt-get install -y supervisor
RUN touch /etc/supervisord.conf
RUN echo '[supervisord]'  >> /etc/supervisord.conf
RUN echo 'nodaemon=true'  >> /etc/supervisord.conf
RUN echo '[program:myscript]' >> /etc/supervisord.conf
RUN echo 'command=/app/myscript'   >> /etc/supervisord.conf
RUN echo 'stdout_logfile=/app/myscript_stdout.log'   >> /etc/supervisord.conf

RUN mkdir /app
COPY myscript /app

CMD /usr/bin/supervisord -c /etc/supervisord.conf
```

## Build & Run
```
docker build -f Dockerfile.myscript . -t daemon_myscript
docker run -it --name myscript --rm daemon_myscript

2021-05-11 16:52:01,867 CRIT Supervisor running as root (no user in config file)
2021-05-11 16:52:01,876 INFO supervisord started with pid 8
2021-05-11 16:52:02,880 INFO spawned: 'myscript' with pid 11
2021-05-11 16:52:03,883 INFO success: myscript entered RUNNING state, process has stayed up for > than 1 seconds (startsecs)
```

## 動作確認
myscriptの標準出力はdocker run後のログには出てこない。

supervisorで実行されるプログラムの標準出力は `stdout_logfile=/app/myscript_stdout.log` へ保存される

```
docker exec -it myscript bash
tail -f /app/myscript_stdout.log
Tue May 11 16:53:41 UTC 2021
Tue May 11 16:53:42 UTC 2021
Tue May 11 16:53:43 UTC 2021
Tue May 11 16:53:44 UTC 2021
```

# Links
- [Docker視点で見るSupervisorの使い方](https://qiita.com/taka4sato/items/1f59371ead748d88635a)
- [Supervisorで簡単にデーモン化](https://qiita.com/yushin/items/15f4f90c5663710dbd56)
- [Supervisor: A Process Control System](http://supervisord.org/index.html)
