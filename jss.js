function changing(){
document.GetElementById("h1color").style.color= "blue";
document.GetElementById("h1color").font.size="70";
}

function variable(){
var a=1;
var b=4;
var b=7;
var c=3;
var prod=a*b*c;
document.GetElementById("sampleprod").innerHTML=prod;
}
function constant(){
	var age= 20;
	let comment;
	if (age <20){ comment="you are still a baby";}
	else {comment="you are getting old";}
	document.GetElementById("showup").innerHTML=comment;
}