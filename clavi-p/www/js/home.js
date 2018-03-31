var loggeduser = Cookies.get('username-name');
var uname = Cookies.get('username');

//console.log(loggeduser);

$(document).ready(function () {
    Materialize.toast("Welcome " + loggeduser + "!", 3000);

    // hideWait();
    var firstuse = Cookies.get("firstuse");
    if (firstuse == undefined) {
        Cookies.set("firstuse", "false", {
            expires: 108,
            path: '/'
        });
        $('#menu-btn-tap-target').tapTarget('open');
    }

    getAvgAttendance();

});


function getAvgAttendance() {
    $.get(hostaddress + "/attendance", {
        username: uname
    }, function (attendancedata) {

        var total = 0;
        var attendanceLength = 0;

        for (var subject in attendancedata) {

            var totaldays = 0;
            var presentdays = 0;

            for (var day in attendancedata[subject]["dates"]) {
                if (attendancedata[subject]["dates"][day] == 1) {
                    presentdays++;
                }
                totaldays++;
            }

            var attendancevalue = parseInt(presentdays * 100 / totaldays);
            attendanceLength++;

            total = total + attendancevalue;

        }

        var average = Math.floor(total / attendanceLength);

        document.getElementById("avg-attendance").innerHTML = average + "%";
    });
}
