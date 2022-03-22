let num;
let res = 1;
num = ~~prompt("Introduzca un número para hacerle el factorial", "0");
for (let x = 1; x <= num; x++) {
    res = res*x;
}
alert(num + "! = " + res);