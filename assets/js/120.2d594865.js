(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{618:function(e,s,a){"use strict";a.r(s);var t=a(0),o=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[e._v("Messages are a great place to start when building a module because they define the actions that your application can make. Think of all the scenarios where a user would be able to update the state of the application in any way. These should be boiled down into basic interactions, similar to "),a("strong",[e._v("CRUD")]),e._v(" (Create, Read, Update, Delete).")]),e._v(" "),a("p",[e._v("The Scavenge module will have 3 messages:")]),e._v(" "),a("ul",[a("li",[e._v("Submit scavenge")]),e._v(" "),a("li",[e._v("Commit solution")]),e._v(" "),a("li",[e._v("Reveal solution")])]),e._v(" "),a("h2",{attrs:{id:"submit-scavenge-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submit-scavenge-message"}},[e._v("#")]),e._v(" Submit Scavenge Message")]),e._v(" "),a("p",[e._v("Submit scavenge message should contain all the necessary information when creating a scavenge:")]),e._v(" "),a("ul",[a("li",[e._v("Description - what is the question to be solved or description of the challenge.")]),e._v(" "),a("li",[e._v("Solution hash - the scrambled solution.")]),e._v(" "),a("li",[e._v("Reward - this is the bounty that is awarded to whoever submits the answer first.")])]),e._v(" "),a("p",[e._v("Use the "),a("code",[e._v("starport scaffold message")]),e._v(" command to scaffold a new Cosmos SDK message for your module. The command accepts message name as the first argument and a list of fields. By default, a message is scaffolded in a module with a name that matches the name of the project, in our case "),a("code",[e._v("scavenge")]),e._v(" (this behaviour can be overwritten by using a flag).")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgc2NhZmZvbGQgbWVzc2FnZSBzdWJtaXQtc2NhdmVuZ2Ugc29sdXRpb25IYXNoIGRlc2NyaXB0aW9uIHJld2FyZAo="}}),e._v(" "),a("p",[e._v("The command has created and modified several files.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("proto/scavenge/tx.proto")]),e._v(": "),a("code",[e._v("MsgSubmitScavenge")]),e._v(" and "),a("code",[e._v("MsgSubmitScavengeResponse")]),e._v(" proto messages are added and a "),a("code",[e._v("SubmitScavenge")]),e._v(" RPC is registered in the "),a("code",[e._v("Msg")]),e._v(" service.")]),e._v(" "),a("li",[a("code",[e._v("x/scavenge/types/message_submit_scavenge.go")]),e._v(": methods are defined to satisfy "),a("code",[e._v("Msg")]),e._v(" interface.")]),e._v(" "),a("li",[a("code",[e._v("x/scavenge/handler.go")]),e._v(": "),a("code",[e._v("MsgSubmitScavenge")]),e._v(" message is registered in the module message handler.")]),e._v(" "),a("li",[a("code",[e._v("x/scavenge/keeper/msg_server_submit_scavenge.go")]),e._v(": "),a("code",[e._v("SubmitScavenge")]),e._v(" keeper method is defined")]),e._v(" "),a("li",[a("code",[e._v("x/scavenge/client/cli/tx_submit_scavenge.go")]),e._v(": CLI command added to brodcast a transaction with a message.")]),e._v(" "),a("li",[a("code",[e._v("x/scavenge/client/cli/tx.go")]),e._v(": CLI command is registered.")]),e._v(" "),a("li",[a("code",[e._v("x/scavenge/types/codec.go")]),e._v(": codecs are registered.")])]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("x/scavenge/types/message_submit_scavenge.go")]),e._v(" you can notice that the message follows the "),a("code",[e._v("sdk.Msg")]),e._v(" interface. The message "),a("code",[e._v("struct")]),e._v(" contains all the necessary information when creating a new scavenge: "),a("code",[e._v("Description")]),e._v(", "),a("code",[e._v("SolutionHash")]),e._v(", "),a("code",[e._v("Reward")]),e._v(", and "),a("code",[e._v("Creator")]),e._v(" (which was added automatically).")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Msg")]),e._v(" interface requires some other methods be set, like validating the content of the "),a("code",[e._v("struct")]),e._v(", and confirming the msg was signed and submitted by the Creator.")]),e._v(" "),a("p",[e._v("Now that one can submit a scavenge the only other essential action is to be able to solve it. This should be broken into two separate actions as described before: "),a("code",[e._v("MsgCommitSolution")]),e._v(" and "),a("code",[e._v("MsgRevealSolution")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"commit-solution-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-solution-message"}},[e._v("#")]),e._v(" Commit Solution Message")]),e._v(" "),a("p",[e._v("Commit solution message needs to contain the following fields:")]),e._v(" "),a("ul",[a("li",[e._v("Solution hash - the scrambled solution.")]),e._v(" "),a("li",[e._v("Solution scavenger hash - this is the hash of the combination of the solution and the person who solved it.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgc2NhZmZvbGQgbWVzc2FnZSBjb21taXQtc29sdXRpb24gc29sdXRpb25IYXNoIHNvbHV0aW9uU2NhdmVuZ2VySGFzaAo="}}),e._v(" "),a("p",[e._v("As you're using the same "),a("code",[e._v("starport scaffold message")]),e._v(" command the set of modified and created files are the same.")]),e._v(" "),a("h2",{attrs:{id:"reveal-solution-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reveal-solution-message"}},[e._v("#")]),e._v(" Reveal Solution Message")]),e._v(" "),a("p",[e._v("Reveal solution message needs only one field:")]),e._v(" "),a("ul",[a("li",[e._v("Solution - this is the plain text version of the solution.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgc2NhZmZvbGQgbWVzc2FnZSByZXZlYWwtc29sdXRpb24gc29sdXRpb24K"}}),e._v(" "),a("p",[e._v("Information about the scavenger (creator of the message is automatically included) and solution hash can be deterministically derived from the solution string.")])],1)}),[],!1,null,null,null);s.default=o.exports}}]);