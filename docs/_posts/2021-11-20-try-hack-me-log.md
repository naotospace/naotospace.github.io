---
layout: post
title:  "Tryhackme log"
date:   2021-11-15 00:00:00 +0900
categories: blog
tags:
  - Security testing
---

# Room: Learning Cyber Security

- Web セキュリティ
  - Webがどのように機能するか理解することが重要である理由
- ネットワークセキュリティ


# Room: Vulnversity

## Reconnaissance
* 進行する前に、常に徹底的に偵察を行っていることを確認することが重要です。 開いているすべてのサービス（すべてが悪用される可能性がある）を知ることは非常に重要です。
* nmap コマンドを使う
  * 空いているポートがわかる
  * サービスからサーバの用途がわかる
  * OSまでわかる

  ```bash
  nmap -sV x.x.x.x
  Nmap scan report for x.x.x.x
  Host is up (0.29s latency).
  Not shown: 994 closed tcp ports (conn-refused)
  PORT     STATE SERVICE     VERSION
  21/tcp   open  ftp         vsftpd 3.0.3
  22/tcp   open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.7 (Ubuntu Linux; protocol 2.0)
  139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
  445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
  3128/tcp open  http-proxy  Squid http proxy 3.5.12
  3333/tcp open  http        Apache httpd 2.4.18 ((Ubuntu))
  Service Info: Host: VULNUNIVERSITY; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

  Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
  Nmap done: 1 IP address (1 host up) scanned in 102.13 seconds
  ```

## Locating directories using GoBuster

* Golangの更新（https://golang.org/doc/install)go install github.com/OJ/gobuster/v3@latest
* gobusterのインストール
  ```bash
  go install github.com/OJ/gobuster/v3@latest
  ```
* wordlistを用意

  https://github.com/danielmiessler/SecLists/blob/master/Discovery/Web-Content/common.txtを利用
  ```
  curl https://raw.githubusercontent.com/danielmiessler/SecLists/master/Discovery/Web-Content/common.txt -s > wordlist.txt
  ```
* gobuster実行
  ```bash
  ~/go/bin/gobuster dir -u http://x.x.x.x:3333 -w wordlist.txt
    ===============================================================
    Gobuster v3.1.0
    by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
    ===============================================================
    [+] Url:                     http://x.x.x.x:3333
    [+] Method:                  GET
    [+] Threads:                 10
    [+] Wordlist:                wordlist.txt
    [+] Negative Status codes:   404
    [+] User Agent:              gobuster/3.1.0
    [+] Timeout:                 10s
    ===============================================================
    /.htaccess            (Status: 403) [Size: 299]
    /.htpasswd            (Status: 403) [Size: 299]
    /.hta                 (Status: 403) [Size: 294]
    /css                  (Status: 301) [Size: 319] [--> http://x.x.x.x:3333/css/]
    /fonts                (Status: 301) [Size: 321] [--> http://x.x.x.x:3333/fonts/]
    /images               (Status: 301) [Size: 322] [--> http://x.x.x.x:3333/images/]
    /index.html           (Status: 200) [Size: 33014]
    /internal             (Status: 301) [Size: 324] [--> http://x.x.x.x:3333/internal/]
    /js                   (Status: 301) [Size: 318] [--> http://x.x.x.x:3333/js/]
    ===============================================================
  ```
- upload formからアップロードを試みる
