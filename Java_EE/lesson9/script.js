let usersArray = [];
function addUser(){
    
    let newUser = {};

    newUser.email = email.value;
    newUser.password = password.value;
    newUser.fullName = fullName.value;
    newUser.country = country.value;
    newUser.birthDate = birthdate.value;
    console.log(newUser.birthDate);
    usersArray.push(newUser);
    updateStorage(); //обновляем localStorage после изменения массива
    window.location.assign("http://127.0.0.1:5500/lesson9/login.html");
    // updateUserList();

}

function updateStorage(){

    localStorage.users = JSON.stringify(usersArray);

}  
// function login(){
//  if(login.value==){}
// }