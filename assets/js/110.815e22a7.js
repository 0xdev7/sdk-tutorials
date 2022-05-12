(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{715:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cosmjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cosmjs"}},[e._v("#")]),e._v(" CosmJS")]),e._v(" "),s("HighlightBox",{attrs:{type:"prerequisite"}},[s("p",[e._v("CosmJS provides a TypeScript library for the Cosmos SDK. Reading the following sections as a preparation is recommended:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("Messages")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/academy/2-main-concepts/modules.html"}},[e._v("Modules")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/academy/2-main-concepts/queries.html"}},[e._v("Queries")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/academy/4-my-own-chain/ignitecli.html"}},[e._v("Ignite CLI")])],1)])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/cosmos/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("CosmJS"),s("OutboundLink")],1),e._v(" is a library created to talk to the Cosmos SDK. It is a "),s("a",{attrs:{href:"https://github.com/cosmos/cosmjs/wiki/What-can-CosmJS-do-for-me%3F",target:"_blank",rel:"noopener noreferrer"}},[e._v("powerful tool"),s("OutboundLink")],1),e._v(", which can be used to create wallets, explorers, IBC relayers, and other decentralized applications (dApps). It is written in TypeScript and can therefore be client or server side.")]),e._v(" "),s("h2",{attrs:{id:"your-chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#your-chain"}},[e._v("#")]),e._v(" Your chain")]),e._v(" "),s("p",[e._v("In the "),s("RouterLink",{attrs:{to:"/academy/4-my-own-chain/ignitecli.html"}},[e._v("checkers blockchain exercise")]),e._v(" you created a chain using Ignite CLI. Ignite CLI generated several components including a UI. Under the hood, this UI uses Vue.js and CosmJS to interact with the services exposed by the chain.")],1),e._v(" "),s("p",[e._v("You used Ignite CLI to create the definitions for "),s("code",[e._v("MsgCreatePost")]),e._v(" by running the command:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWVzc2FnZSBjcmVhdGVQb3N0IHRpdGxlIGJvZHkK"}}),e._v(" "),s("h2",{attrs:{id:"your-module-in-the-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#your-module-in-the-ui"}},[e._v("#")]),e._v(" Your module in the UI")]),e._v(" "),s("p",[e._v("Ignite CLI also created UI-side elements to facilitate integration, for example:")]),e._v(" "),s("CodeGroup",[s("CodeGroupItem",{attrs:{title:"vue/src/store/generated/alice/checkers/alice.checkers.checkers/module/index.ts",active:""}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"aW1wb3J0IHsgU3RkRmVlIH0gZnJvbSAmcXVvdDtAY29zbWpzL2xhdW5jaHBhZCZxdW90OzsKaW1wb3J0IHsgU2lnbmluZ1N0YXJnYXRlQ2xpZW50IH0gZnJvbSAmcXVvdDtAY29zbWpzL3N0YXJnYXRlJnF1b3Q7OwppbXBvcnQgeyBSZWdpc3RyeSwgT2ZmbGluZVNpZ25lciwgRW5jb2RlT2JqZWN0LCBEaXJlY3RTZWNwMjU2azFIZFdhbGxldCB9IGZyb20gJnF1b3Q7QGNvc21qcy9wcm90by1zaWduaW5nJnF1b3Q7OwppbXBvcnQgeyBBcGkgfSBmcm9tICZxdW90Oy4vcmVzdCZxdW90OzsKaW1wb3J0IHsgTXNnQ3JlYXRlUG9zdCB9IGZyb20gJnF1b3Q7Li90eXBlcy9jaGVja2Vycy90eCZxdW90OzsKCgpjb25zdCB0eXBlcyA9IFsKICBbJnF1b3Q7L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ0NyZWF0ZVBvc3QmcXVvdDssIE1zZ0NyZWF0ZVBvc3RdLAoKXTsKZXhwb3J0IGNvbnN0IE1pc3NpbmdXYWxsZXRFcnJvciA9IG5ldyBFcnJvcigmcXVvdDt3YWxsZXQgaXMgcmVxdWlyZWQmcXVvdDspOwoKY29uc3QgcmVnaXN0cnkgPSBuZXcgUmVnaXN0cnkoJmx0O2FueSZndDt0eXBlcyk7Cgpjb25zdCBkZWZhdWx0RmVlID0gewogIGFtb3VudDogW10sCiAgZ2FzOiAmcXVvdDsyMDAwMDAmcXVvdDssCn07CgppbnRlcmZhY2UgVHhDbGllbnRPcHRpb25zIHsKICBhZGRyOiBzdHJpbmcKfQoKaW50ZXJmYWNlIFNpZ25BbmRCcm9hZGNhc3RPcHRpb25zIHsKICBmZWU6IFN0ZEZlZSwKICBtZW1vPzogc3RyaW5nCn0KCmNvbnN0IHR4Q2xpZW50ID0gYXN5bmMgKHdhbGxldDogT2ZmbGluZVNpZ25lciwgeyBhZGRyOiBhZGRyIH06IFR4Q2xpZW50T3B0aW9ucyA9IHsgYWRkcjogJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoyNjY1NyZxdW90OyB9KSA9Jmd0OyB7CiAgaWYgKCF3YWxsZXQpIHRocm93IE1pc3NpbmdXYWxsZXRFcnJvcjsKCiAgY29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LmNvbm5lY3RXaXRoU2lnbmVyKGFkZHIsIHdhbGxldCwgeyByZWdpc3RyeSB9KTsKICBjb25zdCB7IGFkZHJlc3MgfSA9IChhd2FpdCB3YWxsZXQuZ2V0QWNjb3VudHMoKSlbMF07CgogIHJldHVybiB7CiAgICBzaWduQW5kQnJvYWRjYXN0OiAobXNnczogRW5jb2RlT2JqZWN0W10sIHsgZmVlLCBtZW1vIH06IFNpZ25BbmRCcm9hZGNhc3RPcHRpb25zID0ge2ZlZTogZGVmYXVsdEZlZSwgbWVtbzogJnF1b3Q7JnF1b3Q7fSkgPSZndDsgY2xpZW50LnNpZ25BbmRCcm9hZGNhc3QoYWRkcmVzcywgbXNncywgZmVlLG1lbW8pLAogICAgbXNnQ3JlYXRlUG9zdDogKGRhdGE6IE1zZ0NyZWF0ZVBvc3QpOiBFbmNvZGVPYmplY3QgPSZndDsgKHsgdHlwZVVybDogJnF1b3Q7L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ0NyZWF0ZVBvc3QmcXVvdDssIHZhbHVlOiBkYXRhIH0pLAoKICB9Owp9OwoKaW50ZXJmYWNlIFF1ZXJ5Q2xpZW50T3B0aW9ucyB7CiAgYWRkcjogc3RyaW5nCn0KCmNvbnN0IHF1ZXJ5Q2xpZW50ID0gYXN5bmMgKHsgYWRkcjogYWRkciB9OiBRdWVyeUNsaWVudE9wdGlvbnMgPSB7IGFkZHI6ICZxdW90O2h0dHA6Ly9sb2NhbGhvc3Q6MTMxNyZxdW90OyB9KSA9Jmd0OyB7CiAgcmV0dXJuIG5ldyBBcGkoeyBiYXNlVXJsOiBhZGRyIH0pOwp9OwoKZXhwb3J0IHsKICB0eENsaWVudCwKICBxdWVyeUNsaWVudCwKfTsK"}})],1),e._v(" "),s("CodeGroupItem",{attrs:{title:"index.js"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgU2lnbmluZ1N0YXJnYXRlQ2xpZW50IH0gZnJvbSAmcXVvdDtAY29zbWpzL3N0YXJnYXRlJnF1b3Q7OwppbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJnF1b3Q7QGNvc21qcy9wcm90by1zaWduaW5nJnF1b3Q7OwppbXBvcnQgeyBBcGkgfSBmcm9tICZxdW90Oy4vcmVzdCZxdW90OzsKaW1wb3J0IHsgTXNnQ3JlYXRlUG9zdCB9IGZyb20gJnF1b3Q7Li90eXBlcy9jaGVja2Vycy90eCZxdW90OzsKY29uc3QgdHlwZXMgPSBbCiAgICBbJnF1b3Q7L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ0NyZWF0ZVBvc3QmcXVvdDssIE1zZ0NyZWF0ZVBvc3RdLApdOwpleHBvcnQgY29uc3QgTWlzc2luZ1dhbGxldEVycm9yID0gbmV3IEVycm9yKCZxdW90O3dhbGxldCBpcyByZXF1aXJlZCZxdW90Oyk7CmNvbnN0IHJlZ2lzdHJ5ID0gbmV3IFJlZ2lzdHJ5KHR5cGVzKTsKY29uc3QgZGVmYXVsdEZlZSA9IHsKICAgIGFtb3VudDogW10sCiAgICBnYXM6ICZxdW90OzIwMDAwMCZxdW90OywKfTsKY29uc3QgdHhDbGllbnQgPSBhc3luYyAod2FsbGV0LCB7IGFkZHI6IGFkZHIgfSA9IHsgYWRkcjogJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoyNjY1NyZxdW90OyB9KSA9Jmd0OyB7CiAgICBpZiAoIXdhbGxldCkKICAgICAgICB0aHJvdyBNaXNzaW5nV2FsbGV0RXJyb3I7CiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBTaWduaW5nU3RhcmdhdGVDbGllbnQuY29ubmVjdFdpdGhTaWduZXIoYWRkciwgd2FsbGV0LCB7IHJlZ2lzdHJ5IH0pOwogICAgY29uc3QgeyBhZGRyZXNzIH0gPSAoYXdhaXQgd2FsbGV0LmdldEFjY291bnRzKCkpWzBdOwogICAgcmV0dXJuIHsKICAgICAgICBzaWduQW5kQnJvYWRjYXN0OiAobXNncywgeyBmZWUsIG1lbW8gfSA9IHsgZmVlOiBkZWZhdWx0RmVlLCBtZW1vOiAmcXVvdDsmcXVvdDsgfSkgPSZndDsgY2xpZW50LnNpZ25BbmRCcm9hZGNhc3QoYWRkcmVzcywgbXNncywgZmVlLCBtZW1vKSwKICAgICAgICBtc2dDcmVhdGVQb3N0OiAoZGF0YSkgPSZndDsgKHsgdHlwZVVybDogJnF1b3Q7L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ0NyZWF0ZVBvc3QmcXVvdDssIHZhbHVlOiBkYXRhIH0pLAogICAgfTsKfTsKY29uc3QgcXVlcnlDbGllbnQgPSBhc3luYyAoeyBhZGRyOiBhZGRyIH0gPSB7IGFkZHI6ICZxdW90O2h0dHA6Ly9sb2NhbGhvc3Q6MTMxNyZxdW90OyB9KSA9Jmd0OyB7CiAgICByZXR1cm4gbmV3IEFwaSh7IGJhc2VVcmw6IGFkZHIgfSk7Cn07CmV4cG9ydCB7IHR4Q2xpZW50LCBxdWVyeUNsaWVudCwgfTsK"}})],1)],1),e._v(" "),s("p",[e._v("In this file your module's client-side services are defined.")]),e._v(" "),s("p",[e._v("What does that code do?")]),e._v(" "),s("ol",[s("li",[e._v("It starts by importing "),s("code",[e._v("@cosmjs/stargate")]),e._v(", which is the client library for Cosmos SDK 0.40, and the following versions named Stargate.")]),e._v(" "),s("li",[e._v("Then it imports "),s("code",[e._v("@cosmjs/proto-signing")]),e._v(" which encapsulates knowledge on how to sign "),s("code",[e._v("Msg")]),e._v(" objects created with Protobuf. Lower down, it adds your "),s("code",[e._v("MsgCreatePost")]),e._v(" type to the registry in this case.")]),e._v(" "),s("li",[e._v("Mirroring your Go code, your message type "),s("code",[e._v("MsgCreatePost")]),e._v(" is defined in "),s("code",[e._v("[...]]alice.checkers.checkers/module/types/checkers/tx.js")]),e._v(" using "),s("a",{attrs:{href:"https://protobufjs.github.io/protobuf.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf.js"),s("OutboundLink")],1),e._v(". This is the TypeScript/​JavaScript counterpart of Protobuf in Go - that you saw earlier. With this both ends "),s("em",[e._v("speak the same serialization language")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("http://localhost:26657")]),e._v(" is the default Tendermint RPC node endpoint used to send transactions. And is indeed passed here only as a default value if it is missing.")]),e._v(" "),s("li",[s("code",[e._v("http://localhost:1317")]),e._v(" is the default high-level blockchain API endpoint. In the above code it is used for queries.")]),e._v(" "),s("li",[e._v("The created elements "),s("code",[e._v("txClient")]),e._v(" and "),s("code",[e._v("queryClient")]),e._v(" are returned to be used in "),s("code",[e._v("./vue/src/store/generated/alice/checkers/alice.checkers.checkers/index.js")]),e._v(" as you can see in the "),s("RouterLink",{attrs:{to:"/academy/4-my-own-chain/ignitecli.html"}},[e._v("previous Ignite CLI section")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"details-on-the-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#details-on-the-client"}},[e._v("#")]),e._v(" Details on the client")]),e._v(" "),s("p",[e._v("In the nested function above you can see that "),s("code",[e._v("@cosmjs/stargate")]),e._v(" is used for signing and broadcasting:")]),e._v(" "),s("CodeGroup",[s("CodeGroupItem",{attrs:{title:"index.ts",active:""}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LmNvbm5lY3RXaXRoU2lnbmVyKGFkZHIsIHdhbGxldCwgeyByZWdpc3RyeSB9KTsKY29uc3QgeyBhZGRyZXNzIH0gPSAoYXdhaXQgd2FsbGV0LmdldEFjY291bnRzKCkpWzBdOwpyZXR1cm4gewogIHNpZ25BbmRCcm9hZGNhc3Q6IChtc2dzOiBFbmNvZGVPYmplY3RbXSwgeyBmZWUsIG1lbW8gfTogU2lnbkFuZEJyb2FkY2FzdE9wdGlvbnMgPSB7ZmVlOiBkZWZhdWx0RmVlLCBtZW1vOiAmcXVvdDsmcXVvdDt9KSA9Jmd0OyBjbGllbnQuc2lnbkFuZEJyb2FkY2FzdChhZGRyZXNzLCBtc2dzLCBmZWUsbWVtbyksCiAgbXNnQ3JlYXRlUG9zdDogKGRhdGE6IE1zZ0NyZWF0ZVBvc3QpOiBFbmNvZGVPYmplY3QgPSZndDsgKHsgdHlwZVVybDogJnF1b3Q7L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ0NyZWF0ZVBvc3QmcXVvdDssIHZhbHVlOiBkYXRhIH0pLAp9Owo="}})],1),e._v(" "),s("CodeGroupItem",{attrs:{title:"index.js",active:""}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LmNvbm5lY3RXaXRoU2lnbmVyKGFkZHIsIHdhbGxldCwgeyByZWdpc3RyeSB9KTsKY29uc3QgeyBhZGRyZXNzIH0gPSAoYXdhaXQgd2FsbGV0LmdldEFjY291bnRzKCkpWzBdOwpyZXR1cm4gewogICAgc2lnbkFuZEJyb2FkY2FzdDogKG1zZ3MsIHsgZmVlLCBtZW1vIH0gPSB7IGZlZTogZGVmYXVsdEZlZSwgbWVtbzogJnF1b3Q7JnF1b3Q7IH0pID0mZ3Q7IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KGFkZHJlc3MsIG1zZ3MsIGZlZSwgbWVtbyksCiAgICBtc2dDcmVhdGVQb3N0OiAoZGF0YSkgPSZndDsgKHsgdHlwZVVybDogJnF1b3Q7L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ0NyZWF0ZVBvc3QmcXVvdDssIHZhbHVlOiBkYXRhIH0pLAp9Owo="}})],1)],1),e._v(" "),s("p",[e._v("The following is taking place:")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("SigningStargateClient.connectWithSigner")]),e._v(" is a way to connect with a wallet and obtain a signing client. The "),s("code",[e._v("addr")]),e._v(" is passed so that it can be used as part of the information prompted to the user when confirming if an external wallet is used.")]),e._v(" "),s("li",[e._v("An object with two functions is returned: "),s("code",[e._v("msgCreatePost")]),e._v(" and "),s("code",[e._v("signAndBroadcast")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("signAndBroadcast")]),e._v(" is called when the UI finishes creating the message and is about to sign and broadcast the message. If using an external wallet, the wallet prompts the user to confirm the signing.")])]),e._v(" "),s("p",[s("code",[e._v("@cosmjs/proto-signing")]),e._v(" provides "),s("code",[e._v("DirectSecp256k1HdWallet")]),e._v(" as a wallet. You cannot see it in the code above because it is wrapped through "),s("a",{attrs:{href:"https://github.com/tendermint/vue/blob/develop/packages/vuex/src/modules/common/wallet/wallet.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ignite CLI and Vue"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("If you want to use a specific mnemonic, for instance on a server, instead of importing an external wallet via the UI, you can do so with:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgbW5lbW9uaWMgPQogICZxdW90O2l2b3J5IHVuaWZvcm0gYWN0dWFsIHNwb3QgZmxvb3IgdmVzc2VsIG1vbnN0ZXIgcm9zZSB5ZWxsb3cgbm9pc2Ugc21pbGUgb2RvciB2ZXRlcmFuIGh1bWFuIHJlYXNvbiBtaXNzIHN0YWRpdW0gcGhyYXNlIGFzc2F1bHQgcHV6emxlIHNlbnRlbmNlIGFwcHJvdmUgY29yYWwgYXBvbG9neSZxdW90OzsKY29uc3Qgd2FsbGV0ID0gYXdhaXQgRGlyZWN0U2VjcDI1NmsxSGRXYWxsZXQuZnJvbU1uZW1vbmljKG1uZW1vbmljKTsK"}}),e._v(" "),s("p",[e._v("There are many other useful methods like "),s("code",[e._v("assertIsBroadcastTxSuccess")]),e._v(" that verifies whether the transaction was successful or not, as used in "),s("a",{attrs:{href:"https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9",target:"_blank",rel:"noopener noreferrer"}},[e._v("this sample snippet"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"next-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),s("p",[e._v("Ready for the "),s("RouterLink",{attrs:{to:"/academy/4-my-own-chain/cosmwasm.html"}},[e._v("final section")]),e._v(" of this course? Discover CosmWasm and multi-chain smart contracting.")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);