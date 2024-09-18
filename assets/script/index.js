const key ="ae87837f0815211e25a414d326177b24"

 function adicionarDados(dados){
     console.log(dados);
     document.querySelector('.tempoCidade').innerHTML = 'Tempo em ' + dados.name;
     document.querySelector('.temperatura').innerHTML = 'Temperatura: ' + Math.floor(dados.main.temp) + 'ºC';
     document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%';
     document.querySelector(".estado").innerHTML = dados.weather[0].description;
 }

 async function pesquisarCidade(btnInputCidade){
     let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${btnInputCidade}`+
        '&appid=ae87837f0815211e25a414d326177b24&' +
        "&units=metric" + 
        "&lang=pt_br" 
        ) 
     .then(response => response.json());

         adicionarDados(dados)
 }

function cliqueNoBtn(){
    let btnInputCidade = document.querySelector(".inputCidade").value;
    pesquisarCidade(btnInputCidade);
}