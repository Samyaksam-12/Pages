
//Samyak Mendhe
function validate(){
const name = document.getElementById('name').value;
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const password2 = document.getElementById('password2').value;
	


	if (name==""){
		document.getElementById('name-error').innerHTML = "Name field can't be left Empty.";
		
	}
	else{
		document.getElementById('name-error').innerHTML = "";
	}
	
	if (username==""){
		document.getElementById('username-error').innerHTML = "username field can't be left Empty.";
		
	}
	else{
		document.getElementById('username-error').innerHTML = "";
	}

	//email validation

	if (email==""){
		document.getElementById('email-error').innerHTML = "E-mail field can't be left Empty."
		
	}
	else{
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){
			document.getElementById('email-error').innerHTML = "E-mail valid.";
		}
		else{ 
			document.getElementById('email-error').innerHTML = "E-mail not valid.";
		    return false;
		}
	}


	// password validation

	if (password==""){
		document.getElementById('pass-error').innerHTML = "Password field can't be left Empty.";
		
	}
	else{
		document.getElementById('pass-error').innerHTML = "";
		if(password.length<6){
			document.getElementById('pass-error').innerHTML = "Password length must be Greater than 6.";
			return false;
		}
		else if(password.length>6){
			document.getElementById('pass-error').innerHTML = "";
			return false;
		}
	}
	
	
	if (password2==""){
		document.getElementById('pass2-error').innerHTML = "confirm password field can't be left Empty.";
		return false;
	}
	else if(password!=password2){
		document.getElementById('pass2-error').innerHTML ="Password not Mached.";
		return false;
	}
	else{
		document.getElementById('pass2-error').innerHTML ="Password Mached.";
		if(form.checkbox.checked==false){
			alert("please check the box.");
			return false;
		}
		return true;
	}
	
}
