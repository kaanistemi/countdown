        var countDownDate = new Date ("May 22, 2020 19:00:00").getTime()
        var countDownFunction = setInterval(function(){
        var now = new Date().getTime()
        var distance = countDownDate - now;
            
        var global_days = Math.floor(distance / (1000 * 60 * 60 *24));
        var hours = Math.floor(distance / (1000 * 60 * 60 *24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance / (1000 * 60 * 60 *24) / (1000 * 60));
        var seconds = Math.floor(distance / (1000 * 60 * 60 *24) / 1000);
        })
        
        document.getElementById("demo").innerHTML = "days" + "d" + "hours" + "h" + "minutes" + "m" + "seconds" + "s";
        
        if (distance < 0) {
            clearInterval(countDownfunction);
            document.getElementById("demo").innerHTML = "EXPIRED"
        }