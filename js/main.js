    // Valores de gravedad en m/s^2

    let gavityPlanet = new Map();
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

    function simular(){
        count = 0 
        setInterval(function(){
            count = count + 2
            document.querySelector(".balon").style.marginTop = count+"px"

            $(".data").text(count)

                }, miPlaneta *50)
    }