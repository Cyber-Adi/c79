NOSA=[];
function submit()
{
    var N1= document.getElementById("NOS1").value;
    var N2= document.getElementById("NOS2").value;
    var N3= document.getElementById("NOS3").value;
    var N4= document.getElementById("NOS4").value;
    var N5= document.getElementById("NOS5").value;

    NOSA.push(N1);
    NOSA.push(N2);
    NOSA.push(N3);
    NOSA.push(N4);
    NOSA.push(N5);

    console.log(NOSA);

    document.getElementById("show").innerHTML=NOSA;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}

function sorting(){
    NOSA.sort();
    console.log(NOSA);
    document.getElementById("show").innerHTML = NOSA;
}