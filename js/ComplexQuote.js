const quotesFirstPart1 = [
	'Dans le courant de l\'année, ',
	'Dans un avenir proche, ',
	'Le mois prochain, ',
	'Dans quelque temps, ',	
	'Cet été, ',
	'D\'ici quelque semaine, ',
	'Dans environs trois mois, ',
	'Avant la fin de l\'année, ',
	'Au mois de septembre, ',
	'D\'ici un ans au maximum, '
]

const quotesSecondPart1 = [
	'vous allez très certainement, ',
	'vous allez probablement, ',
	'vous avez de forte chance de, ',
	'vous devriez, ',	
	'vous allez peut-être, ',
	'vous devriez assurément, ',
	'vous pouvez espérer, ',
	'il y a une petite chance pour vous de, ',
	'il y a une très forte probabilité pour vous de, ',
	'il est certain pour vous de, '
]

const quotesThirdPart1 = [
	'retrouver un amour d\'enfance.',
	'gagner une grosse somme d\'argent.',
	'rencontrer votre âme soeur.',
	'décrocher le job de vos rêves.',	
	'devenir propriétaire.',
	'recevoir une belle surprise.',
	'faire un sublime voyage.',
	'reprendre contact avec vos anciens proches.',
	'obtenir une promotion.',
	'trouver un trésort!'
]


let listNumberElem = document.getElementById('listNumber');
let listChoiceElem = document.getElementById('listChoice');

function complexQuote(){

	listNumberElem.addEventListener("change", function() {
		let listNumber = listNumberElem.selectedIndex;     
});

	listChoiceElem.addEventListener("change", function() {
		let listChoice = listChoiceElem.selectedIndex;      
});


	/*for (i = 0; i < listNumber; i++){
		if (listChoice === 1){*/
			let firstPart1 = quotesFirstPart1[Math.floor(Math.random() * (quotesFirstPart1.length))];
			let secondPart1 = quotesSecondPart1[Math.floor(Math.random() * (quotesSecondPart1.length))];
			let thirdPart1 = quotesThirdPart1[Math.floor(Math.random() * (quotesThirdPart1.length))];
			let fullQuote1 = firstPart1 + secondPart1 + thirdPart1;

			  	// create a new para element 
  				let para = document.createElement("P"); 
  				// and give it some content 
  				para.innerHTML = fullQuote1;
  				//Append <p> to <div> with id="complexQuote.display"
  				document.getElementById('complexQuoteDisplay').appendChild(para);

		/*}else if (listChoice === 2){
			let firstPart = quotesFirstPart1[Math.floor(Math.random() * (quotesFirstPart1.length))];
			let secondPart = quotesSecondPart1[Math.floor(Math.random() * (quotesSecondPart1.length))];
			let thirdPart = quotesThirdPart1[Math.floor(Math.random() * (quotesThirdPart1.length))];
			let fullQuote = firstPart + secondPart + thirdPart;
			document.getElementById('complexQuoteDisplay').innerHTML = fullQuote1;*/
		}/*
	}
}
*/

function endQuote(){
	let element = document.getElementById('complexQuoteDisplay');
	while (element.firstChild) {
  		element.removeChild(element.firstChild);
	}
}
