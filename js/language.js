document.getElementById('lang-toggle').addEventListener('click', function (event) {
	event.preventDefault();

	var currentLang = this.textContent.trim();
	if (currentLang === "FR") {
		this.textContent = "EN";
		changeLanguage("fr");   
	} else {
		this.textContent = "FR";
		changeLanguage("en");   
	}
});

const translations = {
	en: {
		"home": "Home",
		"aboutMe": "About Me",
		"projects": "Projects",
		"contactMe": "Contact Me",
		"bannerTitle": "Hi I'm Ivan<br>I love to<br>create web apps",
		"bannerButton": "See My Projects",
		"aboutMeTitle": "About Me",
		"aboutMeContent": "Hi, I'm Ivan. I'm passionate about building efficient and scalable web applications. What sets me apart is my dedication to crafting user-friendly interfaces that not only meet but exceed user expectations.",
		"projectsTitle": "Projects",
		"project1": {
			"title": "ASP.NET Login and Messaging",
			"description": "Login and registration system that allows sending messages and checking a message inbox."
		},
		"project2": {
			"title": "Library Management System in C#",
			"description": "Software for managing libraries, allowing the administration of books and loans."
		},
		"project3": {
			"title": "Horoscope with React",
			"description": "React application for checking horoscopes."
		},
		"project4": {
			"title": "Car Registry Software in Java",
			"description": "Java software for keeping records of cars and displaying an updated listing."
		},
		"project5": {
			"title": "E-commerce Page in PHP",
			"description": "E-commerce platform developed in PHP for online sales."
		},
		"project6": {
			"title": "Space Game in Android",
			"description": "Developed in Java with Android Studio, it's a mobile game where you navigate a spaceship among planets, showing information when interacting."
		},
		"project7": {
			"title": "Twitter Clone in NodeJS",
			"description": "API developed in NodeJS that simulates the basic functionality of Twitter, including user creation and tweet posting."
		},
		"project8": {
			"title": "ApproExpert",
			"description": "Development of a corporate website for Appro Expert, facilitating navigation and promoting import, export and commercial representation services between Canada and Africa."
		},
		"project9": {
			"title": "Autopassion",
			"description": "Development of a website for Autopassion, highlighting their automotive aesthetic services, such as cleaning and detailing. Implementation of a clear portfolio and pricing structure."
		},
		"project10": {
			"title": "Débouchenet",
			"description": "Development of a website for Débouchenet, a company specializing in residential renovation and maintenance."
		},
		"project11": {
			"title": "First Technology Plus",
			"description": "Development of a website for First Technology Plus which specializes in providing top-notch solutions across multiple sectors, including construction, industrial maintenance, international trade, vehicle rental and medical consumables."
		},
		"project12": {
			"title": "MessagerieAdam",
			"description": "Creation of a website for MessagerieAdam, a company dedicated to offering fast, efficient and professional delivery solutions."
		},
		"project13": {
			"title": "TransportSteben",
			"description": "Creation of a website for Transport Steben, an established company in the transport sector that offers high-quality general transport services for both individuals and companies."
		},
		"loadMoreBtn": "Load More",
		"contactTitle": "Contact Me",
		"copyButton": "Copy",
		"emailButton": "Email Me",
		"downloadCVTitle": "Download My CV",
		"downloadCVButtonEN": "Download CV in English",
		"downloadCVButtonFR": "Download CV in French",
		"copyMessage": "Copied!",
		"footerText": "© " + new Date().getFullYear() + " Ivan. All rights reserved.",
	},
	fr: {
		"home": "Accueil",
		"aboutMe": "À propos de moi",
		"projects": "Projets",
		"contactMe": "Contactez-moi",
		"bannerTitle": "Salut, <br>Je suis Ivan<br>Créateur <br> d'applications <br>web",
		"bannerButton": "Voir Mes Projets",
		"aboutMeTitle": "À Propos de Moi",
		"aboutMeContent": "Salut, je suis Ivan. Je suis passionné par la création d'applications web efficaces et évolutives. Ce qui me distingue est mon dévouement à concevoir des interfaces utilisateur qui ne se contentent pas de répondre aux attentes, mais les dépassent.",
		"projectsTitle": "Projets",
		"project1": {
			"title": "Système de connexion et de messagerie ASP.NET",
			"description": "Système de connexion et d'inscription qui permet l'envoi de messages et la vérification d'une boîte de réception."
		},
		"project2": {
			"title": "Système de gestion de bibliothèque en C#",
			"description": "Logiciel pour la gestion des bibliothèques, permettant l'administration des livres et des prêts."
		},
		"project3": {
			"title": "Horoscope avec React",
			"description": "Application React pour la consultation d'horoscopes."
		},
		"project4": {
			"title": "Logiciel de registre de voitures en Java",
			"description": "Logiciel en Java pour la tenue des registres des voitures et l'affichage d'une liste mise à jour."
		},
		"project5": {
			"title": "Page de commerce électronique en PHP",
			"description": "Plateforme de commerce électronique développée en PHP pour les ventes en ligne."
		},
		"project6": {
			"title": "Jeu spatial sur Android",
			"description": "Développé en Java avec Android Studio, c'est un jeu mobile où vous naviguez un vaisseau spatial parmi les planètes, affichant des informations lors des interactions."
		},
		"project7": {
			"title": "Clone de Twitter en NodeJS",
			"description": "API développée en NodeJS qui simule les fonctionnalités de base de Twitter, y compris la création d'utilisateurs et la publication de tweets."
		},
		"project8": {
			"title": "ApproExpert",
			"description": "Développement d'un site web d'entreprise pour Appro Expert, facilitant la navigation et promouvant les services d'importation, d'exportation et de représentation commerciale entre le Canada et l'Afrique."
		},
		"project9": {
			"title": "Autopassion",
			"description": "Développement d'un site web pour Autopassion, mettant en avant leurs services esthétiques automobiles, tels que le nettoyage et le detailing. Mise en place d'un portfolio clair et d'une structure de tarification."
		},
		"project10": {
			"title": "Débouchenet",
			"description": "Développement d'un site web pour Débouchenet, une entreprise spécialisée dans la rénovation et l'entretien résidentiels."
		},
		"project11": {
			"title": "First Technology Plus",
			"description": "Développement d'un site web pour First Technology Plus qui se spécialise dans la fourniture de solutions de premier ordre dans plusieurs secteurs, y compris la construction, la maintenance industrielle, le commerce international, la location de véhicules et les consommables médicaux."
		},
		"project12": {
			"title": "MessagerieAdam",
			"description": "Création d'un site web pour MessagerieAdam, une entreprise dédiée à offrir des solutions de livraison rapides, efficaces et professionnelles."
		},
		"project13": {
			"title": "TransportSteben",
			"description": "Création d'un site web pour Transport Steben, une entreprise établie dans le secteur du transport qui propose des services de transport général de haute qualité pour les particuliers et les entreprises."
		},
		"loadMoreBtn": "Voir Plus",
		"contactTitle": "Contactez-moi",
		"copyButton": "Copier",
		"emailButton": "Envoyez-moi un email",
		"downloadCVTitle": "Téléchargez Mon CV",
		"downloadCVButtonEN": "Télécharger le CV en anglais",
		"downloadCVButtonFR": "Télécharger le CV en français",
		"copyMessage": "Copié!",
		"footerText": "© " + new Date().getFullYear() + " Ivan. Tous droits réservés.",
	}
};

function changeLanguage(lang) {
	// Header
	document.querySelector('nav .nav-links a[href="#home"]').textContent = translations[lang].home;
	document.querySelector('nav .nav-links a[href="#about-skills"]').textContent = translations[lang].aboutMe;
	document.querySelector('nav .nav-links a[href="#projects"]').textContent = translations[lang].projects;
	document.querySelector('nav .nav-links a[href="#contact"]').textContent = translations[lang].contactMe;

	// Banner
	document.querySelector('#home .banner-content h1').innerHTML = translations[lang].bannerTitle;
	document.querySelector('#home .banner-content button').textContent = translations[lang].bannerButton;

	// About me - Skills
	document.querySelector('#about-skills .about-me h2').textContent = translations[lang].aboutMeTitle;
	document.querySelector('#about-skills .about-me p').textContent = translations[lang].aboutMeContent;

	// Projects
	document.querySelector('#projects .section-title').textContent = translations[lang].projectsTitle;
	document.querySelectorAll('#projects .project-card').forEach((card, index) => {
		card.querySelector('h3').textContent = translations[lang][`project${index + 1}`].title;
		card.querySelector('p').textContent = translations[lang][`project${index + 1}`].description;
	});

	document.querySelector('#loadMore').textContent = translations[lang].loadMoreBtn;

	// Contact me
	document.querySelector('.contact-section .section-title').textContent = translations[lang].contactTitle;
	document.querySelectorAll('.email-container button')[0].textContent = translations[lang].copyButton;
	document.querySelectorAll('.email-container button')[1].textContent = translations[lang].emailButton;
	document.getElementById('copy-message').textContent = translations[lang].copyMessage;
	document.querySelector('.cv-download h3').textContent = translations[lang].downloadCVTitle;
	document.querySelectorAll('.cv-download a')[0].setAttribute('href', lang === "en" ? './assets/docs/Resume - EN.pdf' : './assets/docs/Resume - FR.pdf');
	document.querySelectorAll('.cv-download a')[0].textContent = translations[lang].downloadCVButtonEN;
	document.querySelectorAll('.cv-download a')[1].textContent = translations[lang].downloadCVButtonFR;

	// Footer
	document.querySelector('.footer-container .footer-text').innerHTML = translations[lang].footerText;
}
