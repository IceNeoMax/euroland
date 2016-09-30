    function validateFormOnSubmit(contact) {
    reason = "";
    reason += validateName(contact.name);
    //reason += validatePass(contact.pass);
    reason += validateEmail(contact.email);

    console.log(contact);
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
        document.getElementById('name-error').innerHTML = "Ít nhất phải 6 kí tự nha";
        var error = "1";
    } else {
        name.style.background = 'White';
        document.getElementById('name-error').innerHTML = '';
    }
    return error;
}

function validatePass(pass) {
    var error = "";

    if (name.value.length < 6) {
        name.style.background = 'Red';
        document.getElementById('name-error').innerHTML = "Ít nhất 6 kí tự cơ mà";
        var error = "1";
    } else {
        name.style.background = 'White';
        document.getElementById('name-error').innerHTML = '';
    }
    return error;
}

function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
    var error = "";
    var temail = trim(email.value); 
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {
        email.style.background = 'Red';
        document.getElementById('email-error').innerHTML = "Điền Email vào nha.";
        var error = "2";
    } else if (!emailFilter.test(temail)) {
        email.style.background = 'Red';
        document.getElementById('email-error').innerHTML = "Điền email sai rồi nha.";
        var error = "3";
    } else if (email.value.match(illegalChars)) {
        email.style.background = 'Red';
        var error = "4";
        document.getElementById('email-error').innerHTML = "Email không được chứa các kí tự đặc biệt nha.";
    } else {
        email.style.background = 'White';
        document.getElementById('email-error').innerHTML = '';
    }
    return error;
}



