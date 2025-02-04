var form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    alert("C\u1EA3m \u01A1n ".concat(name, "! Ch\u00FAng t\u00F4i s\u1EBD li\u00EAn h\u1EC7 v\u1EDBi b\u1EA1n qua email: ").concat(email, "."));
});
