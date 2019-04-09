// check values in 2 arrays that are same
var daysArray = ["1", "2", "3", "4", "5"];
var courseHwork = ["4", "8", "15", "16", "23", "42"];

var arr = daysArray.concat(courseHwork);
var sorted_arr = arr.sort();
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results);

var daysArray = ["1", "2", "3", "4", "5", "12"];
var courseHwork = ["4", "8", "15", "16", "23", "42", "12"];

for (var i = 0; i < courseHwork.length; i++) {
    for (var j = 0; j < daysArray.length; j++) {
        if (courseHwork[i] == daysArray[j]) {
          $('div:contains("'+daysArray[j]+'")').append("<div class='assignment'>"+courseHwork[i]+" - appended</div>");
        }
    }
}