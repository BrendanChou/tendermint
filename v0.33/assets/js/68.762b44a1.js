(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{631:function(e,l,t){"use strict";t.r(l);var n=t(0),a=Object(n.a)({},(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"creating-a-built-in-application-in-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-built-in-application-in-go"}},[e._v("#")]),e._v(" Creating a built-in application in Go")]),e._v(" "),t("h2",{attrs:{id:"guide-assumptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guide-assumptions"}},[e._v("#")]),e._v(" Guide assumptions")]),e._v(" "),t("p",[e._v("This guide is designed for beginners who want to get started with a Tendermint\nCore application from scratch. It does not assume that you have any prior\nexperience with Tendermint Core.")]),e._v(" "),t("p",[e._v("Tendermint Core is Byzantine Fault Tolerant (BFT) middleware that takes a state\ntransition machine - written in any programming language - and securely\nreplicates it on many machines.")]),e._v(" "),t("p",[e._v("Although Tendermint Core is written in the Golang programming language, prior\nknowledge of it is not required for this guide. You can learn it as we go due\nto it's simplicity. However, you may want to go through "),t("a",{attrs:{href:"https://learnxinyminutes.com/docs/go/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn X in Y minutes\nWhere X=Go"),t("OutboundLink")],1),e._v(" first to familiarize\nyourself with the syntax.")]),e._v(" "),t("p",[e._v("By following along with this guide, you'll create a Tendermint Core project\ncalled kvstore, a (very) simple distributed BFT key-value store.")]),e._v(" "),t("h2",{attrs:{id:"built-in-app-vs-external-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#built-in-app-vs-external-app"}},[e._v("#")]),e._v(" Built-in app vs external app")]),e._v(" "),t("p",[e._v("Running your application inside the same process as Tendermint Core will give\nyou the best possible performance.")]),e._v(" "),t("p",[e._v("For other languages, your application have to communicate with Tendermint Core\nthrough a TCP, Unix domain socket or gRPC.")]),e._v(" "),t("h2",{attrs:{id:"_1-1-installing-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-installing-go"}},[e._v("#")]),e._v(" 1.1 Installing Go")]),e._v(" "),t("p",[e._v("Please refer to "),t("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official guide for installing\nGo"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Verify that you have the latest version of Go installed:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB2ZXJzaW9uCmdvIHZlcnNpb24gZ28xLjEzLjEgZGFyd2luL2FtZDY0Cg=="}}),e._v(" "),t("p",[e._v("Make sure you have "),t("code",[e._v("$GOPATH")]),e._v(" environment variable set:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBlY2hvICRHT1BBVEgKL1VzZXJzL21lbGVrZXMvZ28K"}}),e._v(" "),t("h2",{attrs:{id:"_1-2-creating-a-new-go-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-creating-a-new-go-project"}},[e._v("#")]),e._v(" 1.2 Creating a new Go project")]),e._v(" "),t("p",[e._v("We'll start by creating a new Go project.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBta2RpciBrdnN0b3JlCiQgY2Qga3ZzdG9yZQo="}}),e._v(" "),t("p",[e._v("Inside the example directory create a "),t("code",[e._v("main.go")]),e._v(" file with the following content:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7Zm10JnF1b3Q7CikKCmZ1bmMgbWFpbigpIHsKCWZtdC5QcmludGxuKCZxdW90O0hlbGxvLCBUZW5kZXJtaW50IENvcmUmcXVvdDspCn0K"}}),e._v(" "),t("p",[e._v('When run, this should print "Hello, Tendermint Core" to the standard output.')]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyBydW4gbWFpbi5nbwpIZWxsbywgVGVuZGVybWludCBDb3JlCg=="}}),e._v(" "),t("h2",{attrs:{id:"_1-3-writing-a-tendermint-core-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-writing-a-tendermint-core-application"}},[e._v("#")]),e._v(" 1.3 Writing a Tendermint Core application")]),e._v(" "),t("p",[e._v("Tendermint Core communicates with the application through the Application\nBlockChain Interface (ABCI). All message types are defined in the "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/abci/types/types.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf\nfile"),t("OutboundLink")],1),e._v(".\nThis allows Tendermint Core to run applications written in any programming\nlanguage.")]),e._v(" "),t("p",[e._v("Create a file called "),t("code",[e._v("app.go")]),e._v(" with the following content:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJYWJjaXR5cGVzICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvdHlwZXMmcXVvdDsKKQoKdHlwZSBLVlN0b3JlQXBwbGljYXRpb24gc3RydWN0IHt9Cgp2YXIgXyBhYmNpdHlwZXMuQXBwbGljYXRpb24gPSAoKktWU3RvcmVBcHBsaWNhdGlvbikobmlsKQoKZnVuYyBOZXdLVlN0b3JlQXBwbGljYXRpb24oKSAqS1ZTdG9yZUFwcGxpY2F0aW9uIHsKCXJldHVybiAmYW1wO0tWU3RvcmVBcHBsaWNhdGlvbnt9Cn0KCmZ1bmMgKEtWU3RvcmVBcHBsaWNhdGlvbikgSW5mbyhyZXEgYWJjaXR5cGVzLlJlcXVlc3RJbmZvKSBhYmNpdHlwZXMuUmVzcG9uc2VJbmZvIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VJbmZve30KfQoKZnVuYyAoS1ZTdG9yZUFwcGxpY2F0aW9uKSBTZXRPcHRpb24ocmVxIGFiY2l0eXBlcy5SZXF1ZXN0U2V0T3B0aW9uKSBhYmNpdHlwZXMuUmVzcG9uc2VTZXRPcHRpb24gewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZVNldE9wdGlvbnt9Cn0KCmZ1bmMgKEtWU3RvcmVBcHBsaWNhdGlvbikgRGVsaXZlclR4KHJlcSBhYmNpdHlwZXMuUmVxdWVzdERlbGl2ZXJUeCkgYWJjaXR5cGVzLlJlc3BvbnNlRGVsaXZlclR4IHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VEZWxpdmVyVHh7Q29kZTogMH0KfQoKZnVuYyAoS1ZTdG9yZUFwcGxpY2F0aW9uKSBDaGVja1R4KHJlcSBhYmNpdHlwZXMuUmVxdWVzdENoZWNrVHgpIGFiY2l0eXBlcy5SZXNwb25zZUNoZWNrVHggewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUNoZWNrVHh7Q29kZTogMH0KfQoKZnVuYyAoS1ZTdG9yZUFwcGxpY2F0aW9uKSBDb21taXQoKSBhYmNpdHlwZXMuUmVzcG9uc2VDb21taXQgewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdHt9Cn0KCmZ1bmMgKEtWU3RvcmVBcHBsaWNhdGlvbikgUXVlcnkocmVxIGFiY2l0eXBlcy5SZXF1ZXN0UXVlcnkpIGFiY2l0eXBlcy5SZXNwb25zZVF1ZXJ5IHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VRdWVyeXtDb2RlOiAwfQp9CgpmdW5jIChLVlN0b3JlQXBwbGljYXRpb24pIEluaXRDaGFpbihyZXEgYWJjaXR5cGVzLlJlcXVlc3RJbml0Q2hhaW4pIGFiY2l0eXBlcy5SZXNwb25zZUluaXRDaGFpbiB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlSW5pdENoYWlue30KfQoKZnVuYyAoS1ZTdG9yZUFwcGxpY2F0aW9uKSBCZWdpbkJsb2NrKHJlcSBhYmNpdHlwZXMuUmVxdWVzdEJlZ2luQmxvY2spIGFiY2l0eXBlcy5SZXNwb25zZUJlZ2luQmxvY2sgewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUJlZ2luQmxvY2t7fQp9CgpmdW5jIChLVlN0b3JlQXBwbGljYXRpb24pIEVuZEJsb2NrKHJlcSBhYmNpdHlwZXMuUmVxdWVzdEVuZEJsb2NrKSBhYmNpdHlwZXMuUmVzcG9uc2VFbmRCbG9jayB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlRW5kQmxvY2t7fQp9Cg=="}}),e._v(" "),t("p",[e._v("Now I will go through each method explaining when it's called and adding\nrequired business logic.")]),e._v(" "),t("h3",{attrs:{id:"_1-3-1-checktx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-checktx"}},[e._v("#")]),e._v(" 1.3.1 CheckTx")]),e._v(" "),t("p",[e._v("When a new transaction is added to the Tendermint Core, it will ask the\napplication to check it (validate the format, signatures, etc.).")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICZxdW90O2J5dGVzJnF1b3Q7CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgaXNWYWxpZCh0eCBbXWJ5dGUpIChjb2RlIHVpbnQzMikgewoJLy8gY2hlY2sgZm9ybWF0CglwYXJ0cyA6PSBieXRlcy5TcGxpdCh0eCwgW11ieXRlKCZxdW90Oz0mcXVvdDspKQoJaWYgbGVuKHBhcnRzKSAhPSAyIHsKCQlyZXR1cm4gMQoJfQoKCWtleSwgdmFsdWUgOj0gcGFydHNbMF0sIHBhcnRzWzFdCgoJLy8gY2hlY2sgaWYgdGhlIHNhbWUga2V5PXZhbHVlIGFscmVhZHkgZXhpc3RzCgllcnIgOj0gYXBwLmRiLlZpZXcoZnVuYyh0eG4gKmJhZGdlci5UeG4pIGVycm9yIHsKCQlpdGVtLCBlcnIgOj0gdHhuLkdldChrZXkpCgkJaWYgZXJyICE9IG5pbCAmYW1wOyZhbXA7IGVyciAhPSBiYWRnZXIuRXJyS2V5Tm90Rm91bmQgewoJCQlyZXR1cm4gZXJyCgkJfQoJCWlmIGVyciA9PSBuaWwgewoJCQlyZXR1cm4gaXRlbS5WYWx1ZShmdW5jKHZhbCBbXWJ5dGUpIGVycm9yIHsKCQkJCWlmIGJ5dGVzLkVxdWFsKHZhbCwgdmFsdWUpIHsKCQkJCQljb2RlID0gMgoJCQkJfQoJCQkJcmV0dXJuIG5pbAoJCQl9KQoJCX0KCQlyZXR1cm4gbmlsCgl9KQoJaWYgZXJyICE9IG5pbCB7CgkJcGFuaWMoZXJyKQoJfQoKCXJldHVybiBjb2RlCn0KCmZ1bmMgKGFwcCAqS1ZTdG9yZUFwcGxpY2F0aW9uKSBDaGVja1R4KHJlcSBhYmNpdHlwZXMuUmVxdWVzdENoZWNrVHgpIGFiY2l0eXBlcy5SZXNwb25zZUNoZWNrVHggewoJY29kZSA6PSBhcHAuaXNWYWxpZChyZXEuVHgpCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQ2hlY2tUeHtDb2RlOiBjb2RlLCBHYXNXYW50ZWQ6IDF9Cn0K"}}),e._v(" "),t("p",[e._v("Don't worry if this does not compile yet.")]),e._v(" "),t("p",[e._v("If the transaction does not have a form of "),t("code",[e._v("{bytes}={bytes}")]),e._v(", we return "),t("code",[e._v("1")]),e._v("\ncode. When the same key=value already exist (same key and value), we return "),t("code",[e._v("2")]),e._v("\ncode. For others, we return a zero code indicating that they are valid.")]),e._v(" "),t("p",[e._v("Note that anything with non-zero code will be considered invalid ("),t("code",[e._v("-1")]),e._v(", "),t("code",[e._v("100")]),e._v(",\netc.) by Tendermint Core.")]),e._v(" "),t("p",[e._v("Valid transactions will eventually be committed given they are not too big and\nhave enough gas. To learn more about gas, check out "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.33.x/spec/abci/apps.html#gas",target:"_blank",rel:"noopener noreferrer"}},[e._v('"the\nspecification"'),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("For the underlying key-value store we'll use\n"),t("a",{attrs:{href:"https://github.com/dgraph-io/badger",target:"_blank",rel:"noopener noreferrer"}},[e._v("badger"),t("OutboundLink")],1),e._v(", which is an embeddable,\npersistent and fast key-value (KV) database.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICZxdW90O2dpdGh1Yi5jb20vZGdyYXBoLWlvL2JhZGdlciZxdW90OwoKdHlwZSBLVlN0b3JlQXBwbGljYXRpb24gc3RydWN0IHsKCWRiICAgICAgICAgICAqYmFkZ2VyLkRCCgljdXJyZW50QmF0Y2ggKmJhZGdlci5UeG4KfQoKZnVuYyBOZXdLVlN0b3JlQXBwbGljYXRpb24oZGIgKmJhZGdlci5EQikgKktWU3RvcmVBcHBsaWNhdGlvbiB7CglyZXR1cm4gJmFtcDtLVlN0b3JlQXBwbGljYXRpb257CgkJZGI6IGRiLAoJfQp9Cg=="}}),e._v(" "),t("h3",{attrs:{id:"_1-3-2-beginblock-delivertx-endblock-commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-beginblock-delivertx-endblock-commit"}},[e._v("#")]),e._v(" 1.3.2 BeginBlock -> DeliverTx -> EndBlock -> Commit")]),e._v(" "),t("p",[e._v("When Tendermint Core has decided on the block, it's transfered to the\napplication in 3 parts: "),t("code",[e._v("BeginBlock")]),e._v(", one "),t("code",[e._v("DeliverTx")]),e._v(" per transaction and\n"),t("code",[e._v("EndBlock")]),e._v(" in the end. DeliverTx are being transfered asynchronously, but the\nresponses are expected to come in order.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEJlZ2luQmxvY2socmVxIGFiY2l0eXBlcy5SZXF1ZXN0QmVnaW5CbG9jaykgYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9jayB7CglhcHAuY3VycmVudEJhdGNoID0gYXBwLmRiLk5ld1RyYW5zYWN0aW9uKHRydWUpCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9ja3t9Cn0KCg=="}}),e._v(" "),t("p",[e._v("Here we create a batch, which will store block's transactions.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIERlbGl2ZXJUeChyZXEgYWJjaXR5cGVzLlJlcXVlc3REZWxpdmVyVHgpIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeCB7Cgljb2RlIDo9IGFwcC5pc1ZhbGlkKHJlcS5UeCkKCWlmIGNvZGUgIT0gMCB7CgkJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeHtDb2RlOiBjb2RlfQoJfQoKCXBhcnRzIDo9IGJ5dGVzLlNwbGl0KHJlcS5UeCwgW11ieXRlKCZxdW90Oz0mcXVvdDspKQoJa2V5LCB2YWx1ZSA6PSBwYXJ0c1swXSwgcGFydHNbMV0KCgllcnIgOj0gYXBwLmN1cnJlbnRCYXRjaC5TZXQoa2V5LCB2YWx1ZSkKCWlmIGVyciAhPSBuaWwgewoJCXBhbmljKGVycikKCX0KCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlRGVsaXZlclR4e0NvZGU6IDB9Cn0K"}}),e._v(" "),t("p",[e._v("If the transaction is badly formatted or the same key=value already exist, we\nagain return the non-zero code. Otherwise, we add it to the current batch.")]),e._v(" "),t("p",[e._v("In the current design, a block can include incorrect transactions (those who\npassed CheckTx, but failed DeliverTx or transactions included by the proposer\ndirectly). This is done for performance reasons.")]),e._v(" "),t("p",[e._v("Note we can't commit transactions inside the "),t("code",[e._v("DeliverTx")]),e._v(" because in such case\n"),t("code",[e._v("Query")]),e._v(", which may be called in parallel, will return inconsistent data (i.e.\nit will report that some value already exist even when the actual block was not\nyet committed).")]),e._v(" "),t("p",[t("code",[e._v("Commit")]),e._v(" instructs the application to persist the new state.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENvbW1pdCgpIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdCB7CglhcHAuY3VycmVudEJhdGNoLkNvbW1pdCgpCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQ29tbWl0e0RhdGE6IFtdYnl0ZXt9fQp9Cg=="}}),e._v(" "),t("h3",{attrs:{id:"_1-3-3-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-query"}},[e._v("#")]),e._v(" 1.3.3 Query")]),e._v(" "),t("p",[e._v("Now, when the client wants to know whenever a particular key/value exist, it\nwill call Tendermint Core RPC "),t("code",[e._v("/abci_query")]),e._v(" endpoint, which in turn will call\nthe application's "),t("code",[e._v("Query")]),e._v(" method.")]),e._v(" "),t("p",[e._v("Applications are free to provide their own APIs. But by using Tendermint Core\nas a proxy, clients (including "),t("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/lite2",target:"_blank",rel:"noopener noreferrer"}},[e._v("light client\npackage"),t("OutboundLink")],1),e._v(") can leverage\nthe unified API across different applications. Plus they won't have to call the\notherwise separate Tendermint Core API for additional proofs.")]),e._v(" "),t("p",[e._v("Note we don't include a proof here.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIFF1ZXJ5KHJlcVF1ZXJ5IGFiY2l0eXBlcy5SZXF1ZXN0UXVlcnkpIChyZXNRdWVyeSBhYmNpdHlwZXMuUmVzcG9uc2VRdWVyeSkgewoJcmVzUXVlcnkuS2V5ID0gcmVxUXVlcnkuRGF0YQoJZXJyIDo9IGFwcC5kYi5WaWV3KGZ1bmModHhuICpiYWRnZXIuVHhuKSBlcnJvciB7CgkJaXRlbSwgZXJyIDo9IHR4bi5HZXQocmVxUXVlcnkuRGF0YSkKCQlpZiBlcnIgIT0gbmlsICZhbXA7JmFtcDsgZXJyICE9IGJhZGdlci5FcnJLZXlOb3RGb3VuZCB7CgkJCXJldHVybiBlcnIKCQl9CgkJaWYgZXJyID09IGJhZGdlci5FcnJLZXlOb3RGb3VuZCB7CgkJCXJlc1F1ZXJ5LkxvZyA9ICZxdW90O2RvZXMgbm90IGV4aXN0JnF1b3Q7CgkJfSBlbHNlIHsKCQkJcmV0dXJuIGl0ZW0uVmFsdWUoZnVuYyh2YWwgW11ieXRlKSBlcnJvciB7CgkJCQlyZXNRdWVyeS5Mb2cgPSAmcXVvdDtleGlzdHMmcXVvdDsKCQkJCXJlc1F1ZXJ5LlZhbHVlID0gdmFsCgkJCQlyZXR1cm4gbmlsCgkJCX0pCgkJfQoJCXJldHVybiBuaWwKCX0pCglpZiBlcnIgIT0gbmlsIHsKCQlwYW5pYyhlcnIpCgl9CglyZXR1cm4KfQo="}}),e._v(" "),t("p",[e._v("The complete specification can be found\n"),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/v0.33.x/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"_1-4-starting-an-application-and-a-tendermint-core-instance-in-the-same-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-starting-an-application-and-a-tendermint-core-instance-in-the-same-process"}},[e._v("#")]),e._v(" 1.4 Starting an application and a Tendermint Core instance in the same process")]),e._v(" "),t("p",[e._v('Put the following code into the "main.go" file:')]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7ZmxhZyZxdW90OwoJJnF1b3Q7Zm10JnF1b3Q7CgkmcXVvdDtvcyZxdW90OwoJJnF1b3Q7b3Mvc2lnbmFsJnF1b3Q7CgkmcXVvdDtwYXRoL2ZpbGVwYXRoJnF1b3Q7CgkmcXVvdDtzeXNjYWxsJnF1b3Q7CgoJJnF1b3Q7Z2l0aHViLmNvbS9kZ3JhcGgtaW8vYmFkZ2VyJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3BrZy9lcnJvcnMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vc3BmMTMvdmlwZXImcXVvdDsKCglhYmNpICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvdHlwZXMmcXVvdDsKCWNmZyAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9jb25maWcmcXVvdDsKCXRtZmxhZ3MgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9jbGkvZmxhZ3MmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvbG9nJnF1b3Q7CglubSAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9ub2RlJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9wMnAmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L3ByaXZ2YWwmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L3Byb3h5JnF1b3Q7CikKCnZhciBjb25maWdGaWxlIHN0cmluZwoKZnVuYyBpbml0KCkgewoJZmxhZy5TdHJpbmdWYXIoJmFtcDtjb25maWdGaWxlLCAmcXVvdDtjb25maWcmcXVvdDssICZxdW90OyRIT01FLy50ZW5kZXJtaW50L2NvbmZpZy9jb25maWcudG9tbCZxdW90OywgJnF1b3Q7UGF0aCB0byBjb25maWcudG9tbCZxdW90OykKfQoKZnVuYyBtYWluKCkgewoJZGIsIGVyciA6PSBiYWRnZXIuT3BlbihiYWRnZXIuRGVmYXVsdE9wdGlvbnMoJnF1b3Q7L3RtcC9iYWRnZXImcXVvdDspKQoJaWYgZXJyICE9IG5pbCB7CgkJZm10LkZwcmludGYob3MuU3RkZXJyLCAmcXVvdDtmYWlsZWQgdG8gb3BlbiBiYWRnZXIgZGI6ICV2JnF1b3Q7LCBlcnIpCgkJb3MuRXhpdCgxKQoJfQoJZGVmZXIgZGIuQ2xvc2UoKQoJYXBwIDo9IE5ld0tWU3RvcmVBcHBsaWNhdGlvbihkYikKCglmbGFnLlBhcnNlKCkKCglub2RlLCBlcnIgOj0gbmV3VGVuZGVybWludChhcHAsIGNvbmZpZ0ZpbGUpCglpZiBlcnIgIT0gbmlsIHsKCQlmbXQuRnByaW50Zihvcy5TdGRlcnIsICZxdW90OyV2JnF1b3Q7LCBlcnIpCgkJb3MuRXhpdCgyKQoJfQoKCW5vZGUuU3RhcnQoKQoJZGVmZXIgZnVuYygpIHsKCQlub2RlLlN0b3AoKQoJCW5vZGUuV2FpdCgpCgl9KCkKCgljIDo9IG1ha2UoY2hhbiBvcy5TaWduYWwsIDEpCglzaWduYWwuTm90aWZ5KGMsIG9zLkludGVycnVwdCwgc3lzY2FsbC5TSUdURVJNKQoJJmx0Oy1jCglvcy5FeGl0KDApCn0KCmZ1bmMgbmV3VGVuZGVybWludChhcHAgYWJjaS5BcHBsaWNhdGlvbiwgY29uZmlnRmlsZSBzdHJpbmcpICgqbm0uTm9kZSwgZXJyb3IpIHsKCS8vIHJlYWQgY29uZmlnCgljb25maWcgOj0gY2ZnLkRlZmF1bHRDb25maWcoKQoJY29uZmlnLlJvb3REaXIgPSBmaWxlcGF0aC5EaXIoZmlsZXBhdGguRGlyKGNvbmZpZ0ZpbGUpKQoJdmlwZXIuU2V0Q29uZmlnRmlsZShjb25maWdGaWxlKQoJaWYgZXJyIDo9IHZpcGVyLlJlYWRJbkNvbmZpZygpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBlcnJvcnMuV3JhcChlcnIsICZxdW90O3ZpcGVyIGZhaWxlZCB0byByZWFkIGNvbmZpZyBmaWxlJnF1b3Q7KQoJfQoJaWYgZXJyIDo9IHZpcGVyLlVubWFyc2hhbChjb25maWcpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBlcnJvcnMuV3JhcChlcnIsICZxdW90O3ZpcGVyIGZhaWxlZCB0byB1bm1hcnNoYWwgY29uZmlnJnF1b3Q7KQoJfQoJaWYgZXJyIDo9IGNvbmZpZy5WYWxpZGF0ZUJhc2ljKCk7IGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycm9ycy5XcmFwKGVyciwgJnF1b3Q7Y29uZmlnIGlzIGludmFsaWQmcXVvdDspCgl9CgoJLy8gY3JlYXRlIGxvZ2dlcgoJbG9nZ2VyIDo9IGxvZy5OZXdUTUxvZ2dlcihsb2cuTmV3U3luY1dyaXRlcihvcy5TdGRvdXQpKQoJdmFyIGVyciBlcnJvcgoJbG9nZ2VyLCBlcnIgPSB0bWZsYWdzLlBhcnNlTG9nTGV2ZWwoY29uZmlnLkxvZ0xldmVsLCBsb2dnZXIsIGNmZy5EZWZhdWx0TG9nTGV2ZWwoKSkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycm9ycy5XcmFwKGVyciwgJnF1b3Q7ZmFpbGVkIHRvIHBhcnNlIGxvZyBsZXZlbCZxdW90OykKCX0KCgkvLyByZWFkIHByaXZhdGUgdmFsaWRhdG9yCglwdiA6PSBwcml2dmFsLkxvYWRGaWxlUFYoCgkJY29uZmlnLlByaXZWYWxpZGF0b3JLZXlGaWxlKCksCgkJY29uZmlnLlByaXZWYWxpZGF0b3JTdGF0ZUZpbGUoKSwKCSkKCgkvLyByZWFkIG5vZGUga2V5Cglub2RlS2V5LCBlcnIgOj0gcDJwLkxvYWROb2RlS2V5KGNvbmZpZy5Ob2RlS2V5RmlsZSgpKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyb3JzLldyYXAoZXJyLCAmcXVvdDtmYWlsZWQgdG8gbG9hZCBub2RlJ3Mga2V5JnF1b3Q7KQoJfQoKCS8vIGNyZWF0ZSBub2RlCglub2RlLCBlcnIgOj0gbm0uTmV3Tm9kZSgKCQljb25maWcsCgkJcHYsCgkJbm9kZUtleSwKCQlwcm94eS5OZXdMb2NhbENsaWVudENyZWF0b3IoYXBwKSwKCQlubS5EZWZhdWx0R2VuZXNpc0RvY1Byb3ZpZGVyRnVuYyhjb25maWcpLAoJCW5tLkRlZmF1bHREQlByb3ZpZGVyLAoJCW5tLkRlZmF1bHRNZXRyaWNzUHJvdmlkZXIoY29uZmlnLkluc3RydW1lbnRhdGlvbiksCgkJbG9nZ2VyKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyb3JzLldyYXAoZXJyLCAmcXVvdDtmYWlsZWQgdG8gY3JlYXRlIG5ldyBUZW5kZXJtaW50IG5vZGUmcXVvdDspCgl9CgoJcmV0dXJuIG5vZGUsIG5pbAp9Cg=="}}),e._v(" "),t("p",[e._v("This is a huge blob of code, so let's break it down into pieces.")]),e._v(" "),t("p",[e._v("First, we initialize the Badger database and create an app instance:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZGIsIGVyciA6PSBiYWRnZXIuT3BlbihiYWRnZXIuRGVmYXVsdE9wdGlvbnMoJnF1b3Q7L3RtcC9iYWRnZXImcXVvdDspKQppZiBlcnIgIT0gbmlsIHsKCWZtdC5GcHJpbnRmKG9zLlN0ZGVyciwgJnF1b3Q7ZmFpbGVkIHRvIG9wZW4gYmFkZ2VyIGRiOiAldiZxdW90OywgZXJyKQoJb3MuRXhpdCgxKQp9CmRlZmVyIGRiLkNsb3NlKCkKYXBwIDo9IE5ld0tWU3RvcmVBcHBsaWNhdGlvbihkYikK"}}),e._v(" "),t("p",[e._v("For "),t("strong",[e._v("Windows")]),e._v(" users, restarting this app will make badger throw an error as it requires value log to be truncated. For more information on this, visit "),t("a",{attrs:{href:"https://github.com/dgraph-io/badger/issues/744",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".\nThis can be avoided by setting the truncate option to true, like this:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZGIsIGVyciA6PSBiYWRnZXIuT3BlbihiYWRnZXIuRGVmYXVsdE9wdGlvbnMoJnF1b3Q7L3RtcC9iYWRnZXImcXVvdDspLldpdGhUcnVuY2F0ZSh0cnVlKSkK"}}),e._v(" "),t("p",[e._v("Then we use it to create a Tendermint Core "),t("code",[e._v("Node")]),e._v(" instance:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZmxhZy5QYXJzZSgpCgpub2RlLCBlcnIgOj0gbmV3VGVuZGVybWludChhcHAsIGNvbmZpZ0ZpbGUpCmlmIGVyciAhPSBuaWwgewoJZm10LkZwcmludGYob3MuU3RkZXJyLCAmcXVvdDsldiZxdW90OywgZXJyKQoJb3MuRXhpdCgyKQp9CgouLi4KCi8vIGNyZWF0ZSBub2RlCm5vZGUsIGVyciA6PSBubS5OZXdOb2RlKAoJY29uZmlnLAoJcHYsCglub2RlS2V5LAoJcHJveHkuTmV3TG9jYWxDbGllbnRDcmVhdG9yKGFwcCksCglubS5EZWZhdWx0R2VuZXNpc0RvY1Byb3ZpZGVyRnVuYyhjb25maWcpLAoJbm0uRGVmYXVsdERCUHJvdmlkZXIsCglubS5EZWZhdWx0TWV0cmljc1Byb3ZpZGVyKGNvbmZpZy5JbnN0cnVtZW50YXRpb24pLAoJbG9nZ2VyKQppZiBlcnIgIT0gbmlsIHsKCXJldHVybiBuaWwsIGVycm9ycy5XcmFwKGVyciwgJnF1b3Q7ZmFpbGVkIHRvIGNyZWF0ZSBuZXcgVGVuZGVybWludCBub2RlJnF1b3Q7KQp9Cg=="}}),e._v(" "),t("p",[t("code",[e._v("NewNode")]),e._v(" requires a few things including a configuration file, a private\nvalidator, a node key and a few others in order to construct the full node.")]),e._v(" "),t("p",[e._v("Note we use "),t("code",[e._v("proxy.NewLocalClientCreator")]),e._v(" here to create a local client instead\nof one communicating through a socket or gRPC.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/spf13/viper",target:"_blank",rel:"noopener noreferrer"}},[e._v("viper"),t("OutboundLink")],1),e._v(" is being used for reading the config,\nwhich we will generate later using the "),t("code",[e._v("tendermint init")]),e._v(" command.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uZmlnIDo9IGNmZy5EZWZhdWx0Q29uZmlnKCkKY29uZmlnLlJvb3REaXIgPSBmaWxlcGF0aC5EaXIoZmlsZXBhdGguRGlyKGNvbmZpZ0ZpbGUpKQp2aXBlci5TZXRDb25maWdGaWxlKGNvbmZpZ0ZpbGUpCmlmIGVyciA6PSB2aXBlci5SZWFkSW5Db25maWcoKTsgZXJyICE9IG5pbCB7CglyZXR1cm4gbmlsLCBlcnJvcnMuV3JhcChlcnIsICZxdW90O3ZpcGVyIGZhaWxlZCB0byByZWFkIGNvbmZpZyBmaWxlJnF1b3Q7KQp9CmlmIGVyciA6PSB2aXBlci5Vbm1hcnNoYWwoY29uZmlnKTsgZXJyICE9IG5pbCB7CglyZXR1cm4gbmlsLCBlcnJvcnMuV3JhcChlcnIsICZxdW90O3ZpcGVyIGZhaWxlZCB0byB1bm1hcnNoYWwgY29uZmlnJnF1b3Q7KQp9CmlmIGVyciA6PSBjb25maWcuVmFsaWRhdGVCYXNpYygpOyBlcnIgIT0gbmlsIHsKCXJldHVybiBuaWwsIGVycm9ycy5XcmFwKGVyciwgJnF1b3Q7Y29uZmlnIGlzIGludmFsaWQmcXVvdDspCn0K"}}),e._v(" "),t("p",[e._v("We use "),t("code",[e._v("FilePV")]),e._v(", which is a private validator (i.e. thing which signs consensus\nmessages). Normally, you would use "),t("code",[e._v("SignerRemote")]),e._v(" to connect to an external\n"),t("a",{attrs:{href:"https://kb.certus.one/hsm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HSM"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cHYgOj0gcHJpdnZhbC5Mb2FkRmlsZVBWKAoJY29uZmlnLlByaXZWYWxpZGF0b3JLZXlGaWxlKCksCgljb25maWcuUHJpdlZhbGlkYXRvclN0YXRlRmlsZSgpLAopCgo="}}),e._v(" "),t("p",[t("code",[e._v("nodeKey")]),e._v(" is needed to identify the node in a p2p network.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bm9kZUtleSwgZXJyIDo9IHAycC5Mb2FkTm9kZUtleShjb25maWcuTm9kZUtleUZpbGUoKSkKaWYgZXJyICE9IG5pbCB7CglyZXR1cm4gbmlsLCBlcnJvcnMuV3JhcChlcnIsICZxdW90O2ZhaWxlZCB0byBsb2FkIG5vZGUncyBrZXkmcXVvdDspCn0K"}}),e._v(" "),t("p",[e._v("As for the logger, we use the build-in library, which provides a nice\nabstraction over "),t("a",{attrs:{href:"https://github.com/go-kit/kit/tree/master/log",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-kit's\nlogger"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bG9nZ2VyIDo9IGxvZy5OZXdUTUxvZ2dlcihsb2cuTmV3U3luY1dyaXRlcihvcy5TdGRvdXQpKQp2YXIgZXJyIGVycm9yCmxvZ2dlciwgZXJyID0gdG1mbGFncy5QYXJzZUxvZ0xldmVsKGNvbmZpZy5Mb2dMZXZlbCwgbG9nZ2VyLCBjZmcuRGVmYXVsdExvZ0xldmVsKCkpCmlmIGVyciAhPSBuaWwgewoJcmV0dXJuIG5pbCwgZXJyb3JzLldyYXAoZXJyLCAmcXVvdDtmYWlsZWQgdG8gcGFyc2UgbG9nIGxldmVsJnF1b3Q7KQp9Cg=="}}),e._v(" "),t("p",[e._v("Finally, we start the node and add some signal handling to gracefully stop it\nupon receiving SIGTERM or Ctrl-C.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bm9kZS5TdGFydCgpCmRlZmVyIGZ1bmMoKSB7Cglub2RlLlN0b3AoKQoJbm9kZS5XYWl0KCkKfSgpCgpjIDo9IG1ha2UoY2hhbiBvcy5TaWduYWwsIDEpCnNpZ25hbC5Ob3RpZnkoYywgb3MuSW50ZXJydXB0LCBzeXNjYWxsLlNJR1RFUk0pCiZsdDstYwpvcy5FeGl0KDApCg=="}}),e._v(" "),t("h2",{attrs:{id:"_1-5-getting-up-and-running"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-getting-up-and-running"}},[e._v("#")]),e._v(" 1.5 Getting Up and Running")]),e._v(" "),t("p",[e._v("We are going to use "),t("a",{attrs:{href:"https://github.com/golang/go/wiki/Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go modules"),t("OutboundLink")],1),e._v(" for\ndependency management.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyBtb2QgaW5pdCBnaXRodWIuY29tL21lL2V4YW1wbGUKJCBnbyBidWlsZAo="}}),e._v(" "),t("p",[e._v("This should build the binary.")]),e._v(" "),t("p",[e._v("To create a default configuration, nodeKey and private validator files, let's\nexecute "),t("code",[e._v("tendermint init")]),e._v(". But before we do that, we will need to install\nTendermint Core. Please refer to "),t("a",{attrs:{href:"https://docs.tendermint.com/v0.33/introduction/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official\nguide"),t("OutboundLink")],1),e._v(". If you're\ninstalling from source, don't forget to checkout the latest release ("),t("code",[e._v("git checkout vX.Y.Z")]),e._v(").")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBybSAtcmYgL3RtcC9leGFtcGxlCiQgVE1IT01FPSZxdW90Oy90bXAvZXhhbXBsZSZxdW90OyB0ZW5kZXJtaW50IGluaXQKCklbMjAxOS0wNy0xNnwxODo0MDozNi40ODBdIEdlbmVyYXRlZCBwcml2YXRlIHZhbGlkYXRvciAgICAgICAgICAgICAgICAgIG1vZHVsZT1tYWluIGtleUZpbGU9L3RtcC9leGFtcGxlL2NvbmZpZy9wcml2X3ZhbGlkYXRvcl9rZXkuanNvbiBzdGF0ZUZpbGU9L3RtcC9leGFtcGxlMi9kYXRhL3ByaXZfdmFsaWRhdG9yX3N0YXRlLmpzb24KSVsyMDE5LTA3LTE2fDE4OjQwOjM2LjQ4MV0gR2VuZXJhdGVkIG5vZGUga2V5ICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4gcGF0aD0vdG1wL2V4YW1wbGUvY29uZmlnL25vZGVfa2V5Lmpzb24KSVsyMDE5LTA3LTE2fDE4OjQwOjM2LjQ4Ml0gR2VuZXJhdGVkIGdlbmVzaXMgZmlsZSAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4gcGF0aD0vdG1wL2V4YW1wbGUvY29uZmlnL2dlbmVzaXMuanNvbgo="}}),e._v(" "),t("p",[e._v("We are ready to start our application:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCAuL2V4YW1wbGUgLWNvbmZpZyAmcXVvdDsvdG1wL2V4YW1wbGUvY29uZmlnL2NvbmZpZy50b21sJnF1b3Q7CgpiYWRnZXIgMjAxOS8wNy8xNiAxODo0MjoyNSBJTkZPOiBBbGwgMCB0YWJsZXMgb3BlbmVkIGluIDBzCmJhZGdlciAyMDE5LzA3LzE2IDE4OjQyOjI1IElORk86IFJlcGxheWluZyBmaWxlIGlkOiAwIGF0IG9mZnNldDogMApiYWRnZXIgMjAxOS8wNy8xNiAxODo0MjoyNSBJTkZPOiBSZXBsYXkgdG9vazogNjk1LjIyN3MKRVsyMDE5LTA3LTE2fDE4OjQyOjI1LjgxOF0gQ291bGRuJ3QgY29ubmVjdCB0byBhbnkgc2VlZHMgICAgICAgICAgICAgICAgbW9kdWxlPXAycApJWzIwMTktMDctMTZ8MTg6NDI6MjYuODUzXSBFeGVjdXRlZCBibG9jayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTEgdmFsaWRUeHM9MCBpbnZhbGlkVHhzPTAKSVsyMDE5LTA3LTE2fDE4OjQyOjI2Ljg2NV0gQ29tbWl0dGVkIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD0xIHR4cz0wIGFwcEhhc2g9Cg=="}}),e._v(" "),t("p",[e._v("Now open another tab in your terminal and try sending a transaction:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIC1zICdsb2NhbGhvc3Q6MjY2NTcvYnJvYWRjYXN0X3R4X2NvbW1pdD90eD0mcXVvdDt0ZW5kZXJtaW50PXJvY2tzJnF1b3Q7Jwp7CiAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICZxdW90O2lkJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgJnF1b3Q7cmVzdWx0JnF1b3Q7OiB7CiAgICAmcXVvdDtjaGVja190eCZxdW90OzogewogICAgICAmcXVvdDtnYXNXYW50ZWQmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgIH0sCiAgICAmcXVvdDtkZWxpdmVyX3R4JnF1b3Q7OiB7fSwKICAgICZxdW90O2hhc2gmcXVvdDs6ICZxdW90OzFCM0M1QTEwOTNEQjk1MkMzMzFCMTc0OUEyMURDQ0JCMEY2QzdGNEUwMDU1Q0QwNEQxNjM0NjQ3MkZDNjBFQzYmcXVvdDssCiAgICAmcXVvdDtoZWlnaHQmcXVvdDs6ICZxdW90OzEyOCZxdW90OwogIH0KfQo="}}),e._v(" "),t("p",[e._v("Response should contain the height where this transaction was committed.")]),e._v(" "),t("p",[e._v("Now let's check if the given key now exists and its value:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"JCBjdXJsIC1zICdsb2NhbGhvc3Q6MjY2NTcvYWJjaV9xdWVyeT9kYXRhPSZxdW90O3RlbmRlcm1pbnQmcXVvdDsnCnsKICAmcXVvdDtqc29ucnBjJnF1b3Q7OiAmcXVvdDsyLjAmcXVvdDssCiAgJnF1b3Q7aWQmcXVvdDs6ICZxdW90OyZxdW90OywKICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICZxdW90O3Jlc3BvbnNlJnF1b3Q7OiB7CiAgICAgICZxdW90O2xvZyZxdW90OzogJnF1b3Q7ZXhpc3RzJnF1b3Q7LAogICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2RHVnVaR1Z5YldsdWRBPT0mcXVvdDssCiAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDtjbTlqYTNNPSZxdW90OwogICAgfQogIH0KfQo="}}),e._v(" "),t("p",[e._v('"dGVuZGVybWludA==" and "cm9ja3M=" are the base64-encoding of the ASCII of\n"tendermint" and "rocks" accordingly.')]),e._v(" "),t("h2",{attrs:{id:"outro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outro"}},[e._v("#")]),e._v(" Outro")]),e._v(" "),t("p",[e._v("I hope everything went smoothly and your first, but hopefully not the last,\nTendermint Core application is up and running. If not, please "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on\nGithub"),t("OutboundLink")],1),e._v(". To dig\ndeeper, read "),t("a",{attrs:{href:"https://docs.tendermint.com/v0.33/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the docs"),t("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);l.default=a.exports}}]);