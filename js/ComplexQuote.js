const atkQuotesFirstPart = [
	'Que la foudre de Thor, ',
	'Que la lance d\'Odin, ',
	'Que le trident de Poseidon, ',
	'Que la colère d\'Hadès, ',	
	'Que la flèche d\'Artemis, ',
	'Que le glaive d\'Arès, ',
	'Que le marteau d\'Héphaïstos, ',
	'Que le regard de la Méduse, ',
	'Que la rage de Cerbère, ',
	'Que le venin de l\'Hydre, '
]

const atkQuotesSecondPart = [
	's\'abatte sur les ennemis, ',
	'transperce les brigands, ',
	'éradique les mercrenaires, ',
	'pulvérise les démons, ',	
	'neutralise les orcs, ',
	'anéantisse les gobelins, ',
	'écrasse les êtres maléfiques, ',
	'fasse disparaitre les rivaux , ',
	'écarte de votre route les belligérants, ',
	'terrasse les adversaires, '
]

const atkQuotesThirdPart = [
	'qui en ont après votre vie.',
	'qui vous sont néfastes.',
	'cherchant à vous nuire.',
	'barrant votre route.',	
	'conspirant dans votre dos.',
	'qui vous menacent.',
	'néfastes pour vos proches.',
	'voulant voler vôtre trésort.',
	'saccageant vôtre demeure.',
	'tapis dans l\'ombre.'
]

const defQuotesFirstPart = [
	'Que la lyre d\'Apollon, ',
	'Que la couronne d\'Héra, ',
	'Que la bénédiction d\'Athéna, ',
	'Que la rose d\'Aphrodite, ',	
	'Que la thyrse de Dyonisos, ',
	'Que la Caducée de Mercure, ',
	'Que la tourterelle de Déméter, ',
	'Que le feu sacré d\'Hestia, ',
	'Que la lumière de Pégasse, ',
	'Que la sagesse du Sphinx, '
]

const defQuotesSecondPart = [
	'lève toute malédiction, ',
	'améliore votre santé, ',
	'restaure votre vitalité, ',
	'vous protège, ',	
	'vous tiennes éloigné du danger, ',
	'guide vos pas, ',
	'écarte les ménaces, ',
	'illumine votre chemin, ',
	'bénisse votre demeure, ',
	'éloigne les médisants, '
]

const defQuotesThirdPart = [
	'et protège vos proches.',
	'à tout jamais.',
	'et vous apporte la richesse.',
	'et vous octroie la prospérité.',	
	'jusqu\'a la prochaine lune.',
	'en appaisant les esprits.',
	'et apporte la santé à votre famille.',
	'et console votre âme.',
	'du lever du soleil à son coucher.',
	'et vous confère un sommeil réparateur.'
]

//get 3 random quotes parts and return them
function createRandomFullQuote(quotesFirst, quotesSecond, quotesThird) {
	const firstPart = quotesFirst[Math.floor(Math.random() * (quotesFirst.length))];
	const secondPart = quotesSecond[Math.floor(Math.random() * (quotesSecond.length))];
	const thirdPart = quotesThird[Math.floor(Math.random() * (quotesThird.length))];

	return firstPart + secondPart + thirdPart;
}

function appendQuoteToDom(fullQuote) {
  	// create a new para element 
	let para = document.createElement("P");
	//give a class name
	para.setAttribute('class', 'paragraph'); 
	// and give it some content 
	para.innerHTML = fullQuote;
	//Append <p> to <div> with id="complexQuote.display"
	document.getElementById('complexQuoteDisplay').appendChild(para);
}

// get the number and choice select by their id
let listNumberElem = document.getElementById('listNumber');
let listChoiceElem = document.getElementById('listChoice');

function complexQuote() {
	clearQuote();
	//get the numer and choice index ( index and values are the same)
	let listNumber = listNumberElem.selectedIndex;     
	let listChoice = listChoiceElem.selectedIndex;      

		if (listChoice === 1 && listNumber !== 0) {
			for (i = 0; i < listNumber; i++) {
				appendQuoteToDom(createRandomFullQuote(atkQuotesFirstPart, atkQuotesSecondPart, atkQuotesThirdPart));
  			}

		} else if (listChoice === 2 && listNumber !== 0) {
			for (i = 0; i < listNumber; i++) {
				appendQuoteToDom(createRandomFullQuote(defQuotesFirstPart, defQuotesSecondPart, defQuotesThirdPart));
  			}

  		// check if choice or number is not selected and alert the user
		} else if (listChoice === 0 || listNumber === 0) {
			alert("Veuillez choisir un nombre et/ou un type d'incantation!");
		}
}

function clearQuote() {
	let element = document.getElementById('complexQuoteDisplay');
	//remove each quote one bye one from the complexQuoteDisplay div until it's empty
	while (element.firstChild) {
  		element.removeChild(element.firstChild);
	}
}
