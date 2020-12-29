$(document).ready(function() {

    //function for date and time at the top
    let renderClock = function(){
        document.getElementById("currentDay").innerHTML = `${moment().format('MMM Do YYYY, h:mm:ss a')}`;
    }

    //call on date and time functions
    renderClock();
    setInterval(renderClock, 1000);

    //make settings to check the current hour and change the color of the boxes depending on the current time
    let date = new Date();
    let hours = parseInt(date.getHours());

    //creating object to hold the hours to be used by the scheduler. the number value also is used in setting the colors of each row.
    let hoursDisplay = [
        {time: "9am", number:9},
        {time: "10am", number:10},
        {time: "11am", number:11},
        {time: "12pm", number:12},
        {time: "1pm", number:13},
        {time: "2pm", number:14},
        {time: "3pm", number:15},
        {time: "4pm", number:16},
        {time: "5pm", number:17}
    ];

    //creating function for the "save" buttons in each time slot
    function buttonFunct (rows){
        for (let i=0; i<rows.length; i++){
            $("#"+"button"+rows[i].number).on("click", 
            function(){
                let taskInput = $("#task"+rows[i].number+"")
                localStorage.setItem("task"+rows[i].number, taskInput[0].value)
            })
        }
    }

    //creating the rows for each hour
    function createHourRows(rows){

        let container = $(".container")

        for (i=0; i < rows.length; i++){

            let hourRows = $("<div>")
            hourRows.attr("id", rows[i].time)
            hourRows.attr("number", rows[i].number)
            hourRows.attr("class", "row hour")

            let timeCol = $("<div>").text(rows[i].time)
            timeCol.attr("class", "col-3 hourCol")
            hourRows.append(timeCol);
            hourRows.css("text-align", "center")
    
            let textboxCol = $("<textarea>")
            textboxCol.attr("id", "task"+ hoursDisplay[i].number)
            textboxCol.attr("class", "col-7 textboxCol")
            hourRows.append(textboxCol)

            let btnCol = $("<button>")
            btnCol.attr("class","col-2 button")
            btnCol.attr("id", "button"+rows[i].number)
            btnCol.attr("type", "button")
            btnCol.text("Save");
            btnCol.css("background","black").css("color","white")
            hourRows.append(btnCol)

            container.append(hourRows)
        }

        //get items from local storage on page reload
        let task9 = localStorage.getItem("task9")
        $("#task9").text(task9)

        let task10 = localStorage.getItem("task10")
        $("#task10").text(task10)

        let task11 = localStorage.getItem("task11")
        $("#task11").text(task11)

        let task12 = localStorage.getItem("task12")
        $("#task12").text(task12)

        let task13 = localStorage.getItem("task13")
        $("#task13").text(task13)

        let task14 = localStorage.getItem("task14")
        $("#task14").text(task14)

        let task15 = localStorage.getItem("task15")
        $("#task15").text(task15)

        let task16 = localStorage.getItem("task16")
        $("#task16").text(task16)

        let task17 = localStorage.getItem("task17")
        $("#task17").text(task17)
    }

    //setting the colors of each row depending on what time it currently is
    function hourRowColors(){

        for (let i=0; i < 9; i++) {
            
            //set past hour color
            if (hoursDisplay[i].number < hours) {
                $(".hour")[i].style.background = "#ececec"
                console.log("past")
            } 
            //set current hours color
            else if (hoursDisplay[i].number === hours){
                $(".hour")[i].style.background = "#fdfd96"
                console.log("current")
            }
            //set future hours color
            else if (hoursDisplay[i].number > hours) {
                $(".hour")[i].style.background = "#77dd77"
                console.log("future")
            }
        } 
    }

    //create clear button
    function clearBtn () {
        let container = $(".container")
        let clrBtnDiv = $("<div>")
        clrBtnDiv.attr("class","row")
        let clrBtn = $("<button>")
        clrBtn.attr("class","col-12")
        clrBtn.attr("id", "clearBtn")
        clrBtn.attr("type", "button")
        clrBtn.text("Clear All");
        clrBtn.css("background","black").css("color","red")
        container.append(clrBtnDiv)
        clrBtnDiv.append(clrBtn)
    }

    //create function for clear button
    function clearBtnClk(){
        if(confirm("Are you sure you want to clear all tasks?")){
            localStorage.clear()
            for(let i=0; i < 9; i++){
                $("#task"+ hoursDisplay[i].number).empty()
            }
        }
        else {
        }

    }

    //call all the functions on page load
    createHourRows(hoursDisplay)
    buttonFunct(hoursDisplay)
    hourRowColors()
    clearBtn()

    //set up event listener for the clear button on click
    $("#clearBtn").on("click", clearBtnClk)
})