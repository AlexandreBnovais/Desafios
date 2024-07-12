const_conteiner = document.getElementById('conteiner');
const_registerbtn = document.getElementById('register');
const_loginbtn = document.getElementById('login');

registerbtn.addEventListener('click' , () => {
    conteiner.classlist.add (active);
});

loginbtn.addEventListener('click' , () => {
    conteiner.classlist.remove (active);
});