const quotesFirstPart = [
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

const quotesSecondPart = [
	'vous allez très certainement, ',
	'vous allez probablement, ',
	'vous avez de forte chance de ',
	'vous devriez ',	
	'vous allez peut-être, ',
	'vous devriez assurément, ',
	'vous pouvez espérer, ',
	'il y a une petite chance pour vous de ',
	'il y a une très forte probabilité pour vous de ',
	'il est certain pour vous de '
]

const quotesThirdPart = [
	'retrouver un amour d\'enfance.',
	'gagner une grosse somme d\'argent.',
	'rencontrer votre âme soeur.',
	'décrocher le job de vos rêves.',	
	'devenir propriétaire.',
	'recevoir une belle surprise.',
	'faire un sublime voyage.',
	'reprendre contact avec vos anciens proches.',
	'recevoir une promotion.',
	'trouver un trésort!'
]



function simpleQuote() {
	let firstPart = quotesFirstPart[Math.floor(Math.random() * (quotesFirstPart.length))];
	let secondPart = quotesSecondPart[Math.floor(Math.random() * (quotesSecondPart.length))];
	let thirdPart = quotesThirdPart[Math.floor(Math.random() * (quotesThirdPart.length))];
	let fullQuote = firstPart + secondPart + thirdPart;
	document.getElementById('simpleQuoteDisplay').innerHTML = fullQuote;
}