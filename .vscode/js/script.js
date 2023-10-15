function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector('#profile img') 
  
  //substituir a imagem
  if(html.classList.contains('light')) {
  //se tiver light mode, adicionar a imagem light
  img.setAttribute('src', './assets/avatar.png')
   } else {
  //se tiver sem light mode, manter a imagem atual
  img.setAttribute("src", "./assets/avatar.dark.png")
   }
  

    if (html.classList.contains("light")) {
      img.setAttribute("alt", "foto do Pedro em preto e branco, utilizando oculos e camisa preta, com a mão abaixo do queixo e com uma escada de fundo")
    } else {
      img.setAttribute("alt", "foto do Pedro em preto e branco vestindo um moletom preto, touca, e com a mão ao lado do rosto")
    }
}
