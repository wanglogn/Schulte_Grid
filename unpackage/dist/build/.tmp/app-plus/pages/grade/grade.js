(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/grade/grade"],{"10d0":function(n,t,e){"use strict";e.r(t);var u=e("8bc9"),r=e("e367");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("b559");var i=e("2877"),c=Object(i["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},"7cc0":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{useTime:15,errNum:10,num:3,user_grade:[]}},onLoad:function(t){this.num=t.num;var e=this;n.getStorage({key:"user_grade",success:function(n){e.user_grade=n.data[0]}})},methods:{again:function(){n.redirectTo({url:"../play/play?num="+this.num+"&userAgeType="+this.user_grade.userAgeType})},back:function(){n.navigateTo({url:"../index/index"})},history:function(){n.navigateTo({url:"../history/history?num="+this.num})},standard:function(){n.navigateTo({url:"../criterion/criterion?num="+this.num})}}};t.default=e}).call(this,e("6e42")["default"])},"88ad":function(n,t,e){},"8b8b":function(n,t,e){"use strict";(function(n){e("da1f"),e("921b");u(e("66fd"));var t=u(e("10d0"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"8bc9":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},b559:function(n,t,e){"use strict";var u=e("88ad"),r=e.n(u);r.a},e367:function(n,t,e){"use strict";e.r(t);var u=e("7cc0"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a}},[["8b8b","common/runtime","common/vendor"]]]);