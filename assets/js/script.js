
//Display today's date and what day it is
$('#currentDay').text(dayjs().format("[Today is:] dddd, MMMM D, YYYY"));

if(localStorage.hours) {
  let store = JSON.parse(localStorage.hours);

  for (let i = 0; i < store.length; i++) {
    $('textarea').eq(i).val(store[i])
  }
}


  $('.saveBtn').on('click', function(params) {
    console.log('i clicked the save button');

    let store = [];

    for (let i = 0; i < $('textarea').length; i++) {
      store.push($('textarea').eq(i).val());
    };

    localStorage.hours = JSON.stringify(store);
  });

  //Get item from local storage if there 


  // creating a function to track time 
  function timer() {
    var currentHour = dayjs().hour();
    console.log('this is working!!')
   
    //this is to loop over each hourblock
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr('id').split('hour-')[1])

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

//Save text input to show when page reloads 

