let userInput= document.querySelector(".input-box");
 userInput.max= new Date().toISOString().split("T")["0"];

 let btn= document.querySelector(".math-btn");
 let result=document.querySelector(".answer");

 btn.addEventListener("click", function(){
 let birthDate= new Date(userInput.value);

 let d1= birthDate.getDate();
 let m1= birthDate.getMonth() + 1;
 let y1= birthDate.getFullYear();

 let today= new Date()

let d2=today.getDate();
let m2=today.getDate()+1;
let y2=today.getFullYear();

let y3= y2-y1;

if(m2>=m1){
    m3=m2-m1
}
else{
    y3--
    m3= 12+y2-y1;
}

if(d2>=d1){
  d3=d2-d1;

}
else{
    m3--
    d3=new Date(y3,m3,0).getDate()+d2-d1;

}
if(m3<0){
    m3=11;
    y3--;
}


result.innerHTML=`you are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days old`;

 });