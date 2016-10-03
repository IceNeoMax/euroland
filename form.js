    function validateFormOnSubmit(contact) {
    reason = "";
    reason += validateName(contact.name);
    reason += validatePass(contact.pass);
        reason += validateRepass(contact.pass,contact.repass);
    reason += validateEmail(contact.email);

    console.log(contact.name);
    if (reason.length > 0) {

        return false;
    } else {
        return false;
    }
}

function validateName(name) {
    var error = "";

    if (name.value.length < 6) {
        name.style.background = 'Red';
        document.getElementById('name-error').style.color = 'Red';
        document.getElementById('name-error').classList.add("animated","bounce");
        document.getElementById('name-error').innerHTML = "Ít nhất phải 6 kí tự mới được cơ";
        var error = "1";
    }
    else {
        name.style.background = 'White';
        document.getElementById('name-error').style.color = 'Green';
        document.getElementById('name-error').innerHTML = 'được rồi nha :*';
    }
    return error;
}

function validatePass(pass) {
    var error = "";
    var passfilter = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,})/;
    
    if (!passfilter.test(pass.value)) {
        pass.style.background = 'Red';
        document.getElementById('pass-error').style.color = 'Red';
        document.getElementById('pass-error').classList.add("animated","flash");
        document.getElementById('pass-error').innerHTML = "Pass ít nhất phải có 8 kí tự, chữ cái hoa, chữ cái thường, kí tự đặc biệt và số mới được cơ.";
        var error = "5";
    }
    else {
        pass.style.background = 'White';
       document.getElementById('pass-error').style.color = 'Green';
        document.getElementById('pass-error').innerHTML = 'được rồi nha :*';
    }
    
    return error;
}

function validateRepass(pass,repass) {
    var error = "";
    
    if (pass.value!=repass.value) {
        repass.style.background = 'Red';
        document.getElementById('repass-error').style.color = 'Red';
        document.getElementById('repass-error').classList.add("animated","pulse");
        document.getElementById('repass-error').innerHTML = "Pass và Repass phải giống nhau mới được cơ.";
        var error = "6";
    }
    else {
        repass.style.background = 'White';
        document.getElementById('repass-error').style.color = 'Green';
        document.getElementById('repass-error').innerHTML = 'được rồi nha :*';
    }
    
    return error;
}

function validateEmail(email) {
    var error = "";
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {
        email.style.background = 'Red';
        document.getElementById('email-error').innerHTML = "Điền Email vào nha.";
        document.getElementById('email-error').classList.add("animated","shake");
        var error = "2";
    } else if (!emailFilter.test(temail)) {
        email.style.background = 'Red';
        document.getElementById('email-error').classList.add("animated","shake");
        document.getElementById('email-error').innerHTML = "Điền email sai rồi nha.";
        var error = "3";
    } else if (email.value.match(illegalChars)) {
        email.style.background = 'Red';
        var error = "4";
        document.getElementById('email-error').classList.add("animated","shake");
        document.getElementById('email-error').innerHTML = "Email không được chứa các kí tự đặc biệt nha.";
    } else {
        email.style.background = 'White';
        document.getElementById('email-error').style.color = 'Green';
        document.getElementById('email-error').innerHTML = 'được rồi nha :*';
    }
    return error;
}



