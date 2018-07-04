function tellTime(hour,minute,period){
    var minText = "", perText = "";
    if (minute < 15){
        minText = "just after ";
    } else if (minute == 15){
        minText = "quarter after ";
    } else if (15 < minute && minute < 30){
        minText = "almost half past ";
    } else if (minute == 30) {
        minText = "half past ";
    } else if ( 30 < minute && minute < 45) {
        minText = "just after half past ";
    } else {
        minText = "almost ";
        hour = hour + 1;
    }
    if (period == "AM"){
        perText = " in the morning";
    } else {
        perText = " in the evening";
    }
    console.log("It's " + minText + hour + perText);
}
tellTime(7,20,"AM"); 
tellTime(9,46,"PM");