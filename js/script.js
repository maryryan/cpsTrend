$(document).ready(function() {
    
    getData();

});


function getData() {

    $.getJSON("js/discipline.json", function(schoolsData) {
        //Callback is a fnc that runs after something else executes
        //$.getJSON is an AJAX fnc

        console.log(schoolsData);

        loopThroughData(schoolsData);

    });

}

function loopThroughData(s) {

    for (i = 0; i < s.length; i++) {

        var schoolName = s[i]["SCHOOL_NAME"];
        var year = s[i]["YEAR"];
        var incident = s[i]["DSCPLN_INCIDENT_RATE"];


        var barWidth = incident * 50;

        if (schoolName === "COLUMBIA-HICKMAN HIGH" || schoolName ==="DAVID H. HICKMAN HIGH") {
            
            console.log(incident, year);

            $(".chart").append(
                "<div class='bar' style='width: "+barWidth+"px'></div>"+
                "<p>"+year+": "+incident+"%</p>"
                
             ); //adding the bar chart to anywhere that has a chart class

        }

    }

}

