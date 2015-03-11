function populateInfo(id){
	var index = getStationInfo(id);
	//console.log(index);

	//clear carousel indicators
	$('.carousel-indicators').html('');
	//reset arrows
	$('a.left.carousel-control.ui-link, a.right.carousel-control.ui-link').show();

    var images = stationInfoHolder[index]['Image'];
    console.log(images.length);
	$('#title').html(convertSymbols(stationInfoHolder[index]["Station"]));
	$('#inaug').html("<strong>Invigdes: </strong>" + stationInfoHolder[index]["Year"]);
	$('#art').html("<strong>Stationens konstverk: </strong>" + convertSymbols(stationInfoHolder[index]["Art"]));
	$('#history').html("<strong>Historiska fakta: </strong>" + convertSymbols(stationInfoHolder[index]["Art"]));

	// add dots on carousel
	$('.carousel-indicators').append('<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>');

	//adds first active image in carousel
	$('#img-holder').html('<div class="item active"><img src="img/stations/' + images[0] + '"></div>');

	//add other images if more than one
	if(images.length>1){
		for (var i=1; i<images.length; i++){
			$('#img-holder >.item.active').after('<div class="item"><img src="img/stations/' + images[i] + '"></div>');
		}
	}
	

	
	// add other coursel indicators if more than one
	if(images.length>1){
		for (var j=1; j<images.length; j++){
			counter = 1+j;
			$('.carousel-indicators').append('<li data-target="#carousel-example-generic" data-slide-to="' + counter + '"></li>');
		}
	}

	// hide carousel arrows if only one image
	if(images.length===1){
		console.log("one image");
		$('a.left.carousel-control.ui-link, a.right.carousel-control.ui-link').hide();
	}
	
	
	
}
