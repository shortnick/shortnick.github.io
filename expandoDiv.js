$(document).ready(function() {
  $('.expandable-box').click(function(e) {
    if($(this).hasClass('open')) {
      /*$('.expandable-box.out').not($(this)).removeClass('out');*/
      $(this).removeClass('open');
    }
    else {
      /*$('.expandable-box').not($(this)).addClass('out');*/
      $(this).addClass('open');
      console.log("debug");
    }
  });
}); 


@import "compass/css3";
/* This section contains the expandable div elements taken from http://codepen.io/johnegraham2/pen/Lniyd?editors=0100
It makes use of the file used here as expandoDiv.js
*/
.container {
  width: 80%;
  margin: 30px auto;
}

.expandable-boxes {
  position: relative;
}

.expandable-box {
  float: left;
  width: 10px;
  height: 10px;
  overflow: hidden;
  border: 5px solid black;
  padding: 0;
  margin: 0;
  opacity: 0;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}
  
  &.open {
    width: 96%;
    height: 130px;
    margin: 0;
  }
  

  
/*end expandable div code*/

/*============= Begin Main CSS=============== */
