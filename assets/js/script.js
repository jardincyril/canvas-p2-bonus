var c = document.getElementById("logo");
var ctx = c.getContext("2d");
ctx.beginPath();
// lettre E
ctx.moveTo(160,75);
ctx.lineTo(60,75);
ctx.lineTo(50,250)
ctx.lineTo(150,250);
ctx.moveTo(55,160);
ctx.lineTo(140,160);
// lettre N
ctx.moveTo(310,250);
ctx.lineTo(310,75);
ctx.lineTo(460,250);
ctx.lineTo(460,75);
ctx.lineWidth="5";
ctx.strokeStyle="black";
ctx.stroke();
// nombre 1
ctx.beginPath();
ctx.lineWidth="10";
ctx.strokeStyle="#ea4e1d";
ctx.moveTo(160,75);
ctx.quadraticCurveTo(480,-105,120,380);
ctx.moveTo(120,380);
ctx.quadraticCurveTo(225,315,280,310);
ctx.stroke();
// Hexagone 1
ctx.beginPath();
ctx.moveTo(560,70);
ctx.lineTo(580,85);
ctx.lineTo(580,110);
ctx.lineTo(560,125);
ctx.lineTo(540,110);
ctx.lineTo(540,85);
ctx.lineTo(562,70);
ctx.lineWidth="5";
ctx.fillStyle="rgb(235,235,235)";
ctx.fill();
// Hexagone 2
ctx.beginPath();
ctx.moveTo(540,120);
ctx.lineTo(560,135);
ctx.lineTo(560,160);
ctx.lineTo(540,175);
ctx.lineTo(520,160);
ctx.lineTo(520,135);
ctx.lineTo(542,120);
ctx.fillStyle="rgb(219,218,219)";
ctx.fill();
// Hexagone 3
ctx.beginPath();
ctx.moveTo(590,120);
ctx.lineTo(610,135);
ctx.lineTo(610,160);
ctx.lineTo(590,175);
ctx.lineTo(570,160);
ctx.lineTo(570,135);
ctx.lineTo(592,120);
ctx.fillStyle="rgb(89,86,86)";
ctx.fill();
// Hexagone 4
ctx.beginPath();
ctx.moveTo(560,170);
ctx.lineTo(580,185);
ctx.lineTo(580,210);
ctx.lineTo(560,225);
ctx.lineTo(540,210);
ctx.lineTo(540,185);
ctx.lineTo(562,170);
ctx.fillStyle="rgb(234,78,26)";
ctx.fill();
// Hexagone 5
ctx.beginPath();
ctx.moveTo(540,220);
ctx.lineTo(560,235);
ctx.lineTo(560,260);
ctx.lineTo(540,275);
ctx.lineTo(520,260);
ctx.lineTo(520,235);
ctx.lineTo(542,220);
ctx.fillStyle="rgb(135,135,135)";
ctx.fill();
// Hexagone multi
ctx.beginPath();
ctx.moveTo(590,220);
ctx.lineTo(610,235);
ctx.lineTo(610,260);
ctx.lineTo(590,275);
ctx.lineTo(570,260);
ctx.lineTo(570,235);
ctx.lineTo(592,220);
ctx.fillStyle="rgb(236,236,236)";
ctx.fill();
//Mini-Hexagone 1
ctx.beginPath();
ctx.moveTo(620,160);
ctx.lineTo(625,165);
ctx.lineTo(625,170);
ctx.lineTo(620,175);
ctx.lineTo(615,170);
ctx.lineTo(615,165);
ctx.lineTo(620,160)
ctx.lineWidth = 1;
ctx.fillStyle="rgb(164,164,164)";
ctx.fill();
//Mini-Hexagone 2
ctx.beginPath();
ctx.moveTo(616,145);
ctx.lineTo(621,150);
ctx.lineTo(621,155);
ctx.lineTo(616,160);
ctx.lineTo(611,155);
ctx.lineTo(611,150);
ctx.lineTo(616,145)
ctx.lineWidth = 1;
ctx.fillStyle="rgb(239,239,239)";
ctx.fill();
//Mini-Hexagone orange
ctx.beginPath();
ctx.moveTo(635,145);
ctx.lineTo(640,150);
ctx.lineTo(640,155);
ctx.lineTo(635,160);
ctx.lineTo(630,155);
ctx.lineTo(630,150);
ctx.lineTo(635,145)
ctx.lineWidth = 1;
ctx.fillStyle="rgb(234,78,26)";
ctx.fill();
//Texte
var textTop = 'École du Numérique';
var textBottom = 'du Noyonnais';
ctx.font = "20pt Verdana";
ctx.textAlign = "left";
ctx.fillStyle = "rgb(135,135,135)";
ctx.fillText(textTop,380,350);
ctx.fillText(textBottom,370,370);
