var lastpath = Cookies.get("lastpath");

function showFolder(folderpath) {
	$.get(hostaddress + "/papers", {
		path: folderpath
	}, function (data) {
		var folderdata = "";
		var filedata = "";
		for (folder in data.dirs) {
			folderdata = folderdata.concat("<div class='col s6 m4 l3'><a class='col s12 btn btn-large truncate blue accent-3' onclick='showFolder(" + '"' + data.path + "/" + data.dirs[folder] + '")' + "'>" + "<i class='material-icons left'>folder</i>" + data.dirs[folder] + "</a></div>");
		}
		for (file in data.files) {
			filedata = filedata.concat("<div class='col s12 m6 l4'><a class='col s12 btn btn-large truncate blue darken-4' href='" + hostaddress + data.path + "/" + data.files[file] + "'>" + "<i class='material-icons left'>insert_drive_file</i>" + data.files[file] + "</a></div>");
		}

		document.getElementById("file-manager-container-folder").innerHTML = folderdata;
		document.getElementById("file-manager-container-file").innerHTML = filedata;

		Cookies.set('lastpath', data.path, {
			expires: 7,
			path: '/'
		});
		//console.log(folderpath);
		var folderarray = folderpath.split("/");
		//console.log(folderarray);
		var breadcrumbdata = "<a href='#!' class='breadcrumb' onclick='showFolder(" + '""' + ")'>Home</a>";
		var breadcrumbpath = "";

		for (i = 1; i < folderarray.length; i++) {
			breadcrumbpath = breadcrumbpath.concat("/" + folderarray[i]);
			//console.log(breadcrumbpath);
			breadcrumbdata = breadcrumbdata.concat("<a href='#!' class='breadcrumb' onclick='showFolder(" + '"' + breadcrumbpath + '")' + "'>" + folderarray[i] + "</a>");

		}
		//console.log(breadcrumbdata);
		document.getElementById("path-breadcrumb-container").innerHTML = breadcrumbdata;
		//console.log(data);
	});
}


if (lastpath != undefined) {
	showFolder(lastpath);
} else {
	showFolder("");
}
