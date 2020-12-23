$(document).ready(function() {

    function a(){
        let dateAtTop = $("#currentDay");
        let todaysDate = $(moment().format('MMM Do YYYY, h:mm:ss a'));
        dateAtTop.appendChild(todaysDate);
        //moment().format('MMM Do YYYY, h:mm:ss a');
    }

    //style the times in the left column
    let hourDisplay = $(".hour");
    $(hourDisplay).width('100%').height('100%').css('border','1px solid black').css('text-align','center');

    //style buttons in the right column
    let saveButtons = $(".buttons");
    //$(saveButtons).width(200).height(200);

    //create the textboxes
    let textbox = $("<input type = 'textbox'>")
    $(textbox).width('100%').height('100%').css('border','1px solid black');
    $(".textArea").append(textbox);

})