    // Valores de gravedad en m/s^2

    let gavityPlanet = new Map();
    gavityPlanet.set("sun", 274)
    gavityPlanet.set("mercury", 3.7)
    gavityPlanet.set("venus", 8.87)
    gavityPlanet.set("earth", 9.81)
    gavityPlanet.set("mars", 3.71)
    gavityPlanet.set("jupiter", 24.79)
    gavityPlanet.set("saturn", 10.44)
    gavityPlanet.set("uranus", 8.69)
    gavityPlanet.set("neptune", 11.15)

    var miPlaneta = ""


    function setParams(planet){
        miPlaneta = gavityPlanet.get(planet)
        $("#exampleModalLabel").text(planet)
    }

    function simular() {
        let distance = 0;
        let time = 0;
        const interval = 100; // Intervalo de tiempo en milisegundos (ajústalo según tu necesidad)
    
        const intervalId = setInterval(function () {
            time += interval / 1000; // Convertir el intervalo a segundos
            distance = (1 / 2) * miPlaneta * Math.pow(time, 2); // Aplicar la fórmula de caída libre
            document.querySelector(".balon").style.marginTop = distance + "px";
            $(".data").text(distance.toFixed(2)); // Mostrar la distancia con dos decimales
    
            // Detener la simulación cuando el balón toque el suelo
            if (distance >= 350) {
                clearInterval(intervalId);
            }
        }, interval);
    }

    document.getElementById("reiniciarBtn").addEventListener("click", function () {
        // Restablecer la posición del balón
        document.querySelector(".balon").style.marginTop = "0px";
    
        // Restablecer el tiempo a cero
        let time = 0;
    
        // Actualizar la visualización de la distancia (puedes eliminar esta línea si no es necesaria)
        $(".data").text("0.00");
    });