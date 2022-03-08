---
layout: post
title:  "Translate: Sustainable architectures in a world of Agile, DevOps, and cloud"
date:   2022-03-08 00:00:00 +0900
categories: blog
tags:
  - english
  - translate
  - DevOps
  - Agile
  - Sustainable architecture
  - stackoverflow
  - blog
　- quality attributes
---

[Sustainable architectures in a world of Agile, DevOps, and cloud - Stack Overflow Blog](https://stackoverflow.blog/2022/02/24/sustainable-architectures-in-a-world-of-agile-devops-and-cloud/)の非公式翻訳です。

リーディングスキル向上と技術的理解促進を目的にしています。

---

# Sustainable architectures in a world of Agile, DevOps, and cloud

アジャイル、DevOpsそしてクラウドの世界における持続可能なアーキテクチャ



長期に渡って、ソフトウェアのアーキテクチャをクリエイト、メンテナンスすることはソフトウェアアーキテクトやエンジニアにとって課題です。

全ての要求への対応、全機能の提供、そして全てのシステムコンポーネントの大きな設計を一度に計画するために、実装を開始する前に完璧なアーキテクチャデザインを完成させるような大きな設計を先行させようとするかもしれません。

> Creating and maintaining software architectures that remain sustainable over time is a challenge for software architects and engineers.
>
> They may attempt to meet every requirement, provide every feature, and plan every system component at once with big designs upfront, which involves completing and perfecting architectural designs before implementations are started.

あるいは、アジャイルプロセスにアーキテクチャ設計の舵取りを任せて、創発的なアーキテクチャを生み出すこともできます。この場合、開発チームは機能の提供を開始し、アーキテクチャ設計を創発させますが、事前の計画はほとんど行いません。

> Alternatively, they may let the Agile process steer the architectural design to produce emergent architectures, where development teams start delivering functionality and let architectural designs emerge, with little if any upfront planning.

しかし、どちらのアプローチもサステナブルなアーキテクチャを構築する上で一貫して成功とは言えません。

継続的アーキテクチャ（CA）アプローチは、大規模な先行設計と創発的アーキテクチャの間の有意義な妥協点を提供し、アジャイル、DevOps、クラウドの時代におけるソフトウェアアーキテクチャの持続可能性を達成するための実証済みの道筋も提供するものです。

> Unfortunately, neither of those approaches is consistently successful in delivering sustainable architecture.
>
>  The Continuous Architecture (CA) approach offers a meaningful compromise between big upfront designs and emergent architectures, as well as a proven path to achieve software architecture sustainability in the age of Agile, DevOps, and cloud. 



## What is Continuous Architecture?

CAはフォーマルな方法論ではなく、それぞれの特定のコンテキストに容易に適用できるアプローチです。

> Continuous architecture is an approach, not a formal methodology, that can easily be adapted to your specific context.



6つのシンプルな原則に基づいています。

原則はどうしたら継続的にソフトウェアアーキテクチャを練り上げられるかを述べたものです。

1. **プロダクトを設計する。プロジェクトからプロダクトへ進化させる**

   ポイントの施策ではなくプロダクト自体を設計することでより顧客に集中できる？

2. **機能要件ではなく、品質属性に焦点を当てる** 

3. **設計の決定は絶対に必要になるまで遅らせる。** 

   推測ではなく事実に基づいてアーキテクチャを設計する

4. **変化のためのアーキテクチャ。小ささの力を活用する。大きく、モノリシックで、密に結合したコンポーネントは変化が困難** 

5. **ビルド、テスト、デプロイ、そして運用のためのアーキテクチャ。**

6. **作業しているシステムの設計に倣い、チームの組織をモデル化する**。

   チームのあり方は彼らが取り組んでいるシステムアーキテクチャと設計を推進する。

> It is based on the following six simple principles that describe how we can continuously elaborate software architectures in today’s world of Agile, DevOps, and cloud:
>
> 1. *“Architect products; evolve from projects to products*. Architecting products is more efficient than just designing point solutions to projects and focuses the team on its customers.
> 2. *Focus on quality attributes, not on functional requirements*. Quality attribute requirements drive the architecture.
> 3. *Delay design decisions until they are absolutely necessary*. Design architectures based on facts, not on guesses. There is no point in designing and implementing capabilities that may never be used—it is a waste of time and resources.
> 4. *Architect for change—leverage the “power of small.” Big, monolithic, tightly coupled components are hard to change.* Instead, leverage small, loosely coupled software elements.
> 5. *Architect for build, test, deploy, and operate*. Most architecture methodologies focus exclusively on software building activities, but architects and engineers should also be concerned about testing, deployment and operation in order to support continuous delivery.
> 6. *Model the organization of your teams after the design of the system you are working on*. The way teams are organized drives the architecture and design of the systems they are working on.”



これらの原則は役に立つモデルは提供しますが、規範ではありません。

以下の４つの必要な活動で補われます。

> These principles provide a useful model, but are not prescriptive. They are complemented by the following four essential activities:

* 優れたアーキテクチャによって対応する必要がある横断的な要件になるため、品質属性に焦点を当てます
* アーキテクチャ活動の主要な作業単位であるアーキテクチャの決定を推進します
* 技術負債を知ってください。その理解と管理が持続可能なアーキテクチャの重要なキーとなります
* Feedbackループを実装してください。それは私達へ開発のライフサイクルを反復させ、アーキテクチャの決定の影響を理解することを可能にします。自動化は効果的なフィードバックループの重要な面です。

> - *“Focus on quality attributes*, which are the key cross-cutting requirements that a good architecture should address. 
>- *Drive architectural decisions*, which are the primary unit of work of architectural activities. 
> - *Know your technical debt*, the understanding and management of which is key for a sustainable architecture. 
> - *Implement feedback loops*, which enable us to iterate through the software development lifecycle and understand the impact of architectural decisions. Automation is a key aspect of effective feedback loops.”

さらに継続的なアーキテクチャはアーキテクチャのツールボックスを含みます。

それは証明されたツールのセットです。例えば decision logs, utility trees, architectural tacticsです。

ソフトウェアアーキテクトやエンジニアは彼らのコンテキストに関連があるツールを追加することでこのツールボックスを拡張可能です。

> In addition, continuous architecture includes an architectural “toolbox” that incorporates a set of proven tools, such as decision logs, utility trees, and architectural tactics. 
>
> Software architects and engineers can extend this toolbox as needed by adding tools relevant to their contexts.





## Quality attribute requirements are key to sustainability

ソフトウェアアーキテクチャのコンテキストのなかでの持続可能性とは何なのでしょうか？

持続可能なソフトウェアアーキテクチャは将来の未知の要件を満たす能力を損なうことなく、現在の既知の要件を満たすことに重点を置いています



品質属性の要件がアーキテクチャ設計の取り組みを推進するので、品質属性要件を満たすことに焦点を当てることはは持続可能なアーキテクチャを構築するために効果的な方法です。

> What do we mean by sustainability in the context of software architecture?

> Sustainable software architectures focus on meeting known, current requirements without compromising their ability to meet future, unknown requirements. 
>
> Since quality attribute requirements drive architecture design efforts (**CA Principle 2)**, focusing on meeting quality attribute requirements is an effective way to create sustainable architectures. 

残念ながら、これらの要件は、機能要件ほど十分に文書化されておらず、注意深く検討されていないことがよくあります。

これらは、単純な箇条書きとして記録される場合があります。たとえば、ソフトウェアアーキテクトやエンジニアにこれらの要件を満たすシステムの設計方法を指示せずに、「システムは高速である必要がある」または「システムはスケーラブルである必要がある」と指定します。

> Unfortunately, these requirements are often not as well-documented and carefully examined as functional requirements. 
>
> They may be recorded as a simple bulleted list: for example, specifying that “the system must be fast,” or “the system must be scalable,” without telling software architects and engineers how to design a system that meets those requirements.



よりよい定義方法としては[ATAM Scenarios and Utility Trees](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=513908)があります。

> A better way to describe quality attribute requirements is to use ATAM Scenarios and Utility Trees, as illustrated in the following example:

![img](https://lh6.googleusercontent.com/b5b51uQGkylYF_kNxccndT_X57JXP57MEJ6BizEagSmwrvwVmJck6VAAQ2qrCSc1GjIyiu7nGlAKRptNwSXjF1kjJ-w5ZpJSdWT3byc-g6yBEF7A_F3Fl62KDTl-L8T-0eiSA5cF)



このアプローチは下記のシナリオのプロパティを理解することに依存しています。

- Stimulus （刺激）はシナリオを開始するためにユーザーや障害など、システムの外部刺激が何をするかを示します
- Response（レスポンス）は刺激に対する予想されるシステム応答を示します
- Measurement（測定）は測定可能な目標を提供することにより、刺激に対する応答をさらに定義するものであり、範囲とすることができる

> This approach relies on understanding three key properties for each scenario: 
>
> - “Stimulus” depicts what any external stimulus of the system, such as a user or even a failure, would do to initiate the scenario. 
> - “Response” depicts the expected system response to the stimulus.
> - “Measurement” further defines the response to the stimulus by providing a measurable target, which can be a range. 

いくつかの品質特性はデジタル世代において複雑化する持続可能なソフトウェアアーキテクチャにとってより大切になりました。（例えば、セキュリティ、スケーラビリティ、パフォーマンス、そして復旧力）

それらはソフトウェアアーキテクトやエンジニアによって常によく理解されている、また優先されているわけではありません。

しかしながら、これらの品質特性に関する要件に対処することはアーキテクチャ設計プロセスの大事なコンポーネントです。

> Several quality attributes have become more important for elaborating sustainable software architectures in the digital age:
>
> security, scalability, performance, and resilience. 
>
> They are not always well-understood or prioritized by software architects and engineers.
>
> However, addressing the requirements associated with these quality attributes is a key component of the architectural design process. 



## Architectural decisions and technical debt 

アーキテクチャの決定と技術的負債

アーキテクチャの決定を推進することは継続的アーキテクチャにおいて不可欠な活動であり、アーキテクチャの決定は実施者の主要な作業単位です。

> Driving architectural decisions is an essential activity in Continuous Architecture, and architectural decisions are the primary unit of work of a practitioner.



ほぼすべての決定にはトレードオフが含まれます。

例えば、性能のような品質特性要件の実装を最適化するための決定はユーザビリティや保守性のような他の品質属性の実装にマイナスの影響を与えるかもしれません。



> Almost every architectural decision involves tradeoffs.
>
> For example, a decision made to optimize the implementation of a quality attribute requirement such as performance may negatively impact the implementation of other quality attributes, such as usability or maintainability.

ソフトウェアシステムの納期を早めるために行ったアーキテクチャ上の決定は、将来のある時点で「返済」する必要がある技術的負債を増やし、システムの持続可能性に影響を与える可能性があります。

> An architectural decision made to accelerate the delivery of a software system may increase technical debt, which needs to be “repaid” at some point in the future and may impact the sustainability of the system.

最後に、すべてのアーキテクチャ上の決定は、システムのコストに影響を与え、そのシステムに割り当てられた予算を満たすために妥協する必要がある場合があります。

すべてのトレードオフは、実行可能なコードベースに反映されます。

> Finally, all architectural decisions affect the cost of the system, and compromises may need to be made in order to meet the budget allocated to that system.
>
> All tradeoffs are reflected in the executable code base.

トレードオフは、チームがコントロールできない制約があるため、最適なものではなく、最も不利なものになることが多く、また、システム関係者から受け取ったフィードバックに基づいて、決定を調整する必要があることも多いのです。

> Tradeoffs often are the least unfavorable ones rather than the optimal ones because of constraints beyond the team’s control, and decisions often need to be adjusted based on the feedback received from the system stakeholders.

トレードオフを意識したアーキテクチャ上の意思決定を継続的に行い、必要に応じて調整することが、持続可能なアーキテクチャを構築・維持するための鍵になります。

> Continuously making architectural decisions as well as conscious tradeoffs and adjusting them as needed is key to creating and maintaining sustainable architectures.

持続可能なアーキテクチャの構築は、チームに与えられた制約の中で最良の（つまり十分な）ソリューションを見つけることであるため、関連するすべての制約を含め、アーキテクチャの決定を永続的かつ正確に記録することが重要です。

また、チームが検討したすべての選択肢と、その決定の根拠、および関連するトレードオフを記録することも重要です。

将来、システムを持続可能なものにするために、ある時点で決定を覆す必要が生じるかもしれないからです。

CAの原則3は、推測ではなく事実に基づいてアーキテクチャを設計することを思い出させてくれますが、事実は時間とともに変化し、すでに行った決定に影響を与える可能性があります。

最後に、決定ログをソースコードと同じリポジトリに保管することで、アーキテクチャの決定記録を最新かつ正確に保つことができます。

> It is important to keep a permanent and accurate record of architectural decisions, including all associated constraints, since creating a sustainable architecture is about finding the best (that is, good enough) solution within the constraints given to the team.
>
> It is also important to record all options considered by the team as well as the rationale for the decision and its associated tradeoffs.

> The team should also evaluate and record the cost of potentially reversing decisions before finalizing them, as it may become necessary to reverse some of the decisions at some point in the future in order to keep the system sustainable.
>
> CA Principle 3 reminds us to design architectures based on facts, not guesses, and facts may change with time, impacting decisions we already made.
>
> Finally, keeping the decision log in the same repository as the source code ensures that the architectural decision record stays current and accurate.

## Architectural tactics



> Selecting and applying architectural tactics is an excellent approach to address quality attributes requirements.
>
> Architectural tactics are a proven technique, and originated from [research at the Software Engineering Institute/Carnegie Mellon (SEI/CMU)](https://resources.sei.cmu.edu/asset_files/TechnicalReport/2003_005_001_14213.pdf).
>
> “[An architectural tactic is a design decision that affects how well a software architecture addresses a particular quality attribute](http://resources.sei.cmu.edu/library/asset-view.cfm?AssetID=8299).”
>
> Tactics are often (but unfortunately not always) documented in catalogs in order to promote the reuse of this knowledge among architects.
>
> As an example, the following diagram shows a few representative tactics that could be used to deal with scalability failures:

![img](https://lh4.googleusercontent.com/alYe_fj66JNJDjQVq_gsWZqsducNXXQeLI2GzARks78lTWMdZ0bJJoYN64IvF2TDsNWPfYfTE1-X7mMwMZy31462u5j-6cQt8LE7BZJmLFU290UGaWuavuAODEfdJAgYjuRYmK6s)

> Using architectural tactics when creating and maintaining a software system contributes to the sustainability of the system, because the design is based on proven building blocks that implement its quality attribute requirements.



## Architecting sustainable software systems

この記事の冒頭で述べたように、ソフトウェアアーキテクトとエンジニアは、アジャイル、DevOps、およびクラウドの現在のコンテキストで、事前の大規模設計と新しいアーキテクチャの間の適切な妥協点を見つけるのに苦労することがよくあります。

新システムの最初のイテレーションが完了し、品質属性要件がより明確になった後、どの程度のアーキテクチャ設計を最初に行うべきでしょうか。

チームはどのようにして「先行」アーキテクチャを進化させ、急速に押し寄せる不可避の要件変更に対処するのでしょうか。

> As mentioned in the introduction to this article, software architects and engineers often have a hard time finding a good compromise between big design upfront and emergent architecture in the current context of Agile, DevOps, and cloud.
>
> How much architectural design should be done initially vs. at a later date, when the first iterations of the new system have been delivered and quality attribute requirements may be better defined?
>
> How does the team evolve their “upfront” architecture to cope with the unavoidable requirement changes that are quickly piling upon them?

これらの疑問に答えるため、CAのアプローチでは、「最低限実行可能なアーキテクチャ」という観点から、**CA原則3**（「設計上の決定は絶対に必要になるまで遅らせる」）を活用し、事実上の要件に基づいて少数のアーキテクチャの決定から設計を開始することを推奨します。

このアプローチにより、チームは本番環境にリリースできる実行可能なソフトウェアシステムを迅速に作成することができます。

そして、新しい要件や要件の変更に対応するために、必要に応じて設計上の決定を続けます。さらに、システムの利害関係者全員に、計画、進捗状況、決定事項を伝えることが重要です。

> In order to answer these questions, the CA approach recommends thinking in terms of “minimum viable architecture,” leveraging **CA Principle 3** (“Delay design decisions until they are absolutely necessary”) and starting the design with a small number of architectural decisions based on factual requirements.
>
> Following this approach, the team quickly creates a viable software system that can be released to a production environment.
>
> Then they continue making design decisions as needed to handle new requirements or requirement changes. In addition, it is important to communicate the plan, progress, and decisions to all system stakeholders.

最小限のアーキテクチャ戦略を用いることは、ソフトウェア製品をより早く、より低コストで市場に投入するための効果的な方法です。
しかし、"Minimum Viable Architecture "とは一体何を意味するのだろうか。簡単に言うと、Minimum Viable Architectureを作るには、次のような手順があります。

- 最初に、ソフトウェアシステムの既知の品質属性要件を正確に満たすのに十分なアーキテクチャを設計し、実稼働に使用できるシステムを迅速に構築する。
- その後、時間の経過とともに定義される追加要件や要件変更に対応するため、MVAを継続的に拡張することができる。アーキテクチャ設計の柔軟性を保つことは不可欠であり、CA原則4（[“Architect for change – leverage the power of small”](https://continuousarchitecture.com/2021/12/21/minimum-viable-architecture-how-to-continuously-evolve-an-architectural-design-over-time/)）を活用することは、この目的を達成するための優れた方法です。

> Using a Minimum Viable Architecture strategy is an effective way to bring a software product to market faster with lower cost. But what exactly do we mean by “Minimum Viable Architecture?” In simple terms, creating a minimum viable architecture involves the following steps:
>
> - Initially designing just enough architecture to exactly meet the known quality attribute requirements of a software system, in order to quickly create a system viable enough to be used in production.
> - Then the MVA can be continuously augmented to meet additional requirements or requirement changes as they are defined over time. Keeping the architectural design flexible is essential, and leveraging CA Principle 4 (**[“Architect for change – leverage the power of small”](https://continuousarchitecture.com/2021/12/21/minimum-viable-architecture-how-to-continuously-evolve-an-architectural-design-over-time/)**) is an excellent way to accomplish this objective.”
>

ソフトウェアアーキテクトやエンジニアは、システムを構築する際に、最悪のケースを考慮する傾向があります。

例えば、ビジネスパートナーとの会話の中で、時間軸に言及せずにシステムが処理できる最大トランザクション数を推定し、その数字に「安全マージン」を上乗せすることでスケーラビリティ要件を評価することがあります。

しかし、ビジネスパートナーから提示された数値は、楽観的な推測である可能性があります。

その結果、チームは非現実的な数のトランザクションを処理するように新システムを設計し、設計に不必要な複雑さを加えてしまうかもしれません。

> Software architects and engineers tend to consider the worst-case scenario when architecting a system.
>
> For example, they may assess scalability requirements by estimating the maximum number of transactions the system should be able to handle without mentioning any timeframe during conversations with their business partners, and then add a “safety margin” on top of that number. 
>
> However, the number provided by the business may be an optimistic guess.
>
> As a result, the team may architect the new system to handle an unrealistic number of transactions and may add unnecessary complexity to their design.



リリース当初は現実的な見積もりに基づいて最小限のアーキテクチャでスタートし、実際の使用データに基づいてそのアーキテクチャを進化させる方がずっと良いです。

このアプローチは、最悪のシナリオに基づいてシステムを設計するよりも、より持続可能なソフトウェアシステムを作成し、より費用対効果に優れています。

さらに、持続可能なアーキテクチャには、システム障害に対処するメカニズムや、スケーラビリティやレジリエンスといった重要な品質属性を監視するメカニズムも含まれます。

> It is much better to start with a minimum viable architecture based on realistic estimates at launch time and evolve that architecture based on actual usage data.
>
> This approach creates a more sustainable software system and is more cost-effective than designing a system based on a worst-case scenario.
>
> In addition, sustainable architectures include mechanisms to deal with system failures and monitor key quality attributes such as scalability and resilience.



## To conclude

ソフトウェアアーキテクチャは品質属性の要件によって駆動され、セキュリティ、スケーラビリティ、パフォーマンス、レジリエンスなど、そのうちのいくつかは、デジタル時代の持続可能なソフトウェアアーキテクチャにとってより重要なものとなってきています。

現在、アーキテクチャは、ソフトウェア製品の持続可能な提供をサポートするために、継続的に見直される意思決定の流れとなっています。

アジャイル、クラウド、DevOpsの時代において、アーキテクチャはチームの責任となりました。

最小限の実行可能なアーキテクチャ戦略とともに、アーキテクチャへの継続的なアプローチを活用することで、この目標の達成に近づくことができます。

> Software architecture is driven by quality attribute requirements, and a few of those, including security, scalability, performance, and resilience, have become more important for sustainable software architectures in the digital age.
>
> Architecture is now a continual flow of decisions that are revisited continuously to support the sustainable delivery of software products.
>
> Architecture has become a team responsibility in the Agile, cloud, and DevOps era.
>
> Leveraging a continuous approach to architecture, together with a minimum viable architecture strategy, brings you closer to achieving this goal.
>
> **Portions of this are from the books\* [Continuous Architecture In Practice](https://continuousarchitecture.com/) \*by Murat Erder, Pierre Pureur and Eoin Woods (copyrighted by [Pearson](https://www.pearson.com/) Education, Inc.) and Continuous Architecture: Sustainable Architecture In An Agile and Cloud-Centric World by Murat Erder and Pierre Pureur (copyrighted by Murat Erder and Pierre Pureur\* )*

----

### Newly learned words:

- Alternatively : あるいは

- emergent : 創発的な

  - > 「創発」とは、部分の性質の単純な総和にとどまらない特性が、全体として現れること。 物理学や生物学などで使われる用語「emergence」（発現）が語源で、自律的な要素が集積し組織化することにより、個々のふるまいを凌駕する高度で複雑な秩序やシステムが生じる現象あるいは状態をいいます。
    >
    > [創発とは - コトバンク](https://kotobank.jp/word/創発-552975#:~:text=「創発」とは、部分,あるいは状態をいいます。)

- compromise : 妥協案

- as well as : 及び、

- examine : 検査する、検討する

- depict : 描く（describe, paint）

- unfavorable : 好ましくない

