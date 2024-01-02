//this method is no scalable

// document.getElementById('---').onclick=function(){
//     alert("owl click")
// }

//type,timeStamp,defaultPrevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode
document.getElementById('---').addEventListener('click',function(e){

},false);

//event propogation
//++++++++++++++++++++++++++++++++++++++++++++ 
//1)event bubbling-(most Used->false)
// 2)event capturing

//ex--><ul id="images"><li id+"owl"> image of owl</li></ul>
//hamne event listern lagaya pehle id image liya phir id owl liya,jab function me false hoga bubbling hoga pehlr owl vala hoga phir images vala,, agar true hota to capturing hota pehle image hota phir owl hota
// agr hame rokna ho age badne se to ham e.stopPropogationa()laga sakte hai


//e.preventdeault()

//++++++++++++++++++++++++++++++++++++++++++++
//ek ques hai ki ul tag hai id=images hai uske 50 li tag hai usme images hai ..hamko ye karna hai ki jisme bhi click kare vo remove ho jaye

// document.querySelector("images").addEventListener("click",function(e){
// let removeIt=e.target.parentNode;
// removeIt.remove()
// },false)