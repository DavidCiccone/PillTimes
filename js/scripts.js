(function () {
   'use strict';
//main function to apply times

//pill times
var bar = document.getElementById('pill');
//start eating times
var bar2 = document.getElementById('start-eat');
//stop eating times
var bar3 = document.getElementById('stop-eat');

var lastDose = document.getElementById('last');

var add1;
var add2;
var add3;   

function execute(){
   var masterHours = document.getElementById('master-time-hours').value;
   var masterMinutes = document.getElementById('master-time-minutes').value;
   		
				var day = moment('2013-02-08 ' + masterHours + ':' + masterMinutes + ':00');

				var dayWrapper = day.format('h:mm a');
				var childElements = bar.children;
				var childElements2 = bar2.children;
				var childElements3 = bar3.children;

				for (var i = 0; i < 6; i++) {
                
					if(i === 0){
					 add1 = dayWrapper;
					} else {
					 add1 = day.add(70, 'minutes').format('h:mm a');
					}
					
					childElements[i].innerHTML = [i + 1 + '.'] + '\u00A0\u00A0\u00A0\u00A0' + add1;

					add2 = day.add(40, 'minutes').format('h:mm a');

					childElements2[i].innerHTML = add2;

					add3 = day.add(30, 'minutes').format('h:mm a');

					childElements3[i].innerHTML = add3;

				}
				//displays the time for the bed time dose
				lastDose.innerHTML = day.add(70, 'minutes').format('h:mm a');
	         }

	//binding for the input box
	document.getElementById('master-submit').addEventListener("click", execute);

//make the enter button submit the main time
document.body.addEventListener( 'keyup', function (e) {
  if ( e.keyCode == 13 ) {
    document.getElementById('master-submit').click();
  }
});

}());