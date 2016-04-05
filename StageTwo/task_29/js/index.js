/*
 验证：
   1.字符数为4~16位
   2.每个英文字母、数字、英文符号长度为1
   3.每个汉字，中文符号长度为2
 */
window.onload=function(){
	var input_v; //定义一个变量 获取需要验证的input的value
	//1.字符数为4~16位
	document.getElementById('verifyBtn1').onclick=function(){
		input_v=document.getElementById('txtName1').value;
		charsLength(input_v);
	};
	//2.不能为空
	document.getElementById('verifyBtn2').onclick=function(){
		input_v=document.getElementById('txtName2').value;
		charsNull(input_v);
	};
	//3.每个汉字，中文符号长度为2
	document.getElementById('verifyBtn3').onclick=function(){
		input_v=document.getElementById('txtName3').value;
		charsLength2(input_v);
	};
}
/*验证1：字符数为4~16位 */
function charsLength(v){
 	var reg=/^[a-zA-Z0-9\u4e00-\u9fa5]{4,16}$/;//长度为4~16个字符
// 	if(!reg.test(v)){
// 		document.getElementById('m1').innerHTML='必填，长度为4~16个字符';
// 	}else{
// 		document.getElementById('m1').innerHTML='OK  验证成功！';
// 	}
	var mgs=document.getElementById('m1');
	!reg.test(v)? mgs.innerHTML='必填，长度为4~16个字符'
	: mgs.innerHTML='OK  验证成功！';
}
/*姓名不能为空*/
function charsNull(v){
	var reg = /\S/;//要求不能为空
	var mgs=document.getElementById('m2');
	!reg.test(v)? mgs.innerHTML='姓名不能为空!'
	: mgs.innerHTML='OK  验证成功！';
}
/*每个汉字，中文符号长度为2*/
function charsLength2(v){
	var reg = /[\u4E00-\u9FA5]{2,7}/g; //要求必须包括2到6位 汉字
	var mgs=document.getElementById('m3');
	!reg.test(v)? mgs.innerHTML='名称格式不正确,请重新输入!'
	: mgs.innerHTML='OK  验证成功！';
}
