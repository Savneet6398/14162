var uname = Cookies.get("username");



function getAttendance() {
    showWait();
    $.get(hostaddress + "/attendance", {
        username: uname
    }, function (attendancedata) {
        //var innerdata = "<div class='row'>";

        //attendancedata = JSON.parse(attendancedata);
        //var innerdata = "";
        var total = 0;
        var attendanceLength = 0;

        for (var subject in attendancedata) {

            var totaldays = 0;
            var presentdays = 0;



            //console.log(attendancedata[subject]["dates"]);

            /*
            innerdata = innerdata.concat("<div class='row'><div class='col s12 m3 truncate'>" + subject + "</div><div class='col s12 m9'><div class='graph-bar' style='width:" + attendancevalue + "%;background:" + subjectcolor + "'>" + attendancevalue + "%</div></div></div>");

            *

            innerdata = innerdata.concat("<div class='row'><div class='col s12 m8 l6 push-m2 push-l3'><div class='card bottom-padded row hoverable'><div class='graph-bar' style='width:" + attendancevalue + "%;background:" + subjectcolor + "'></div><div class='padded'><div class='col s9  truncate flow-text'>" + subject + "</div><div class='col s3 flow-text'>" + attendancevalue + "%</div></div></div></div></div>");
            */

            for (var day in attendancedata[subject]["dates"]) {
                //console.log(attendancedata[subject]["dates"][day]);

                if (attendancedata[subject]["dates"][day] == 1) {
                    presentdays++;
                }

                totaldays++;
            }

            //console.log(presentdays);
            //console.log(totaldays);


            var attendancevalue = parseInt(presentdays * 100 / totaldays);

            var subjectcolor = "";
            if (attendancevalue >= 80) {
                subjectcolor = "light-green accent-4";
            } else if (attendancevalue >= 60) {
                subjectcolor = "amber";
            } else {
                subjectcolor = "red";
            }

            var innerdata = "<li class='rounded'><div class='collapsible-header'><div class='row no-margin valign-wrapper'><div class='col s9  truncate flow-text'>" + subject + "</div><div class='col s3'><div class='btn-floating center " + subjectcolor + "'>" + attendancevalue + "</div></div></div></div><div class='collapsible-body'><ul>";




            for (var day in attendancedata[subject]["dates"]) {

                var ele = "";

                if (attendancedata[subject]["dates"][day]) {
                    ele = "<li>" + day + "<span class='right'>P</span></li>"
                } else {
                    ele = "<li class='red-text text-darken-2'>" + day + "<span class='right'>A</span></li>"

                }



                innerdata = innerdata.concat(ele);

            }







            innerdata = innerdata.concat("</ul></div></li>");

            $("#attendance-container").append(innerdata);





            attendanceLength++;

            total = total + attendancevalue;





            //console.log(total);
        }

        //console.log(innerdata);
        //innerdata = innerdata.concat("</div>");





        var average = Math.floor(total / attendanceLength);
        var attendanceStatus = "";

        //var avgElems = document.getElementsByClassName("avg-color");
        //console.log(avgElems);

        if (average >= 75) {
            attendanceStatus = "good";
        } else if (average >= 65) {
            attendanceStatus = "poor";
            $('.avg-color').removeClass("blue");
            $('.avg-color').addClass("amber");
        } else {
            attendanceStatus = "very poor";
            $('.avg-color').removeClass("blue");
            $('.avg-color').addClass("red");
        }

        document.getElementById("attendance-status").innerHTML = attendanceStatus;
        document.getElementById("avg-percentage").innerHTML = average + "%";




        hideWait();
    });
}

$(document).ready(function () {
    getAttendance();

    $('.collapsible').collapsible({
        accordion: false
    });

});
