function toggleMode(){
 const html=document.documentElement
 html.classList.toggle('light')
 
 //pegar a tag img
 const img=document.querySelector("#profile img")
 
 //subistituir a imagem
 if (html.classList.contains('light')){
   img.setAttribute('src', './assets/foto 2.png')
   alt="Foto do rosto, pegando o cabelo e mostrando a barba"
}

else {
    img.setAttribute('src', './assets/foto 1 do projeto.png')
    alt="foto de meio corpo,de moletom como braço segurando o celular em frente ao rosto"
 }
 //se tiver sem ligh mode, manter a imagem normal

}