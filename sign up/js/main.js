var signUpName = document.getElementById('signName');

var signUpEmail = document.getElementById('signEmail');

var signUpPassword = document.getElementById('signPassword');

var user = [] ;

if(localStorage.getItem('user') != null ) {
    user = JSON.parse(localStorage.getItem('user'))
}
else{
    user = [] ;
}





function add () {
   if(signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') (
document.getElementById ('message') .innerHTML = `<p class = 'text center '> All input is required  </p>`
   )
else {

var object = {
name :signUpName.value ,
email : signUpEmail.value ,
password : signUpPassword.value ,

}
user.push(object);
location.href= '../login/index.html'
localStorage.setItem ('user' , JSON.stringify(user));

}
}