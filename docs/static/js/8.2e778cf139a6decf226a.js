webpackJsonp([8],{PSKf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("moKT"),i=a("0xDb"),s=a("lZyA"),o=(s.a,{data:function(){return{avatar:n.a.defaultUserIcon,isOwner:!1,hasSearched:!1}},computed:{teamId:function(){return this.$route.params.teamId},teamInfo:function(){var t=this,e=this.$store.state.teamlist,a=e&&e.find(function(e){return e.teamId===t.teamId});if(a)return a},teamMembers:function(){return this.$store.state.teamMembers[this.teamId]},teamMemberNum:function(){return this.teamMembers&&this.teamMembers.length},teamAvatar:function(){return this.teamInfo.avatar||this.avatar},teamName:function(){return this.teamInfo&&this.teamInfo.name||"未设置"},nickName:function(){var t=this;if(!this.teamMembers)return"未设置";var e=this.teamMembers.find(function(e){return e.account===t.$store.state.userUID});return e&&e.nickInTeam||"未设置"},hasManagePermission:function(){var t=this;if(!this.teamMembers)return!1;var e=this.teamMembers.find(function(e){return e.account===t.$store.state.userUID});return this.isOwner="owner"===e.type,"normal"!==e.type},hasEditPermission:function(){return"normal"===this.teamInfo.type||"all"===this.teamInfo.updateTeamMode||this.hasManagePermission}},methods:{onTeamAvatarClick:function(){this.hasEditPermission&&this.$refs.input.click()},onFileSelected:function(t){var e=this;this.$store.dispatch("showLoading");var a=t.target;0!==a.files.length&&this.$store.dispatch("delegateTeamFunction",{functionName:"previewFile",options:{fileInput:a,done:function(t,a){if(e.$store.dispatch("hideLoading"),t)e.$toast(t);else{if(a.w<300||a.h<300)return void e.$toast("图片长宽不能小于300");e.updateTeamAvatar(a.url)}}}})},updateTeamAvatar:function(t){var e=this;this.$store.dispatch("delegateTeamFunction",{functionName:"updateTeam",options:{teamId:this.teamId,avatar:t,done:function(t,a){e.$toast(t||"修改群头像成功")}}})},dismissTeam:function(){var t=this;this.$vux.confirm.show({title:"确定要解散群？",onConfirm:function(){t.$store.dispatch("showLoading"),t.$store.dispatch("delegateTeamFunction",{functionName:"dismissTeam",options:{teamId:t.teamId,done:function(e,a){t.$store.dispatch("hideLoading"),t.$toast(e||"已解散群"),window.history.go(-1)}}})}})},leaveTeam:function(){var t=this;this.$vux.confirm.show({title:"确定要退出群？",onConfirm:function(){t.$store.dispatch("showLoading"),t.$store.dispatch("delegateTeamFunction",{functionName:"leaveTeam",options:{teamId:t.teamId,done:function(e,a){t.$store.dispatch("hideLoading"),t.$toast(e||"已退出群"),window.history.go(-2)}}})}})},onEditItemClick:function(t,e,a,n){this.$store.dispatch("enterSettingPage",{title:t,inputType:e,updateKey:a,teamId:this.teamId,defaultValue:this.teamInfo[a],updateInfoInTeam:n,enable:!!n||this.hasEditPermission})},getTeamInfo:function(t){return i.a.teamConfigMap[t][this.teamInfo[t]]},formateDate:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}},components:{TeamMember:s.a}}),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"g-inherit m-article p-teammanager"},[a("x-header",{staticClass:"m-tab",attrs:{"left-options":{backText:" "}}},[a("h1",{staticClass:"m-tab-top"},[t._v("群设置")]),t._v(" "),a("a",{attrs:{slot:"left"},slot:"left"})]),t._v(" "),a("div",{staticClass:"m-body"},[t.teamInfo&&"normal"===t.teamInfo.type?[a("team-member",{attrs:{teamId:t.teamId}}),t._v(" "),a("group",{staticClass:"m-group"},[a("cell",{attrs:{title:"讨论组名称",value:t.teamName,"is-link":""},nativeOn:{click:function(e){return t.onEditItemClick("修改讨论组名称","text","name")}}}),t._v(" "),a("x-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(e){return t.leaveTeam(e)}}},[t._v("退出讨论组")])],1)]:t._e(),t._v(" "),t.teamInfo&&"advanced"===t.teamInfo.type?[a("cell",{attrs:{"is-link":""},nativeOn:{click:function(e){return t.onTeamAvatarClick(e)}}},[a("div",{staticClass:"m-teaminfo",attrs:{slot:"icon"},slot:"icon"},[a("img",{staticClass:"avatar u-circle",attrs:{src:t.teamAvatar}}),t._v(" "),a("div",{staticClass:"u-info"},[a("p",[t._v(t._s(t.teamInfo.name))]),t._v(" "),a("span",[t._v(t._s(t.teamInfo.teamId+" 于"+t.formateDate(t.teamInfo.createTime)+"创建"))])])]),t._v(" "),a("form",[a("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileSelected}})])]),t._v(" "),a("group",{staticClass:"m-group"},[a("cell",{attrs:{title:"群成员",value:"共"+t.teamMemberNum+"人","is-link":"",link:"/teammembers/"+t.teamId}}),t._v(" "),a("team-member",{attrs:{teamId:t.teamId,advanced:!0}})],1),t._v(" "),a("group",{staticClass:"m-group"},[a("cell",{attrs:{title:"群名称",value:t.teamName,"is-link":""},nativeOn:{click:function(e){return t.onEditItemClick(t.hasEditPermission?"修改群名称":"群名称","text","name")}}}),t._v(" "),a("cell",{attrs:{title:"群昵称",value:t.nickName,"is-link":""},nativeOn:{click:function(e){return t.onEditItemClick("修改群昵称","text","nickInTeam",!0)}}}),t._v(" "),a("cell",{attrs:{title:"群介绍",value:t.teamInfo.intro||"未设置","is-link":""},nativeOn:{click:function(e){return t.onEditItemClick(t.hasEditPermission?"修改群介绍":"群介绍","textarea","intro")}}})],1),t._v(" "),t.hasManagePermission?a("group",{staticClass:"m-group"},[a("cell",{attrs:{title:"身份验证",value:t.getTeamInfo("joinMode"),"is-link":""},nativeOn:{click:function(e){return t.onEditItemClick("身份验证","select","joinMode")}}})],1):t._e(),t._v(" "),a("group",{staticClass:"m-group"},[t.hasManagePermission?[a("cell",{attrs:{title:"邀请他人权限",value:t.getTeamInfo("inviteMode"),"is-link":""},nativeOn:{click:function(e){return t.onEditItemClick("邀请他人权限","select","inviteMode")}}}),t._v(" "),a("cell",{attrs:{title:"群资料修改权限",value:t.getTeamInfo("updateTeamMode"),"is-link":""},nativeOn:{click:function(e){return t.onEditItemClick("群资料修改权限","select","updateTeamMode")}}}),t._v(" "),a("cell",{attrs:{title:"被邀请人身份验证",value:t.getTeamInfo("beInviteMode"),"is-link":""},nativeOn:{click:function(e){return t.onEditItemClick("被邀请人身份验证","select","beInviteMode")}}})]:t._e(),t._v(" "),a("x-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(e){return t.isOwner?t.dismissTeam():t.leaveTeam()}}},[t._v(t._s(t.isOwner?"解散群聊":"退出高级群"))])],2)]:t._e()],2)],1)},staticRenderFns:[]};var m=a("VU/8")(o,r,!1,function(t){a("itf6")},null,null);e.default=m.exports},itf6:function(t,e){}});
//# sourceMappingURL=8.2e778cf139a6decf226a.js.map