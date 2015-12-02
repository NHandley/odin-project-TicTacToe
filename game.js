(function() {

	var currentPlayer = 'player1';

	var switchPlayer = function() {
		switch(currentPlayer) {
		case 'player1':
			currentPlayer = 'player2';
			break;
		case 'player2':
			currentPlayer = 'player1';
			break;
		}
	};

	var board = [$('<div>')];

	//loop to create grid
	for (var i = 0; i < 9; i++) {
		$('.container').append('<div id="square-'+i+'" data-number="' + i + '" class="square">');
	}

	$('.square').on("click", function() {

		//Conditions for pre selected squares
		if($(this).hasClass("player1") || $(this).hasClass("player2") ){
			console.log("No clicky");
		}
		else{
			$(this).addClass(currentPlayer);
			switchPlayer();
		}

		hardcodedwinconditions();

		//Possible solution after game completion
		/*for (var i = 0; i <= 8; i++) {
			$('#square-'+i).removeClass();
		};*/

		//Conditions for win (hardcoded)


		//Condition for win or lose, for when dynamic
		
/*		for (var i = 0; i < 9; i++) {
			var cell = $("#square-" + i),
				cellState, firstNeighbour, secondNeighbour;

			if(cell.hasClass('player1')){
				cellState = 'player1';
			} else if (cell.hasClass('player2')){
				cellState = 'player2';
			} else {
				continue;
			}

			//Horizontal
			firstNeighbour = getNeighbourCell(cell, 'right');
			secondNeighbour = getNeighbourCell(firstNeighbour, 'right');

			if(firstNeighbour.hasClass(cellState) && secondNeighbour.hasClass(cellState)){
				console.log('win');
			}

		}*/
	})

	function getNeighbourCell(cell, direction){

	}

	function hardcodedwinconditions(){
		var firstCell, secondCell, thirdCell, state;

		//First horizontal
		firstCell = $('square-0');
		secondCell = $('square-1');
		thirdCell = $('square-2');
		state = getCellState(firstCell);

		if($('#square-0').hasClass('player1') && $('#square-1').hasClass('player1') && $('#square-2').hasClass('player1')){

			alert('win! winner is player 1!');

		}
		else if($('#square-0').hasClass('player2') && $('#square-1').hasClass('player2') && $('#square-2').hasClass('player2')){
			alert('win! winner is player 2!');

		}

		//Second horizontal
		firstCell = $('square-3');
		secondCell = $('square-4');
		thirdCell = $('square-5');
		state = getCellState(firstCell);

		if($('#square-3').hasClass('player1') && $('#square-4').hasClass('player1') && $('#square-5').hasClass('player1')){

			alert('win! winner is player 1!');

		}
		else if($('#square-3').hasClass('player2') && $('#square-4').hasClass('player2') && $('#square-5').hasClass('player2')){
			alert('win! winner is player 2!');

		}

		//Third horizontal
		firstCell = $('square-6');
		secondCell = $('square-7');
		thirdCell = $('square-8');
		state = getCellState(firstCell);

		if($('#square-6').hasClass('player1') && $('#square-7').hasClass('player1') && $('#square-8').hasClass('player1')){

			alert('win! winner is player 1!');

		}
		else if($('#square-6').hasClass('player2') && $('#square-7').hasClass('player2') && $('#square-8').hasClass('player2')){
			alert('win! winner is player 2!');

		}

		//First vertical
		firstCell = $('square-0');
		secondCell = $('square-3');
		thirdCell = $('square-5');
		state = getCellState(firstCell);

		if($('#square-0').hasClass('player1') && $('#square-3').hasClass('player1') && $('#square-6').hasClass('player1')){

			alert('win! winner is player 1!');

		}
		else if($('#square-0').hasClass('player2') && $('#square-3').hasClass('player2') && $('#square-6').hasClass('player2')){
			alert('win! winner is player 2!');

		}

		//Second vertical
		firstCell = $('square-1');
		secondCell = $('square-4');
		thirdCell = $('square-7');
		state = getCellState(firstCell);

		if($('#square-1').hasClass('player1') && $('#square-4').hasClass('player1') && $('#square-7').hasClass('player1')){

			alert('win! winner is player 1!');

		}
		else if($('#square-1').hasClass('player2') && $('#square-4').hasClass('player2') && $('#square-7').hasClass('player2')){
			alert('win! winner is player 2!');
	
		}

		//Third vertical
		firstCell = $('square-2');
		secondCell = $('square-5');
		thirdCell = $('square-8');
		state = getCellState(firstCell);

		if($('#square-2').hasClass('player1') && $('#square-5').hasClass('player1') && $('#square-8').hasClass('player1')){

			alert('win! winner is player 1!');

		}
		else if($('#square-2').hasClass('player2') && $('#square-5').hasClass('player2') && $('#square-8').hasClass('player2')){
			alert('win! winner is player 2!');

		}

		//First diagonal
		firstCell = $('square-0');
		secondCell = $('square-3');
		thirdCell = $('square-5');
		state = getCellState(firstCell);

		if($('#square-0').hasClass('player1') && $('#square-4').hasClass('player1') && $('#square-8').hasClass('player1')){

			alert('win! winner is player 1!');
			
		}
		else if($('#square-0').hasClass('player2') && $('#square-4').hasClass('player2') && $('#square-8').hasClass('player2')){
			alert('win! winner is player 2!');
		}

		//Second vertical
		firstCell = $('square-1');
		secondCell = $('square-4');
		thirdCell = $('square-7');
		state = getCellState(firstCell);

		if($('#square-2').hasClass('player1') && $('#square-4').hasClass('player1') && $('#square-6').hasClass('player1')){

			alert('win! winner is player 1!');
			
		}
		else if($('#square-2').hasClass('player2') && $('#square-4').hasClass('player2') && $('#square-6').hasClass('player2')){
			alert('win! winner is player 2!');
			
		}

	}

	








	function getCellState(cell){
		if(cell.hasClass('player1')){
			return 'player1';
		} else if (cell.hasClass('player2')){
			return 'player2';
		} else {
			return 'empty';
		}
	}
})();