webpackJsonp([3],{664:function(e,l){e.exports=[{name:"head",fieldset:"GroupFieldset",panelTitle:"导航样式——头部物料",fields:[{name:"title",control:"Input",label:"标题",defaultValue:"进入首页",rules:{required:!0,minBytes:8,maxBytes:24}},{name:"color",control:"Input",label:"主色调色值",tips:"例如品牌主色调为橙色，则填写色值：#FF6100",rules:{required:!0}},{name:"logo",control:"ImageUpload",label:"品牌LOGO",rules:{imageRequired:!0},tips:"图片尺寸：限高46px，不超过10k，jpg格式。",uploadRules:{size:10,types:["jpg","png"],key:"317-head-logo"}},{name:"titleLink",control:"Input",defaultValue:"http://",label:"标题链接",rules:{required:!0,url:!0,maxBytes:512}},{name:"showUrl",control:"Input",label:"显示URL",rules:{required:!0,maxBytes:20}},{name:"imageList",fieldset:"ListFieldset",numLabel:"轮播图个数",length:[0,2,3,4],fields:[{name:"image",control:"ImageUpload",label:"轮播图",rules:{imageRequired:!0},tips:"图片尺寸：700x180，不超过300k，jpg、gif格式",uploadRules:{size:300,types:["gif","jpg"],key:"317-head-imageList-image"}},{name:"link",control:"Input",label:"轮播图链接",defaultValue:"http://",limiter:{max:512},rules:{required:!0,url:!0,maxBytes:512}}]}],submit:!0},{name:"iconList",fieldset:"ListFieldset",panelTitle:"导航样式——中部Icon",numLabel:"Icon个数",length:[4,8],fields:[{name:"image",control:"ImageUpload",label:"Icon图",rules:{imageRequired:!0},tips:"图片尺寸：90x90，不超过10k，jpg格式",uploadRules:{size:10,types:["jpg"],key:"317-iconList-image"}},{name:"name",control:"Input",label:"Icon名称",rules:{required:!0,minBytes:4,maxBytes:8}},{name:"link",control:"Input",label:"Icon链接",defaultValue:"http://",rules:{required:!0,url:!0,maxBytes:512}}],submit:!0},{name:"appList",fieldset:"TabFieldset",panelTitle:"导航样式——应用下载物料",numLabel:"APP个数",length:[0,1,2,3,4],fields:[{name:"image",control:"ImageUpload",label:"App图片",rules:{imageRequired:!0},tips:"图片尺寸：96x96，不超过10k，jpg格式",uploadRules:{size:10,types:["jpg"],key:"317-appList-image"}},{name:"name",control:"Input",label:"App名称",rules:{required:!0,maxBytes:20}},{name:"androidLink",control:"Input",label:"android下载链接",defaultValue:"http://",rules:{required:!0,url:!0,maxBytes:512}},{name:"androidVersion",control:"Input",label:"android版本号",rules:{required:!0,maxBytes:16}},{name:"androidSize",control:"Input",label:"android APP大小",rules:{required:!0,maxBytes:6}},{name:"iosLink",control:"Input",label:"ios下载链接",defaultValue:"http://",rules:{required:!0,url:!0,maxBytes:512}},{name:"iosVersion",control:"Input",label:"ios版本号",rules:{required:!0,maxBytes:16}},{name:"iosSize",control:"Input",label:"ios APP大小",rules:{required:!0,maxBytes:6}}],submit:!0},{name:"activityList",fieldset:"ListFieldset",panelTitle:"导航样式——活动栏目物料",numLabel:"活动栏目数",length:[0,2],fields:[{name:"text",control:"Input",label:"活动栏目",rules:{required:!0,minBytes:20,maxBytes:35}},{name:"link",control:"Input",label:"栏目链接",defaultValue:"http://",rules:{required:!0,url:!0,maxBytes:512}}]},{name:"call",fieldset:"RadioFieldset",panelTitle:"导航样式——电话模块物料",radioLabel:"客服电话",defaultRadio:"0",optionFields:[{option:{value:"1",text:"有"},fields:[{name:"number",control:"Input",label:"联系电话",rules:{required:!0,number:!0,maxBytes:12}}]},{option:{value:"0",text:"无"},fields:[]}]}]}});