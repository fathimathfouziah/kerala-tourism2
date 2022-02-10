let email=document.getElementById("email");
let emailerror=document.getElementById("emailerror");
let password=document.getElementById("password");
let passerror=document.getElementById("passerror");

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