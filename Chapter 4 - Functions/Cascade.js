/* Some methods don't have a return value. In a cascade we can call
many methods on the same object in sequence in a single statement. */

getElement('myBoxDiv')
	.move(350, 150)
	.width(100)
	.height(100)
	.color('red')
	.border('10px outset')
	.padding('4px')
	.appendText('Please make this stop..')
	.on('mousedown', function(m){
		this.startDrag(m, this.getNinth(m));
	})
	.on('mousemove', 'drag')
	.on('mouseup', 'stopDrag')
	.later(2000, function(){
		this
			.color('yellow')
			.setHTML("What the hell..")
			.slide(400, 40, 200, 200);
	})
	tip('This box is resizable');