let email=document.getElementById("email");
let emailerror=document.getElementById("emailerror");
let password=document.getElementById("password");
let passerror=document.getElementById("passerror");
let address=document.getElementById("address");
let aerror=document.getElementById("aerror");
let address2=document.getElementById("address2");
let a2error=document.getElementById("a2error");
let city=document.getElementById("city");
let cerror=document.getElementById("cerror");
let state=document.getElementById("state");
let serror=document.getElementById("serror");
let phone=document.getElementById("phone");
let perror=document.getElementById("perror");

// email

function evalidate()
{
    
    var regexp = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if(regexp .test(email.value)){
        emailerror.innerHTML="valid";
        emailerror.style.color="green";
        emailerror.style.border="2px solid green";
        emailerror.style.display="block";
        return true;
    }
    else{
        emailerror.innerHTML="Invalid";
        emailerror.style.color="red";
        emailerror.style.border="2px solid red";
        emailerror.style.display="block";
        return false;
    }
}   

// password
    function pvalidate(){
    if(password.value.length>=8){
        passerror.innerHTML="Password is strong";
        passerror.style.color="green";
        passerror.style.border="2px solid green";
        passerror.style.display="block";
        return true;
    }
    else{
        passerror.innerHTML="Password is short";
        passerror.style.color="red";
        passerror.style.border="2px solid red";
        passerror.style.display="block";
        return false;
    }
    }

    // address

    function avalidate(){
        if(address.value.length>=5){
            aerror.innerHTML="Valid";
            aerror.style.color="green";
            aerror.style.border="2px solid green";
            aerror.style.display="block";
            return true;
        }
        else{
            aerror.innerHTML="Provide more details";
            aerror.style.color="red";
            aerror.style.border="2px solid red";
            aerror.style.display="block";
            return false;
        } 
    }

// address2

function a2validate(){
    if(address2.value.length>=5){
        a2error.innerHTML="Valid";
        a2error.style.color="green";
        a2error.style.border="2px solid green";
        a2error.style.display="block";
        return true;
    }
    else{
        a2error.innerHTML="Provide more details";
        a2error.style.color="red";
        a2error.style.border="2px solid red";
        a2error.style.display="block";
        return false;
    } 
}

// city


function cvalidate(){
    if(city.value.length>=3){
        cerror.innerHTML="Valid";
        cerror.style.color="green";
        cerror.style.border="2px solid green";
        cerror.style.display="block";
        return true;
    }
    else{
        cerror.innerHTML="Invalid";
        cerror.style.color="red";
        cerror.style.border="2px solid red";
        cerror.style.display="block";
        return false;
    } 
}

// state


function svalidate(){
    if(state.value.length>=3){
        serror.innerHTML="Valid";
        serror.style.color="green";
        serror.style.border="2px solid green";
        serror.style.display="block";
        return true;
    }
    else{
        serror.innerHTML="Invalid";
        serror.style.color="red";
        serror.style.border="2px solid red";
        serror.style.display="block";
        return false;
    } 
}

// zip




function phvalidate()
{
    
    var regex= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regex .test(phone.value)){
        perror.innerHTML="valid";
        perror.style.color="green";
        perror.style.border="2px solid green";
        perror.style.display="block";
        return true;
    }
    else{
        perror.innerHTML="Invalid ";
        perror.style.color="red";
        perror.style.border="2px solid red";
        perror.style.display="block";
        return false;
    }
}   





