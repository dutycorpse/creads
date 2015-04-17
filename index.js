$(document).ready(function(){
	$('#reset_img').hide();
	$('#link_img').hide();
	$('#box').draggable({containment: '#container'});
	$('#box').resizable({containment: '#container'});
	
	$('#crop_button').bind('click', function(){
		var top = $('#box').position().top;
		var left = $('#box').position().left;
		var width = $('#box').width();
		var height = $('#box').height();
		
		$('#img').remove();
		$('#reset_img').show();
		$('#crop_button').hide();
		$('#link_img').show();
		$.post('crop.php', {top:top, left:left, width:width, height:height}, function(){
			$('#container').html('<div id="img_dest"><img src="new.jpg"/></div>');
		});
	});
	
	$('#reset_img').click(function(){
		location.reload();
	});
});