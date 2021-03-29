
function pictures()
{
    return("hello")
    var docs = document.getElementById('imgs');
    document.write(docs)
    // output.innerHTML += docs + "<br />"
    // console.log(docs)
    // console.log(docs.files.length)

    // for (var i = 0; i < docs.files.length; ++i) {
    // var varname = inp.files.item(i).name;
    // alert("here is a file name: " + varname);
    // console.log(varname)
    // output.innerHTML += varname + "<br />"

    // }
}


// When the user clicks on <div>, open the popup 


function myFunction() 
{
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// var fs = require('fs');
// var path = require('path');
// // In newer Node.js versions where process is already global this isn't necessary.
// var process = require("process");

// var folder = 'C:/Users/Erin Gant/Documents/Wein.com/img';


// // Loop through all the files in the temp directory
// fs.readdir(folder, function (err, files) {
//   if (err) {
//     console.error("Could not list the directory.", err);
//     process.exit(1);
//   }

//   files.forEach(function (file, index) {
//     // Make one pass and make the file complete
//     var folder = path.join(folder, file);
  
//     fs.stat(folder, function (error, stat) {
//       if (error) {
//         console.error("Error stating file.", error);
//         return;
//       }

//       if (stat.isFile())
//         console.log("'%s' is a file.", folder);
//       else if (stat.isDirectory())
//         console.log("'%s' is a directory.", folder);
//     });
//     });
// });

