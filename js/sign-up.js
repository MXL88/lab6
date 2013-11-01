//signup.js 
// add your JavaScript code to this file

$(function(){
	var stateSelect = $('#state')
	var state;
	var option;
	$.each(usStates, function(index, value) {
		state = usStates[index];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	});

	$('.signup-form').submit(function(){
    //code to execute when the sign-up form is submitted
    //this is the raw DOM form element
    //wrap it in a jQuery object so we can use jQuery methods on it
    var signupForm = $(this);
    var addr1Input = signupForm.find('input["addr-1"]');
    var addr1Value = addr1Input.val();
    var zipInput = signupForm.find('input["zip"]');
    var zipValue = zip.val();
    if (addr1Value.length > 0) {
    	zipValue > 0;
    }
    else {
    	zipValue == addr1Value;
    }

});
                    
	
});