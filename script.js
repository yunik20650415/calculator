let expression="";

// For getting displaying and getting data
document.getElementById("one").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+1;
    document.getElementById("expression").value=expression;
}
document.getElementById("two").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+2;
    document.getElementById("expression").value=expression;
}
document.getElementById("three").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+3;
    document.getElementById("expression").value=expression;
}
document.getElementById("four").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+4;
    document.getElementById("expression").value=expression;
}
document.getElementById("five").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+5;
    document.getElementById("expression").value=expression;
}
document.getElementById("six").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+6;
    document.getElementById("expression").value=expression;
}
document.getElementById("seven").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+7;
    document.getElementById("expression").value=expression;
}
document.getElementById("eight").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+8;
    document.getElementById("expression").value=expression;
}
document.getElementById("nine").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+9;
    document.getElementById("expression").value=expression;
}
document.getElementById("plus").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+"+";
    document.getElementById("expression").value=expression;
}
document.getElementById("minus").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+"-";
    document.getElementById("expression").value=expression;
}
document.getElementById("divide").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+"/";
    document.getElementById("expression").value=expression;
}
document.getElementById("clear").onclick=function(){
    expression =document.getElementById("expression").value;
    expression="";
    document.getElementById("expression").value=expression;
}
document.getElementById("dot").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+".";
    document.getElementById("expression").value=expression;
}
document.getElementById("zero").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+"0";
    document.getElementById("expression").value=expression;
}
document.getElementById("star").onclick=function(){
    expression =document.getElementById("expression").value;
    expression=expression+"*";
    document.getElementById("expression").value=expression;
}
document.getElementById("equals_to").onclick=function result(){
    expression =document.getElementById("expression").value;
    document.getElementById("expression").value=eval(expression);
    expression=eval(expression);
}
