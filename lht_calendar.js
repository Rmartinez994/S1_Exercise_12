"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Rafael Martinez
   Date: 2/19/19  

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/


/* Set the date displayed in the calendar */
var thisDay = new Date("August 24, 2018");
// Write the calendar to the element with the id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//Function to generate calendar table 
function createCalendar(calDate) {
      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate);
      calendarHTML += calWeekdayRow();
      calendarHTML += calDays(cal);
      calendarHTML += "</table>";
      return calendarHTML;

}
//Function to write the calendar caption 
function calCaption(calDate) {
      //Month name array contains the list of month names 
      var monthName = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
      ];
      //Dtermine the current Month 
      var thisMonth = calDate.getMonth();
      //Determine the current year
      var thisYear = calDate.getFullYear();
      //Writes the captions 
      return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

// function to write a table row of weekday abbreviations
function calWeekdayRow() {
      //array of weekday abbreviations
      var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      var rowHTML = "<tr>";
      //look throught the dayName array
      for (var i = 0; i < dayName.length; i++) {
            rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
      }
      rowHTML += "</tr>";
      return rowHTML;
}
//function in calculate the number of days in the months
function daysInMonths(calDate) {
      //array of days in each month
      var daycount = [31, 38, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      //extract the four digit year and month value 
      var thisYear = calDate.getFullYear();
      var thisMonth = calDate.getMonth();
      //revise the days in Feburary for leap years
      if (thisYear % 4 === 0) {
            dayCount[1] = 29;
      }
      //return the number of days for the current month 
      return dayCount[thisMonth];
}
//functionn to write the table rows for each day of the month 
function calDays(calDate) {
      //determine the starting day of the month
      var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
      var weekDay = day.getDay();
      //write blanks cells proceding the starting day
      var htmlCode = "<tr>";
      for (var i = 0; i < weekDay; i++) {
            htmlCode += "<td></td>";
      }

      //write cells for each day of the month 
      var totalDays = daysInMonth(calDate);
      var highlightDay = calDate.getDate();
      for (var i = 1; i <= totalDays; i++) {
            day.setDate(i);
            weekday = day.getDay();
            if (weekDay === 0) {
                  htmlCode += "<tr>";
            }
            if (i === highlightDay) {
                  htmlCode += "<td class= 'calendar_dates' id='calendar_today'>" + i + "</td>";

            } else {
                  htmlCode += "<td class ='calendar_dates'>" + i + "</td>";
            }
            if (weekday === 6) {
                  htmlCode += "</tr>";
            }
      }
      return htmlCode;
}