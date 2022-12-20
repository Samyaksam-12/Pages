function validate(){
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const password2 = document.getElementById('password2').value;
	


	if(password.length<6){
		document.getElementById('pass-error').innerHTML = "Password length must be greater than 6.";
	}
	else{
		if(password!=password2){
		alert('Password not mached.');
		return false;
		}
		else{
			alert('Password Mached.');
			return true;
		}
	}
}