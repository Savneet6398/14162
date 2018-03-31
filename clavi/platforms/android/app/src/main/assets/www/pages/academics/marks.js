var uname = Cookies.get("username");


function getAcademics() {
    showWait();
    $.get(hostaddress + "/academics", {
        username: uname
    }, function (academicsdata) {

        var finalinnerdata = "";

        var totalMarks = 0;

        for (var subject in academicsdata) {

            var innerDataStart = "<div class='one-subject row'><p><span class='strong'>" + subject + "</span> - " + academicsdata[subject].teacher + "</p><table class='centered'><thead><tr><td colspan='7' class='center'>TAE</td><td colspan='3' class='center'>CAE</td><td class='center'>ESE</td><td class='center'>Total</td></tr><tbody><tr>";

            var innerDataMiddle = "";
            totalMarks = 0;
            for (var type in academicsdata[subject].marks) {
                for (var mark in academicsdata[subject].marks[type]) {
                    innerDataMiddle = innerDataMiddle.concat("<td>" + academicsdata[subject].marks[type][mark] + "</td>");
                    totalMarks = totalMarks + academicsdata[subject].marks[type][mark];
                }
            }
            innerDataMiddle = innerDataMiddle.concat("<td>" + totalMarks + "</td>");
            var innerDataEnd = "</tr></tbody></thead></table></div>";
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
});
