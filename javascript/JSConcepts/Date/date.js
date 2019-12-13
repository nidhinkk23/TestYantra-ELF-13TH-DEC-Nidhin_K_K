var todaysDate = new Date()
console.log("Today's Date is ",todaysDate);

var date = todaysDate.getDate()
var month = todaysDate.getMonth() + 1
var day = todaysDate.getDay() + 1
var year = todaysDate.getFullYear()

var displayDate = date + '/' + month + '/' + year
console.log("Display Date ",displayDate);


var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
var m = todaysDate.getMonth()
var m1 = months[m]
console.log("MONTH ",m1);

var days = ['SUN','MON','TUE','WED','THU','FRI']
var d = todaysDate.getDay()
var d1 = days[d]
console.log("Day is ",d1);


var dateM = new Date(0)//milli seconds
console.log("Date with milliseconds ",dateM);

var dateS = new Date("October 21 2019")//String
console.log("Date with string ",dateS)

var dateY = new Date(2019,10,15)
console.log("Date with Year ",dateY)







