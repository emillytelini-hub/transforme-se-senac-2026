const btAddUser= document.getElementById("addUser");

btAddUser?.addEventLister("click", (e) => {
    console.log("passou")
    const modalRegister= document.getElementById("modalRegister");
    modalRegister.classList.remove("hidden");
    modalRegister.classList.add("flex")
});