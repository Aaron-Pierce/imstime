//THIS IS THE OLD ALGORITHM



//^^^^^^^^^^^^^^^^^^^^



//^^^^^^^^^^^^^^^^^^^^^^


/*
var textHeight = $(".p").height()/2;
        var bodyHeight = $(window).height()/2;
  
        $(".p").css("margin-top",bodyHeight - textHeight);



    var end0 = 8
var end1 = 9
var end2 = 10
var end3 = 11
var end4 = 12
var end5 = 13
var end6 = 13
var end7 = 14
var end8 = 15





var currentdate = new Date();
var currentHours;
var currentMinutes;
var timeLeft;
var currentTime;
var currentPeriod;
var minleft;



function checkvars(){
    var textHeight = $(".p").height()/2;
        var bodyHeight = $(window).height()/2;
   
        $(".p").css("margin-top",bodyHeight - textHeight);

currentdate = new Date();
currentHours = currentdate.getHours();
currentMinutes = currentdate.getMinutes();
timeLeft;
currentTime = currentHours+""+currentMinutes;
currentPeriod = 0;
minleft = 0;

    if(currentMinutes == 0){
        currentMinutes = "00";
    }
    else if(currentMinutes == 1){
        currentMinutes = "01";
    }else if(currentMinutes == 2){
        currentMinutes = "02";
    }else if(currentMinutes == 3){
        currentMinutes = "03";
    }else if(currentMinutes == 4){
        currentMinutes = "04";
    }else if(currentMinutes == 5){
        currentMinutes = "05";
    }else if(currentMinutes == 6){
        currentMinutes = "06";
    }else if(currentMinutes == 7){
        currentMinutes = "07";
    }else if(currentMinutes == 8){
        currentMinutes = "08";
    }else if(currentMinutes == 9){
        currentMinutes = "09";
    }
}
checkvars();
run();
function run(){

var textHeight = $(".p").height()/2;
        var bodyHeight = $(window).height()/2;
        
        $(".p").css("margin-top",bodyHeight - textHeight);

currentTime = currentHours+""+currentMinutes;



    if(currentMinutes == 0){
        currentMinutes = "00";
    }
    else if(currentMinutes == 1){
        currentMinutes = "01";
    }else if(currentMinutes == 2){
        currentMinutes = "02";
    }else if(currentMinutes == 3){
        currentMinutes = "03";
    }else if(currentMinutes == 4){
        currentMinutes = "04";
    }else if(currentMinutes == 5){
        currentMinutes = "05";
    }else if(currentMinutes == 6){
        currentMinutes = "06";
    }else if(currentMinutes == 7){
        currentMinutes = "07";
    }else if(currentMinutes == 8){
        currentMinutes = "08";
    }else if(currentMinutes == 9){
        currentMinutes = "09";
    }









if(currentTime>= 1541 || currentTime<=729){
    if(currentHours == 13){
        currentHours = 1;
    }else if(currentHours == 14){
        currentHours = 2;
    }else if(currentHours == 15){
        currentHours = 3;
    }else if(currentHours == 16){
        currentHours = 4;
    }else if(currentHours == 17){
        currentHours = 5;
    }else if(currentHours == 18){
        currentHours = 6;
    }else if(currentHours == 19){
        currentHours = 7;
    }else if(currentHours == 20){
        currentHours = 8;
    }else if(currentHours == 21){
        currentHours = 9;
    }else if(currentHours == 22){
        currentHours = 10;
    }else if(currentHours == 23){
        currentHours = 11;
    }else if(currentHours == 24){
        currentHours = 12;
    }
    $(".body").html("<p class='p'>The Current Time Is: <br>"+currentHours+":"+currentMinutes);
}





if(currentTime>=730 && currentTime<=820){
    if(end0 == currentHours){
    currentPeriod = 0;
    timeLeft = 820 - currentTime;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}else{
    currentPeriod = 0;
    timeLeft = (820 - currentTime)-40;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}






}else if(currentTime>=821 && currentTime<=835){

    timeLeft = 835 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}









else if(currentTime>=835 && currentTime<=925){
    if(end1 == currentHours){
    timeLeft = 925 - currentTime;
    currentPeriod = 1;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"st Hour");
}else{
        timeLeft = (925 - currentTime)-40;
    currentPeriod = 1;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"st Hour");
}
}







else if(currentTime>=926 && currentTime<=929){
    timeLeft = 929 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=929 && currentTime<=1019){
    if(end2 == currentHours){
    timeLeft = 1019 - currentTime;
    currentPeriod = 2;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"nd Hour");
}else{
    timeLeft = (1019 - currentTime)-40;
    currentPeriod = 2;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"nd Hour");



}
}





else if(currentTime>=1020 && currentTime<=1023){
    timeLeft = 1023 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=1023 && currentTime<=1113){
        if(end3 == currentHours){
    timeLeft = 1113 - currentTime;
    currentPeriod = 3;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"rd Hour");
}else{
timeLeft = (1113 - currentTime)-40;
    currentPeriod = 3;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"rd Hour");
}
}




else if(currentTime>=1113 && currentTime<=1117){
    timeLeft = 1117 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}




else if(currentTime>=1117 && currentTime<=1207){
    if(end4 == currentHours){
    timeLeft = 1207 - currentTime;
    currentPeriod = 4;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
    }else{
            timeLeft = (1207 - currentTime)-40;
    currentPeriod = 4;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
    }
}




else if(currentTime>=1207 && currentTime<=1211){
    timeLeft = 1211 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=1211 && currentTime<=1301){
    if(end5 == currentHours){
    timeLeft = 1301 - currentTime;
    currentPeriod = 5;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}else{
    timeLeft = (1301 - currentTime)-40;
    currentPeriod = 5;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}
}





else if(currentTime>=1301 && currentTime<=1305){
    timeLeft = 1305 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=1305 && currentTime<=1355){
    if(end6 == currentHours){
    timeLeft = 1355 - currentTime;
    currentPeriod = 6;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}else{
        timeLeft = (1355 - currentTime)-40;
    currentPeriod = 6;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}
}





else if(currentTime>=1355&& currentTime<=1359){
    timeLeft = 1359 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}






else if(currentTime>=1359 && currentTime<=1449){
        if(end7 == currentHours){
    timeLeft = 1449 - currentTime;
    currentPeriod = 7;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}else{
        timeLeft = (1449 - currentTime)-40;
    currentPeriod = 7;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}
}





else if(currentTime>=1449 && currentTime<=1454){
    timeLeft = 1454 - currentTime;
    currentPeriod = "Passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=1454 && currentTime<=1540){
            if(end8 == currentHours){
    timeLeft = 1540 - currentTime;
    currentPeriod = 8;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}else{
        timeLeft = (1540 - currentTime)-40;
    currentPeriod = 8;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}
}


if(timeLeft < 1){
    $(".body").html("<p class='p'> There Is Less Than 1 Minute Left In " +currentPeriod +" Period");
}

}

setInterval(function(){ 
    
    var textHeight = $(".p").height()/2;
        var bodyHeight = $(window).height()/2;
      
        $(".p").css("margin-top",bodyHeight - textHeight);

    $(".style").css(".style","body{ background-color: #333; color: #fff; text-align: center; height: 100%; width: 100%; } p{ left: 0; font-size: 10em; color: #337ab7; text-shadow: 12px 12px #292929; }");
run();
checkvars();

}, 1000);

*/






















var textHeight = $(".p").height()/2;
        var bodyHeight = $(window).height()/2;
  
        $(".p").css("margin-top",bodyHeight - textHeight);



    var end0 = 8
var end1 = 9
var end2 = 10
var end3 = 11
var end4 = 12
var end5 = 13
var end6 = 13
var end7 = 14
var end8 = 15





var currentdate = new Date();
var currentHours;
var currentMinutes;
var timeLeft;
var currentTime;
var currentPeriod;
var minleft;



function checkvars(){
    var textHeight = $(".p").height()/2;
        var bodyHeight = $(window).height()/2;
   
        $(".p").css("margin-top",bodyHeight - textHeight);

currentdate = new Date();
currentHours = currentdate.getHours();
currentMinutes = currentdate.getMinutes();
timeLeft;
currentTime = currentHours+""+currentMinutes;
currentPeriod = 0;
minleft = 0;

    if(currentMinutes == 0){
        currentMinutes = "00";
    }
    else if(currentMinutes == 1){
        currentMinutes = "01";
    }else if(currentMinutes == 2){
        currentMinutes = "02";
    }else if(currentMinutes == 3){
        currentMinutes = "03";
    }else if(currentMinutes == 4){
        currentMinutes = "04";
    }else if(currentMinutes == 5){
        currentMinutes = "05";
    }else if(currentMinutes == 6){
        currentMinutes = "06";
    }else if(currentMinutes == 7){
        currentMinutes = "07";
    }else if(currentMinutes == 8){
        currentMinutes = "08";
    }else if(currentMinutes == 9){
        currentMinutes = "09";
    }
}
checkvars();
run();
function run(){

var textHeight = $(".p").height()/2;
        var bodyHeight = $(window).height()/2;
        
        $(".p").css("margin-top",bodyHeight - textHeight);

currentTime = currentHours+""+currentMinutes;



    if(currentMinutes == 0){
        currentMinutes = "00";
    }
    else if(currentMinutes == 1){
        currentMinutes = "01";
    }else if(currentMinutes == 2){
        currentMinutes = "02";
    }else if(currentMinutes == 3){
        currentMinutes = "03";
    }else if(currentMinutes == 4){
        currentMinutes = "04";
    }else if(currentMinutes == 5){
        currentMinutes = "05";
    }else if(currentMinutes == 6){
        currentMinutes = "06";
    }else if(currentMinutes == 7){
        currentMinutes = "07";
    }else if(currentMinutes == 8){
        currentMinutes = "08";
    }else if(currentMinutes == 9){
        currentMinutes = "09";
    }









if(currentTime>= 1541 || currentTime<=729){
    if(currentHours == 13){
        currentHours = 1;
    }else if(currentHours == 14){
        currentHours = 2;
    }else if(currentHours == 15){
        currentHours = 3;
    }else if(currentHours == 16){
        currentHours = 4;
    }else if(currentHours == 17){
        currentHours = 5;
    }else if(currentHours == 18){
        currentHours = 6;
    }else if(currentHours == 19){
        currentHours = 7;
    }else if(currentHours == 20){
        currentHours = 8;
    }else if(currentHours == 21){
        currentHours = 9;
    }else if(currentHours == 22){
        currentHours = 10;
    }else if(currentHours == 23){
        currentHours = 11;
    }else if(currentHours == 24){
        currentHours = 12;
    }
    $(".body").html("<p class='p'>The Current Time Is: <br>"+currentHours+":"+currentMinutes);
}





if(currentTime>=730 && currentTime<=819){
    if(end0 == currentHours){
    currentPeriod = 0;
    timeLeft = 820 - currentTime;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}else{
    currentPeriod = 0;
    timeLeft = (820 - currentTime)-40;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}






}else if(currentTime>=821 && currentTime<=834){

    timeLeft = 835 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}









else if(currentTime>=835 && currentTime<=924){
    if(end1 == currentHours){
    timeLeft = 925 - currentTime;
    currentPeriod = 1;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"st Hour");
}else{
        timeLeft = (925 - currentTime)-40;
    currentPeriod = 1;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"st Hour");
}
}







else if(currentTime>=926 && currentTime<=928){
    timeLeft = 929 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=929 && currentTime<=1018){
    if(end2 == currentHours){
    timeLeft = 1019 - currentTime;
    currentPeriod = 2;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"nd Hour");
}else{
    timeLeft = (1019 - currentTime)-40;
    currentPeriod = 2;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"nd Hour");



}
}





else if(currentTime>=1020 && currentTime<=1022){
    timeLeft = 1023 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=1023 && currentTime<=1112){
        if(end3 == currentHours){
    timeLeft = 1113 - currentTime;
    currentPeriod = 3;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"rd Hour");
}else{
timeLeft = (1113 - currentTime)-40;
    currentPeriod = 3;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"rd Hour");
}
}




else if(currentTime>=1113 && currentTime<=1116){
    timeLeft = 1117 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}




else if(currentTime>=1117 && currentTime<=1206){
    if(end4 == currentHours){
    timeLeft = 1207 - currentTime;
    currentPeriod = 4;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
    }else{
            timeLeft = (1207 - currentTime)-40;
    currentPeriod = 4;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
    }
}




else if(currentTime>=1207 && currentTime<=1212){
    timeLeft = 1211 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=1211 && currentTime<=1300){
    if(end5 == currentHours){
    timeLeft = 1301 - currentTime;
    currentPeriod = 5;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}else{
    timeLeft = (1301 - currentTime)-40;
    currentPeriod = 5;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}
}





else if(currentTime>=1301 && currentTime<=1304){
    timeLeft = 1305 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=1305 && currentTime<=1354){
    if(end6 == currentHours){
    timeLeft = 1355 - currentTime;
    currentPeriod = 6;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}else{
        timeLeft = (1355 - currentTime)-40;
    currentPeriod = 6;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}
}





else if(currentTime>=1355&& currentTime<=1358){
    timeLeft = 1359 - currentTime;
    currentPeriod = "passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}






else if(currentTime>=1359 && currentTime<=1448){
        if(end7 == currentHours){
    timeLeft = 1449 - currentTime;
    currentPeriod = 7;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}else{
        timeLeft = (1449 - currentTime)-40;
    currentPeriod = 7;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}
}





else if(currentTime>=1449 && currentTime<=1453){
    timeLeft = 1454 - currentTime;
    currentPeriod = "Passing";
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
}





else if(currentTime>=1454 && currentTime<=1539){
            if(end8 == currentHours){
    timeLeft = 1540 - currentTime;
    currentPeriod = 8;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}else{
        timeLeft = (1540 - currentTime)-40;
    currentPeriod = 8;
    $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
}
}


if(timeLeft < 1){
    $(".body").html("<p class='p'> There Is Less Than 1 Minute Left In " +currentPeriod +" Period");
}

}

setInterval(function(){ 
    
    var textHeight = $(".p").height()/2;
        var bodyHeight = $(window).height()/2;
      
        $(".p").css("margin-top",bodyHeight - textHeight);

    $(".style").css(".style","body{ background-color: #333; color: #fff; text-align: center; height: 100%; width: 100%; } p{ left: 0; font-size: 10em; color: #337ab7; text-shadow: 12px 12px #292929; }");
run();
checkvars();

}, 1000);

