function login() {
    event.preventDefault();
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user == "admin" && pass == "admin"){
        location.replace("../Slide 5/starter.html");
        alert("Anda login sebagai admin");
    }
    else {
        location.replace("../index.html");
        alert("Mengembalikan anda ke halaman utama")
    }
}