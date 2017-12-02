$(document).ready(function(){
	var colors = ["white","blue","green","orange","purple","grey","brown","black","pink","yellow"];
	
	//mousedown and mouseup moves the buttons
	
	$('#donotpush').on('click',function(){ 
		$('.cage').css("border", "10px solid transparent");
		//Play the roar sound, wait 5 seconds.
		$('.octopus').hide();
		$('.cage').hide();
		$('#donotpush').hide();
		$('body').css("background-color","red");
		$('#reset').show();
	});
	
	$('#reset').on('click',function(){ 
		$('#reset').hide();
		$('body').css("background-color","#888");
		$('.cage').css("border", "10px solid #555");
		$('.octopus').show();
		$('.cage').show();
		$('#donotpush').show();
	});
	
	
	$('.octopus').on('click', function(){ 
		let rcolor = colors[Math.floor((Math.random()*colors.length))];
		$('#ohead').css('background-color',rcolor);
		$('#orightarm').css('background-color',rcolor);
		$('#oleftarm').css('background-color',rcolor);
		$('#oleftbackarm').css('background-color',rcolor);
		$('#orightbackarm').css('background-color',rcolor);
	});
	
	
	
});