$(document).ready(function(){
	var colors = ["white","blue","green","orange","purple","grey","brown","black","pink","yellow"];
	var roar = new Audio('tigerroar.wav');
	var purr = new Audio('purr.wav');
	var elephant = new Audio('elephant.wav');
	var pop = new Audio('pop.wav');
	
	$('#donotpush').on('click', function(){ 
		$('#donotpush').animate({"margin-left":"15px","bottom":"175px"},50);
		$('.cage').css("border", "10px solid transparent");
		setTimeout(
		function attack(){
		roar.currentTime = 0;
		roar.play();
		$('.octopus').hide();
		$('.cage').hide();
		$('#donotpush').hide();
		$('#scratch').show();
		$('#reset').show();
		}
		,3000);
	});
	
	$('#reset').on('click',function(){ 
		$('#donotpush').css({"margin-left":"","bottom":""})
		$('#reset').hide();
		$('#scratch').hide();
		$('.cage').css("border", "10px solid #555");
		$('.octopus').show();
		$('.octopus').css("background-color","");
		$('.bat').css("opacity","");
		$('.cage').show();
		$('#donotpush').show();
		$('.elephant').css({"background-color":"", "border":"", "height":"", "width":""});
	});
	
	
	$('.octopus').on('click', function(){ 
		let rcolor = colors[Math.floor((Math.random()*colors.length))];
		$('#ohead').css('background-color',rcolor);
		$('#orightarm').css('background-color',rcolor);
		$('#oleftarm').css('background-color',rcolor);
		$('#oleftbackarm').css('background-color',rcolor);
		$('#orightbackarm').css('background-color',rcolor);
	});
	
	$('.bat').on('click', function(){
		$('.bat').animate({opacity: 0},5000);
	});
	
	$('.elephant').on('click', function(){
		let bigger = (((parseInt($('#ebody').height())) + ((parseInt($('#ebody').height()))*0.05)).toString())+"px";
		let fatter = (((parseInt($('#ebody').width())) + ((parseInt($('#ebody').width()))*0.05)).toString())+"px";
		console.log(bigger);
		console.log(fatter);
		if (parseInt(bigger) < 132.3){
		$('#ebody').css("height", bigger);
		$('#ebody').css("width", fatter);
		elephant.currentTime = 0;
		elephant.play();
		}
		else{
		$('.elephant').css({"background-color":"transparent", "border":"none"});
		pop.play();		
		}
	});
	
	$('.tiger').on('click', function(){
		purr.currentTime = 0;
		purr.play();
	});
	
	
	
});