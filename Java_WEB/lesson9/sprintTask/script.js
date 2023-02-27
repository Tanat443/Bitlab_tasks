

function addUser(){
    let users = JSON.parse(localStorage.getItem('users'));
    let newUser = {
        email: email.value,
        password: password.value,
        fullName: fullName.value,
        country: country.value,
        birthDate: birthdate.value,
    };
    users.push(newUser);
    window.location.href ='./login.html'
    alert('You are registered');
    
   
    let jsonObj = JSON.stringify(users);
    localStorage.setItem('users',jsonObj);


 //   updateStorage(); //обновляем localStorage после изменения массива
    // updateUserList();

}
function login(){
    let index =0;
    let users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
        if(users[i].email==email.value && users[i].password==password.value){
            window.location.href ='./account.html'
            alert('You are login');
            localStorage.setItem('index',i);
            
            break;
            
        }  
    }
    
   
}
function updateStorage(){

    localStorage.users = JSON.stringify(usersArray);

}  
// function login(){
//  if(login.value==){}
// }