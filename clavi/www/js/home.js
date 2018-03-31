var loggeduser = Cookies.get('username-name');
//console.log(loggeduser);

$(document).ready(function () {
    Materialize.toast("Welcome " + loggeduser + "!", 3000);
    getAllNotifications();
    // hideWait();
    var firstuse = Cookies.get("firstuse");
    if (firstuse == undefined) {
        Cookies.set("firstuse", "false", {
            expires: 108,
            path: '/'
        });
        $('#menu-btn-tap-target').tapTarget('open');
    }

    getScholarship("mahadbt");

    $('.collapsible').collapsible({
        accordion: false
    });

});


function getScholarship(govt) {
    $.get(hostaddress + "/scholarships", {
        gov: govt
    }, function (scholarship) {

        for (var notice in scholarship) {


            /*
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
                        */

            var innerdata = "<li><div class='collapsible-header'><div class='truncate flow-text'>" + scholarship[notice]["SchemeName"] + "</div></div><div class='collapsible-body hidden-overflow'>";

            innerdata = innerdata.concat(scholarship[notice]["overview"] );


            innerdata = innerdata.concat("</div></li>")

            $("#scholarship-container").append(innerdata);





        }

    });
}





function getNotifications(type, section) {
    $.get(hostaddress + "/notifications", {
        type: type
    }, function (notifications) {
        noticelist = "";
        for (var notice in notifications[section]) {

            for (var x in notifications[section][notice]) {
                noticelist = noticelist.concat("<a href='" + notifications[section][notice][x] + "'>" + x + "</a><br>");
                //console.log(x);

            }
            //console.log(noticelist);
            document.getElementById("notification-" + type + "-" + section).innerHTML = noticelist;
            document.getElementById("notification-small-" + type + "-" + section).innerHTML = noticelist;
        }
    });
}

function getAllNotifications() {
    getNotifications("general", "notices");
    getNotifications("departmental", "notices");
    getNotifications("general", "events");
    getNotifications("departmental", "events");
}
