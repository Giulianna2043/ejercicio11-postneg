function calcular()

{
    var b = document.getElementById("b").value;
	var a = document.getElementById("a").value;
    var salida = document.getElementById("salida");
   
    if (a>0 && b>0)
    {
        salida.innerHTML="1";
    }
    else {
        salida.innerHTML="0";
    }

}

