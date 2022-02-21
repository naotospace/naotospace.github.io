---
layout: post
title:  "Translate: Improving developer productivity via flaky test management"
date:   2022-02-21 00:00:00 +0900
categories: blog
tags:
  - english
  - translate
  - software testing
  - test automation
  - flaky test
  - Productivity
  - Microsoft
---

[Improving developer productivity via flaky test management - Engineering@Microsoft](https://devblogs.microsoft.com/engineering-at-microsoft/improving-developer-productivity-via-flaky-test-management/) の非公式な翻訳です。

リーディングスキル向上と技術的理解促進を目的にしています。

### Newly learned words:

- Ideally : 理想をいえば
- signal : 合図を送る, 示す
- non-deterministically : 非決定的な（不確実な）
- more specifically : すなわち
- end up : 行き着く
- have nothing to do with〜 : 〜とは関連がない
- at a high-level : 大まかに言えば
- quarantine : 隔離する

**Background**

開発者は一般的にCI/CDパイプラインの一部として実行されるリグレッションテストを頼っています。

直近の変更によって障害を招いていないことの確認のために。

> Developers typically rely on regression testing done as a part of continuous integration or continuous delivery (CI/CD) pipelines to ensure that their recent changes do not introduce faults.

理想を言えば、リグレッションテストでのテスト失敗（Fail）は開発者の直近の変更による問題を確実に示します。

> Ideally, test failures during regression testing would reliably signal issues with the developers’ recent changes.

しかし不運なことに、同じ環境・コードでの成功・失敗の不確実さがこの理想を妨げます。

> Unfortunately, tests that pass and fail non-deterministically on the same code in the same environment prohibit this ideal.

これらのテストはFlaky testとしてよく知られている。そしてそれらは直近の変更についてミスリードを示してしまうので開発者の生産性に悪影響を与える。

> These tests are commonly known as flaky tests, and they negatively impact developers’ productivity by providing misleading signals about their recent changes.

具体的には、それらの失敗の調査に時間を費やしてしまい、障害が変更とは関係なく、ただテストを再実行するだけで解消される可能性があることを発見するだけになります。

> More specifically, developers may end up spending time investigating those failures, only to discover that the failures have nothing to do with their changes and may simply go away by rerunning the tests.

不幸なことに、テストはいくつかの理由のため不安定になる可能性があります。それらの理由にはシンプルなものから、外部環境への複雑な既存関係が含まれます。

> Unfortunately, tests can be flaky due to several reasons, ranging from simple timing issues to complex dependencies on the external environments.

### Flaky Test Management System Overview

我々のFlaky テスト管理システムは[CloudBuild](https://www.microsoft.com/en-us/research/publication/cloudbuild-microsofts-distributed-and-caching-build-service/)と[CloudTest](https://devblogs.microsoft.com/engineering-at-microsoft/cloudtest-a-multi-tenant-scalable-performant-and-extensible-verification-service/)内のサービスとして提供されます。

>  Our flaky test management system is offered as a service within [CloudBuild](https://www.microsoft.com/en-us/research/publication/cloudbuild-microsofts-distributed-and-caching-build-service/) (Microsoft’s distributed build service) and [CloudTest](https://devblogs.microsoft.com/engineering-at-microsoft/cloudtest-a-multi-tenant-scalable-performant-and-extensible-verification-service/) (Microsoft’s verification service).

高いレベルで、我々のシステムはテスト結果のテレメトリーからFlakyテストを推測します。また、既知の不安定なテストは隔離し、開発者に通知するためのバグをファイリングします。

> At a high-level, our system infers flaky tests from the test execution telemetry, quarantines those tests to avoid test failures due to known flaky tests, and files bugs to notify developers.

開発者がバグを修正したら、すぐにそのテストは隔離から除外され、テストカバレッジが損なわれないようにします。

> The tests are removed from the quarantine soon after the developer fixes the bug, ensuring that we do not lose the test coverage permanently. 

システムには３つのフェーズがあります。

* 推論

  推論フェーズではCloudTestでテストを実行している間にでるテレメトリーをモニタリングすることによってFlakyテストの特定に役立ちます。

  デフォルトのロジックはCloudTestの再試行メカニズムに頼っています。

  リポジトリのmaster/mainからトリガーされるローリングセッションでは、テストが失敗してリトライで成功するかどうかによってFlakyと識別されます。

  より高度なアルゴリズムを試したが、大規模で確立されたテストスイートの場合はシンプルなリトライで好印象な結果が得られました。

  ただし、個々のチームが異なるロジックを使用してFlakyなテストを推測できる拡張性も提供します。

  例えば、あるチームはテストが失敗し、特定の時間内にさまざまなユーザーが合格した場合テストが不安定だと識別します。

* 報告

  報告フェーズのゴールは不安定なテストのバグを報告し、テストのオーナーに割り当てることです。

  そのバグリポートはその失敗に関する詳細情報、関連するセッション、そしてバグがすぐにトリアージされない場合の最新の障害を特定する方法を含んでいます。

  もしテストのオーナーが明示されていない場合は、テストを最近よく変更している開発者を所有者としてき識別します。

* 緩和・軽減

  軽減フェーズは隔離されたテストと呼ばれる既知のFlakyテストが原因で発生するテスト失敗を抑制することを目的としています。

  以下のようにUI上でFlakyかどうかをわかるようにしています。

  ![Image ADO BuildWithFlakyTag](https://devblogs.microsoft.com/engineering-at-microsoft/wp-content/uploads/sites/72/2022/01/ADO-BuildWithFlakyTag-1024x522.jpg)

  MSで使用されている言語とテストフレームワークの多様性を考えると緩和フェーズは、言語やテストフレームワークから独立するように特別に設計されていて、生成されたテスト結果のみに基づいて動作します。

> Our system includes three major phases:
>
> * Inference
>
>   The inference phase helps identify the flaky tests by monitoring the telemetry emitted while executing tests in CloudTest. The default logic relies on CloudTest’s retry mechanism. In rolling sessions triggered off the master/main branch of a repo, whenever a test fails and the retry passes, we identify the test as flaky. We’ve experimented with more advanced algorithms, but found that for large, established test suites, simple retries yield impressive results. However, we also provide extensibility where individual teams can use different logic to infer flaky tests. For example, one team identifies a test as flaky if it fails and passes for different users within a given time window.
>
> * Reporting
>
>   The goal of this phase is to file bugs for the inferred flaky tests and assign them to the owner of the test. The bug reports include detailed information about the failure, associated sessions, and ways to identify the latest failures in case the bug is not triaged immediately. If no owner is explicitly specified for the test, we use a heuristic of identifying the owner as the developer who made recent frequent changes to the test.
>
> * Mitigation
>
>   Finally, the mitigation phase aims to suppress the test failures that happen due to known flaky tests, referred to as *quarantined tests*. Our system also explicitly reports the tests as flaky in our UI (User Interfaces) as shown in the screenshot below.
>
>   Given the diversity of languages and test frameworks used at Microsoft, our mitigation phase is specifically designed to be independent of any language or test framework and operates purely on the generated test results.

開発者がバグレポートをクローズするたびに、システムは自動的に隔離からテストを除外します。（そのテストがさらに失敗した場合は検証パイプラインがブロックされます）

> Whenever a developer closes a bug report, our system automatically removes the test from quarantine — any further failures of that test will block the validation pipeline. 


常に全テストを実行し、隔離されたテストの **結果** のみを抑制することに注意してください。

隔離されたテストのモニタリングにも役立ち、隔離から自動的に削除したり、特定の期間にわたって不安定ではない場合はバグリポートを閉じたりします。

> Note that we always run all the tests and only suppress the results of the quarantined tests. This helps us in monitoring quarantined tests as well, to automatically remove them from quarantine and close the associated bug if they are not flaky over a certain period. 

この機能は特に多くの不安定なテストが存在する場合に、開発者の労力を更に削減するのに役立ちます。

> This feature helps further reduce the developer effort, especially in the presence of many flaky tests.

### Summary

100以上の開発チームで利用されています。

> Our flaky test management system is currently used by more than 100 product teams across Microsoft.

4万9千ほどのFlakyテストを検知し、16万ほどのセッションを合格させてきました。

> The system has already identified ~49K flaky tests and helped pass 160K sessions that would have failed due to flaky test failures.


また、テレメトリは、報告されたバグの多くがクローズされたことを示しており、マイクロソフトのシステムがマイクロソフトのテスト資料の全体的な品質の向上にどのように役立っているかを示しています。

最後に、私たちのシステムは文化に影響を与えるのに役立ちます。チームには、10を超える不安定なテストバグが割り当てられている場合、開発者のPRをブロックするなどの追加のポリシーが適用されます。 

> Our telemetry also shows that many of the reported bugs have been closed, demonstrating how our system is helping improve the overall quality of the test collateral at Microsoft.
>
> Lastly, our system helps influence the culture, where teams enforce additional policies, like blocking PRs for developers, if they have more than 10 flaky test bugs assigned to them.

