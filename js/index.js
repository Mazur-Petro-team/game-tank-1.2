
$(function() {
  TankPosition();
  keyControls();
});

    var KeyCode_LEFT  = 37;
    var KeyCode_UP    = 38;
    var KeyCode_RIGHT = 39;
    var KeyCode_DOWN  = 40;
    var KeyCode_SPACE = 32;
		var KeyCode_CTRL  = 17;
		var KeyCode_Z     = 90;
		
function keyControls() {
  document.body.onkeydown = function (e) {
    var el = document.getElementById('tank');


    if (e.keyCode == KeyCode_LEFT) {
      el.style.left = (parseInt(el.style.left) - 5) + 'px';
			document.getElementById('tank').style.transform = 'rotate(180deg)';
    }
    else if (e.keyCode == KeyCode_RIGHT) {
      el.style.left = (parseInt(el.style.left) + 5) + 'px';
			document.getElementById('tank').style.transform = 'rotate(0deg)';
    }
    else if (e.keyCode == KeyCode_UP) {
      el.style.top = (parseInt(el.style.top) -  5) + 'px';
			document.getElementById('tank').style.transform = 'rotate(-90deg)';
    }
    else if (e.keyCode == KeyCode_DOWN) {
      el.style.top = (parseInt(el.style.top) +  5) + 'px';
			document.getElementById('tank').style.transform = 'rotate(90deg)';
    }
    else if(e.keyCode == KeyCode_SPACE){
      shoot();
			setTimeout(function() { 
				$('.tank-shoot-bullet').remove();
			}, 590);
    }
		else if(e.keyCode == KeyCode_CTRL){
      deash();
		  setTimeout(function() { 
				$('.tank').remove();
				$('#tank').remove();
				$('<div class="death-of-tank" />').remove();
			}, 2000);
		}	
		else if (e.keyCode == KeyCode_Z) {
      neveTank();
    }
  };
}

function neveTank() {
  var neveTanks = $('<div class="tank death" />');
  $('.border').append(neveTanks);
}

function deash() { 
  var fireball = $('<div class="death-of-tank" />');  
	$('.death').append(fireball);	
}
 
function shoot() {
  var bullet = $('<div class="tank-shoot-bullet" />');
  $('#tank').append(bullet);
}

function TankPosition() {
  document.getElementById('tank').style.top = '0px',
  document.getElementById('tank').style.left = '0px';
}