document.getElementById('lang-toggle').addEventListener('click', function (event) {
	event.preventDefault();

	var currentLang = this.textContent.trim();
	if (currentLang === "FR") {
		this.textContent = "EN";
		changeLanguage("EN");
	} else {
		this.textContent = "FR";
		changeLanguage("FR");
	}
});

function changeLanguage(lang) {

	if (lang === "EN") {
		document.querySelector('h1').textContent = "Hi I'm Ivan";
		document.querySelector('p').textContent = "This is my portfolio.";
	} else {
		document.querySelector('h1').textContent = "Hi I'm Ivan";
		document.querySelector('p').textContent = "Ceci est mon portfolio.";
	}
}
