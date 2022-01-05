
function keyPressed(){
    if(keyCode == RIGHT_ARROW){
        Orientation = 1;
        rana.changeAnimation("caminar",rana_caminando);
        rana.velocityY=-2;
        rana.velocityX=1;
        SaltoAlto = 0;
    }

    if (keyCode == LEFT_ARROW){
        Orientation = -1
        rana.changeAnimation("caminarizq",rana_caminandoizq);
        rana.velocityY=-2;
        rana.velocityX=-1;
        SaltoAlto = 0;
    }

    if (keyCode== UP_ARROW){
        SaltoAlto = 0;
        if(Orientation ==-1){
            rana.changeAnimation("saltoizq",rana_saltoizq);
            rana.velocityY=-10;
            rana.velocityX=-3;
        }
        if(Orientation ==1){
            rana.changeAnimation("salto",rana_salto);
            rana.velocityY=-10;
            rana.velocityX=3;
        }
    }
}

function keyReleased(){
    if(keyCode == RIGHT_ARROW){
        Orientation = 1;
        rana.changeAnimation("alto",rana_alto);
        rana.velocityX=0;
    }
    if(keyCode == LEFT_ARROW){
        Orientation = -1;
        rana.changeAnimation("altoizq",rana_altoizq);
        rana.velocityX=0;
    }    
    if(keyCode == UP_ARROW){
        SaltoAlto = 1;
    }
}

function saltoAlto(){
    if (rana.y >= 320 && SaltoAlto){
        if(Orientation == 1){
            rana.changeAnimation("alto",rana_alto);
            rana.velocityX=0;
        }
        if (Orientation == -1){
            rana.changeAnimation("altoizq",rana_altoizq);
            rana.velocityX=0;
        }
    }
}