document.addEventListener('DOMContentLoaded', getLocalLang)


// ---------------- <База даных перевода ----------------

var arrLang = {

	// ---------- Меню

	'home': {
		'en': 'Home',
		'ua': 'Головна',
	},

}

// class="TR" key=""

// '': {
// 	'en': '',
// 	'ua': '',
// },


// ---------------- Логика смены языка ----------------

$(function () {
	$('.btn-lang').click(function () {
		var lang = $(this).attr('id');

		saveLocalLang(lang);

		$('.TR').each(function (index, item) {
			$(this).text(arrLang[$(this).attr('key')][lang]);
		});
	});
});



function saveLocalLang(language) {
	let langs
	if (localStorage.getItem('langs') === null) {
		langs = []
	}
	else {
		langs = JSON.parse(localStorage.getItem('langs'))
	}
	if (langs.length > 3) {
		langs = []
	}
	langs.push(language)
	localStorage.setItem('langs', JSON.stringify(langs))

}

function getLocalLang(language) {
	let langs
	if (localStorage.getItem('langs') === null) {
		langs = []
	}
	else {
		langs = JSON.parse(localStorage.getItem('langs'))
	}
	langs.forEach(function (language) {
		let lang = langs[langs.length - 1]
		setTimeout(() => {
			$('.TR').each(function (index, item) {
				$(this).text(arrLang[$(this).attr('key')][lang]);
			});
		}, 0)
		// console.log(langs)
	})
}

$('.btn-lang').on('click', function () {
	$('.btn-lang.active').removeClass('active');
	$(this).addClass('active');
});


