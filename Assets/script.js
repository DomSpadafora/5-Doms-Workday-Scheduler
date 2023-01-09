
//Display today's date and what day it is
$('#currentDay').text(dayjs().format("[Today is:] dddd, MMMM D YYYY h:mm:ss"));


  $('.saveBtn').on('click', function(params) {
    console.log('this is what i clicked');

    //get the id atribute and the descriptions in the calender
    var id = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();

    //Store descriptions to local storage
    localStorage.setItem(id, text);
  });

  //Get item from local storage if there 
  $('#hour8 .description').val(localStorage.getItem('hour 8'));
  $('#hour9 .description').val(localStorage.getItem('hour 9'));
  $('#hour10 .description').val(localStorage.getItem('hour 10'));
  $('#hour11 .description').val(localStorage.getItem('hour 11'));
  $('#hour12 .description').val(localStorage.getItem('hour 12'));
  $('#hour13 .description').val(localStorage.getItem('hour 13'));
  $('#hour14 .description').val(localStorage.getItem('hour 14'));
  $('#hour15 .description').val(localStorage.getItem('hour 15'));
  $('#hour16 .description').val(localStorage.getItem('hour 16'));
  $('#hour17 .description').val(localStorage.getItem('hour 17'));



  // creating a function to track time 
  function timer() {
    var currentHour = dayjs().hour();
    console.log('this is working!!')
   
    //this is to loop over each hourblock
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr('id').split('hour')[1])

      //defining rules/class to each possible outcome for background color
      if (blockHour < currentHour ) {
        $(this).addClass("past")
      }
      else if (blockHour === currentHour) {
        $(this).addClass("present")
      }
      else if (blockHour > currentHour) {
        $(this).addClass("future")
      }  
    });
  } 

//calling on the function  
timer();

//need to continuously update the time 

