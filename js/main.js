var activeLetters = new Array(647);
var puto = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, false, false, false, false, true, true, false, false, false, false, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, true, true, false, false, false, false, false, true, true, false, false, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, true, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, true, false, true, true, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, true, false, true, true, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, true, true, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, false, false, false, false, true, true, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, true, true, false, false, true, true, true, true, false, false, true, true, false, true, true, false, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, true, true, false, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

$(function() {
	/*
	var i, html = 'E';
		
	for (i = 0; i < 647; i++) {
		html += '<span data-index="' + i + '" class="h-span">h</span>';
		activeLetters[i] = false;
	}
	$('.puto-container').html(html);

	$('.h-span').click(function() {
		var index = $(this).attr('data-index');
		if (activeLetters[index]) {
			activeLetters[index] = false;
			$(this).css('color', 'white');
		} else {
			activeLetters[index] = true;
			$(this).css('color', 'black');
		}
	});
*/

	$('.puto-container').html('<span class="h-span">E</span>');

	var index = 0;
	var append = function() {
		console.log('rendering ' + index + puto[index]);
		if (puto[index]) {
			$('.puto-container').append('<span style="color:black;" class="h-span">h</span>');
		} else {
			$('.puto-container').append('h');
		}
		index++;

		if(index < 647) {

			setTimeout(append, 10);
		}
	};
	setTimeout(append, 10);
});