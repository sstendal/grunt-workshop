var msg = function() {
	var theMessage = 'Hi ' + 'there' + '!';
	return theMessage;
}

$('document').ready(function() {
	$('#msg').html(msg());
});