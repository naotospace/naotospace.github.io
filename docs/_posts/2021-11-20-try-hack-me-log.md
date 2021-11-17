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
```
nmap -sV x.x.x.x
Nmap scan report for 10.10.53.66
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