var button = document.getElementById("yes");
 var button.addEventListener("submit" , function (){
    if(document.formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letters'";
        return false;
    }
    else if(document.formfill. Email.value==""){
        document.getElementById("result").innerHTML="Enter yuor Email'";
        return false;
    }
    else if(document.formfill. password.value==""){
        document.getElementById("result").innerHTML="Enter yuor password'";
        return false;
}
    else if(document.formfill. password.value==document.formfill.(Password.value){
        document.getElementById("result").innerHTML="Password does'nt match";
        return false;
    }
    else if(document.formfill.(password.value==""){
        document.getElementById("result").innerHTML="Enter confirm password'";
        return false;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="password must be 6.digit'";
        return false;
    })