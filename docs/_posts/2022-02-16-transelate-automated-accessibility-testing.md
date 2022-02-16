---
layout: post
title:  "Translate: automated-accessibility-testing"
date:   2022-02-16 00:00:00 +0900
categories: blog
tags:
  - english
  - translate
  - software testing
  - aaccessiblity
  - test automation

---

[Automated Accessibility Testing Guide - Siteimprove](https://siteimprove.com/en-us/accessibility/automated-accessibility-testing/) の非公式な翻訳です。

リーディングスキル向上と技術的理解促進を目的にしています。

### Newly learned words:

- a hot-button issue：重要な問題
- crucial : 極めて重要な
- aspects : 側面
- a wide range of tools : 様々なツール
- be conscientious ：良心的である、意識している
- keep up : ついていく
- be tempting : 誘惑する（したくなる）
- write them off：帳消しにする
- meticulous：最新の注意を払って
- ongoing： 継続的に
- Whether A or B：AでもBでも
- delve：深く考える、探求する
- A for include: ： Aは次のとおりです
- comprehensive : 広範囲の
- in practice : 実際には
- tend 〜 : 〜 する傾向がある
- pinpoint : 正確に示す、特定する
- Key to this : これの鍵は
- tackle : 取り組む
- rewarded : 報いる
- despite : にもかかわらず
- the bottom line : 肝要なのは
- be new to 〜 : 〜 は初めてである
- go a long way toward 〜 : 〜 大いに役立つ


インターネットが必需品というよりもっと贅沢品になって以来、オンラインビジネスでWebアクセシビリティは重要な問題になっています。

> Web accessibility has been a hot-button issue in online business since the days when the internet was more of a luxury than a necessity. 

技術が進化し、オンラインのインタラクションが日々の様々な側面にとってデフォルトになるにつれて、

ウェブサイトが操作・アクセス可能であることを保証することは今までより極めて重要になっている。

> As technology evolves and online interactions become the default for many aspects of day-to-day life, ensuring that your website is operable and accessible for users of all abilities is more crucial than ever.

世界中のいくつかの国ではWCAG 2.0 and WCAG 2.1と採用し、彼らの法の一部への統合も進められている。

> Some countries around the world are adopting the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG 2.0 and WCAG 2.1) and integrating parts of it into their official legislation.

あなたはもしかするとウェブサイトのアクセシビリティテストを助ける自動化ツールやサービスが数多くあることを認識しているかもしれない。
> You’re probably aware that there are a wide range of automated tools and services to help you test website accessibility.

もしあなたがオンラインのアクセシビリティについていくことに前向きな姿勢であったならば、それを不要な支出として帳消しにしたくなるかもしれない。

> If you’ve been conscientious about keeping up with online accessibility it might be tempting to write them off as an unnecessary expenditure.

しかしながら、細心の注意を払っていてもアクセシビリティはシンプルに手作業で完全に進めていくには大きすぎるタスクである。

> However, even with meticulous attention, accessibility is simply too large a task to be moderated entirely by hand.


## Can web accessibility testing be automated?

Webアクセシビリティのテストは自動化できるのか？



可能です。自動化されたアクセシビリティテストツールは数千のドキュメント、Webページ、また、複数のWebサイトも同時に検査することが可能になっています。

> Yes. Automated accessibility testing tools enable you to audit thousands of documents, web pages, or even multiple websites simultaneously. 

一方手動のアクセシビリティテストは、アクセシビリティの課題を手で発見するためにWebサイトのコンテンツやコードをチェックするにはアクセシビリティ専門の個人もしくはチームが必要です。

> Manual accessibility testing, on the other hand, requires an individual or team of accessibility experts to filter through a website’s content and code by hand to locate accessibility issues.

組織の時間とリソースを抑えるだけでなく、自動化されたアクセシビリティテストのキーとなる特徴はコンテンツ全体のアクセシビリティの法令遵守チェックを継続的に提供することである。

> Besides saving your organization time and resources, a key feature of automated accessibility testing is that it provides accessibility compliance checks across your content on an ongoing basis.

あなたのWeb サイト全体のアクセシビリティ課題の発見に価値のある時間を浪費するよりも、アクセシビリティ課題の予防や修正に注力できることを意味する。

> This means you can focus on preventing and fixing accessibility issues, rather than wasting valuable time trawling through your website(s) to locate them.  



## What does automated accessibility testing check for? 

自動化されたアクセシビリティテストは何をチェックするのか？

最新スタンダードに日々追従することへ奮闘しても、アクセシビリティの調査を始めたばかりでも、WCAGガイドラインに適合しない領域を特定するように設計されたソフトウェアを使用すると時間と労力を大幅に節約できる。

> Whether you’re just starting to delve into accessibility or striving to keep up to date with the latest standards, software designed to identify areas that do not meet WCAG guidelines can save you a huge amount of time and labor.

参考：

- [WCAG 2.1 ( Recommendation )](https://www.w3.org/TR/WCAG21/) 
- [WCAG 3.0 ( Working Draft )](https://www.w3.org/TR/wcag-3.0/)

自動化されたアクセシビリティテストツールはよくあるアクセシビリティの誤りや潜在的な課題を見つけるためにあなたのウェブサイトをスキャンする。

> Automated accessibility testing tools scan your website’s code to find common accessibility errors and flag potential issues.

これらのソフトウェアは世界的に認められたアクセシビリティ標準、特にWCAGに対してチェックする。

> These softwares check your website against globally recognized accessibility standards, primarily the Web Content Accessibility Guidelines (WCAG).

自動化されたアクセシビリティソフトウェアが発見する重要な課題は次の通り

> Key issues automated accessibility software will search your website for include:



### Page structure and navigation

ページ構成とナビゲーション

* メニューやサイトナビゲーションの問題検知
* ナビゲーションのアシストする技術に依存しているユーザへの改善提案
* 適切な見出しかの確認
* 方向づけを簡単にするためのマークアップする必要があるページ領域を特定する？

> * Detecting issues with menus or site navigability
> * Suggesting improvements for users who rely on assistive technologies for navigation
> * Checking for appropriate section headings
> * Identifying page regions that need to be marked up for easy orientation

### Readability and color contrast

可読性とカラーコントラスト

* フォントサイズの確認と最適な可読性を確かめるための構文解析
* フォントに高い複雑性や多義性が用いられてないかを識別
* フォントの空きスペースや太さの確認
* フォントと背景要素間に十分なコントラスト（対比）があるか

> * Checking font size and parsing to ensure optimal readability
> * Identifying fonts with high character complexity or ambiguity
> * Checking the spacing and weight of fonts
> * Sufficient contrast between the font and background elements

### Internal and external links

インターナル・エクスターナルリンク

* 「Click here」のような情報が不十分なリンクの配置
* ハイパーリンクのホバーやフォーカス要素をチェックし、それらが識別しやすいかを確認
* 破損してたり、空のリンクを検知する

> * Spotting uninformative link phrases such as “click here”
> * Checking hover and focus elements of hyperlinks to ensure they are easily identifiable
> * Detecting broken or empty links

### Alt text and anchor texts

Altテキストとアンカーテキスト

* altテキストが無い画像の検知
* アイコンや絵文字のaltテキストベースの入力をチェックする
* altテキスト、アンカーテキストが繰り返しになっていたり、無駄な文字がないことを確認する

> * Identifying images that don’t have alternative text
> * Checking for alt text-based inputs for web elements like icons and emojis
> * Checking alt text and anchor text is not repetitive or redundant

### PDF accessibility

PDFのアクセシビリティ

* PDF内の画像に にaltコンテンツがあるか確認
* ブックマーク無しのPDFドキュメントの確認
* PDFファイルが正しいタブ、読み順になっていることを確認
* PDFドキュメントのマークアップでテーブルが使われているかチェックする
* PDFファイル内でインタラクティブなフォームがあるか確認する

> * Checking that images in PDFs have alt content
> * Identifying PDF documents without bookmarks
> * Ensuring correct tab and reading order in PDF files
> * Checking for the use of table elements for markup in PDF documents
> * Checking for interactive form controls in [PDF files](https://siteimprove.com/en-us/accessibility/pdf-accessibility-checker/)

### Checking buttons

ボタン

* 簡単にクリックするに十分な大きさであることを確実にする
* ホントのサイズやページ内のスペースを増やすボタンの有無を確認する
* リロードボタンの存在を確認する
* ボタンに正確なラベル付けがされているか確認する

> * Ensuring that buttons are big enough to be easily clicked on
> * Checking for the presence of buttons to increase font size and spacing on the page
> * Checking for the presence of buttons to reload the page
> * Checking that all buttons are accurately labeled

### Reviewing HTML and CSS

HTMLとCSSのレビュー

* HTMLパースにおける課題があるか確認
* ページの言語設定がHTMLタグで正しく認識されていることを確認する
* 自動化されたアクセシビリティテストはこれらのようなチェックを可能する



> * Checking for issues in HTML parsing
> * Ensuring that the page language is correctly identified in the HTML tag
> * While not an entirely comprehensive list, these are some of the most common accessibility issues that automated accessibility testing helps you quickly identify on your website.


## Why making sure web accessibility checks are automated is key to compliance

なぜ自動化されたアクセシビリティのチェックがコンプライアンスのキーとなるのか


手動のアクセシビリティテストが多くの利益をもたらす一方で、たびたび多大な時間がかかり、ハイレベルなアクセシビリティの知識が求められる（ 手動チェックはヒューマンエラーやコンプライアンス違反に繋がる可能性もある）

> While manual accessibility testing has many benefits, it is often prohibitively time-consuming and requires a high level of accessibility knowledge – opening manual checks up to human error and potentially leading to non-compliance.



自動アクセシビリティの利点

> Some of the advantages of automated accessibility testing are:



* スペシャリストの知見無しに完了できる
* 内製のアクセシビリティ専門家を雇用するより安いケースが多い
* 繰り返し発生知るアクセシビリティの問題を簡単に特定できる
* 数千のページを一斉にチェックし、数分でWebサイトの網羅的なサマリーを提供する
* 単一の課題による複数のエラーを検知できる
* 多くのツールでタスクの優先度付けが可能になり、最もクリティカルな問題から先に解決できる
* 時間が経過するに連れ、組織の訓練や教育になる
* 多くのツールでレポート機能が利用可能なので、アクセシビリティコンプライアンスや進捗をトラックできる
* 理解しやすいアクセシビリティの結果や部門をまたいだ（Webサイト管理者、デザイナー開発者を含む）タスクを共有できる

> * Can be done by someone without specialist accessibility knowledge.
>
> - Often cheaper than hiring an in-house accessibility expert.
> - Pinpoint recurring accessibility errors with ease.
> - Check thousands of pages simultaneously, providing a comprehensive overview of your site’s accessibility status in minutes.
> - Identify multiple errors caused by a single root issue.
> - Task prioritization features are often included, so the most critical issues can be resolved first.
> - Train and educates your organization on accessibility issues over time.
> - Track your accessibility compliance and progress over time, with reporting functions available in many tools.
> - Share easily-understandable accessibility results and tasks across departments, including website managers, designers, and content creators.



実際には多くの企業にとってのベストアプローチは自動と手動アクセシビリティテストを組み合わせたハイブリッドアプローチである

> In practice, the best approach for many organizations will be a hybrid approach of automated and manual accessibility testing.

自動アクセシビリティテストはディフェンスのファーストラインとなり、詳細な手動テストを使用して、多くの分析と人力の入力などが必要な領域に進む前に、課題の特定、クイックフィックスの大部分の解決を支援する。

> Automated accessibility testing should be your first line of defense, helping you identify and resolve the majority of quick-fix issues before progressing to areas that require more analysis and human input with in-depth manual testing.

しかしながら、あなたの決断はWebサイトの数や大きさCMSの使いやすさに依存する。

> However, your decision will also depend on the size and number of websites you manage, as well as how usable your content management system is.



## How to automate accessibility testing with Siteimprove

専門家のアクセシビリティソリューションを使った自動アクセシビリティテストはWebサイトのアクセシビリティレベルの改善の初めには最適である。

> Automated accessibility testing using a specialist automated accessibility solution is the best starting point for improving your website’s accessibility levels.

利用できるフリーなツールやチェッカーは多くある一方で、それらは基本的なアクセシビリティの問題の発見のみで修正のための推奨事項や説明は提供しない傾向にある。

> While there are many free tools and checkers available to help you with this task, they tend to only locate basic accessibility issues, without providing explanations or recommendations for fixing them.

Site improvesは異なる。

> Siteimprove’s automated accessibility testing solution is different.

WCAG標準に対して、サイトのコードと内容を測定することで、数分で重要なアクセシビリティの問題を特定するを助ける（役立つ）

> It helps you pinpoint key accessibility issues on your website in minutes by measuring your site’s code and content against the latest WCAG standards.

しかし問題発見は仕事の半分であり、Site improvesはチームをコンプライアンスとアクセシビリティのベストプラクティス実装に向けてチームをガイドするステップバイステップのプロセスにより[デジタルアクセシビリティ](https://siteimprove.com/en-us/accessibility/digital-accessibility/)の理解、実装、保守がより簡単になる。

> But finding the issues is just half of the job, so Siteimprove makes [digital accessibility](https://siteimprove.com/en-us/accessibility/digital-accessibility/) even simpler to understand, implement, and maintain with a step-by-step process that guides your team towards compliance and implementing accessibility best practices.

これの鍵はツールの洞察を使用して、サイトのアクセシビリティエラーを重要度別に表示することであり、これによりどの問題に最初に取り組むべきかがはっきりする。

> Key to this is using the tool’s insights to view your site’s accessibility errors by criticality, so it’s always clear which issues need to be tackled first.

多くのWebサイトマネージャーはアクセシビリティの専門家ではないため、Site Imporive アクセシビリティは理解とエラーを正確に理解するための明確な説明と行動可能な推奨事項を提供する（WCAGのテクニカルを参照にしたもの）

> Because many website managers aren’t accessibility experts, Siteimprove Accessibility also provides clear explanations and actionable recommendations for understanding and correcting errors – including references to official WCAG remediation techniques.

Site improveはシンプルなインターフェイスを持っている。

> The Siteimprove tool’s user interface has also been designed to make automated accessibility testing as simple as possible.

主要なCMSと統合できる。つまり、Webサイト、コード内で直接ハイライトされた問題を確認できるので、すぐに修正できる。

> It integrates easily with all leading content management systems, which means you can see issues highlighted directly on your webpage or within your code, so you jump straight in and fix them.

最後に進捗のモニタリングは大事なポイント。

> Finally, progress monitoring is a must-have for any organization that takes its digital accessibility seriously.

Site improveアクセシビリティではWebサイト全体の単一のアクセシビリティスコアと解決された問題リスト、カスタマイズ可能なアクセシビリティ目標設定を使い、WCAG準拠に向けた進捗状況を定期的に追跡することを勧めている

> That’s why Siteimprove Accessibility encourages you to track your progress towards WCAG conformance over time, with a single accessibility score for your whole website and a list of resolved issues, along with customizable accessibility goal setting.



## Who can benefit from automated accessibility testing?

あらゆる組織が利益を享受する。

ADA（障害を持つアメリカ人法）などの主要な規制に準拠する必要がある。

> The short answer is – all types of organization! Both private sector and public institutions must ensure their websites are accessible to avoid legal repercussions and comply with key accessibility regulations in the US, such as the Americans with Disabilities Act (ADA). Use our [ADA compliance website checker](https://siteimprove.com/en-us/accessibility/ada-compliance-website-checker/) for more information.

アマゾン、ハーバード大学などの組織は差別訴訟に直面している。

> High-profile organizations, from Amazon to Harvard University to Domino’s, have all faced discrimination lawsuits related to accessibility.

訴訟費用とは別に評判やブランドに大きな損害をもたらす

> Apart from the cost of these lawsuits, inaccessible websites lead to major reputational and brand damage, which is why it’s so important to regularly audit your site for accessibility blockers using automated accessibility testing tools.

定期的な自動アクセシビリティテストはメンテナンスの最適化など、他にも重要な利点がある。

重要で小さな修正を特定し、アクセシビリティ改善が開発チームの速度低下のボトルネックにならなくなる。

> Regular automated accessibility testing has other key benefits – including optimizing routine [website maintenance](https://siteimprove.com/en-us/quality-assurance/website-maintenance/). By identifying critical accessibility critical and smaller fixes that can be incorporated into existing workflows on an ongoing basis, accessibility improvements don’t become a bottleneck issue that slows down your digital team.

アクセシビリティなサイトは検索エンジンで報われる傾向にある。

大規模な再設計やWebサイトの移行を計画している組織にとって、自動アクセシビリティテストは検索エンジン（SEO）のランキングを維持するためにすぐに直さないとランキングを下げてしまう予期しない、偶発的なアクセシビリティのエラーをキャッチするために特に重要になる。（アクセシビリティの低いカラーやaltテキストなどの問題。）

> Accessible websites also tend to be rewarded with higher search engine rankings. For organizations planning large-scale website redesigns or [website migrations](https://siteimprove.com/en-us/seo/website-migration-checklist/), automated accessibility testing is especially important for maintaining their search engine rankings, catching unexpected or accidental accessibility errors that would otherwise quickly push them down the rankings, such as a failure to copy across image alt text, or an inaccessible new color palette.



## What are the limitations of automated website accessibility testing?

定期的な自動アクセシビリティテストの利点にもかかわらず、健全なWebサイトでは計画的な手動テストも必要。

> Despite all of the advantages of running regularly scheduled automated accessibility tests, any healthy website should also include manual testing in its plans.

自動ツールでは見つけられない領域があり、それは手動確認できる。

> There are areas where an automated tool cannot determine accessibility issues, but an actual human can.

キーボードのみのナビゲーションでページのすべてのファセットにアクセスできることを確認するチェックが含まれる

> These areas include making checks to ensure that all facets of a page can be accessed with keyboard-only navigation.

一部のユーザにとってページが読み似づらくする、色コントラスト問題も含まれている。

> It also involves [detecting color contrast issues](https://siteimprove.com/en-us/accessibility/color-contrast-checker/) that make pages difficult for some users to read; checking HTML5 and Web Accessibility Issues in the Accessible Rich Internet Applications ([WAI-ARIA](https://siteimprove.com/en-us/accessibility/introduction-to-wai-aria/)) elements for coding best practices; and testing compatibility with leading screen readers.

寛容なのは定期的に、徹底的にテストすることは必須ということ。

> The bottom line is that testing website accessibility regularly and thoroughly is a must in today’s online environment.

WCAGとアクセシビリティ規制に伴い、インターネットに依存する高齢者の数も増え続けており、すべてのユーザに平等なアクセスを提供するWebサイトエクスペリエンスは重要である。

> With the advent of WCAG and along with accessibility regulations, an ever-growing number of seniors relying on the internet, a website experience that provides equal access to all users is important.

組織がアクセシビリティの世界に不慣れだったり、現在のアプローチ改善をしようとしているかに関わらず、手動と自動テストのよく考えられ得た組み合わせはWebサイトを必要とするすべての人がWebサイトを使えるようにするのに大いに役立つ。

> Whether your organization is new to the world of accessible content or looking to improve on your current approach, a well-considered combination of manual and automated accessibility testing will go a long way towards keeping your website usable for everyone who needs it.