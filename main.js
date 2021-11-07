console.log('connected')

const firstLastNamePattern = /[A-Za-z.]{3,15}$/;
const userNamePattern = /\w{5,10}\d{2,5}/;
const emailPattern = /\w{3,20}(\.)?\w{2,20}@\w{5,10}\.\w{3}/;

let strongPassword = new RegExp('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')
let mediumPassword = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')



const firstNameElm = document.querySelector('#firstName')
const lastNameElm = document.querySelector('#lastName')
const firstNameMsgElm = document.querySelector('.invalid-feedback-firstName')
const lastNameMsgElm = document.querySelector('.invalid-feedback-lastName')

const userNameElm = document.querySelector('#userName')
const emailElm = document.querySelector('#email')
const userNameMsgElm = document.querySelector('.invalid-feedback-user-name')
const emailMsgElm = document.querySelector('.invalid-feedback-email')


const passElm = document.querySelector('#password')
const passwordMsgElm = document.querySelector('.invalid-feedback-password')

const confirmPassElm = document.querySelector('#confirm-pass')
const confirmPassMsgElm = document.querySelector('.invalid-feedback-confirm-pass')


const sbtElm = document.querySelector('#submitButton');

firstNameElm.addEventListener('input', firstName );
lastNameElm.addEventListener('input', lastName );
userNameElm.addEventListener('input', userName );
emailElm.addEventListener('input', email);
passElm.addEventListener('input', password);
confirmPassElm.addEventListener('input', confirmPass);


function firstName(){
    let firstName = firstNameElm.value
    let regexFirstName = firstLastNamePattern.test(firstName)

    if(firstName === "" ){
        firstNameMsgElm.innerHTML = "<span style='color: red;'>Enter First Name</span>";
    }else if (regexFirstName === true) {
        firstNameMsgElm.innerText = ""
    } else if (regexFirstName !== true) {
        firstNameMsgElm.innerHTML = "<span style='color: red;'>Enter Valid First Name</span>";
    }
}


function lastName(){
    let lastName = lastNameElm.value
    let regexLastName = firstLastNamePattern.test(lastName)

    if(lastName === "" ){
        lastNameMsgElm.innerHTML = "<span style='color: red;'>Enter Last Name</span>"
    }else if (regexLastName === true) {
        lastNameMsgElm.innerText = ""
    } else if (regexLastName !== true) {
        lastNameMsgElm.innerHTML = "<span style='color: red;'>Enter Valid Last Name</span>";
    }
}


function email(){
    let email = emailElm.value
    let regexEmail =  emailPattern.test(email)

    if(email === "" ){
        emailMsgElm.innerHTML = "<span style='color: red;'>Please Enter Email</span>"
    }else if (regexEmail === true) {
        emailMsgElm.innerText = ""
    }else if (regexEmail !== true) {
        emailMsgElm.innerHTML = "<span style='color: red;'>Enter Valid Email</span>";
    }
}

function userName(){
    let userName = userNameElm.value
    let regexUserNameEmail =   userNamePattern.test(userName)

    if(userName === "" ){
        userNameMsgElm.innerHTML = "<span style='color: red;'>Please Enter a User Name</span>"
    }else if (regexUserNameEmail === true) {
        userNameMsgElm.innerText = ""
    }else if (regexUserNameEmail !== true) {
        userNameMsgElm.innerHTML = "<span style='color: red;'>Enter a User Name with Letter and Password</span>";
    }
}

function email(){
    let email = emailElm.value
    let regexEmail =  emailPattern.test(email)

    if(email === "" ){
        emailMsgElm.innerHTML = "<span style='color: red;'>Please Enter Email</span>"
    }else if (regexEmail === true) {
        emailMsgElm.innerText = ""
    }else if (regexEmail !== true) {
        emailMsgElm.innerHTML = "<span style='color: red;'>Enter Valid Email</span>";
    }
}





function password(){
    let password = passElm.value
    let regexStrongPass =  strongPassword.test(password)
    let regexMediumPass =  mediumPassword.test(password)

    if(password === "" ){
        passwordMsgElm.innerHTML = "<span style='color: red;'>Please Enter Password</span>"
    }else if (regexStrongPass === true) {
        passwordMsgElm.innerHTML = "<span style='color: green;'>Strong Password</span>"
    }else if (regexMediumPass === true) {
        passwordMsgElm.innerHTML = "<span style='color: red;'>Medium Password</span>";
    }else{
        passwordMsgElm.innerHTML = "<span style='color: red;'>Weak Password</span>"
    }
}


function confirmPass(){
    let confirmPass = confirmPassElm.value

    if(confirmPass === "" ){
        confirmPassMsgElm.innerHTML = "<span style='color: red;'>Please Confirm Password</span>"
    }else if (confirmPass === passElm.value) {
        confirmPassMsgElm.innerHTML = ""
    }else{
        confirmPassMsgElm.innerHTML = "<span style='color: red;'>Password Doesn't Match</span>";
    }
}
