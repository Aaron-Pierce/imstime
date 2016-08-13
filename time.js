/**
 * Created by Aaron on 7/11/2016.
 */
var freshmanStartTime = ["0735", "0835", "0929","1021", "1115", "1209", "1303", "1357", "1451"];
var freshmanEndTime = ["0840", "0855", "1000", "1104", "1159", "1254", "1358", "1502", "1605"];
//Always use upper, as it will default to upper if theres no entry in localstorage
var upperStartTime = ["0730", "0835", "0900","1008", "1112", "1207", "1302", "1406", "1510"];
var upperEndTime = ["0820", "0924", "1016", "1110", "1204", "1258", "1352", "1446", "1540"];

var freshmanStartTimeWed = ["0735", "0835", "0900", "0956", "1029", "1114", "1204", "1303", "1356", "1428", "1521"];
var freshmanEndTimeWed = ["0840", "0855", "0948", "1021", "1114", "1204", "1255", "1348", "1420", "1513", "1605"];
//make wed the same as normal, theres no difference for puny middle schoolers
var upperStartTimeWed = ["0730", "0835", "0900","1008", "1112", "1207", "1302", "1406", "1510"];
var upperEndTimeWed = ["0820", "0924", "1016", "1110", "1204", "1258", "1352", "1446", "1540"];

var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var d = new Date();
var dotw = days[d.getDay()];
if(dotw === "wednesday"){
    freshmanStartTime = freshmanStartTimeWed;
    freshmanEndTime = freshmanEndTimeWed;
    upperStartTime = upperStartTimeWed;
    upperEndTime =  upperEndTimeWed;
}

var currentHours = d.getHours();
var currentMinutes = d.getMinutes();
var currentTime = currentHours + "" + currentMinutes;
console.log("initialised timejs");


function reinitTime() {
    d = new Date();
    currentHours = d.getHours();
    currentMinutes = d.getMinutes();
    if(currentMinutes < 10){
        currentMinutes = "0" + currentMinutes
    }
    if(currentHours < 10){
        currentHours = "0" + currentHours
    }

    currentTime = currentHours + "" + currentMinutes;
}


var timeLeft;
var hour;
var inval = 0;
var loadedGrade = localStorage.getItem("grade");
var parser = document.createElement('a');
parser.href = window.location.href;

if(loadedGrade === null){
    if(parser.hash + "" === "freshman"){
        localStorage.setItem("grade", parser.hash.replace("#", ""));
    }else if(parser.hash + "" !== undefined){
        localStorage.setItem("grade", parser.hash.replace("#", ""));
    }
}

function main() {
    var grade = localStorage.getItem("grade");
    console.log("Grade " + grade + " Was Found");
    if (grade === "freshman") {
        console.log("Converting to freshman mode");

        for (var x = 0; x < freshmanStartTime.length; x++) {

            if (freshmanStartTime[x] <= currentTime && currentTime <= freshmanEndTime[x]) {
                console.log("valid time found");
                var startTime = freshmanStartTime[x].toString();
                var endTime = freshmanEndTime[x].toString();
                timeLeft = freshmanEndTime[x] - currentTime;
                if (currentHours + "".substring(0, 2) !== endTime + "".substring(0, 2)) {
                    timeLeft = timeLeft - 40;
                }

                console.log(timeLeft);
                $(document).ready(function () {
                    $(".minutesLeft").html(timeLeft);
                });

                inval = 0;

                break;

            }
            else if (currentTime >= freshmanEndTime [x] && freshmanStartTime[x + 1] >= currentTime) {
                if (currentHours + "".substring(0, 2) !== endTime + "".substring(0, 2)) {
                    timeLeft = timeLeft - 40;
                }else{
                    timeLeft = freshmanStartTime[x + 1] - currentTime;
                }

                $(".time").html("There are " + timeLeft + " Minutes Left Until Next Period");


            }
            else {
                console.log("Checked time, was invalid.");
                inval++;
                if (inval === freshmanStartTime.length) {
                    console.log("School Is Over");
                    $(".time").html("School Is Over <br> <h6 class='bugDisclaimer'>Is school not over? Send an email to nhstime@gmail.com</h6>");

                }
            }
        }
    } else {
        console.log("Converting to upperclassman mode");
        for (var x = 0; x < upperStartTime.length; x++) {

            if (upperStartTime[x] <= currentTime && currentTime <= upperEndTime[x]) {
                console.log("valid time found");
                var startTime = upperStartTime[x].toString();
                var endTime = upperEndTime[x].toString();
                timeLeft = upperEndTime[x] - currentTime;
                if (currentHours + "".substring(0, 2) !== endTime + "".substring(0, 2)) {
                    timeLeft = timeLeft - 40;
                }

                console.log(timeLeft);
                $(document).ready(function () {
                    $(".minutesLeft").html(timeLeft);
                });

                inval = 0;

                break;

            }
            else if (currentTime >= upperEndTime [x] && upperStartTime[x + 1] >= currentTime) {
                var startTime = upperStartTime[x].toString();
                var endTime = upperEndTime[x].toString();
                if (currentHours + "".substring(0, 2) !== endTime + "".substring(0, 2)) {
                    timeLeft = timeLeft - 40;
                }else{
                    timeLeft = freshmanStartTime[x + 1] - currentTime;
                }
                $(".time").html("There are " + timeLeft + " Minutes Left Until Next Period");


            }
            else {
                console.log("Checked time, was invalid.");
                inval++;
                if (inval === upperStartTime.length) {
                    console.log("School Is Over");
                $(".time").html("School Is Over <br> <h6 class='bugDisclaimer'>Is school not over? Send an email to nhstime@gmail.com</h6>");
                }
            }

        }
    }
}



setInterval(function () {
reinitTime();
    main();
}, 1000);