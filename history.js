
let sender=localStorage.getItem('key1');
let reciever=localStorage.getItem('key2');

let amount=localStorage.getItem('key3');
if(sender==null)
{
    sender="";
    reciever="";
    amount="";
}


localStorage.clear();

 var main=document.createElement("tr");
 var first=document.createElement("th");
 var firstc=document.createTextNode(sender);
 first.appendChild(firstc);

 var second=document.createElement("th");
 var secondc=document.createTextNode(reciever);
 second.appendChild(secondc);


 var third=document.createElement("th");
 var thirdc=document.createTextNode(amount);
 third.appendChild(thirdc);

 main.appendChild(first);
 main.appendChild(second);
 main.appendChild(third);
 
var mainctt=document.getElementById('thistory');

mainctt.appendChild(main);