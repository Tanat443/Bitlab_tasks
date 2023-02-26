let usersArray = [
    {login: 'tanat443@gmail.com', password: 'ileke123'},
    {login: 'asa@', password: 'aieke123'},
    {login: 'asdsa@', password: 'eleke123'}
];
function reg(){
   
    let flag = true;
    if(password.value.length<6){
        error1.innerHTML = "Мин 6 символ";
        flag= false;
    } 
    if(repass.value != password.value ){
        error2.innerHTML = "Пароли не совпадают";
        flag = false;
    }

    for(let user of usersArray){
        if(user.login==emailInput.value){
            error.innerHTML = "Current email is already in use"
            flag=false;
            break;
        }
    }
    if (flag==true){
        alert("You are successfully register")
    }
    
} 