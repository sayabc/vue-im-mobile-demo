webpackJsonp([9],{"H/+X":function(t,e){},J6VY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{inputMsg:""}},computed:{to:function(){return this.$route.params.teamId}},methods:{sendMsg:function(){/^\s*$/.test(this.inputMsg)?this.$vux.alert.show({title:"请不要发送空消息"}):(this.$store.dispatch("sendMsg",{type:"text",scene:"team",to:this.to,text:this.inputMsg,needMsgReceipt:!0}),history.go(-1))}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"g-inherit m-article p-msg-receipt"},[s("x-header",{staticClass:"m-tab",attrs:{"left-options":{backText:" "}}},[s("h1",{staticClass:"m-tab-top"},[t._v("发送已读回执消息")]),t._v(" "),s("a",{attrs:{slot:"left"},slot:"left"})]),t._v(" "),s("div",{staticClass:"g-body"},[s("group",[s("x-textarea",{attrs:{placeholder:"输入消息内容"},model:{value:t.inputMsg,callback:function(e){t.inputMsg=e},expression:"inputMsg"}}),t._v(" "),s("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.sendMsg(e)}}},[t._v("发送")])],1),t._v(" "),s("p",{staticClass:"tip"},[t._v("\n      已读回执能力支持文本、图片、音频、视频、文件、自定义等消息类型。此处仅以文本消息作为演示，开发者可以根据具体业务场景进行功能设计。\n    ")])],1)],1)},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("H/+X")},null,null);e.default=a.exports}});
//# sourceMappingURL=9.577be9867ac7a258f615.js.map