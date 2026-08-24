var users = JSON.parse(localStorage.getItem("users") ) || [];
//document é a pagina toda
// get = pegar, elemento = elemento do html
var formR = document.getElementById("formRegister");
//adicionado escutar o evento
formR.addEventListener("submit", (e) => {
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
formL.addEventListener("submit", (e) => {
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

    if(user.senha == pass){
        console.log("usuarios logado")
        window.location.href = "painel.html"
    }else{
       console.log("senha invalida") 
    }
    })
    

