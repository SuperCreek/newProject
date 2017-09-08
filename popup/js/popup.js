window.onload = function(){
	
}
var popup = {}
popup.fn =  function(ele,index){
	if(index != undefined){
		return document.querySelectorAll(ele)[index]
	}
	return document.querySelectorAll(ele)[0]
}
popup.create = function(ele){
	return document.createElement(ele)
}
popup.custom = {
	contBackColor:null,
	submitButton:null,
	clearButton:null,
	buttonColor:[]
}
popup.style = {
	popup:{
		width:"100%",
		height:"100%",
		position:"fixed",
		top:"0",
		left:"0",
		right:"0",
		bottom:"0",
		margin:"auto",
		display:"flex",
		background:"rgba(0,0,0,.5)",
		"justify-content":"center",
		"align-items":"center",
		"z-index":99999999
	},
	popup_div:{
		padding:"0.937rem",
		background:"#fff",
		"min-width":"9.356rem"
	},
	popup_h1:{
		"font-size":"0.875rem",
		"border-bottom":"1px solid #ccc",
		"padding-bottom":"0.625rem",
		color:"#464343"
	},
	alert_p:{
		"font-size":"0.875rem",
		padding:"0.312rem",
		"line-height":"1.562rem",
		color:"#464343"
	},
	alert_btn:{
		padding:"0.625rem 3.125rem",
		background:"#8c9798",
		border:"none",
		color:"#fff",
		"font-size":"0.875rem",
		margin:"0 auto",
		display:"block",
		outline:"none",
		cursor:"pointer"
	},
	alert_clear_btn:{
		padding:"0.625rem 3.125rem",
		background:"#d0dbdc",
		border:"none",
		color:"#fff",
		"font-size":"0.875rem",
		margin:"0 auto",
		display:"block",
		outline:"none",
		cursor:"pointer",
		"margin-left":"0.937rem"
	},
	confirm_btns:{
		display:"flex"
	}
}
popup.notice = function(str,time,bool){
	if(popup.fn(".popup") != undefined){
		return false;
	}
	popup.createCont()
	if(bool == false){
		popup.fn(".popup").style.cssText += "background:transparent;z-index:-1;"
	}
	var div = popup.create("div")
	if(str == undefined){
		str = ""
	}
	div.innerHTML = str
	div.style.cssText = "padding:0.625rem 1.25rem;background:#000;color:#fff;border-radius: 0.312rem;"
	popup.fn(".popup").appendChild(div)
	setTimeout(function(){
		popup.fn("body").removeChild(popup.fn(".popup"))
	},time)
}

//确定弹出框
popup.alert = function(str,successFn,title,btnTitle){
	if(popup.fn(".popup") != undefined){
		return false;
	}
	popup.createCont()
	//创建弹出框内容区域
	var div = popup.create("div")
	//判断是否修改弹出框标题，如果不提交则默认为提示
	if(title == undefined){
		title = "提示"
	}
	//创建弹出框标题
	var h1 = popup.create("h1")
	h1.innerHTML = title
	//循环创建弹出框标题的样式
	for(var i in popup.style.popup_h1) { 
		h1.style.cssText += i + " : " + popup.style.popup_h1[i] + " ; ";
	}
	//在弹出框内容区域中添加标题
	div.appendChild(h1)
	//创建弹出框的内容
	var p = popup.create("p")
	//判断内容是否为空，如果为空则默认为空
	if(str == undefined){
		str = ""
	}
	p.innerHTML = str
	//循环创建弹出框内容的样式
	for(var i in popup.style.alert_p) { 
		p.style.cssText += i + " : " + popup.style.alert_p[i] + " ; ";
	}
	div.appendChild(p)
	//创建弹出框的按钮
	var btn = popup.create("button")
	//判断按钮的内容是否为空，如果为空则默认为确定
	if(btnTitle == undefined){
		btnTitle = "确定"
	}
	btn.innerHTML = btnTitle
	//判断确定按钮的字体颜色是否自定义，如果否则默认白色
	if(popup.custom.buttonColor[0] != "" || popup.custom.buttonColor[0] != undefined){
		popup.style.alert_btn.color = popup.custom.buttonColor[0]
	}
	////判断确定按钮的背景颜色是否自定义，如果否则默认灰色
	if(popup.custom.submitButton != null || popup.custom.submitButton != undefined){
		popup.style.alert_btn.background = popup.custom.submitButton
	}
	//循环创建弹出框按钮的样式
	for(var i in popup.style.alert_btn) { 
		btn.style.cssText += i + " : " + popup.style.alert_btn[i] + " ; ";
	}
	div.appendChild(btn)
	//判断自定义背景是否存在，不存在则默认为白色
	if(popup.custom.contBackColor != null || popup.custom.contBackColor != undefined){
		popup.style.popup_div.background = popup.custom.contBackColor
	}
	//循环创建弹出框区域的样式
	for(var i in popup.style.popup_div) { 
		div.style.cssText += i + " : " + popup.style.popup_div[i] + " ; ";
	}
	popup.fn(".popup").appendChild(div)
	
	popup.fn(".popup button",0).addEventListener("click",function(){
		
		if(successFn != undefined){
			successFn()
		}
		popup.fn("body").removeChild(popup.fn(".popup"))
	})
}
//确定对话框
popup.confirm = function(str,successFn,clearFn,title,btnTitle,clearTitle){
	if(popup.fn(".popup") != undefined){
		return false;
	}
	popup.createCont()
	//创建弹出框内容区域
	var div = popup.create("div")
	//判断是否修改弹出框标题，如果不提交则默认为提示
	if(title == undefined){
		title = "提示"
	}
	//创建弹出框标题
	var h1 = popup.create("h1")
	h1.innerHTML = title
	//循环创建弹出框标题的样式
	for(var i in popup.style.popup_h1) { 
		h1.style.cssText += i + " : " + popup.style.popup_h1[i] + " ; ";
	}
	div.appendChild(h1)
	//创建弹出框的内容
	var p = popup.create("p")
	//判断内容是否为空，如果为空则默认为空
	if(str == undefined){
		str = ""
	}
	p.innerHTML = str
	//循环创建弹出框内容的样式
	for(var i in popup.style.alert_p) { 
		p.style.cssText += i + " : " + popup.style.alert_p[i] + " ; ";
	}
	div.appendChild(p)
	//判断自定义背景是否存在，不存在则默认为白色
	if(popup.custom.contBackColor != null || popup.custom.contBackColor != undefined){
		popup.style.popup_div.background = popup.custom.contBackColor
	}
	//循环创建弹出框内容的样式
	for(var i in popup.style.popup_div) { 
		div.style.cssText += i + " : " + popup.style.popup_div[i] + " ; ";
	}
	div.className = "confirm"
	popup.fn(".popup").appendChild(div)
	var div = popup.create('div')
	//创建弹出对话框确定按钮
	var btn = popup.create("button")
	//判断确定按钮内容是否为空，如果是则默认确定
	if(btnTitle == undefined){
		btnTitle = "确定"
	}
	btn.innerHTML = btnTitle
	//判断按钮的字体颜色是否自定义，如果否则默认白色
	if(popup.custom.buttonColor !=undefined){
		//判断确定按钮的字体颜色是否自定义，如果否则默认白色
		if(popup.custom.buttonColor[0] != "" || popup.custom.buttonColor[0] != undefined){
			popup.style.alert_btn.color = popup.custom.buttonColor[0]
		}
	}
	//判断确定按钮的背景颜色是否自定义，如果否则默认灰色
	if(popup.custom.submitButton != null || popup.custom.submitButton != undefined){
		popup.style.alert_btn.background = popup.custom.submitButton
	}
	//循环设置确定按钮的样式
	for(var i in popup.style.alert_btn) { 
		btn.style.cssText += i + " : " + popup.style.alert_btn[i] + " ; ";
	}
	div.appendChild(btn)
	//创建弹出框取消按钮
	var cBtn = popup.create("button")
	//判断取消按钮内容是否为空，如果是则默认取消
	if(clearTitle == undefined){
		clearTitle = "取消"
	}
	cBtn.innerHTML = clearTitle
	//判断按钮的字体颜色是否自定义，如果否则默认白色
	if(popup.custom.buttonColor !=undefined){
		//判断确定按钮的字体颜色是否自定义，如果否则默认白色
		if(popup.custom.buttonColor[1] != "" || popup.custom.buttonColor[1] != undefined){
			popup.style.alert_clear_btn.color = popup.custom.buttonColor[1]
		}
	}
	//判断确定按钮的背景颜色是否自定义，如果否则默认灰色
	if(popup.custom.clearButton != null || popup.custom.clearButton != undefined){
		popup.style.alert_clear_btn.background = popup.custom.clearButton
	}
	//循环设置取消按钮的样式
	for(var i in popup.style.alert_clear_btn) { 
		cBtn.style.cssText += i + " : " + popup.style.alert_clear_btn[i] + " ; ";
	}
	div.appendChild(cBtn)
	//创建按钮组
	div.className = "buttons"
	div.style.cssText = "display: flex;"
	popup.fn(".popup .confirm").appendChild(div)
	//创建监听事件，监听是否点击确定按钮，如果是则触发事件
	popup.fn(".popup .confirm button",0).addEventListener("click",function(){
		successFn()
		if(successFn != undefined){
			popup.fn("body").removeChild(popup.fn(".popup"))
		}
	})
	//创建监听事件，监听是否点击取消按钮，如果是则触发事件
	popup.fn(".popup .confirm button",1).addEventListener("click",function(){
		clearFn()
		if(clearFn != undefined){
			popup.fn("body").removeChild(popup.fn(".popup"))
		}
	})
}
popup.createCont = function(){
	if(popup.fn(".popup") != undefined){
		return false;
	}
	var div = popup.create("div"),
		props = "";
	div.className = "popup"
	for(var p in popup.style.popup) { 
		div.style.cssText += p + " : " + popup.style.popup[p] + " ; ";
	} 
	document.body.appendChild(div)
}
	