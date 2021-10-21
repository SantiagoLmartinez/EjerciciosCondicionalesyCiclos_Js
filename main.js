//FizzBuzz();
//NumeroImpares();
fibbonacci();

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let mensaje = "";
        if (i % 3 === 0) {
            //si se cumple al string mensaje agregale "Fizz"
            mensaje += "Fizz";
        }
        //si se cumple al string mensaje agregale "Buzz"
        if (i % 5 === 0) {
            mensaje += "Buzz";
        }
        //Imprimi mensaje o i
        console.log(mensaje || i);
    }
}

//creamos una funcion
function FizzBuzz2() {
    //hacemos un for loop de 1 al 100, (creamos una variabla llamada i y le asignamos el valor de 1
    //mientras que i sea menor o igual a 100, aumentamos el valor de i 1+    
    for (let i = 1; i <= 100; i++) {
        // si i es multiplo de  3 y por 5 imprimi FizzBuzz   
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // si i es multiplo  de 3 imprimi Fizz
        else if (i % 3 === 0) {
            console.log("Fizz");
        }//pero si i es multiplo de 5 imprimi Buzz
        else if (i % 5 === 0) {
            console.log("Buzz");
        }// y si no se cumplen esas condiciones imprimi el valor de i
        else {
            console.log(i);
        }
    }
}

function NumeroImpares() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0 + 1) {
            console.log(i + ": Numero Impar");
        }

    }
}

//fibbonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

//creamos funcion y como parametro le pasamos un array con posicion 0 y 1
function fibbonacci(fibbonacciArray = [num1 = 0, num2 = 1]) {


    for (let i = 0; i <= 10; i++) {
        //declaramos una nueva variable con la suma de los primeros valoros 0 y 1 
        let num3 = num1 + num2;
        //agregamos esta nueva variable al array en una nueva posicion (3)
        fibbonacciArray.push(num3);
        //despues de haber hecho el primer calculo, reasignamos valores a las primeras variables
        // ejemplo 0 + 1 = 1 , 1+1=2

        num1 = num2;
        num2 = num3;
        //se vuelve a repetir el ciclo 

    }
    console.log(fibbonacciArray);

}