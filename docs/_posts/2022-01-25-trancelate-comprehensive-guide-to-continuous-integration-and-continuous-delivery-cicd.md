---
layout: post
title:  "Temp"
date:   2022-01-25 00:00:00 +0900
categories: blog
tags:
  - english
  - trancelate
  - ci
  - cd
  - blog
  - quality
  - software testing
  - pipeline

---

[Comprehensive Guide to Continuous Integration and Continuous Delivery (CICD)](https://www.launchableinc.com/comprehensive-guide-to-continuous-integration-and-continuous-delivery-cicd) の非公式な翻訳です。

リーディングスキル向上と技術的理解促進を目的にしています。

### Newly learned words:

- Comprehensive : 網羅的な
- throughout : ◯◯を通してずっと
- Meanwile: その間に
- offer better ~ : ◯◯を向上させる
- offer : 提供する
- Stepping stones : 足がかり
- As a whole : 全体として
- while : ◯◯すると同時に
- In short : 要するに
- no stranger to : 全く知らないわけではない
- theoretically : 理論的に
- with ~ in mind : 〜 を念頭に置くと
- make perfect sense : 理にかなっている

# 継続的インテグレーションとデリバリーのための網羅的なガイド

> Comprehensive Guide to Continuous Integration and Continuous Delivery (CICD)



## CI/CDによる最大の影響：オープンソース、データ、AI/ML、そして継続的な品質（向上）

> Top Influences on CICD: Open Source, Data, AI/ML, and Continuous Quality

多くのDevOpsチームはソフトウェアのリリース管理のために様々な型のCI/CDへと移行してきた。
CI/CDは自動化を通して頻繁にカスタマーへアプリを配信し、ライフサイクルを通し継続的にモニタリングするための方法の一つだ。

> Many DevOps teams have moved into some form of continuous integration and continuous delivery (CICD) for software release management. CICD is a method to frequently deliver apps to customers through ongoing automation and continuous monitoring throughout the lifecycle.

CI（継続的インテグレーション）は定期的なビルド、テスト、共有リポジトリへのマージによってソフトウェアのコード変更が自動化されることを指す。

> CI refers to continuous integration, automating software code changes by regularly building, testing, and merging branches into a shared repository.

CI や 継続的デリバリはソフトウェア開発の変更がコードリポジトリからプロダクションへ自動的にプッシュされるプロセスを指す

> CD, or continuous delivery,  is the process through which development changes to software are automatically pushed from a code repository to the production environment.

Continuous Deploymentは自動的にプロダクションにプッシュされるという点からContinuos Delivaryの次なる進歩といえる。

> CD can also refer to continuous deployment. Continuous Deployment is the next progression of Continuous Delivery where every change is pushed to production automatically.

Deliveryは開発チームによるソフトウェアの変更が自動的にリポジトリにアップドードされることを指す。

> Continuous Delivery is when development team changes to software are automatically uploaded to a repository.

ここには手動のゲートがある状態。

> There is a manual gate here.

プロダクションレディだが、自動でデプロイはされないという考え方である。

> Think of this code is “production ready”, but not automatically deployed.

Continuous Deploymentはコードが自動でプロダクションにプッシュされることを指す。

> In Continuous Deployment code is automatically pushed to production.


Continuous deploymentではDeliveryよりもより上の自動化がある。

Continuous delivery では開発チームとビジネスチームの可視性とコミュニケーションを向上させる。

継続的デリバリは継続的デプロイメントへと続く一歩となり、デプロイのための自動化を含むことにより運用チームの労力の削減ともなる。

> Continuous Delivery is a stepping stone to Continuous Deployment, which also reduces operations teams loads by incorporating automation for deployment. 

CICDにより、DevOpsチームはコードの変更を少なくし、欠陥の原因を分離することでコードの欠陥を回避し、テストの信頼性を高めながら、リリース頻度を向上することができる。

> CICD empowers DevOps teams to avoid code defects with smaller code changes and fault isolations, increasing test reliability while speeding up release rates.

自動化の利用を通し、CI/CDは
チームトランスペアレンシー（透明性）を向上させ、バックログを減らし、より早いアップロードとデプロイのための標準化されたFBループの標準化を提供する

> Through the use of automation, CICD increases team transparency and reduces backlogs, offering more standardized feedback loops that lead to faster updates and deployment.

要するに、CD/CDはカスタマーと開発者の満足度を支え、リリースサイクルを高速にしながら、開発の摩擦（friction）をへらす。

>  In short, CICD supports customer AND developer satisfaction, speeding up release cycles while reducing development friction. 

CI/CDにより新たなトレンドは以下のページを参照のこと

> Related Article: [The Evolution of CICD and Future of Software Development](https://www.launchableinc.com/the-evolution-of-ci-cd-and-future-of-software-development)



### CD/CDとOSS

> CICD and Open Source Software

CI／CDパイプラインがOSSでの影響を受けていることは全く知られていないわけではない（周知の事実である）

CI/CDの進化はOSSであるJenkinsからスタートしている。

CICDはContinuous Delivery Foundationのようなコミッティーや興味を持つグループで形成された影響力の強い組織の継続されるコラボレーションの利益を感じられる

> CICD will feel the benefits of on-going collaborations of influential organizations forming committees and interest groups, like the [Continuous Delivery Foundation](https://cd.foundation/), where Kohsuke (as part of CloudBees) was the first chair of the technical steering committee, and in that capacity he had a board seat during that period. 

70%以上の企業がOSSへの投資を増加させている

> It’s also projected that through 2025, [more than 70% of enterprises will increase their IT spending on open source software](https://more.suse.com/Global_Webpage_Gartner_Open_Source_Report.html), compared to their current IT spending.



OSSによるコラボレーション、オープン性、アクセシビリティと調和するのが？言語非依存のツールへのトレンドとなっている。

> Aligning with open source’s collaboration, openness, and accessibility is the [trend towards language agnostic tools.](https://www.launchableinc.com/scaling-test-impact-analysis-to-every-project-with-launchable) 

### データ駆動DevOpsのよるスマートなCI/CD

> Smarter CICD with Data Driven DevOps

2022年以降のDevOpsの展望にある最大のチャンスはデータ駆動の品質向上のための意思決定である。

> The biggest opportunity within the DevOps landscape in 2022 and beyond is making data-driven decisions for better quality software.

素早いFBループのために津波のデータを利用し適切なシグナルを見つけるためにMLを利用することはデータ駆動 DevOpsのための将来の方法である

> Using machine learning to [harness the tsunami of data and finding the right signal ](https://www.launchableinc.com/predictive-test-selection)for faster feedback loop is the way of the future for data driven DevOps.

### AI/ML

> AI & Machine Learning

ソフトウェア・エンジニアリングチームは新しい機能を速くリリースする重圧に面しています。

開発者たちは理論的にコンスタントに新しくイテレーションを作ることができるが、テストのようなDevOpsサイクルの一部はCI/CDに完全に最適化されない。

> Software engineering teams constantly face the pressure to deliver newer features faster. While developers *could* theoretically create new iterations constantly, parts of the DevOps cycle, like testing, are not fully optimized for CICD.

MLのアドバンスドなテストソリューションはDevOpsチームにデリバリスピードと効率向上を、と開発者に対し新の問題（問題を解決や継続的な開発をしやすくするための質の高いコード実装など）にフォーカスする時間もたらす。 

> [Machine Learning advancements in testing solutions](https://www.launchableinc.com/the-evolution-of-devops-testing-tools) will be the next leading driver to improve speed and efficacy for DevOps teams *and* deliver developers more time to focus on what truly matters: writing quality code that solves problems and makes lives easier

更に開発者のソフトウェアテストのサイクル最適化を助けるためのよりよいデータ解析へと推進させることも期待できる

> Additionally, expect the [Machine Learning applications](https://www.launchableinc.com/webinars/using-machine-learning-to-reorder-subset-tests-dynamic) of the future to propel better data analysis, and to help developers further optimize software test cycles. 

## 継続的品質向上への動き

> The Movement to Continuous Quality

CI／CDパイプラインの最適化の動きと並行したもう一つの大きなトレンドが継続的品質達成への動きです。

> One more big trend on the horizon involving the movement to optimize the CICD pipeline is the movement to achieve *Continuous Quality.* 

今日、DevOpsチームはソフトウェアの品質が3つのキーコンポーネントによって定義されていることを理解している

- ソフトウェアの機能が計画通りに機能すること
- 特定されたユースケースのスコープでソフトウェアがうまく動作すること
- 欠陥率が低い or アプリケーション起動中にエラーがほとんど発生しないこと

> Today, DevOps teams understand that the quality of software is defined by three key components: software functions as planned; the software performs well within the scope of identified use cases; the software has a low rate of defects, or produces few to zero errors during application. 



この3つの理想を念頭に置くと、継続的品質への動きはこの一年のDevOpsチームのガイドラインの原則として理にかなっている。

> With this trio of ideals in mind, the movement towards Continuous Quality makes perfect sense as a guiding principle for DevOps teams this year. 

継続的品質、つまり品質とスピードのバランスの達成にフォーカスすることでDevOpsチームとリーダーは開発のFBループのスピードアップ、士気（モラル）の向上、より効果的なテストサイクル、そして結果を生み出すことができる。

> Focusing on the achievement of Continuous Quality, or [the balance between speed and quality](https://www.launchableinc.com/ensure-quality-code-without-sacrificing-development-speed), allows DevOps team and leaders to speed up the dev feedback loop, improve morale, and create more efficient testing cycles - and results. 