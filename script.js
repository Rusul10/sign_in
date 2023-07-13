let username = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let msg = document.getElementById("msg");
let errormsg = document.getElementById("failed");
let success = document.getElementById("success");

function validateForm(event) {
    event.preventDefault();
    if (username.value == "") {
        alert("please enter name");
        username.focus();
        errormsg.style.display = "block";
        errormsg.innerHTML = "Please enter your name";
        setTimeout(() => { errormsg.style.display = "none" }, 2000);
        return false;
    }

    if (email.value == "") {
        alert("please enter your email");
        email.focus();
        return false;
    }

    if (subject.value == "") {
        alert("please enter subject");
        subject.focus();
        errormsg.style.display = "block";
        errormsg.innerHTML = "Please enter subject";
        setTimeout(() => { errormsg.style.display = "none" }, 2000);

        return false;
    }

    if (msg.value == "") {
        alert("please enter your message");
        msg.focus();
        errormsg.style.display = "block";
        errormsg.innerHTML = "Please enter your message";
        setTimeout(() => { errormsg.style.display = "none" }, 2000);
        return false;
    }

    const emailRegex =
        new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    if (emailRegex.test(email.value) == false) {
        alert("wrong email format");
        errormsg.style.display = "block";
        errormsg.innerHTML = "Please enter valid email";
        setTimeout(() => { errormsg.style.display = "none" }, 2000);
        return false;

    } else {
        success.style.display = "block";
        success.innerHTML = "Your message was successfuly send."
    }

}


///timer for messages