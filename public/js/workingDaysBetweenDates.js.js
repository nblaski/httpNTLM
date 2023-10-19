let workingDaysBetweenDates = (startDate, endDate) => {
    /* Two working days and an sunday (not working day) */
    var holidays = ['2023-11-23', '2023-11-24', '2023-12-25', '2023-12-26'];
  // Validate input
    if (endDate <= startDate) {
      return 0;
    }
    
  // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    startDate.setHours(0, 0, 0, 1);  // Start just after midnight
    endDate.setHours(23, 59, 59, 999);  // End just before midnight
    var diff = endDate - startDate;  // Milliseconds between datetime objects    
    var days = Math.ceil(diff / millisecondsPerDay);
  
    // Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days -= weeks * 2;
  
    // Handle special cases
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();
      
    // Remove weekend not previously removed.   
    if (startDay - endDay > 1) {
      days -= 2;
    }
    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay == 0 && endDay != 6) {
      days--;  
    }
    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay == 6 && startDay != 0) {
      days--;
    }
    /* Here is the code */
    holidays.forEach(day => {
     const holidayUTC = new Date(day)
      if ((holidayUTC >= startDate) && (holidayUTC <= endDate)) {
        /* If it is not saturday (6) or sunday (0), substract it */
        if (holidayUTC.getDay() % 6 != 0) {
          days--;
        }
      }
    });
    return days;
  }
//   function parseDate(input) {
//     // Transform date from text to date
//   var parts = input.match(/(\d+)/g);
//   // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
//   return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
// }

module.exports = { workingDaysBetweenDates }