$(document).ready(function() {
    var events = [];


//Current date and time in header
var todaysDate = moment().format('dddd, MMM Do YYYY ');
$("#currentDay").html(todaysDate);

  
window.onload = function(){
    colorCode();
    }
  
  //change color of rows based on time

  var now = new Date().getHours();
  function colorCode() {
    if (now > 9) {
      $("#9amtask").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#9amtask").addClass("present");
    } else if (now < 9) {
      $("#9amtask").addClass("future");
    }
    if (now > 10) {
        $("#10amtask").addClass("past");
      } else if (now >= 10 && now < 11) {
        $("#10amtask").addClass("present");
      } else if (now < 10) {
        $("#10amtask").addClass("future");
      }
      if (now > 11) {
        $("#11amtask").addClass("past");
      } else if (now >= 11 && now < 12) {
        $("#t11amtask").addClass("present");
      } else if (now < 11) {
        $("#11amtask").addClass("future");
      }
      if (now > 12) {
        $("#12pmtask").addClass("past");
      } else if (now >= 12 && now < 13) {
        $("#12pmtask").addClass("present");
      } else if (now < 12) {
        $("#12pmtask").addClass("future");
      }
      if (now > 13) {
        $("#1pmtask").addClass("past");
      } else if (now >= 13 && now < 14) {
        $("#1pmtask").addClass("present");
      } else if (now < 13) {
        $("#1pmtask").addClass("future");
      }
      if (now > 14) {
        $("#2pmtask").addClass("past");
      } else if (now >= 14 && now < 15) {
        $("#2pmtask").addClass("present");
      } else if (now < 14) {
        $("#2pmtask").addClass("future");
      }
      if (now > 15) {
        $("#3pmtask").addClass("past");
      } else if (now >= 15 && now < 16) {
        $("#3pmtask").addClass("present");
      } else if (now < 15) {
        $("#3pmtask").addClass("future");
      }
}


//save function
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".task").val;
    localStorage.setItem("events", JSON.stringify(events));
    
});
});
   
