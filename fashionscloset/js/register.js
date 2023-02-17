
let inputuser = document.getElementById("username");
let erroruser = document.getElementById("errorusername");

let inputpass = document.getElementById("password");
let errorpass = document.getElementById("errorpassword");


inputuser.addEventListener('change', (event) => {
    event.preventDefault()
    if(event.target.value.length <= 0 || event.target.value.length > 20){
        inputuser.style.border ="1px solid red"
        erroruser.style.display='block';
        // if(event.target.value.length === 0){
        //     erroruser.innerText = "Username is Required"
        // }
        // else{
        //     erroruser.innerText = "Username limit only 20"
        // }
        erroruser.innerText=event.target.value.length === 0?"Username is Required":"Username limit only 20";
    }
    else{
        inputuser.style.border =null
        erroruser.style.display='none';
        erroruser.innerText="";
    }
    console.log("type: ",event.target.value )
  });

  inputuser.addEventListener('click', (event) => {
    event.preventDefault()
    if(event.target.value.length <= 0 || event.target.value.length >= 20){
        inputuser.style.border ="1px solid red"
        erroruser.style.display='block';
        erroruser.innerText=event.target.value.length === 0?"Username is Required":"Username limit only 20";
    }
    else{
        inputuser.style.border =null
        erroruser.style.display='none';
        erroruser.innerText="";
    }
    console.log("type: ",event.target.value )
  });

  
inputpass.addEventListener('change', (event) => {
    event.preventDefault()
    if(event.target.value.length <= 0 || event.target.value.length > 20){
        inputpass.style.border ="1px solid red"
        errorpass.style.display='block';
        errorpass.innerText=event.target.value.length === 0?"Password is Required":"Password limit only 20";
    }
    else{
        inputpass.style.border =null
        errorpass.style.display='none';
        errorpass.innerText="";
    }
    console.log("type: ",event.target.value )
  });

  inputpass.addEventListener('click', (event) => {
    event.preventDefault()
    if(event.target.value.length <= 0 || event.target.value.length >= 20){
        inputpass.style.border ="1px solid red"
        errorpass.style.display='block';
        errorpass.innerText=event.target.value.length === 0?"Password is Required":"Password limit only 20";
    }
    else{
        inputpass.style.border =null
        errorpass.style.display='none';
        errorpass.innerText="";
    }
    console.log("type: ",event.target.value )
  });


  
let btnsubmit = document.getElementById("form");

btnsubmit.addEventListener("submit",function(e){
    e.preventDefault();
    if(inputuser.value.length === 0 || inputpass.value.length === 0 ||
        inputuser.value.length > 20 || inputpass.value.length > 20){
           
            inputpass.style.border ="1px solid red"
            errorpass.style.display='block';
            errorpass.innerText=inputpass.value.length === 0?"Password is Required":"Password limit only 20";
            
            inputuser.style.border ="1px solid red"
            erroruser.style.display='block';
            erroruser.innerText=inputuser.value.length === 0?"Username is Required":"Username limit only 20";
        // alert("Please Complete the field")
        }
        else{
            let accountlist = JSON.parse(localStorage.getItem('data')) 
            let result = accountlist.account.filter(res => res.username === inputuser.value && res.password === inputpass.value);
            console.log(result.length)
            if(result.length ===0){
                alert("Successfully Register!!!") 
                let obj = {username:inputuser.value,password:inputpass.value}
                accountlist.account.push(obj)
                console.log(accountlist)
                localStorage.setItem('data', JSON.stringify(accountlist));

                setTimeout(() => {
                    window.location.replace('login.html')
                    
                }, 1000);
            }else{
                inputpass.style.border ="1px solid red"
            // errorpass.style.display='block';
            // errorpass.innerText="Wrong password";
            
            inputuser.style.border ="1px solid red"
            // erroruser.style.display='block';
            // erroruser.innerText="Wrong username";
            alert("Account is already exist")
            }

        }
    console.log(inputuser.value.length)
    console.log(inputpass.value.length)
})