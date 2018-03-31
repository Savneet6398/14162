var uname = Cookies.get("username");



function getLibrary() {
    showWait();
    $.get(hostaddress + "/library", {
        username: uname
    }, function (librarydata) {

        for (var book in librarydata) {


            var innerdata = "<li class='collection-item avatar'><i class='material-icons circle'>book</i><span class='title'>" + librarydata[book]["name"] + "</span><br>" + librarydata[book]["issue"] + "<br>" + librarydata[book]["due"] + "</li>";

            $("#book-list-container").prepend(innerdata);

        }

        $("#fine").removeClass("hidden");

        hideWait();
    });
}

$(document).ready(function () {
    getLibrary();

    $('.collapsible').collapsible({
        accordion: false
    });

});
