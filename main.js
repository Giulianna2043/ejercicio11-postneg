function calcular()

{
    var b = document.getElementById("b").value;
	var a = document.getElementById("a").value;
    var negative =parseInt(document.getElementById("negat")).value;
    var salida = document.getElementById("salida");
   
    if ((a<0 && b>0) || (a>0 && b<0) && negative==0)
    {
        salida.innerHTML="1";
    }
     else
        {
        if ((negative==1)&&(a<0 && b<0))
             salida.innerHTML="1";
        else 
             salida.innerHTML="0";
    }
    

}

