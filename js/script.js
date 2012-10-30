var score1=0;
var score2=0;
function plus1() {score1++;update();}
function minus1(){score1--;update();}
function plus2() {score2++;update();}
function minus2(){score2--;update();}
function reset() {score1=0;score2=0;update();}
function clear1() {score1=0;update();}
function clear2() {score2=0;update();}
function update()
{
document.getElementById("score1").innerHTML=score1;
document.getElementById("score2").innerHTML=score2;
}