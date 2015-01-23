$(document).on('ready', function() {
  	
  	var popup = $('<div class="pop"></div>')
  		.text('this pops up!')
  		.css({
  			// display: 'inline-block',
  			position: 'fixed',
  			background: '#2FD9A2',
  			border: '2px solid #36BDCC',
  			color: 'white',
  			zIndex: '1',
  			fontSize: '3em',
  			top: '50%',
  			left: '50%',
  			transform: 'translate(-50%, -50%)',
  			padding: '3em',
  			height: '1.5em',
  			width: '5.7em',

  		});
  	var closeX = $('<div class="close"></div>')
  		.text('X')
  		.css({
  			position: 'absolute',
  			zIndex: '3',
  			top:'0px',
  			right: '0px',
  			color: 'white',
  			border: '1px solid #36BDCC',
  			padding: '.05em',
  		})
  		// .on('click', function(){
  		// 	$('div').remove('.pop');
  		// })

  	$('button').on('click',function(){
  		$('.content').append(popup);
  		$('.pop').prepend(closeX);
  	})

  	$('.content').on('click', '.close', function(){
  		$('div').remove('.pop');
  	})

});