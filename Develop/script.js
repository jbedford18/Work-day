
//Current date and time in header
var todaysDate = moment().format('dddd, MMM Do YYYY ');
$("#currentDay").html(todaysDate);

  // apply new class if task is near/over due date
  
  
  const rows = document.getElementsByClassName("row");
  let currentHour = parseInt(moment().format('H'));
  
  Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor(row, "red");
      } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setColor(row, "green");
      } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "white");
      }
    }
  });
  
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }