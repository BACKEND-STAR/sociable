(function () {
	'use strict'

	let formComponent = Object.create(HTMLElement.prototype);

	formComponent.createdCallback = function() {

		let formReg = document.createElement("form");
		let forTitle = document.createElement("p");
		let inputSend = document.createElement("input");
		forTitle.append(document.createTextNode("Form Registrtion"));

		let objAttribute = [
		{"type": "name", "name": "username", "placeholder": "Username"},
		{"type": "password", "name": "hashPass", "placeholder": "Password"},
		{"type": "email", "name": "email", "placeholder": "Example@gmail.com"}
		]
		
		let fragment = new DocumentFragment();
			for (let i = 0; i < objAttribute.length; i++) {
				let crInput = document.createElement("input");
				crInput.setAttribute("type", objAttribute[i]["type"]);
				crInput.setAttribute("name", objAttribute[i]["name"]);
				crInput.setAttribute("placeholder", objAttribute[i]["placeholder"]);

				fragment.append(crInput);
			}
			formReg.append(fragment);
			formReg.setAttribute("name", "registerForm");
			formReg.append(inputSend);
			inputSend.setAttribute("type", "submit");	
			this.append(formReg);

		let formRegist = document.forms.registerForm;
		let valLogin = formRegist.elements.username;
		let valPassword = formRegist.elements.hashPass;
		let valEmail = formRegist.elements.email;

		formRegist.onsubmit = function() {
			if(!valLogin.value || !valPassword.value || !valEmail.value) {
				alert("Error");
			} else {
				let obj = ({
					username: valLogin.value,
					hashPass: valPassword.value,
					email: valEmail.value
				});
				let json = JSON.stringify(obj);
				let xhr = new XMLHttpRequest();
				console.log(valLogin.value + " " + valPassword.value + " " + valEmail.value);
				xhr.open("POST", "http://localhost:8080/user/registration");
				xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
				xhr.send(json);
			}
			return false;
		}
		}

		let formComponents = document.registerElement("form-component",{
			prototype: formComponent
		});
})();