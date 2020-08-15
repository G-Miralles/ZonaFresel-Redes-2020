//Declaracion de variables globales

let btnCalcular = document.getElementById('btn-Calcular')            // Obtengo el Id del bonton en el DOM

const calcular = () => {

// Declaracion de varaibles locales
    let distancia = document.getElementById('distancia').value;          // Obtengo el valor del input distancia y lo asigno a una variable
    let frecuencia = $('input[name="frecuencia"]:checked').val();        // Obtengo el valor del radio button seleccioando frecuencia y lo asigno a una variable
    let x = 8.657;

    let d = parseFloat(distancia);                                 //Convierto las variables str a number
    let f = parseFloat(frecuencia);


    let r1 = parseFloat(d / f);     //Resolusion en 3 pasos
    let r2 = Math.sqrt(r1);
    let r3 = x * r2;


//Muestro los valores calculados en el input resultado

    $("#resultado").val(r3);

};

// Declaracion eventos
btnCalcular.addEventListener('click', calcular);