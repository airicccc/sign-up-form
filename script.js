const pw = document.getElementById("pw");
pw.noValidate = true;
let pw_status = false;
let pw_str = "";
pw.addEventListener("input", validatePassword);

function validatePassword(e) {
	const password = e.target;
	const str = password.value;
    pw_str = str;
	if (str.length < 8) {
		pw_status = false;
	} else {
		pw_status = true;
	}
	if (pw_status) {
		password.classList.remove("invalid");
	} else {
		password.classList.add("invalid");
	}
}

const pw_cfm = document.getElementById("pw_cfm");
pw_cfm.noValidate = true;
pw_cfm.addEventListener("input", confirmPassword);

function confirmPassword(e) {
    const password = e.target;
    const confirm = password.value;
    if (pw_status && confirm == pw_str) {
        password.classList.remove("invalid");
    } else {
        password.classList.add("invalid");
    }
}
