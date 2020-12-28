$(document).ready(function() {

    //style the times in the left column
    // let hourDisplay = $(".hour");
    // $(hourDisplay).width('100%').height('80px').css('border','1px solid black').css('text-align','center');


    //function for date and time at the top
    let renderClock = function(){
        document.getElementById("currentDay").innerHTML = `${moment().format('MMM Do YYYY, h:mm:ss a')}`;
    }

    renderClock();
    setInterval(renderClock, 1000);

    // //create the textboxes
    // let textbox = $("<textarea>")
    // $(textbox).width('100%').height('80px').css('border','1px solid black').css('wrap', 'hard');
    // $(".textArea").append(textbox);

    //make settings to check the current hour and change the color of the boxes depending on the current time
    let date = new Date();
    let hours = parseInt(date.getHours());

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

   



    function buttonFunct (rows){
        for (let i=0; i<rows.length; i++){
            $("#"+"button"+rows[i].number).on("click", 
            function(){
            let x = $("#input"+rows[i].number+"")
            localStorage.setItem("input" + rows[i].number, x[0].value)
        }
        )
    }}


    function createHourRows(rows){

        let container = $(".container");
        container.empty();

        for (i=0; i < rows.length; i++){

            let hourRows = $("<div>")
            hourRows.attr("id", rows[i].time)
            hourRows.attr("number", rows[i].number)
            hourRows.attr("class", "row hour")

            let timeCol = $("<div>").text(rows[i].time)
            timeCol.attr("class", "col-3 hourCol")
            hourRows.append(timeCol);
            hourRows.css("text-align", "center");
    
            let textboxCol = $("<textarea>")
            textboxCol.attr("id", "input"+ rows[i].number)
            textboxCol.attr("class", "col-7 textboxCol")
            hourRows.append(textboxCol);

            let btnCol = $("<button>")
            btnCol.attr("class","col-2 button")
            btnCol.attr("id", "button"+rows[i].number)
            btnCol.attr("type", "button")
            btnCol.text("Save");
            btnCol.css("background","black").css("color","white");
            hourRows.append(btnCol)

            container.append(hourRows)
        }
    }

    function hourRowColors(){
        //create the classes for the textboxes to change the color depending on the current time
        // $(".past").style.background = "grey";
        // $(".current").style.background = "yellow";
        // $(".future").style.background = "green";

        for (let i=0; i < 9; i++) {
            
            //set past hour color
            if (hoursDisplay[i].number < hours) {
                $(".hour")[i].style.background = "grey";
                console.log("past");
            } 
            //set current hours color
            else if (hoursDisplay[i].number === hours){
                $(".hour")[i].style.background = "yellow";
                console.log("current");
            }
            //set future hours color
            else if (hoursDisplay[i].number > hours) {
                $(".hour")[i].style.background = "green";
                console.log("future");
                
            
            }
        } 
    }

    createHourRows(hoursDisplay);
    buttonFunct(hoursDisplay);
    hourRowColors();

})