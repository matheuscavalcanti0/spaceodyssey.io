var tela=0, xpers=5,ypers=210,rpers=25
var img,img1,imginst,imgpont,img2,img3,imglua,imgmarte,imgobs
var img4,img5,imgfim, imglogo
//variaveis da fase1
var xlua=490,ylua=95,rlua=40 ,xobj1=490,yobj1=305,robj1=48//fase1
var xrectmenu=210,yrectmenu=65, yrectmenu2=260//quadrado do menu
//variaveis para fase 2
var xterra=490,yterra=310,rterra=45, img6
var xobj2=490,yobj2=95,robj2=45
//variaveis fase 4
var img8,xjup=450,yjup=90,rjup=65
var xne=450, yne=305

var larguramenu=200, alturamenu=50
var opçao=1,obstx=[], obsty=[],qtd=1, vida=3
//fase 3
var plan1x=490,plan1y=105,rplan=40,plan2x=490,plan2y=205 
//variaveis fase3
var urx=470,ury=75,rur=55,venx=500,veny=280,rven=45
// variaveis da introdução
var navex=270,navey=220,naver=25, vx=50,vy=75,rv=55
var lx=430,ly=100,rl=30, tx=260,ty=85,rt=45
var nx=420, ny=325,rn=60,jx=220,jy=325,rj=65
var mx=60,my=345,rm=45, sx=560,sy=180,rs=60

function setup() {
  createCanvas(590, 460);
   for(i = 0; i < 10; i++){
    obsty[i] = random(10,350);
    obstx[i] = random(500,600);

  }
   }




function preload(){
  img=loadImage('menu1.png') //imagem do menu
  imginst=loadImage('instru.jpg')//image das instruções
  img1=loadImage('espaço.jpg')//imagem do background fases 1 e 2
  imgpont=loadImage('opção.jpg')//ponteiro do menu
  img2=loadImage('fase1.jpg')//fase1
  img3=loadImage('nave1.png')//nave do game
  imglua=loadImage('lua.png')//imagem da lua fase 1
  imgmarte=loadImage('marte.png')//imagem de marte
  imgobs=loadImage('meteoros.png')
  img4=loadImage('urano.png')//imagem da fase 3
  img5=loadImage('venus.png')//imagem da fase 3
  imgfim=loadImage('gameover.png')//tela final perdeu
  img6=loadImage('terra.png')//terra da fase 2
  img8=loadImage('jupiter.png')//jupiter fase 4
  imgfinal=loadImage('winner.png')// imagem final
  imglogo=loadImage('logo.png')//logo do credito
}




function draw(){
  background(220);
  if (tela==0){
      menu()}
 
  if(tela==1){
    info();
     movimento();}
  
  if(tela==2){
    instruções()
  }
  if(tela==3){
    creditos()
  }
  if(tela==4){
    fase1();
    movimento();
    obs();
    qtd=2
  }
  if(tela==5){
    fase2();
    movimento();
    obs();
    qtd=4
  }
  else if(tela==6){
    fase3();
    movimento();
    obs();
    qtd=6
  }
  else if(tela==7){
    fase4();
    movimento();
    obs()
    qtd=8
  
  }
  else if(tela==8){
    fase5();
    movimento();
    obs()
    qtd=10
  
  }
  else if(tela==9){
    gameover();
  }
  else if(tela==10){
    vencedor();
  }
  else if(tela==11){
    introdução();
    movimento2();
  }
}



//movimentação do personagem
function movimento(){
  if(keyIsDown(LEFT_ARROW)){
    xpers=xpers-2
  }
  if(keyIsDown(RIGHT_ARROW)){
    xpers=xpers+2
  }
  if(keyIsDown(UP_ARROW)){
    ypers=ypers-2
  }
  if(keyIsDown(DOWN_ARROW)){
    ypers=ypers+2
  } 
}

function movimento2(){
   if(keyIsDown(LEFT_ARROW)){
    navex=navex-2
  }
  if(keyIsDown(RIGHT_ARROW)){
    navex=navex+2
  }
  if(keyIsDown(UP_ARROW)){
    navey=navey-2
  }
  if(keyIsDown(DOWN_ARROW)){
    navey=navey+2
  } 
}
//ponteiro do menu
function keyPressed(){
  if(key=="ArrowUp" && yrectmenu>150){
      yrectmenu=yrectmenu-100
      opçao=opçao-1 
  }
  if(key=="ArrowDown" && yrectmenu<220){
      yrectmenu=yrectmenu+100
      opçao=opçao+1
   }
  if(key=="Enter"){
    tela=opçao}

}




// Codico do menu do jogo 
function menu(){
    background(img,0);
  //retangulo para selecionar a tela
  fill(255, 204, 0)
  rect(imgpont,xrectmenu,yrectmenu,larguramenu,alturamenu,20)
  image(imgpont,xrectmenu,yrectmenu,larguramenu,alturamenu,20)
  fill(233,495,67);
    textSize(26);
    text('JOGAR ', 250, 100)
  //detalhes do texto abaixo
    fill(233,495,67);
    textSize(26);
    text('INSTRUÇÕES', 230, 200);
    text('CREDITOS', 230, 300);
 }




//Instruções do jogo tela 2
function instruções(){
  background(img2,120)
  if(keyIsDown(27)){
    tela=0
  }
   fill(233,495,67)
  textSize(50)
  text('INSTRUÇÕES',97,40)
  fill(233,495,67)
  textSize(17)
  text('>> USE AS SETAS DO TECLADO PARA MOVIMENTAR A NAVE',10,100)
  text('>> LEIA AS PERGUNTAS E ESCOLHA O PLANETA CORRETO',10,140)
  text('>> O JOGADOR COMEÇA COM 3 VIDAS',10,180)
  text('>> SE FOR ATINGIDO POR UM METEORO, PERDE UMA VIDA',10,220)
  text('>> OS METEOROS NAO IRÃO PARAR EM NENHUM MOMENTO',10,260)
  text('>> APENAS 5 DOS 8 PLANETAS ESTÃO NO JOGO',10,300)
  
  
}

function creditos(){
  if(keyIsDown(27)){
    tela=0
  }
  background(img2,120)
  fill(233,495,67)
 
  textSize(15)
  text('§ Diretor criativo --> Matheus Cavalcanti',10,100)
  text('§ direção de arte --> Matheus Cavacanti',10,140)
  text('§ design do menu --> Matheus Cavalcanti',10,180)
  text('§ design do objetos --> Matheus Cavalcanti',10,220)
  text('§ design de personagem --> Matheus Cavalcanti',10,260)
  text('§ arte de marte --> Artista desconhecido',10,295)
  text('§ arte dos planetas --> Matheus Cavalcanti',10,329)
  text('§ Desenvolvedor --> Matheus Cavalcanti',10,360)
  text('JOGO EDUCACIONAL ECT/UFRN',190 ,400)
  text('§ Arte do menu --> imagem do google',330,100)
  text('§ direção de texto --> M.Cavalcanti',330,140)
  ellipse(imglogo,250,1,100,100)
  image(imglogo,250,1,110,110)
  
}



//informações da primeira fase(IMPORTANTE PARA O OBJETIVO DO JOGO)
//TELA 1
function info(){
  if(keyIsDown(27)){
    tela=0
  }
  background(img1,22)
  fill(233,495,67)
  textSize(25)
  text('O Sistema Solar compreende o conjunto constituído .',10,40)
  text('pelo Sol e todos os corpos celestes que estão sob ',10,65)
  text('seu domínio gravitacional',10,90)
  text('A estrela central, maior componente do sistema,',10,115)
  text('respondendo por mais de 99,85% da massa total,',10,140)
  text('O sistema Solar possui 8 planetas conhecidos.',10,165)
  text('Temos gigantes gasosos e planetas rochosos',10,190)
  text('Alem de ter cinco planetas anões',10,215)
  text('E varias luas e outros objetos espacias',10,240)
  text('Você é capaz de identificar alguns planetas ou luas?',10,270)
  text('tente nao ser pego por um asteroide ;D',10,300)
  
  textSize(25)
  text('clique espaço para continuar',98,400)
  if(keyIsDown(32)){
    tela=11
  }
}

//tela 11
function introdução(){
  if(keyIsDown(49)){
    tela=4
  }
   if(keyIsDown(27)){
    tela=0
  }
  background(img2,22)
  fill(233,495,67)
  textSize(20)
  text('>>',520,240)
   fill(233,495,67)
   textSize(15)
   text('Antes de começarmos a nossa viagem,vamos conhecer alguns planetas e satelites;',10,40)
   text('navegue até os Planetas e conheça algumas curiosidades e entao siga em frente "Start"',10,60)
  // nave
    ellipse(img3,navex,navey,30,30)
    image(img3,navex,navey,30,30)
  //colisão venus
   if(dist(vx,vy,navex,navey)<(rv + naver)){
     ellipse(img5,vx,vy,2*rv,2*rv)
     image(img5,vx,vy,2*rv,2*rv)
     fill(233,495,67);
     textSize(14);
     text('VENUS: 2º PLANETA DO SISTEMA SOLAR, ORBITA O SOL A  CADA 224.7 DIAS',12,250)
   }else{
     ellipse(img5,vx,vy,2*rv,2*rv)
     image(img5,vx,vy,2*rv,2*rv)
   }
  // colisão lua
  if(dist(lx,ly,navex,navey)<(rl + naver)){
    ellipse(imglua,lx,ly,2*rl,2*rl)
    image(imglua,lx,ly,2*rl,2*rl)
     fill(233,495,67);
     textSize(15);
     text('LUA: ÚNICO SATÉLITE NATURAL DA TERRA',110,250)
  }else{
    ellipse(imglua,lx,ly,2*rl,2*rl)
    image(imglua,lx,ly,2*rl,2*rl)
  }
  //colisão Jupiter
  if(dist(jx,jy,navex,navey)<(rj + naver)){
    ellipse(img8,jx,jy,2*rj,2*rj)
    image(img8,jx,jy,2*rj,2*rj)
     fill(233,495,67);
     textSize(16);
     text('JUPITER: O MAIOR PLANETA DO SISTEMA SOLAR',100,250)
  }else{
     ellipse(img8,jx,jy,2*rj,2*rj)
    image(img8,jx,jy,2*rj,2*rj)
  }
  // colisão Terra
  if(dist(tx,ty,navex,navey)<(rt + naver)){
    ellipse(img6,tx,ty,2*rt,2*rt)
    image(img6,tx,ty,2*rt,2*rt)
     fill(233,495,67);
     textSize(15);
     text('TERRA: TERCEIRO MAIS PROXIMO DO SOL, HABITADO POR HUMANOS',20,250)
  }else{
    ellipse(img6,tx,ty,2*rt,2*rt)
    image(img6,tx,ty,2*rt,2*rt)
  }
  //colisão marte
  if(dist(mx,my,navex,navey)<(rm + naver)){
    ellipse(imgmarte,mx,my,2*rm,2*rm)
    image(imgmarte,mx,my,2*rm,2*rm)
     fill(233,495,67);
     textSize(15);
     text('MARTE: SEGUNDO MENOR PLANETA DO SISTEMA SOLAR',80,250)
  }else{
    ellipse(imgmarte,mx,my,2*rm,2*rm)
    image(imgmarte,mx,my,2*rm,2*rm)
  }
  //colisão netuno
  if(dist(nx,ny,navex,navey)<(40 + naver)){
    ellipse(img4,nx,ny,2*rn,2*rn)
    image(img4,nx,ny,2*rn,2*rn)
    fill(233,495,67);
     textSize(15);
     text('NETUNO: O ÚTIMO PLANETA DO SISTEMA SOLAR',100,250)
  }else{
    ellipse(img4,nx,ny,2*rn,2*rn)
    image(img4,nx,ny,2*rn,2*rn)
    
  }
  //start
  if(dist(sx,sy,navex,navey)<(rs + naver)){
    ellipse(imgpont,sx,sy,2*rs,2*rs)
    image(imgpont,sx,sy,2*rs,2*rs)
       tela=4
  }else{
    ellipse(imgpont,sx,sy,2*rs,2*rs)
    image(imgpont,sx,sy,2*rs,2*rs)
    
  }
  
}



// fase 1 do jogo TELA 4
function fase1(){ 
  background(img2,0)
  fill(300)
  ellipse(img3,xpers,ypers,30,30)
  image(img3,xpers,ypers,30,30)
   if(keyIsDown(27)){
    tela=0}
  fill(233,495,67);
    textSize(15);
text('FASE 1:ÚNICO SATÉLITE NATURAL DA TERRA E O QUINTO MAIOR DO SISTEMA SOLAR.', 15, 35);
text('MISSÃO: IDENTIFIQUE A LUA',15,55)

  
  //colisão 1 entre objetos principais
  if(dist(xlua,ylua,xpers,ypers)<(rlua + rpers)){
  fill(233,495,67)
  ellipse(xlua,ylua,2*rlua,2*rlua)
    tela=5
    xpers=50;
    ypers=230
  }else{
  fill(300)
  ellipse(imglua,xlua,ylua,2*rlua,2*rlua)
    image(imglua,xlua,ylua,2*rlua,2*rlua)
    }
  if(dist(xobj1,yobj1,xpers,ypers)<(robj1+rpers)){
    fill(233,495,67)
    ellipse(img5,xobj1,yobj1,2*robj1,2*robj1)
    image(img5,xobj1,yobj1,2*robj1,2*robj1)
    fill(233,495,67)
    textSize(20)
    text('VOCÊ PERDEU, TENTE NOVAMENTE',95,200)
    if(keyIsDown(LEFT_ARROW)||keyIsDown(UP_ARROW)){
     xpers=50;
     ypers=230}
  }else{
  fill(300)
  ellipse(img5,xobj1,yobj1,2*robj1,2*robj1)
    image(img5,xobj1,yobj1,2*robj1,2*robj1)
    }
//
}
  

//fase 2 do jogo Tela 5
function fase2(){
   if(keyIsDown(27)){
    tela=0
  }
  background(img2,45)
  ellipse(img3,xpers,ypers,30,30)
  image(img3,xpers,ypers,30,30)
    fill(233,495,67);
    textSize(15);
    text('FASE 2: O SISTEMA SOLAR POSSUI 8 PLANETAS CONHECIDOS .', 15, 35);
    text('MISSÃO: QUAL É O TERCEIRO PLANETA DO SISTEMA SOLAR',15,55)
  //colisão 1 entre objetos principais
  if(dist(xobj2,yobj2,xpers,ypers)<(robj2 + rpers)){
  fill(300)
  ellipse(imgmarte,xobj2,yobj2,2*robj2,2*robj2)
    image(imgmarte,xobj2,yobj2,2*robj2,2*robj2)
     fill(233,495,67)
    textSize(20)
    text('VOCÊ PERDEU, TENTE NOVAMENTE',95,200)
    if(keyIsDown(LEFT_ARROW)||keyIsDown(UP_ARROW)){
     xpers=50;
    ypers=230}
   }else{
  fill(300)
  ellipse(imgmarte,xobj2,yobj2,2*robj2,2*robj2)
     image(imgmarte,xobj2,yobj2,2*robj2,2*robj2)
    }
  if(dist(xterra,yterra,xpers,ypers)<(rterra+rpers)){
    fill(300)
    ellipse(img6,xterra,yterra,2*rterra,2*rterra)
     image(img6,xterra,yterra,2*rterra,2*rterra)
    tela=6
    xpers=50;
    ypers=230
  }else{
  fill(300)
  ellipse(img6,xterra,yterra,2*rterra,2*rterra)
  image(img6,xterra,yterra,2*rterra,2*rterra)
    } 
}


//fase 3 tela 6 venus
function fase3(){
  if(keyIsDown(27)){
    tela=0
  }
  background(img2,45);
  ellipse(img3,xpers,ypers,30,30)
  image(img3,xpers,ypers,30,30)
  //pergunta
   fill(233,495,67);
    textSize(15);
    text('FASE 3: 2º PLANETA DO SISTEMA SOLAR, ORBITA O SOL A  CADA 224.7 DIAS.', 15, 35);
    text('MISSÃO: IDENTIFIQUE O PLANETA VÊNUS',15,55)
  //planetas
  if(dist(urx,ury,xpers,ypers)<(rur + rpers)){
  fill(300)
  ellipse(img4,urx,ury,2*rur,2*rur)
  image(img4,urx,ury,2*rur,2*rur)
    fill(233,495,67)
    textSize(20)
    text('VOCÊ PERDEU, TENTE NOVAMENTE',95,200)
    if(keyIsDown(LEFT_ARROW)||keyIsDown(UP_ARROW)){
     xpers=50;
    ypers=230}
    
  }else{
  fill(300)
  ellipse(img4,urx,ury,2*rur,2*rur)
  image(img4,urx,ury,2*rur,2*rur)
    }
  if(dist(venx,veny,xpers,ypers)<(rven+rpers)){
    fill(300)
    ellipse(img5,venx,veny,2*rven,2*rven)  
    image(img5,venx,veny,2*rven,2*rven)
    tela=7
    xpers=50;
    ypers=230
  
  }else{
  fill(300)
  ellipse(img5,venx,veny,2*rven,2*rven)
    image(img5,venx,veny,2*rven,2*rven)
  
}
 }
//tela7
function fase4(){
   if(keyIsDown(27)){
    tela=0
  }
  background(img2,45);
  ellipse(img3,xpers,ypers,30,30)
  image(img3,xpers,ypers,30,30)
   //pergunta
   fill(233,495,67);
    textSize(15);
    text('FASE 4:É UM PLANETA GASOSO E O MAIOR DO SISTEMA SOLAR', 15, 35);
    text('MISSÃO: IDENTIFIQUE O GIGANTE GASOSO JUPITER',15,55)
 //colisão 1 entre objetos principais
  if(dist(xjup,yjup,xpers,ypers)<(rjup + rpers)){
  fill(233,495,67)
  ellipse(img8,xjup,yjup,2*rjup,2*rjup)
    image(img8,xjup,yjup,2*rjup,2*rjup)
    tela=8
    xpers=50;
    ypers=230
  }else{
  fill(300)
  ellipse(img8,xjup,yjup,2*rjup,2*rjup)
    image(img8,xjup,yjup,2*rjup,2*rjup)
    }
  if(dist(xne,yne,xpers,ypers)<(rur+rpers)){
    fill(233,495,67)
    ellipse(img4,xne,yne,2*rur,2*rur)
    image(img4,xne,yne,2*rur,2*rur)
    fill(233,495,67)
    textSize(20)
    text('VOCÊ PERDEU, TENTE NOVAMENTE',95,200)
    if(keyIsDown(LEFT_ARROW)||keyIsDown(UP_ARROW)){
     xpers=50;
     ypers=230}
  }else{
  fill(300)
  ellipse(img4,xne,yne,2*rur,2*rur)
    image(img4,xne,yne,2*rur,2*rur)
    }
}

//tela 8
function fase5(){
   if(keyIsDown(27)){
    tela=0
  }
  background(img2,45);
  ellipse(img3,xpers,ypers,30,30)
  image(img3,xpers,ypers,30,30)
   //pergunta
   fill(233,495,67);
    textSize(15);
    text('FASE 5:SEGUNDO MENOR PLANETA DO SISTEMA SOLAR', 15, 35);
    text('MISSÃO: IDENTIFIQUE O PLANETA MARTE',15,55)
  //colisão 1 entre objetos principais
  if(dist(xlua,ylua,xpers,ypers)<(45 + rpers)){
  fill(233,495,67)
  ellipse(img6,xlua,ylua,2*45,2*45)
    fill(233,495,67)
    textSize(20)
    text('VOCÊ PERDEU, TENTE NOVAMENTE',95,200)
     if(keyIsDown(LEFT_ARROW)||keyIsDown(UP_ARROW)){
      tela=8
    xpers=50;
    ypers=230}
  }else{
  fill(300)
  ellipse(img6,xlua,ylua,2*45,2*45)
    image(img6,xlua,ylua,2*45,2*45)
    }
  if(dist(xobj1,yobj1,xpers,ypers)<(robj1+rpers)){
    fill(233,495,67)
    ellipse(imgmarte,xobj1,yobj1,2*robj1,2*robj1)
    image(imgmarte,xobj1,yobj1,2*robj1,2*robj1)
    tela=10
  }else{
  fill(300)
  ellipse(imgmarte,xobj1,yobj1,2*robj1,2*robj1)
    image(imgmarte,xobj1,yobj1,2*robj1,2*robj1)
    }
  
}

function obs(){
//meteoros
  for(i=0;i<qtd;i++){ 
  ellipse(imgobs,obstx[i],obsty[i],30,30);
   image(imgobs,obstx[i],obsty[i], 40, 40);
    obstx[i]=obstx[i]-4;
    if(obstx[i]<-50){
      obsty[i] = random(10,350);
      obstx[i] = random(500,600);
    }
  }
    for(i = 0; i < qtd; i++){
      dir = (xpers+40) > obstx[i];
      esq = (xpers-20) < (obstx[i] + 40);
      topo = (ypers+30) > (obsty[i]+18);
      base = (ypers+10) < (obsty[i]+20 );
    if(dir && topo && base && esq){
       obstx[i]=-50;
       vida=vida-1
       xpers= 50 
       ypers=230
    }
      if(vida==0){
        tela=9
      }
  }
  
}
//tela 10
function vencedor(){
   if(keyIsDown(27)){
    tela=0
  }
  background(imgfinal,0)
}
//tela9
function gameover(){
   if(keyIsDown(27)){
    tela=0
  }
  background(imgfim,0)
}


//referncia da imagem (lua.png)
//imagem da lua <a href='htttps://.pngtree.com/so/modelo-de-c4d'>modelo de c4d png de pngtree.com</a>