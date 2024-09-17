//שאלה 1
const div = document.getElementById("div")
const button = document.getElementById("button")

button.addEventListener("click", addDiv)

function addDiv(){

    div.style.display = "flex" 
}


//שאלה 2
async function fetchUser()Promise{
    try {
         const getInf = await fetch("https://randomuser.me/api/")
         const data = fetch.name
    } catch (error) {
        Error("try again")
    }
}
const divUser = document.createElement("div")

function genederUser(){
    divUser.innerHTML = "";
    const name = document.createElement("p")
    name.textContent = fetch.name;
    divUser.append(name)
}