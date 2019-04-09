var dts = require('./open.js');

var col = dts.val().list;

function conv(valz){
 d = new Date(valz * 1000);
//  console.log(d.toUTCString().slice(0,3));
// console.log(d.getDay());
}


// conv(col[24].dt);

var daysArray = ["1", "2", "3", "4", "5"];
var courseHwork = ["4", "8", "15", "16", "23", "42"];

var colla = [];
function qq(arr1, arr2){
    for(var i =0; i < arr1.length; i++){
        for(var j =0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                colla.push(arr1[i]);
            }
        }
    }
}

qq(daysArray, courseHwork);
console.log(colla);
// var arr = daysArray.concat(courseHwork);
// console.log(arr);
// var sorted_arr = col.sort();
// var results = [];
// for (var i = 0; i < col.length - 1; i++) {
//     if (sorted_arr[i + 1] == sorted_arr[i]) {
//         results.push(sorted_arr[i]);
//     }
// }

// console.log(results);