(function() {

	var currentPlayer = 'player1'

	//Function to 
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

	for (var i = 0; i < 9; i++) {
		$('.container').append('<div id="square-'+i+'" class="square">');
	}

	$('.square').on("click", function(e) {
		$(this).addClass(currentPlayer);
		switchPayer();
	})

})();