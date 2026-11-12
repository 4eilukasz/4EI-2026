const szer = document.querySelector('#szer');
const dlug = document.querySelector('#dlug');
const btn = document.querySelector('button');
const rodzList = document.querySelectorAll('input[name="rodzaj"]');
const display = document.querySelector('section');

// console.log(szer, dlug, btn)

btn.addEventListener('click', function (evt) {
	// evt.preventDefault()
	const szerValue = Number(szer.value);
	const dlugValue = Number(dlug.value);
	// const rodzVal = Number(document.querySelector('input[name="rodzaj"]:checked').value)

	let rodzVal = 0;
	for (let i = 0; i < rodzList.length; i++) {
		if (rodzList[i].checked) {
			rodzVal = rodzList[i].value;
			// console.log(rodzVal);
		}
	}
	if (!rodzVal || !szerValue || !dlugValue) {
		display.textContent = `uzupelnij pola`;
	} else {
		const cena = szerValue * dlugValue * rodzVal;
		display.textContent = `Cena za panele ${cena}zł`;
	}
});
