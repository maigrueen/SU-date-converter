//R/2018-10-17T13:00:00/2018-10-17T14:00:00/P0Y0M14DT0H0M

var date = document.querySelector("#newDate"),
starttime = document.querySelector("#newStarttime"),
//add validation, that endtime is bigger than starttime
endtime = document.querySelector("#newEndtime"),
rerun = document.querySelector("#newReRun"),
outputString = document.querySelector("#outputString"),
submit = document.querySelector("#btn");

var convertToString = function(event) {
  outputString.value = 'R/'+date.value+'T'+starttime.value+':00/'+date.value+'T'+endtime.value+':00/P0Y0M'+rerun.value+'DT0H0M';
};
submit.addEventListener("click", convertToString);
