var uname = Cookies.get("username");


function getAttendance() {
    showWait();
    $.get(hostaddress + "/attendance", {
        username: uname
    }, function (attendancedata) {
        //var innerdata = "<div class='row'>";
        var innerdata = "<ul class='collection full-width'>";
        //var innerdata = "";
        var total = 0;
        var attendanceLength = 0;

        for (var subject in attendancedata) {

            var attendancevalue = attendancedata[subject];
            var subjectcolor = "";
            if (attendancevalue >= 80) {
                subjectcolor = "light-green accent-4";
            } else if (attendancevalue >= 60) {
                subjectcolor = "amber";
            } else {
                subjectcolor = "red";
            }

            /*
            innerdata = innerdata.concat("<div class='row'><div class='col s12 m3 truncate'>" + subject + "</div><div class='col s12 m9'><div class='graph-bar' style='width:" + attendancevalue + "%;background:" + subjectcolor + "'>" + attendancevalue + "%</div></div></div>");
            *

            innerdata = innerdata.concat("<div class='row'><div class='col s12 m8 l6 push-m2 push-l3'><div class='card bottom-padded row hoverable'><div class='graph-bar' style='width:" + attendancevalue + "%;background:" + subjectcolor + "'></div><div class='padded'><div class='col s9  truncate flow-text'>" + subject + "</div><div class='col s3 flow-text'>" + attendancevalue + "%</div></div></div></div></div>");
            */

            innerdata = innerdata.concat("<li class='collection-item'><div class='row no-margin valign-wrapper'><div class='col s9  truncate flow-text'>" + subject + "</div><div class='col s3'><div class='btn-floating center " + subjectcolor + "'>" + attendancevalue + "</div></div></div></li>");



            attendanceLength++;

            total = total + attendancevalue;
            //console.log(total);
        }

        //console.log(innerdata);
        //innerdata = innerdata.concat("</div>");
        innerdata = innerdata.concat("</ul>");
        document.getElementById("attendance-graph-cotainer").innerHTML = innerdata;



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
});
