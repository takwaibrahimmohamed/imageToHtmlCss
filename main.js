var duch = `  ___             _   _  <br/> <br/> <br/> <br/>
|   _   .-----.--.--|  ||_|.-----.-----.<br/> <br/> <br/> <br/>
|.  1__|  -|  |  |   _|  ||  _  |_ --|<br/> <br/> <br/> <br/>
|.  |_|__\\_/|_|_||_|__|<br/> <br/> <br/> <br/>
|:  1   |                               
|::.. . |                               <br/> <br/> <br/> <br/>
'-------'`

				
function textMatrix(container) {
	var str = duch;
	var ret = "";
	var tab = new Array(str.length);
	var spanS = "<span style=\"color:#2C2C2C\">";
	var spanSb = "<span style=\"color:#0F6700\">";
	var spanE = "</span>";
  
	for (var i = 0; i< str.length; i++) {
		if (str.charAt(i) == " " || str.charAt(i) == "^") tab[i] = randomLetter(1);
		else tab[i] = str.charAt(i);
	}
  
	var count = 0;
	var rets = "";
	var last = new Array(str.length);
	
  var interval = setInterval(function() {
	  var rand = Math.floor(Math.random() * 100) + 70;
	  var lote = new Array(rand);
	
    for (var i=0; i < rand; i++) {
		  lote[i] = Math.floor(Math.random() * str.length);
		  if (str.charAt(lote[i]) == " " || str.charAt(lote[i]) == "^") tab[lote[i]] = randomLetter(1);
  	  else {
			  i--;
			  continue;
		  }
	  }
    
	  ret = "";						
	  for (var i = 0; i < str.length; i++) {
		  if (str.charAt(i) == " " || str.charAt(i) == "^") { 
			  var change = false;
			  for (var j = 0; j < rand; j++) {
				  if (lote[j] == i) {
					  if (str.charAt(i) == "^") ret += "<span style=\"color:red\">" + tab[i] + spanE;
					  else {
						  if ((Math.floor(Math.random() * 100) + 0) > 50) {
                ret += "<span style=\"background:#090909;color:#2C2C2C;\">" + tab[i] + spanE;
              }
						  else ret += spanS + tab[i] + spanE;
					  }
					  change = true;
					  break;
				  }
			  }
			  if (!change) ret += spanS + tab[i] + spanE;
		  } else if (str.charAt(i) == "%") ret += "&nbsp";
	    else ret += str.charAt(i);
    }
			
    document.getElementById(container).innerHTML = ret;
  }, 100); 
}
				
function randomLetter(length) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmn\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyzopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
	return text;
}
	