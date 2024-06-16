document
	.getElementById("registrationForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		var fullName = document.getElementById("fullName").value.trim();
		var password = document.getElementById("password").value.trim();
		var text = "";
		var containsNumber = /\d/.test(password);

        let fullNameCheck = false;
        let passwordCheck = false;

		

		if (!fullName) {
            fullNameCheck = false;
			var text = "Vui lòng nhập họ và tên";
			document.getElementById("p").innerHTML = text;
            document.getElementById("p").style.color = "red";
		} else {
            fullNameCheck = true;
        }


		if (!password) {
            passwordCheck = false;
			var text = "Vui lòng nhập mật khẩu";
			document.getElementById("p").innerHTML = text;
            document.getElementById("p").style.color = "red";
		} else {	if (!containsNumber) {
			passwordCheck = false;
			var text = "Mật khẩu phải chứa ít nhất một ký tự số";
			document.getElementById("p").innerHTML = text;
			document.getElementById("p").style.color = "red";
		} else {
			passwordCheck = true;
		}
        }

        if (passwordCheck && fullNameCheck) {
            
			window.location.href = 'main.html';
			
        }
	});
