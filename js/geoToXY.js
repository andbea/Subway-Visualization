//Converts latitude to X
			function convertX(latitude){
				var left = map_westNorth[0];
				var newX = Math.round( (latitude-left )*xScale );
				return newX
			}

			//Converts longitude to Y
			function convertY(longitude){
				var up = map_westNorth[1];
				var newY = Math.round( (up - longitude )*yScale );
				return newY
			}