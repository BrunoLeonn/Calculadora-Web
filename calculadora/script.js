
        function insert(num)
        { 
//Getting the value of the element with the id "resultado" and storing it in the variable "numero".
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }

// Cleaning the screen.
        function clean()
        {
            document.getElementById('resultado').innerHTML = "";
        }
//Deleting the last number or symbol.
        function back()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
        }

//Calculating the result of the operation.
        function calcular()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado)
            {
                document.getElementById('resultado').innerHTML = eval(resultado);
            }
        }