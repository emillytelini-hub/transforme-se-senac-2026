var users = JSON.parse(localStorage.getItem("users")) || [];
var loggeded = JSON.parse(localStorage.getItem("loggeded")) || {};
var Bemvindo = document.getElementById("Bemvindo");
if (loggeded && Bemvindo) Bemvindo.innerHTML = "Bem vindo " + loggeded.nome

/*function name(paramentro1, p2){
return

}*/


function createButton(text, action, i) {

    let bt = document.createElement("a");
    bt.innerHTML = text;
    bt.classList.add(action);
    bt.classList.add("cursor-pointer");
    bt.classList.add("rounded-full");
    bt.classList.add("bg-dark");
    bt.classList.add("px-4");
    bt.classList.add("py-3");
    bt.classList.add("text-white");
    bt.classList.add("shadow-md");
    bt.classList.add("hover:shadow");
    bt.dataset.id = i;
    return bt;
}


var listUsers = document.getElementById("listUsers")
if (listUsers) {
    let i = 0;
    users.forEach((u) => {
        let tdName = document.createElement("td");
        tdName.innerHTML = u.nome;

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = u.email;

        let tdAction = document.createElement("td");
        tdAction.appendChild(
            createButton("V", "show", i)
        );

        let span = document.createElement("span");
        span.innerHTML = " -- ";
        tdAction.appendChild(span);


        tdAction.appendChild(
            createButton("X", "remove", i)
        )




        let tr = document.createElement("tr");
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAction);

        listUsers.appendChild(tr);
        //i = i + 1;
        //i +=1
        i++;
    });
}

var botoesV = document.querySelectorAll(".show");
botoesV.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.dataset.id;
        b.innerHTML = users[id].nascimento;

    })

})

var botoesR = document.querySelectorAll(".remove");
botoesR.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.dataset.id;
        users.splice(id, 1);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "painel.html"
    })
})


//document é a pagina toda
// get = pegar, elemento = elemento do html
var formR = document.getElementById("formRegister");
//adicionado escutar o evento
if (formR) formR.addEventListener("click", (e) => { //formR(?) TESTA SE É VERDADEIR

    let name = document.getElementById("iName").value
    let email = document.getElementById("iEmail").value
    let pass = document.getElementById("iPass").value
    let birth = document.getElementById("iBirth").value

    const user = {//objeto anonimo, estrutura, json
        nome: name,
        email: email,
        senha: pass,
        nascimento: birth,
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))

    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden")
    window.location.href = "painel.html"

})

var formL = document.getElementById("formLogin");
formL?.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById("iEmailLogin").value
    let pass = document.getElementById("iPassLogin").value
    let user = users.find(u => {
        return u.email == email
    });

    if (user) {

        if (user.senha == pass) {
            console.log("usuário loggeded");
            localStorage.setItem("loggeded", JSON.stringify(user));
            window.location.href = "painel.html"
        } else {
            console.log("senha incorreta")

        }
    } else {
        console.log("usuário não encontrado")
    }
})