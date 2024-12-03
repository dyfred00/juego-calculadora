nombre = prompt("\nIngrese su nombre \n");
let asig=document.querySelector('h1')
asig.innerHTML=nombre    


	var borrar = false;
	function deletecarac(){
		var caja2 = document.f1.txtcaja2.value;
            if (caja2 == "" || caja2 == "0" || caja2.length == 1 && blocdel!=true){
            	document.f1.txtcaja2.value = "0";
            }
            else if(blocdel!=true){
             	var res = caja2.substring(0,caja2.length-1);
             	document.f1.txtcaja2.value = res;
            }
	}
   function escribir(n){
		var caja2 = document.f1.txtcaja2.value;
		if (borrar) {
			document.f1.txtcaja2.value="";
			borrar = false;
			document.f1.txtcaja2.value = n;
		}
		else if (caja2 == "0" && n != "."){
			cajao = caja2.replace("0", "")
			document.f1.txtcaja2.value = cajao + n;
		}
		else{
			document.f1.txtcaja2.value = caja2 + n;
		}
	}
	function arit(o){
		var caja1 = document.f1.txtcaja1.value;
		var caja2 = document.f1.txtcaja2.value;
		var unum = caja1.substring(caja1.length-1);
		calcular()
		if (unum == "+" || unum == "-" || unum=="*" || unum=="/") {
			unum = unum.replace(unum,o);
			var res = caja1.substring(0,caja1.length-1);
			document.f1.txtcaja1.value = res+unum;
		}
		if (caja1 == "" && caja2 != ""){
			document.f1.txtcaja1.value = caja2 + o;
		}
		else{
			document.f1.txtcaja1.value = caja1 + caja2 + o;
 		}
 		borrar = true;
	}
	function calcular(){
		var caja1 = document.f1.txtcaja1.value;
		var caja2 = document.f1.txtcaja2.value;
		document.f1.txtcaja2.value = eval(caja1 + caja2);
		document.f1.txtcaja1.value = "";
		borrar = true;
		blocdel = true;
	}
	function masmenos(){
		var caja2 = document.f1.txtcaja2.value;
		if (caja2 > 0){
			document.f1.txtcaja2.value = "(-" + caja2 + ")";
		}
		else{
			cajaplus = caja2.replace(/[-|(|)]/g, "");
			document.f1.txtcaja2.value = cajaplus;
		}
	}


let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('checkBtn').addEventListener('click', function () {
  const userGuess = parseInt(document.getElementById('guess').value);
  const feedback = document.getElementById('feedback');

  attempts++;

  if (userGuess === numberToGuess) {
    feedback.textContent = `¡Felicidades! Has adivinado el número ${numberToGuess} en ${attempts} intentos.`;
    feedback.style.color = "green";
    document.getElementById('resetBtn').style.display = "inline-block";
    document.getElementById('checkBtn').disabled = true;
  } else if (userGuess < numberToGuess) {
    feedback.textContent = "Demasiado bajo. Intenta con un número más alto.";
    feedback.style.color = "red";
  } else if (userGuess > numberToGuess) {
    feedback.textContent = "Demasiado alto. Intenta con un número más bajo.";
    feedback.style.color = "red";
  }
});

document.getElementById('resetBtn').addEventListener('click', function () {
  numberToGuess = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guess').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('resetBtn').style.display = "none";
  document.getElementById('checkBtn').disabled = false;
});