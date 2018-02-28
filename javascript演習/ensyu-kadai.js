//問１　半径5cm、7cm、10cmの面積
function Menseki(hankei,ritsu=3.14){
    return hankei*hankei*ritsu;
}

document.write(Menseki(5));
document.write("<br>");
document.write(Menseki(7));
document.write("<br>");
document.write(Menseki(10));
document.write("<br>");

document.write("<br>")

//問２　

function totalRyokin(oNi,kNi,oRyo=500,kRyo=200){
    return (oRyo*oNi)+(kNi*kRyo)+"円です。";
}

document.write(totalRyokin(2,4));
document.write("<br>");
document.write(totalRyokin(1,5));
document.write("<br>");
document.write(totalRyokin(3,7));
document.write("<br>");