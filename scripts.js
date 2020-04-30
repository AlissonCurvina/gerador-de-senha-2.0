//Variáveis da função generatePwd();
let p1Arr = [];
let p2Arr = [];
let p3Arr = [];
let newPwd,p1,p2,p3,p4;

//Variáveis da função checkParameters();
let p1Num,p2Num,p3Num,p4Num;

function start() {
  checkParameters();
  generatePwd();
}

//Função que checa o parâmetros que o usuário deu para criação da senha
function checkParameters() {
  if (document.getElementsByTagName('input')[0].value<2 || document.getElementsByTagName('input')[0].value>6) {
    return true;
  }
  if (document.getElementsByTagName('input')[1].value<2 || document.getElementsByTagName('input')[1].value>6) {
    return true;
  }
  if (document.getElementsByTagName('input')[2].value<2 || document.getElementsByTagName('input')[2].value>6) {
    return true;
  } 
  else {
  p1Num = Math.ceil(Number(document.getElementsByTagName('input')[0].value)+1)/2;
  p2Num = Math.ceil(Number(document.getElementsByTagName('input')[0].value)+1)/2
  p3Num = Number(document.getElementsByTagName('input')[1].value)+1;
  p4Num = Number(document.getElementsByTagName('input')[2].value)+1; 
  }
}

function generatePwd() {
  
  //If que verifica se em algum parâmetro foi colocado um valor inválido e impede o algoritmo de criar novas senhas
  if (checkParameters() == true) {
    document.getElementById('visor').textContent = '';
  }
  //Permite a continuação do algoritmo quando todos os parâmetros estão corretos
  else {
    p1Arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    p2Arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    p3Arr = [0,1,2,3,4,5,6,7,8,9];
    p4Arr = ['!','@','#','$','%','&','?',':',';'];
  

    //Rotina que busca os valores para a senha de forma aleatória       
    p1 = '';
    p2 = '';
    p3 = '';
    p4 = '';
  
    for (let i=1; i<p1Num;i++) {
      p1 += p1Arr[Math.floor(Math.random()*25)];
    }
    for (let i=1; i<p2Num;i++) {
      p2 += p2Arr[Math.floor(Math.random()*25)];
    }
    for (let i=1; i<p3Num;i++) {
      p3 += p3Arr[Math.floor(Math.random()*9)];
    }
    for (let i=1; i<p4Num;i++) {
      p4 += p4Arr[Math.floor(Math.random()*8)];
    }
  
    //Senha não embaralhada
    newPwd = p1+p2+p3+p4;
  
    //Array criado para reservar os valores de cada posição da senha para que eles possam ser embaralhados
    let pwdArr = newPwd.split('');
  
      //Função para embaralhar os valores da senha
      function shuffle (pwdArr) {
        let currentIndex = pwdArr.length;
        let tempValue, randomIndex;
            
        while (currentIndex > 0) {
          randomIndex = Math.floor(Math.random()*currentIndex);
          currentIndex -=1;
          tempValue = pwdArr[currentIndex];
          pwdArr[currentIndex] = pwdArr[randomIndex];
          pwdArr[randomIndex] = tempValue;
        }
      }
    //Chama a função de embaralhamento e dá o Array que contém a senha como parâmetro
    shuffle(pwdArr);
  
    //Transforma o Array com a senha em String e remove os espaços entre os caracteres
    newPwd = pwdArr.join('').trim();
  
    //Coloca no visor o valor da senha embaralhada 
    document.getElementById('visor').textContent = newPwd;
    }
  
  }
