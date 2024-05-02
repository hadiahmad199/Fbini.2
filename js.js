let username = document.querySelector('#username');
let passwd = document.querySelector('#passwd');
let checkbox = document.querySelector('.chuk');
let login = document.querySelector('.loginbtn');

login.addEventListener("click", e=>{
    window.alert('welcome '+username.value);
});
