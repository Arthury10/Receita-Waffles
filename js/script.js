if (window.SimpleSlide) {
	new SimpleSlide({
		slide: 'principal', // nome do atributo data-slide="principal"
		nav: true, // se deve ou não mostrar a navegação
		auto: true, // se o slide deve passar automaticamente
		time: 5000, // tempo de transição dos slides
		pauseOnHover: true // pausa a transição automática
	})
}

if (window.SimpleAnime) {
	new SimpleAnime()
}

/*animação scrolls*/
function initAnimacaoScroll() {
	const sections = document.querySelectorAll('.js-scroll')

	if (sections.length) {
		const windowMetade = window.innerHeight * 0.75

		function animaScroll() {
			sections.forEach(section => {
				section.classList.add('desativo')
				const sectionTop = section.getBoundingClientRect().top
				const isSectionVisible = sectionTop - windowMetade < 0
				if (isSectionVisible) {
					section.classList.add('ativo')
					section.classList.add('fadeInUp')
				} else {
					section.classList.remove('ativo')
					section.classList.remove('fadeInUp')
				}
			})
		}

		animaScroll()

		window.addEventListener('scroll', animaScroll)
	}
}

initAnimacaoScroll()
