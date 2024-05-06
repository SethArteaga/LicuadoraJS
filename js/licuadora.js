let licuadora = document.getElementById('blender');
let sonidoLicuadora = document.getElementById('blender-sound');
let BtnLicuadora = document.getElementById('blender-button-sound');


let encendido = false;

function controlLicuadora(){

    if(!encendido){
        encendido = true;
        useSounds();
        licuadora.classList.add('active');
    }else{
        encendido = false;
        useSounds();
        licuadora.classList.remove('active');
    }
   
}

function useSounds(){
    if(sonidoLicuadora.paused){
        BtnLicuadora.play();
        sonidoLicuadora.play();
    }else{
        BtnLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}