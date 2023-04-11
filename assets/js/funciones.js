function digite(){
    let numero_ingresado = Number.parseInt((prompt("Digite un número")), 10);
    return numero_ingresado;
}

function par_o_impar(numero_ingresado) {
    
    if ((numero_ingresado % 2) === 0) {
        alert(`El número digitado ${numero_ingresado} es par.`)
    } else {
        alert(`Es impar el número digitado ${numero_ingresado}.`)
    }

}

function primo(numero) {
    if (numero === 1) {
        alert(`El numero ${numero} NO es primo.`)
        return false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                alert(`El numero ${numero} NO es primo.`)
                return false;
            }
        }
        alert(`El numero ${numero} SI es primo.`)
        return numero !== 1;
    }
}

function siguientePrimo(numero_ingresado) {
    siguiente_num_primo(numero_ingresado);
    function esPrimo(numero) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return numero !== 1;
    }
    function siguiente_num_primo(numero_a_evaluar) {
        let aux = 0;
        aux = numero_a_evaluar
        aux++
        while (esPrimo(aux) == false) {
            aux++
        }
        alert("El siguiente numero primo es: " + aux)
    }
}

function cuadrado(numero_ingresado) {
    alert(`El cuadrado de ${numero_ingresado} * ${numero_ingresado} es : ${numero_ingresado * numero_ingresado}`)
}

function cuadros(dimension){
    let cuadros = ""
            for (let i = 0; i < dimension; i++) {
                let linea = ""
                for (let j = 0; j < dimension; j++) {
                    linea += "* "
                }
                cuadros += (linea + "\n")
            }
            //alert(`${cuadros}`)
            alert(cuadros)
}

function cuadro(dimension) {
    let bandera = 0;
    let linea = "";
    for (let index = 0; index < dimension; index++) {
        if (index == 0 || index == (dimension - 1) || bandera == 0 || bandera == (dimension - 1)) {
            linea = linea + "* "
        } else {
            linea = linea + "  "
        }

        if (index === (dimension - 1)) {
            alert(linea)
            bandera++
            index = 0
            linea = "* "
        }
        if (bandera == dimension) {
            index = dimension
        }
    }
}

