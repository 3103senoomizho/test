document.write("<h2>JS演習上級<h2>")

//問１
document.write("問１")
document.write("<br>")


for(var a=1;a<=5;a++){
    for(var b=1;b<=5;b++){
        document.write("★");
    }document.write("<br>");
}
document.write("<br>")
document.write("<br>")
document.write("<br>")

//問２
document.write("問２")
document.write("<br>")


for(var c=1;c<=5;c++){
 for(var d=1;d<=5;d++){
     if(c%2==1){
        if(d%2==0){document.write("☆");}
        else{document.write("★")}
        }
     else if(c%2==0){
        if(d%2==0){document.write("★");}
        else{document.write("☆");}
        }
}document.write("<br>");
}
document.write("<br>")
document.write("<br>")
document.write("<br>")

//問３
document.write("問３")
document.write("<br>")


for(var e=0;e<5;e++){
 for(var f=1;f<=5;f++){
     if(e+1==f){document.write("☆");}
     else{document.write("★")}
 }document.write("<br>");
}
document.write("<br>")
document.write("<br>")
document.write("<br>")

//問４
document.write("問４")
document.write("<br>")


for(var g=1;g<=5;g++){
    for(var h=1;h<=g;h++){
    document.write("★");
}document.write("<br>");
}
document.write("<br>")
document.write("<br>")
document.write("<br>")

//問５
document.write("問５")
document.write("<br>")


for(var i=0;i<=4;i++){
  for(var j=1;j<=i+1;j++){
      if(i+1==j){document.write("☆");}
      else{document.write("★");}
  }document.write("<br>");
}






















