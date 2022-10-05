// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar                                         DONE
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours                                     DONE
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event                                                                            Done
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

const currentDate = moment().format('MMMM Do, YYYY');
const currentDayContainer = document.getElementById("currentDay");
currentDayContainer.innerText = currentDate;
const currentDateJS = new Date();
const currentTime = moment().hour();
const workDayHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];


// function to remove classList
// function removeClassList() {
//     timeBlock.classList.remove(".past");
//     timeBlock.classList.remove(".present");
//     timeBlock.classList.remove(".future");
// }




// function to color code past, present, and future times. 

function timeColours() {
    var timeBlock = document.querySelectorAll(".col-md-" + [i] + " time-block description");
    for (var i = 0; i < 9; i++) {
        // removeClassList();

        if (i === workDayHours) {
            timeBlock.classList.add(".present");
        }
        if (i > workDayHours) {
            timeBlock.classList.add(".past");
        }
        if (i < workDayHours) {
            timeBlock.classList.add(".future");
        }
        // persistent data from localStorage
if(localStorage[i]) {
    
}

    }
}

timeColours();


setInterval(timeColours, 1000); 

$('body').on('click', '.saveBtn', function(e) {
let clickedTime = this.id;
// alert(clickedTime);
let timeBlockText = $("#text-"+clickedTime).val();
localStorage.setItem(clickedTime, JSON.stringify(timeBlockText));



});