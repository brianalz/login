function validateForm() {

      var name=document.getElementById("name").value;
      var password=document.getElementById("password").value;
       if (name == "brian" && password == "246") {
          //alert("usuario y contraseña validos")
          window.open('sanValentinesDay.html');
       }  else  {
         alert("intenta de nuevo");
       }

}