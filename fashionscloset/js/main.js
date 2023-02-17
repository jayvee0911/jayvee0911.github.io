

let toggle_login = document.getElementById("login");

function isloggedin(){
    let account = JSON.parse(localStorage.getItem("account"))
    console.log(account)
    if(account){
        console.log(true)
        toggle_login.innerText='logout'
    }
    else{
        console.log(true,"false")
        toggle_login.innerText='Login'
    }
}
toggle_login.addEventListener("click",function(e){
    e.preventDefault();
    console.log("logout",toggle_login.innerHTML)
    if(toggle_login.innerHTML === "logout"){
        localStorage.removeItem("account")
    }
    window.location.replace('login.html')
})

isloggedin();