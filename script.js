dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('rock1'));
dragElement(document.getElementById('rock2'));

/*"A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope 
from an inner function." Create a closure so that you can track the dragged element*/

function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	//1. when you touch the terrariumElement, start tracking the pointer

	function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		//2. set pos3 to be e's clientX
		//3. set pos4 to be e's clientY
		//4. when the mouse moves, start the drag
		//5. when the mouse is lifted, stop the drag
	}

	function elementDrag(e) {
		// calculate the new cursor position
		//5. set pos1 = where the Xmouse WAS - where it IS
		//6. set pos2 = where the Ymouse WAS - where it IS
		//7. reset pos3 to current location of Xmouse
		//8. reset pos4 to current location of Ymouse
		//console.log(pos1, pos2, pos3, pos4);
		// set the element's new position:
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
	}

	function closeDragElement() {
		// stop calculating when mouse is released
		//9. reset the raised pointer to null
		//10. reset the moved pointer to null
	}
}
