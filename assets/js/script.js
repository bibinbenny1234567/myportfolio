var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var subjectError = document.getElementById('subject-error')
var messageError = document.getElementById('message-error')


function validateName(){
    var name=document.getElementById('name').value;
    if(!name.match(/^[A-Za-z]*s{1}[A-Za-z]*$/)){
        nameError.innerHTML='write full name';
        return false;
    }
}