webpackJsonp([12],{HEEz:function(t,e,i){"use strict";var o;function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{item:{id:12,totalComments:12,userImg:"https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip",userName:"艾米",publishTime:"2018-07-21 19:20:24",publishType:"动态",publishContent:"地方撒范德萨发的说法是",zanActive:!0,timer:null,placeholder:"",img:["http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180721_1532105817_6686_crop.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180731_1533022365_3632.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180716_1531710250_9094_crop.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180721_1532105817_6686_crop.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180731_1533022365_3632.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180716_1531710250_9094_crop.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180721_1532105817_6686_crop.jpg?imageMogr2/auto-orient/strip","http://p.moimg.net/project/project_20180731_1533022365_3632.jpg?imageMogr2/auto-orient/strip"],commentNum:3,supportNum:3,comments:[{replyTxt:"",timer:null,comId:0,comImg:"https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip",comName:"反攻倒算",comTime:"2018-07-21 19:20:24",comCont:"的范德萨发大幅度是",supportNum:5,zanActive:!1,inputShow:!1,replyText:"",reply:[]},{timer:null,comId:1,comImg:"https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip",comName:"反攻倒算",comTime:"2018-07-21 19:20:24",comCont:"的范德萨发大幅度是",supportNum:5,zanActive:!1,inputShow:!1,replyText:"",reply:[{from:"aa",to:"bb",repTime:"2018-07-21 19:20:24",repCont:"大法师打发是范德萨",inputShow:!1}]}]},isZan:!0,placeholder:"",curImg:0,to:"",comId:"",pubCom:"",zanDialog:!1,zanPersons:[{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"},{name:"ttt",img:"https://p.moimg.net/ico/1281521_1487473673.jpg",isFocus:"关注"}],zanPersonsTotal:60}},methods:(o={timeFn:function(t){var e=new Date(t.replace(/-/g,"/")),i=(new Date).getTime()-e.getTime(),o=Math.floor(i/864e5),n=i%864e5,s=Math.floor(n/36e5),m=n%36e5,a=Math.floor(m/6e4);return 0===o&&0===s?a+"分钟前":0===o&&0!==s?s+"小时前":1===o?"昨天":2===o?"前天":t.slice(0,16)},enlargeImg:function(){var t=document.getElementsByTagName("body")[0],e=document.createElement("div");e.className="enlarge",e.style.width=document.body.clientWidth+"px",e.style.height=document.body.clientHeight+"px",t.appendChild(e);var i=document.createElement("img");i.className="enlargeImage",e.appendChild(i);var o=document.createElement("div");o.className="next fa fa-angle-right",e.appendChild(o);var n=document.createElement("div");n.className="pre fa fa-angle-left",e.appendChild(n),e.onclick=function(){e.style.display="none"}},imgPlay:function(t){var e=this;document.querySelector(".enlarge").style.display="block";var i=document.querySelector(".enlargeImage");i.src=this.item.img[t],document.querySelector(".next").onclick=function(o){var n=o||event;t<e.item.img.length-1?(t++,i.src=e.item.img[t]):e.$message.warning("已经是最后一张了"),n.cancelBubble=!0,n.stopPropagation()},document.querySelector(".pre").onclick=function(o){var n=o||event;t>0?(t--,i.src=e.item.img[t]):e.$message.warning("已经是第一张了"),n.cancelBubble=!0,n.stopPropagation()}},isLogin:function(){this.$store.state.user.name||this.$router.push("/login")},goToPersonPage:function(t){this.$router.push("/user/"+t)},goToProjec:function(t){this.$router.push("/project/"+t)},goToProject:function(t){this.$router.push("/activity/"+t)},addZan:function(t,e){var i=this;""===e?(this.item.zanActive=!this.item.zanActive,this.item.zanActive?this.item.supportNum++:this.item.supportNum--,clearTimeout(this.item.timer),this.item.timer=setTimeout(function(){i.$axios.post("/addZan",{itemId:t,comId:e,add:i.item.zanActive}).then(function(t){i.$emit("theLatest",t.data)})},2e3)):(this.item.comments[e].zanActive=!this.item.comments[e].zanActive,this.item.comments[e].zanActive?this.item.comments[e].supportNum++:this.item.comments[e].supportNum--,clearTimeout(this.item.comments[e].timer),this.item.comments[e].timer=setTimeout(function(){i.$axios.post("/addZan",{itemId:t,comId:e,add:i.item.zanActive}).then(function(t){console.log("b"),i.$emit("theLatest",t.data)})},2e3))},sendCom:function(t,e,i){var o=this;this.$store.state.user.name?t?(console.log(this.$store.state.user.name,this.to,e,i,t),this.$axios.post("/pubCom",{from:this.$store.state.user.name,to:this.to,itemId:e,comId:i,comCont:t}).then(function(t){o.$emit("theLastest",t.data)})):this.$message({type:"info",message:"评论不能为空"}):this.$router.push("/login")},comInputShow:function(t){this.item.comments[t].inputShow=!this.item.comments[t].inputShow},vote:function(t,e,i){var o=this;i.length===e?this.$axios.post("/vote",{itemId:t,voteRes:this.item.voteRes}).then(function(t){o.$message({type:"success",message:"投票成功"}),o.$emit("theLastest",t.data)}).catch(function(t){o.$message({type:"warning",message:"投票失败，请重试"})}):this.$message.warning("请选择"+e+"个")},goPersonPage:function(t){this.$router.push("/user/"+t)},isFocus:function(t,e){var i=this,o=this.zanPersons;"已关注"===o[e].isFocus?o[e].isFocus="+ 关注":o[e].isFocus="已关注","已关注"===o[e].isFocus?this.$store.commit("CHANGE_FOCUSNUM",this.$store.state.user.focusNum+1):this.$store.commit("CHANGE_FOCUSNUM",this.$store.state.user.focusNum-1),clearTimeout(o.timer),o.timer=setTimeout(function(){i.$axios.post("/isFocus",{user:i.$store.state.user.name,name:t,ifFocus:o[e].isFocus}).then(function(t){i.$store.commit("CHANGE_FOCUS",t.data)}).catch(function(t){console.log(t)})},2e3)},currentChange:function(t){var e=this;this.$axios.post("/getZanPersons",{curPage:t}).then(function(t){e.zanPersons=t.data}).catch(function(t){console.log(t)})},nextPageCom:function(t){var e=this;this.$axios.post("/nextPageCom",{curPage:t}).then(function(t){e.item.comments=t.data}).catch(function(t){console.log(t)})},zan:function(){var t=this;this.isZan=!this.isZan,this.$axios.post("/isZan",{isZan:isZan}).then(function(e){return t.isZan=e.data}).catch(function(t){return console.log(t)})}},n(o,"isLogin",function(){this.$store.state.user.name||this.$router.push("/login")}),n(o,"isInputShow",function(t,e,i){this.comId=this.item.comments[e].comId,t?(this.to=this.item.comments[e].comName,this.item.placeholder="@"+this.item.comments[e].comName,this.item.comments[e].inputShow=!this.item.comments[e].inputShow,this.item.comments.map(function(t,i){i!=e&&(t.inputShow=!1,t.reply.map(function(t,e){t.inputShow=!1}))})):(this.to=this.item.comments[e].reply[i].from,this.item.placeholder="@"+this.item.comments[e].reply[i].from,this.item.comments[e].inputShow=!1,this.item.comments[e].reply[i].inputShow=!this.item.comments[e].reply[i].inputShow,this.item.comments.map(function(t,o){t.inputShow=!1,t.reply.map(function(t,n){o==e&&n==i||(t.inputShow=!1)})}))}),n(o,"_inputShow",function(t){var e=this;return this.item.comments[t].inputShow||e.item.comments[t].reply.some(function(t,e){return t.inputShow})}),n(o,"getMoreRep",function(t,e){var i=this,o=this.item.comments.map(function(t,i){if(t.comId==e)return i});this.item.comments[o].num?this.item.comments[o].num++:this.item.comments[o].num=0,this.$axios.post("/getMoreRep",{itemId:t,comId:e,num:this.item.comments[o].num}).then(function(t){var e;return(e=i.item.comments[o].reply).push.apply(e,function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(t.data))}).catch(function(t){return console.log(t)})}),o),mounted:function(){this.$store.state.user.name||(this.placeholder="请先登录再发表评论"),this.enlargeImg(),this.currentChange(1)}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticClass:"one"},[o("el-row",[o("el-col",{staticClass:"authorBox"},[o("img",{attrs:{src:t.item.userImg,alt:""},on:{click:function(e){t.goToPersonPage(t.item.userName)}}}),t._v(" "),o("div",[o("span",{on:{click:function(e){t.goToPersonPage(t.item.userName)}}},[t._v(t._s(t.item.userName))]),t._v(" "),o("span",[t._v(t._s(t.timeFn(t.item.publishTime))+" · 发布"+t._s(t.item.publishType))])])])],1),t._v(" "),"动态"==t.item.publishType?o("el-row",[o("span",{staticClass:"content",on:{click:function(e){t.goToActivity(t.item.id)}}},[t._v("\n            "+t._s(t.item.publishContent)+"\n        ")]),t._v(" "),t.item.img.length>0?o("div",{staticClass:"photoWall"},[1==t.item.img.length?o("el-row",[o("el-col",{attrs:{span:24}},[o("img",{attrs:{src:t.item.img[0]},on:{click:function(e){t.imgPlay(0)}}})])],1):t.item.img.length>1&&t.item.img.length<=4?o("el-row",t._l(t.item.img,function(e,i){return o("el-col",{key:i,attrs:{span:12}},[o("img",{attrs:{src:e,alt:""},on:{click:function(e){t.imgPlay(i)}}})])})):t.item.img.length>4&&t.item.img.length<=9?o("el-row",t._l(t.item.img,function(e,i){return o("el-col",{key:i,attrs:{span:8}},[o("img",{attrs:{src:e,alt:""},on:{click:function(e){t.imgPlay(i)}}})])})):t.item.img.length>9?o("el-row",[t._l(t.item.img.slice(0,8),function(e,i){return o("el-col",{key:i,attrs:{span:8}},[o("img",{attrs:{src:e,alt:""},on:{click:function(e){t.imgPlay(i)}}})])}),t._v(" "),t.item.img[9]?o("el-col",{attrs:{span:8}},[o("div",{staticClass:"moreImg"},[o("img",{attrs:{src:t.item.img[8],alt:""},on:{click:function(e){t.imgPlay(t.i)}}}),t._v(" "),o("div",{on:{click:function(e){t.imgPlay(8)}}},[o("p",[t._v("+"+t._s(t.item.img.length-8))])])])]):t._e()],2):t._e()],1):t._e()]):t._e(),t._v(" "),"长文"==t.item.publishType?o("el-row",[o("span",{staticClass:"content",on:{click:function(e){t.goToProject(t.item.id)}}},[t._v("\n            "+t._s(t.item.publishContent)+"\n        ")])]):t._e(),t._v(" "),"投票"==t.item.publishType?o("el-row",{staticClass:"vote"},[o("span",{staticClass:"content",on:{click:function(e){t.goToProject(t.item.id)}}},[t._v("\n            "+t._s(t.item.publishContent)+"\n        ")]),t._v(" "),o("el-checkbox-group",{model:{value:t.item.voteRes,callback:function(e){t.$set(t.item,"voteRes",e)},expression:"item.voteRes"}},t._l(t.item.options,function(e,i){return"投票"==t.item.statu?o("el-checkbox",{key:i,attrs:{label:e,name:"type"}}):t._l(t.item.options,function(t,e){return o("el-checkbox",{key:e,attrs:{label:t,name:"type",disabled:""}})})})),t._v(" "),o("div",{staticClass:"voteBox"},[o("span",[t._v("可选数: "+t._s(t.item.canSelectNum))]),t._v(" "),o("span",[t._v("当前选择数: "+t._s(t.item.voteRes.length))]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.vote(t.item.id,t.item.canSelectNum,t.item.voteRes)}}},[t._v(t._s(t.item.statu))]),t._v(" "),o("p",[t._v("你的投票结果为：")]),t._v(" "),o("ul",t._l(t.item.voteRes,function(e,i){return o("li",{key:i},[t._v(" "+t._s(e))])}))],1)],1):t._e(),t._v(" "),o("div",{staticClass:"zan"},[o("div",{on:{click:t.zan}},[o("img",{directives:[{name:"show",rawName:"v-show",value:!t.isZan,expression:"!isZan"}],staticClass:"notZan",attrs:{src:i("aPsf")}}),t._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:t.isZan,expression:"isZan"}],attrs:{src:i("r+u1")}})])]),t._v(" "),o("div",{staticClass:"zanPersons"},[t._l(t.zanPersons.slice(0,14),function(t,e){return o("img",{key:e,attrs:{src:t.img,alt:""}})}),t._v(" "),o("span",{on:{click:function(e){t.zanDialog=!t.zanDialog}}},[t._v(t._s(t.zanPersons.length)+"赞"),o("i",{staticClass:"el-icon-caret-right"})])],2),t._v(" "),o("el-dialog",{staticClass:"teamMember",attrs:{title:"关注",visible:t.zanDialog,width:"500px"},on:{"update:visible":function(e){t.zanDialog=e}}},[t._l(t.zanPersons,function(e,i){return o("el-row",{key:i},[o("el-col",{attrs:{span:3,offset:1}},[o("img",{attrs:{src:e.img},on:{click:function(i){t.goPersonPage(e.name)}}})]),t._v(" "),o("el-col",{attrs:{span:15,offset:1}},[o("h3",{on:{click:function(i){t.goPersonPage(e.name)}}},[t._v(t._s(e.name))])]),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-button",{attrs:{size:"small",type:"danger",round:""},on:{click:function(o){t.isFocus(e.name,i)}}},[t._v(t._s(e.isFocus))])],1)],1)}),t._v(" "),o("el-pagination",{attrs:{layout:"prev, pager, next","page-size":15,total:t.zanPersonsTotal},on:{"current-change":t.currentChange}})],2),t._v(" "),o("div",{staticClass:"comments"},[o("h2",[t._v(t._s(t.item.totalComments)+"条评论")]),t._v(" "),o("div",[o("el-row",[o("el-col",{attrs:{span:2}},[o("img",{staticClass:"headImg",attrs:{src:i("8tHC")}})]),t._v(" "),o("el-col",{attrs:{span:22}},[o("el-input",{attrs:{type:"textarea",cols:"3",rows:5,resize:"none",placeholder:t.placeholder},on:{focus:t.isLogin},model:{value:t.pubCom,callback:function(e){t.pubCom=e},expression:"pubCom"}})],1)],1),t._v(" "),o("div",{staticClass:"pub"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.sendCom(t.pubCom,t.item.id)}}},[t._v("发表")])],1)],1),t._v(" "),o("div",{staticClass:"comment"},t._l(t.item.comments,function(e,n){return o("el-row",{key:n,staticClass:"com"},[o("el-col",{attrs:{span:2}},[o("img",{staticClass:"headImg",attrs:{src:e.comImg}})]),t._v(" "),o("el-col",{attrs:{span:22}},[o("span",[t._v(t._s(e.comName))]),t._v(" "),o("span",[t._v(t._s(t.timeFn(e.comTime)))]),t._v(" "),o("p",[t._v(t._s(e.comCont))]),t._v(" "),o("div",{staticClass:"box"},[o("div",{on:{click:function(e){t.isInputShow(!0,n)}}},[o("img",{attrs:{src:i("8/4X")}}),o("sup",[t._v("3")])]),t._v(" "),o("div",{on:{click:function(i){t.addZan(t.item.id,e.comId)}}},[o("img",{directives:[{name:"show",rawName:"v-show",value:!e.zanActive,expression:"!obj.zanActive"}],attrs:{src:i("aPsf")}}),t._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:e.zanActive,expression:"obj.zanActive"}],attrs:{src:i("r+u1")}}),t._v(" "),o("sup",[t._v(t._s(e.supportNum))])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.reply.length>0||t._inputShow(n),expression:"obj.reply.length > 0 || _inputShow(i)"}],staticClass:"addCom"},[t._l(e.reply,function(e,s){return o("div",{key:s},[o("p",[o("span",[t._v(t._s(e.from))]),t._v(" 回复 "),o("span",[t._v(t._s(e.to))]),t._v(": "+t._s(e.repCont))]),t._v(" "),o("div",[o("span",[t._v(t._s(t.timeFn(e.repTime)))]),t._v(" "),o("img",{attrs:{src:i("8/4X")},on:{click:function(e){t.isInputShow(!1,n,s)}}})])])}),t._v(" "),o("el-input",{directives:[{name:"show",rawName:"v-show",value:t._inputShow(n),expression:"_inputShow(i)"}],staticClass:"replyInput",attrs:{type:"text",placeholder:t.item.placeholder},on:{focus:t.isLogin},nativeOn:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;t.sendCom(e.replyTxt,t.item.id,t.comId)}},model:{value:e.replyTxt,callback:function(i){t.$set(e,"replyTxt",i)},expression:"obj.replyTxt"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.reply.length>3,expression:"obj.reply.length > 3"}],staticClass:"allComments",on:{click:function(i){t.getMoreRep(t.item.id,e.comId)}}},[t._v("全部评论"),o("i",{staticClass:"el-icon-caret-bottom"})])],2)])],1)})),t._v(" "),o("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":10,total:t.item.totalComments},on:{"current-change":t.nextPageCom}})],1)],1)},staticRenderFns:[]};var a=i("VU/8")(s,m,!1,function(t){i("rcJh")},"data-v-4805b6c2",null);e.default=a.exports},rcJh:function(t,e){}});
//# sourceMappingURL=12.64d766b89b44566374e0.js.map