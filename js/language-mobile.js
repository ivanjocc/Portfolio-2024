document.getElementById('lang-toggle-mobile').addEventListener('click', function (event) {
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

const translationsMobile = {
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
	document.querySelector('nav .nav-links a[href="#home"]').textContent = translationsMobile[lang].home;
	document.querySelector('nav .nav-links a[href="#about-skills"]').textContent = translationsMobile[lang].aboutMe;
	document.querySelector('nav .nav-links a[href="#projects"]').textContent = translationsMobile[lang].projects;

	// Banner
	document.querySelector('#home .banner-content h1').innerHTML = translationsMobile[lang].bannerTitle;
	document.querySelector('#home .banner-content button').textContent = translationsMobile[lang].bannerButton;

	// About me - Skills
	document.querySelector('#about-skills .about-me h2').textContent = translationsMobile[lang].aboutMeTitle;
	document.querySelector('#about-skills .about-me p').textContent = translationsMobile[lang].aboutMeContent;

	// Projects
	document.querySelector('#projects .section-title').textContent = translationsMobile[lang].projectsTitle;
	document.querySelectorAll('#projects .project-card').forEach((card, index) => {
		card.querySelector('h3').textContent = translationsMobile[lang][`project${index + 1}`].title;
		card.querySelector('p').textContent = translationsMobile[lang][`project${index + 1}`].description;
	});

	// Contact me
	document.querySelector('.contact-section .section-title').textContent = translationsMobile[lang].contactTitle;
	document.querySelectorAll('.email-container button')[0].textContent = translationsMobile[lang].copyButton;
	document.querySelectorAll('.email-container button')[1].textContent = translationsMobile[lang].emailButton;
	document.getElementById('copy-message').textContent = translationsMobile[lang].copyMessage;
	document.querySelector('.cv-download h3').textContent = translationsMobile[lang].downloadCVTitle;
	document.querySelectorAll('.cv-download a')[0].setAttribute('href', lang === "en" ? './assets/docs/Resume - EN.pdf' : './assets/docs/Resume - FR.pdf');
	document.querySelectorAll('.cv-download a')[0].textContent = translationsMobile[lang].downloadCVButtonEN;
	document.querySelectorAll('.cv-download a')[1].textContent = translationsMobile[lang].downloadCVButtonFR;

	// Footer
	document.querySelector('.footer-container .footer-text').innerHTML = translationsMobile[lang].footerText;
}
