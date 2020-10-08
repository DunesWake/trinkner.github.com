export function togRotate(cur, menuBtn){
	var rotate;
	if (cur == 4){
		if (menuBtn[5].style.color == on){
			menuBtn[5].style.color = off;
			menuBtn[cur].style.color = on;
		}	
		rotate = false;
	}
	if (cur == 5){
		if (menuBtn[4].style.color == on){
			menuBtn[4].style.color = off;
			menuBtn[cur].style.color = on;
		}		
		rotate = true;
	}
	return rotate;
}
export function togAudio(cur, menuBtn){
	var audio;
	if (cur == 7){
		if (menuBtn[8].style.color == on){
			menuBtn[8].style.color = off;
			menuBtn[cur].style.color = on;
		}	
		audio = false;
	}
	if (cur == 8){
		if (menuBtn[7].style.color == on){
			menuBtn[7].style.color = off;
			menuBtn[cur].style.color = on;
		}		
		audio = true;
	}
	return audio;
}
export function togControl(cur, menuBtn){
	var control;
	if (cur == 10){
		if (menuBtn[11].style.color == on){
			menuBtn[11].style.color = off;
			menuBtn[cur].style.color = on;
		}	
		control = false;
	}
	if (cur == 11){
		if (menuBtn[10].style.color == on){
			menuBtn[10].style.color = off;
			menuBtn[cur].style.color = on;
		}		
		control = true;
	}
	return control;
}
