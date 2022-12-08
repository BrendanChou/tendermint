(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{772:function(e,t,n){"use strict";n.r(t);var r=n(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"rfc-012-event-indexing-revisited"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rfc-012-event-indexing-revisited"}},[e._v("#")]),e._v(" RFC 012: Event Indexing Revisited")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("ul",[n("li",[e._v("11-Feb-2022: Add terminological notes.")]),e._v(" "),n("li",[e._v("10-Feb-2022: Updated from review feedback.")]),e._v(" "),n("li",[e._v("07-Feb-2022: Initial draft (@creachadair)")])]),e._v(" "),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[e._v('A Tendermint node allows ABCI events associated with block and transaction\nprocessing to be "indexed" into persistent storage.  The original Tendermint\nimplementation provided a fixed, built-in '),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/internal/state/indexer/tx/kv",target:"_blank",rel:"noopener noreferrer"}},[e._v("proprietary indexer"),n("OutboundLink")],1),e._v(" for\nsuch events.")]),e._v(" "),n("p",[e._v("In response to user requests to customize indexing, "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-065-custom-event-indexing.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 065"),n("OutboundLink")],1),e._v('\nintroduced an "event sink" interface that allows developers (at least in\ntheory) to plug in alternative index storage.')]),e._v(" "),n("p",[e._v("Although ADR-065 was a good first step toward customization, its implementation\nmodel does not satisfy all the user requirements.  Moreover, this approach\nleaves some existing technical issues with indexing unsolved.")]),e._v(" "),n("p",[e._v("This RFC documents these concerns, and discusses some potential approaches to\nsolving them.  This RFC does "),n("em",[e._v("not")]),e._v(" propose a specific technical decision. It is\nmeant to unify and focus some of the disparate discussions of the topic.")]),e._v(" "),n("h2",{attrs:{id:"background"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),n("p",[e._v('We begin with some important terminological context.  The term "event" in\nTendermint can be confusing, as the same word is used for multiple related but\ndistinct concepts:')]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("ABCI Events")]),e._v(" refer to the key-value metadata attached to blocks and\ntransactions by the application. These values are represented by the ABCI\n"),n("code",[e._v("Event")]),e._v(" protobuf message type.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Consensus Events")]),e._v(" refer to the data published by the Tendermint node to\nits pubsub bus in response to various consensus state transitions and other\nimportant activities, such as round updates, votes, transaction delivery,\nand block completion.")])])]),e._v(" "),n("p",[e._v('This confusion is compounded because some "consensus event" values also have\n"ABCI event" metadata attached to them. Notably, block and transaction items\ntypically have ABCI metadata assigned by the application.')]),e._v(" "),n("p",[e._v("Indexers and RPC clients subscribed to the pubsub bus receive "),n("strong",[e._v("consensus\nevents")]),e._v(", but they identify which ones to care about using query expressions\nthat match against the "),n("strong",[e._v("ABCI events")]),e._v(" associated with them.")]),e._v(" "),n("p",[e._v("In the discussion that follows, we will use the term "),n("strong",[e._v("event item")]),e._v(" to refer to\na datum published to or received from the pubsub bus, and "),n("strong",[e._v("ABCI event")]),e._v(" or\n"),n("strong",[e._v("event metadata")]),e._v(" to refer to the key/value annotations.")]),e._v(" "),n("p",[n("strong",[e._v("Indexing")]),e._v(" in this context means recording the association between certain\nABCI metadata and the blocks or transactions they're attached to. The ABCI\nmetadata typically carry application-specific details like sender and recipient\naddresses, catgory tags, and so forth, that are not part of consensus but are\nused by UI tools to find and display transactions of interest.")]),e._v(" "),n("p",[e._v("The consensus node records the blocks and transactions as part of its block\nstore, but does not persist the application metadata. Metadata persistence is\nthe task of the indexer, which can be (optionally) enabled by the node\noperator.")]),e._v(" "),n("h3",{attrs:{id:"history"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[e._v("#")]),e._v(" History")]),e._v(" "),n("p",[e._v("The "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/internal/state/indexer/tx/kv",target:"_blank",rel:"noopener noreferrer"}},[e._v("original indexer"),n("OutboundLink")],1),e._v(" built in to Tendermint stored index data in an\nembedded "),n("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tm-db#DB",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("tm-db")]),e._v(" database"),n("OutboundLink")],1),e._v(" with a proprietary key layout.\nIn "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-065-custom-event-indexing.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 065"),n("OutboundLink")],1),e._v(", we noted that this implementation has both performance\nand scaling problems under load.  Moreover, the only practical way to query the\nindex data is via the "),n("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint/internal/pubsub/query/syntax",target:"_blank",rel:"noopener noreferrer"}},[e._v("query filter language"),n("OutboundLink")],1),e._v(" used for event\nsubscription.  "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1161",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #1161"),n("OutboundLink")],1),e._v(" appears to be a motivational context for that ADR.")]),e._v(" "),n("p",[e._v("To mitigate both of these concerns, we introduced the "),n("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint/internal/state/indexer#EventSink",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("EventSink")]),n("OutboundLink")],1),e._v("\ninterface, combining the original transaction and block indexer interfaces\nalong with some service plumbing.  Using this interface, a developer can plug\nin an indexer that uses a more efficient storage engine, and provides a more\nexpressive query language.  As a proof-of-concept, we built a "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/internal/state/indexer/sink/psql",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL event\nsink"),n("OutboundLink")],1),e._v(" that exports data to a "),n("a",{attrs:{href:"https://postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL database"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Although this approach addressed some of the immediate concerns, there are\nseveral issues for custom indexing that have not been fully addressed. Here we\nwill discuss them in more detail.")]),e._v(" "),n("p",[e._v("For further context, including links to user reports and related work, see also\nthe "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/7135",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pluggable custom event indexing tracking issue"),n("OutboundLink")],1),e._v(" issue.")]),e._v(" "),n("h3",{attrs:{id:"issue-1-tight-coupling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#issue-1-tight-coupling"}},[e._v("#")]),e._v(" Issue 1: Tight Coupling")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("EventSink")]),e._v(" interface supports multiple implementations, but plugging in\nimplementations still requires tight integration with the node. In particular:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Any custom indexer must either be written in Go and compiled in to the\nTendermint binary, or the developer must write a Go shim to communicate with\nthe implementation and build that into the Tendermint binary.")])]),e._v(" "),n("li",[n("p",[e._v("This means to support a custom indexer, it either has to be integrated into\nthe Tendermint core repository, or every installation that uses that indexer\nmust fetch or build a patched version of Tendermint.")])])]),e._v(" "),n("p",[e._v("The problem with integrating indexers into Tendermint Core is that every user\nof Tendermint Core takes a dependency on all supported indexers, including\nthose they never use. Even if the unused code is disabled with build tags,\nusers have to remember to do this or potentially be exposed to security issues\nthat may arise in any of the custom indexers. This is a risk for Tendermint,\nwhich is a trust-critical component of all applications built on it.")]),e._v(" "),n("p",[e._v("The problem with "),n("em",[e._v("not")]),e._v(" integrating indexers into Tendermint Core is that any\ndeveloper who wants to use a particular indexer must now fetch or build a\npatched version of the core code that includes the custom indexer. Besides\nbeing inconvenient, this makes it harder for users to upgrade their node, since\nthey need to either re-apply their patches directly or wait for an intermediary\nto do it for them.")]),e._v(" "),n("p",[e._v("Even for developers who have written their applications in Go and link with the\nconsensus node directly (e.g., using the "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),n("OutboundLink")],1),e._v("), these issues add a\npotentially significant complication to the build process.")]),e._v(" "),n("h3",{attrs:{id:"issue-2-legacy-compatibility"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#issue-2-legacy-compatibility"}},[e._v("#")]),e._v(" Issue 2: Legacy Compatibility")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("EventSink")]),e._v(" interface retains several limitations of the original\nproprietary indexer. These include:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The indexer has no control over which event items are reported. Only the\nexact block and transaction events that were reported to the original indexer\nare reported to a custom indexer.")])]),e._v(" "),n("li",[n("p",[e._v("The interface requires the implementation to define methods for the legacy\nsearch and query API. This requirement comes from the integation with the\n"),n("a",{attrs:{href:"https://docs.tendermint.com/v0.34/rpc/#/Websocket/subscribe",target:"_blank",rel:"noopener noreferrer"}},[e._v("event subscription RPC API"),n("OutboundLink")],1),e._v(", but actually supporting these\nmethods is not trivial.")])])]),e._v(" "),n("p",[e._v("At present, only the original KV indexer implements the query methods. Even the\nproof-of-concept PostgreSQL implementation simply reports errors for all calls\nto these methods.")]),e._v(" "),n("p",[e._v('Even for a plugin written in Go, implementing these methods "correctly" would\nrequire parsing and translating the custom query language over whatever storage\nplatform the indexer uses.')]),e._v(" "),n("p",[e._v("For a plugin "),n("em",[e._v("not")]),e._v(" written in Go, even beyond the cost of integration the\ndeveloper would have to re-implement the entire query language.")]),e._v(" "),n("h3",{attrs:{id:"issue-3-indexing-delays-consensus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#issue-3-indexing-delays-consensus"}},[e._v("#")]),e._v(" Issue 3: Indexing Delays Consensus")]),e._v(" "),n("p",[e._v("Within the node, indexing hooks in to the same internal pubsub dispatcher that\nis used to export event items to the "),n("a",{attrs:{href:"https://docs.tendermint.com/v0.34/rpc/#/Websocket/subscribe",target:"_blank",rel:"noopener noreferrer"}},[e._v("event subscription RPC API"),n("OutboundLink")],1),e._v('.\nIn contrast with RPC subscribers, however, indexing is a "privileged"\nsubscriber: If an RPC subscriber is "too slow", the node may terminate the\nsubscription and disconnect the client. That means that RPC subscribers may\nlose (miss) event items.  The indexer, however, is "unbuffered", and the\npublisher will never drop or disconnect from it. If the indexer is slow, the\npublisher will block until it returns, to ensure that no event items are lost.')]),e._v(" "),n("p",[e._v("In practice, this means that the performance of the indexer has a direct effect\non the performance of the consensus node: If the indexer is slow or stalls, it\nwill slow or halt the progress of consensus. Users have already reported this\nproblem even with the built-in indexer (see, for example, "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/7247",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7247"),n("OutboundLink")],1),e._v(").\nExtending this concern to arbitrary user-defined custom indexers gives that\nrisk a much larger surface area.")]),e._v(" "),n("h2",{attrs:{id:"discussion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[e._v("#")]),e._v(" Discussion")]),e._v(" "),n("p",[e._v("It is not possible to simultaneously guarantee that publishing event items will\nnot delay consensus, and also that all event items of interest are always\ncompletely indexed.")]),e._v(" "),n("p",[e._v("Therefore, our choice is between eliminating delay (and minimizing loss) or\neliminating loss (and minimizing delay).  Currently, we take the second\napproach, which has led to user complaints about consensus delays due to\nindexing and subscription overhead.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("If we agree that consensus performance supersedes index completeness, our\ndesign choices are to constrain the likelihood and frequency of missing event\nitems.")])]),e._v(" "),n("li",[n("p",[e._v("If we decide that consensus performance is more important than index\ncompleteness, our option is to minimize overhead on the event delivery path\nand document that indexer plugins constrain the rate of consensus.")])])]),e._v(" "),n("p",[e._v("Since we have user reports requesting both properties, we have to choose one or\nthe other.  Since the primary job of the consensus engine is to correctly,\nrobustly, reliablly, and efficiently replicate application state across the\nnetwork, I believe the correct choice is to favor consensus performance.")]),e._v(" "),n("p",[e._v("An important consideration for this decision is that a node does not index\napplication metadata separately: If indexing is disabled, there is no built-in\nmechanism to go back and replay or reconstruct the data that an indexer would\nhave stored. The node "),n("em",[e._v("does")]),e._v(" store the blockchain itself (i.e., the blocks and\ntheir transactions), so potentially some use cases currently handled by the\nindexer could be handled by the node. For example, allowing clients to ask\nwhether a given transaction ID has been committed to a block could in principle\nbe done without an indexer, since it does not depend on application metadata.")]),e._v(" "),n("p",[e._v("Inevitably, a question will arise whether we could implement both strategies\nand toggle between them with a flag. That would be a worst-case scenario,\nrequiring us to maintain the complexity of two very-different operational\nconcerns.  If our goal is that Tendermint should be as simple, efficient, and\ntrustworthy as posible, there is not a strong case for making these options\nconfigurable: We should pick a side and commit to it.")]),e._v(" "),n("h3",{attrs:{id:"design-principles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#design-principles"}},[e._v("#")]),e._v(" Design Principles")]),e._v(" "),n("p",[e._v('Although there is no unique "best" solution to the issues described above,\nthere are some specific principles that a solution should include:')]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("A custom indexer should not require integration into Tendermint core.")]),e._v(" A\ndeveloper or node operator can create, build, deploy, and use a custom\nindexer with a stock build of the Tendermint consensus node.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Custom indexers cannot stall consensus.")]),e._v(" An indexer that is slow or\nstalls cannot slow down or prevent core consensus from making progress.")]),e._v(" "),n("p",[e._v('The plugin interface must give node operators control over the tolerances\nfor acceptable indexer performance, and the means to detect when indexers\nare falling outside those tolerances, but indexer failures should "fail\nsafe" with respect to consensus (even if that means the indexer may miss\nsome data, in sufficiently-extreme circumstances).')])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Custom indexers control which event items they index.")]),e._v(" A custom indexer\nis not limited to only the current transaction and block events, but can\nobserve any event item published by the node.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Custom indexing is forward-compatible.")]),e._v(" Adding new event item types or\nmetadata to the consensus node should not require existing custom indexers\nto be rebuilt or modified, unless they want to take advantage of the new\ndata.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Indexers are responsible for answering queries.")]),e._v(" An indexer plugin is not\nrequired to support the legacy query filter language, nor to be compatible\nwith the legacy RPC endpoints for accessing them.  Any APIs for clients to\nquery a custom index are the responsibility of the indexer, not the node.")])])]),e._v(" "),n("h3",{attrs:{id:"open-questions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#open-questions"}},[e._v("#")]),e._v(" Open Questions")]),e._v(" "),n("p",[e._v("Given the constraints outlined above, there are important design questions we\nmust answer to guide any specific changes:")]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("What is an acceptable probability that, given sufficiently extreme\noperational issues, an indexer might miss some number of events?")])]),e._v(" "),n("p",[e._v("There are two parts to this question: One is what constitutes an extreme\noperational problem, the other is how likely we are to miss some number of\nevents items.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("If the consensus is that no event item must ever be missed, no matter how\nbad the operational circumstances, then we "),n("em",[e._v("must")]),e._v(" accept that indexing can\nslow or halt consensus arbitrarily. It is impossible to guarantee complete\nindex coverage without potentially unbounded delays.")])]),e._v(" "),n("li",[n("p",[e._v("Otherwise, how much data can we afford to lose and how often? For example,\nif we can ensure no event item will be lost unless the indexer halts for\nat least five minutes, is that acceptable? What probabilities and time\nranges are reasonable for real production environments?")])])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("What level of operational overhead is acceptable to impose on node\noperators to support indexing?")])]),e._v(" "),n("p",[e._v("Are node operators willing to configure and run custom indexers as sidecar\ntype processes alongside a node? How much indexer setup above and beyond the\nwork of setting up the underlying node in isolation is tractable in\nproduction networks?")]),e._v(" "),n("p",[e._v('The answer to this question also informs the question of whether we should\nkeep an "in-process" indexing option, and to what extent that option needs\nto satisfy the suggested design principles.')]),e._v(" "),n("p",[e._v("Relatedly, to what extent do we need to be concerned about the cost of\nencoding and sending event items to an external process (e.g., as JSON blobs\nor protobuf wire messages)? Given that the node already encodes event items\nas JSON for subscription purposes, the overhead would be negligible for the\nnode itself, but the indexer would have to decode to process the results.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("What (if any) query APIs does the consensus node need to export,\nindependent of the indexer implementation?")])]),e._v(" "),n("p",[e._v('One typical example is whether the node should be able to answer queries\nlike "is this transaction ID in a block?" Currently, a node cannot answer\nthis query '),n("em",[e._v("unless")]),e._v(" it runs the built-in KV indexer. Does the node need to\ncontinue to support that query even for nodes that disable the KV indexer,\nor which use a custom indexer?")])])]),e._v(" "),n("h3",{attrs:{id:"informal-design-intent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#informal-design-intent"}},[e._v("#")]),e._v(" Informal Design Intent")]),e._v(" "),n("p",[e._v("The design principles described above implicate several components of the\nTendermint node, beyond just the indexer. In the context of "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-075-rpc-subscription.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 075"),n("OutboundLink")],1),e._v(",\nwe are re-working the RPC event subscription API to improve some of the UX\nissues discussed above for RPC clients. It is our expectation that a solution\nfor pluggable custom indexing will take advantage of some of the same work.")]),e._v(" "),n("p",[e._v("On that basis, the design approach I am considering for custom indexing looks\nsomething like this (subject to refinement):")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("A custom indexer runs as a separate process from the node.")])]),e._v(" "),n("li",[n("p",[e._v("The indexer subscribes to event items via the ADR 075 events API.")]),e._v(" "),n("p",[e._v("This means indexers would receive event payloads as JSON rather than\nprotobuf, but since we already have to support JSON encoding for the RPC\ninterface anyway, that should not increase complexity for the node.")])]),e._v(" "),n("li",[n("p",[e._v("The existing PostgreSQL indexer gets reworked to have this form, and no\nlonger built as part of the Tendermint core binary.")]),e._v(" "),n("p",[e._v("We can retain the code in the core repository as a proof-of-concept, or\nperhaps create a separate repository with contributed indexers and move it\nthere.")])]),e._v(" "),n("li",[n("p",[e._v("(Possibly) Deprecate and remove the legacy KV indexer, or disable it by\ndefault.  If we decide to remove it, we can also remove the legacy RPC\nendpoints for querying the KV indexer.")]),e._v(" "),n("p",[e._v("If we plan to do this, we should also investigate providing a way for\nclients to query whether a given transaction ID has landed in a block.  That\nserves a common need, and currently "),n("em",[e._v("only")]),e._v(" works if the KV indexer is\nenabled, but could be addressed more simply using the other data a node\nalready has stored, without having to answer more general queries.")])])]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-065-custom-event-indexing.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 065: Custom Event Indexing"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/docs/architecture/adr-075-rpc-subscription.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 075: RPC Event Subscription Interface"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://docs.tendermint.com/v0.34/rpc/#/Websocket/subscribe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event subscription RPC"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/internal/state/indexer/tx/kv",target:"_blank",rel:"noopener noreferrer"}},[e._v("KV transaction indexer"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/7135",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pluggable custom event indexing"),n("OutboundLink")],1),e._v(" (#7135)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/internal/state/indexer/sink/psql",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL event sink"),n("OutboundLink")],1),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL database"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint/internal/pubsub/query/syntax",target:"_blank",rel:"noopener noreferrer"}},[e._v("Query filter language"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1161",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stream events to postgres for indexing"),n("OutboundLink")],1),e._v(" (#1161)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/7247",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unbuffered event subscription slow down the consensus"),n("OutboundLink")],1),e._v(" (#7247)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint/internal/state/indexer#EventSink",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("EventSink")]),e._v(" interface"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tm-db#DB",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("tm-db")]),e._v(" library"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);