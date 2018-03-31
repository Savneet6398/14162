var uname = Cookies.get("username");


function getAcademics() {
    showWait();
    $.get(hostaddress + "/academics", {
        username: uname
    }, function (academicsdata) {

        var finalinnerdata = "";

        var totalMarks = 0;

        for (var subject in academicsdata) {


            var innerDataStart = "<li class='rounded'><div class='collapsible-header'><div class='truncate flow-text'>" + subject + "</div></div><div class='collapsible-body hidden-overflow'>";

            var innerDataMiddle = "";
            totalMarks = 0;
            for (var type in academicsdata[subject].marks) {
                innerDataMiddle = innerDataMiddle.concat("<div class='row valign-wrapper'><div class='col s1'>" + type.toUpperCase() + "</div><div class='col s11'><ol>");
                for (var mark in academicsdata[subject].marks[type]) {
                    innerDataMiddle = innerDataMiddle.concat("<li style='display: inline-block;'><div class='circle-highlight valign-wrapper'><div class='container center'>" + academicsdata[subject].marks[type][mark] + "</div></div></li>");

                    //totalMarks = totalMarks + academicsdata[subject].marks[type][mark];
                }
                innerDataMiddle = innerDataMiddle.concat("</ol></div></div>");
            }
            //innerDataMiddle = innerDataMiddle.concat("<div class='row'>total<div class='circle-highlight valign-wrapper'><div class='container center'>" + totalMarks + "</div></div></div>");
            innerDataMiddle = innerDataMiddle.concat("</div>");
            var innerDataEnd = "</li>";
            var innerdata = innerDataStart + innerDataMiddle + innerDataEnd;
            finalinnerdata = finalinnerdata.concat(innerdata);
        }


        //console.log(innerdata);
        document.getElementById("marks-table-container").innerHTML = finalinnerdata;

        hideWait();

        //console.log(total);
        //console.log(attendanceLength);
        //console.log(average);

    });
}

$(document).ready(function () {
    getAcademics();

    $('select').formSelect();

    $('.collapsible').collapsible({
        accordion: false
    });

});
