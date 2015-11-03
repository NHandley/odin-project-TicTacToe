(function() {

	var currentPlayer = 'player1';

	var switchPayer = function() {
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
		$('.container').append('<div id="square-'+i+'" class="square">');
	}

	$('.square').on("click", function() {

		//Conditions for pre selected squares
		if($(this).hasClass("player1") || $(this).hasClass("player2") ){
			console.log("No clicky");
		}
		else{

			$(this).addClass(currentPlayer);
			switchPayer();
		}

		//Condition for win or lose
		
		/*for (var i = ..; i >= 0; i++) {
			
		}*/
	})

})();