let num;
num = ~~prompt("Introduce un número", "1")
alert("El número " + num + " es " + parImpar(num))


function parImpar(num){
    let par;
    if(num%2 ===0)
        par = "par"
    else
        par = "impar"
    return par;
}