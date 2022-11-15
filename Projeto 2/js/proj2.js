/* reconhecer butons */
let escolha = document.querySelector('#select');
let chaveCript = document.getElementById('botao');
let btradio = document.querySelector('#OPCAO');
let codi = document.getElementById('codificar');
let deco = document.getElementById('decodificar');
let result = document.getElementById('resultbtn');
let text = document.getElementById('texto');
let saindo = document.getElementById('resultado');


// abre range para cifra de cesar
function seleciona(){
  escolha.addEventListener("click", function() {
    if(escolha.value == "cifra"){
      chaveCript.style.display = "block";
    } else {
      chaveCript.style.display = "none"
    }
  });
}


// base64
function em64(){
  let text = document.getElementById('texto').value;
  if (codi.checked) {
    let encodeBase64 = btoa(text)
    return encodeBase64;
} else if (deco.checked) {
    let decodeBase64 = atob(text)
    return decodeBase64;
}   
}

// cifra de cesar
function Ccesar(){
    let text = document.getElementById('texto').value;
    let chaveCript = parseInt(document.querySelector('#rangenumber').value);
    let saida = '';
    if(codi.checked){
        for(let i=0; i < text.length ; i++){
            if( text[i]=== text[i].toUpperCase()){
                saida += String.fromCharCode((text.charCodeAt(i) + chaveCript - 65) % 26 + 65);
            } else {
                saida += String.fromCharCode((text.charCodeAt(i) + chaveCript - 97) % 26 + 97);
            }
        }
        return saida;
    } else if (deco.checked) {
        for(let i=0; i < text.length; i++){
            if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122){
                saida += String.fromCharCode((text.charCodeAt(i) - 97 - chaveCript + 26) % 26 + 97);
            } else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90){
                saida += String.fromCharCode((text.charCodeAt(i) - 65 - chaveCript + 26) % 26 + 65);
            } else {
                saida += String.fromCharCode(text.charCodeAt(i));
            }
        }
        return saida;
    }
}

// o cod aparece na tela
result.addEventListener("click", function (event) {
    event.preventDefault();
    if(escolha.value == "cifra"){
        saindo.value = Ccesar();
    } else if(escolha.value == "base"){
        saindo.value = em64();
    }
});