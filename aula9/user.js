var users = JSON.parse(localStorage.getItem("users") ) || [];
var loggeded = JSON.parse(localStorage.getItem("loggeded") ) || {};
var Bemvindo= document.getElementById("Bemvindo");
if (loggeded && Bemvindo) Bemvindo.innerHTML= "Bem vindo " + loggeded.nome


let response = document.getElementById("pResponse")
response.innerHTML = JSON.stringify(users, null, 4);

//document é a pagina toda
// get = pegar, elemento = elemento do html
var formR = document.getElementById("formRegister");
//adicionado escutar o evento
    if (formR) formR.addEventListener("submit", (e) => { //formR(?) TESTA SE É VERDADEIRO
    e.preventDefault(); //impede atualizar a tela

    let name = document.getElementById("iName").value
    let email = document.getElementById("iEmail").value
    let pass = document.getElementById("iPass").value
    let birth = document.getElementById("iBirth").value

    const user = {//objeto anonimo, estrutura, json
        nome: name,
        email: email,
        senha: pass,
        nascimento: birth
    }

    users.push(user)
localStorage.setItem("users", JSON.stringify(users))
})

var formL = document.getElementById("formLogin");
formL?.addEventListener("click", (e) => {
        e.preventDefault();
    let email = document.getElementById("iEmailLogin").value
    let pass = document.getElementById("iPassLogin").value
    let user = users.find(u => {
       return u.email == email
    })
    if(!user){ //not(!) usuario 
    console.log("usuario não encontrado")
    return
    }

    if(!user){//not usuario}     
        console.log("usuário não encontrado")
        return
    }

    if(user){
         
        if(user.senha == pass){
            console.log("usuário loggeded")
            localStorage.setItem("loggeded", JSON.stringify(user))
            window.location.href = "painel.html"
        }else{
            console.log("senha incorreta")
            
        }
    }else{
        console.log("usuário não encontrado")
    }
})
