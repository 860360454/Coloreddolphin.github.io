let x;
let camel;
let hddel;
let cableel;

document.getElementById("xbtn").onclick = function (){
x = document.getElementById("txtx").value;
x = Number(x);
 if (x >= 16){
  x = 950;
 }
 else if(x>=8){
  x = 240
 }
 else if(x>=4){
  x = 175
 }
 else{
  x = 0
 }
camel = document.getElementById( "cam" ).value;
camel = Number(camel)
camel *= 110
hddel = document.getElementById( "hdd" ).value;
hddel = Number(hddel)
 if (hddel>= 8) {
  hddel *= 112.5;
 }
 else if (hddel >= 6){
  hddel = 650;
 }
 else if (hddel >= 4 )
 hddel =325;
 else if (hddel >= 1) {
  hddel = 175;
 }
 else {
  hddel = 0;
 }
cableel = document.getElementById( "cable").value;
cableel = Number(cableel) 
let y = x + camel + hddel + cableel + 100 ;
document.getElementById("total").innerHTML += "-" + y ; 
}
document.getElementById("hikvision").onclick = function (){
  x = document.getElementById("txtx").value;
  x = Number(x);
 if (x >= 16){
  x = 950;
 }
 else if(x>=8){
  x = 425
 }
 else if(x>=4){
  x = 310
 }
 else{
  x = 0
 }

  camel = document.getElementById( "cam" ).value;
  camel = Number(camel)
  camel *= 82
  hddel = document.getElementById( "hdd" ).value;
  hddel = Number(hddel)
   if (hddel>= 8) {
    hddel *= 112.5;
   }
   else if (hddel >= 6){
    hddel = 650;
   }
   else if (hddel >= 4 )
   hddel =325;
   else if (hddel >= 1) {
    hddel = 175;
   }
   else {
    hddel = 0;
   }
  cableel = document.getElementById( "cable").value;
  cableel = Number(cableel) 
  let y = x + camel + hddel + cableel + 100 ;
  document.getElementById("total").innerHTML += "-" + y ; 
  }
  document.getElementById("mp8").onclick = function (){
    x = document.getElementById("txtx").value;
    x = Number(x);
   if (x >= 16){
    x = 950;
   }
   else if(x>=8){
    x = 425
   }
   else if(x>=4){
    x = 310
   }
   else{
    x = 0
   }
  
    camel = document.getElementById( "cam" ).value;
    camel = Number(camel)
    camel *= 170;
    hddel = document.getElementById( "hdd" ).value;
    hddel = Number(hddel)
     if (hddel>= 8) {
      hddel *= 112.5;
     }
     else if (hddel >= 6){
      hddel = 650;
     }
     else if (hddel >= 4 )
     hddel =325;
     else if (hddel >= 1) {
      hddel = 175;
     }
     else {
      hddel = 0;
     }
    cableel = document.getElementById( "cable").value;
    cableel = Number(cableel) 
    let y = x + camel + hddel + cableel + 100 ;
    document.getElementById("total").innerHTML += "-" + y ; 
  }
  document.getElementById("clearbtn").onclick = function(){
    location.reload();
  }
  document.getElementById("hikvision80").onclick = function (){
    x = document.getElementById("txtx").value;
    x = Number(x);
   if (x >= 16){
    x = 950;
   }
   else if(x>=8){
    x = 425
   }
   else if(x>=4){
    x = 310
   }
   else{
    x = 0
   }
  
    camel = document.getElementById( "cam" ).value;
    camel = Number(camel)
    camel *= 115
    hddel = document.getElementById( "hdd" ).value;
    hddel = Number(hddel)
     if (hddel>= 8) {
      hddel *= 112.5;
     }
     else if (hddel >= 6){
      hddel = 650;
     }
     else if (hddel >= 4 )
     hddel =325;
     else if (hddel >= 1) {
      hddel = 175;
     }
     else {
      hddel = 0;
     }
    cableel = document.getElementById( "cable").value;
    cableel = Number(cableel) 
    let y = x + camel + hddel + cableel + 100 ;
    document.getElementById("total").innerHTML += "-" + y ; 
    }
    

 
 

