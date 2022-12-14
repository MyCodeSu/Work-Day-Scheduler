// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar                                         DONE
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours                                     DONE
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future        DONE
// WHEN I click into a time block
// THEN I can enter an event                                                                            Done
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage                                               DONE
// WHEN I refresh the page
// THEN the saved events persist                                                                        DONE

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

    for (var i = 0; i < 9; i++) {
        // removeClassList();
        var timeBlock = document.getElementById("text-" + workDayHours[i]);

        if (workDayHours[i] === currentTime) {
           timeBlock.classList.add("present");
        }
        if (workDayHours[i] > currentTime) {
            timeBlock.classList.add("future");
        }
        if (workDayHours[i] < currentTime) {
            timeBlock.classList.add("past");
        }
        // persistent data from localStorage
        if (localStorage.getItem(workDayHours[i])) {
            document.getElementById("text-" + workDayHours[i]).innerText =JSON.parse(localStorage.getItem(workDayHours[i]));
        }

    }
}

timeColours();

$('body').on('click', '.saveBtn', function (e) {
    let clickedTime = this.id;
    // alert(clickedTime);
    let timeBlockText = $("#text-" + clickedTime).val();
    localStorage.setItem(clickedTime, JSON.stringify(timeBlockText));



});