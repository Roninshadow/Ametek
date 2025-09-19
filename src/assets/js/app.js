import Inputmask from 'inputmask'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

const consultBtn = document.querySelectorAll('.consult')
const commerceBtn = document.querySelectorAll('.commerce')
const reerenceBtn = document.querySelectorAll('.reference')
const popUpBtn = document.querySelectorAll('.popUp__btn')
const commercePopUp = document.querySelector('.popUp__commerce')
const connectPopUp = document.querySelector('.popUp__connection')
const referencePopUp = document.querySelector('.popUp__reference')
const popUpThank = document.querySelector('.popUp__thank')
const popUpCross = document.querySelectorAll('.popUp__cross')
const tabs = document.querySelectorAll('.decision__content-tab')
const blocks = document.querySelectorAll('.decision__content-block')
const faq = document.querySelectorAll('.faq__item')
const burgerBtn = document.querySelector('.burgerBtnOpen')
const burger = document.querySelector('.header__burger')

burgerBtn.addEventListener('click', () => {
	if (burger.hasAttribute('open')) {
		burger.close()
		document.body.classList.add('scroll-block')
	} else {
		burger.show()
		document.body.classList.remove('scroll-block')
	}
})

popUpCross.forEach(cross => {
	cross.addEventListener('click', () => {
		commercePopUp.close()
		referencePopUp.close()
		connectPopUp.close()
		popUpThank.close()
		document.body.classList.remove('scroll-block')
	})
})

faq.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active')
	})
})

consultBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		connectPopUp.showModal()
		document.body.classList.add('scroll-block')
	})
})

commerceBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		commercePopUp.showModal()
		document.body.classList.add('scroll-block')
	})
})

reerenceBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		referencePopUp.showModal()
		document.body.classList.add('scroll-block')
	})
})

popUpBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		commercePopUp.close()
		referencePopUp.close()
		connectPopUp.close()
		popUpThank.showModal()
		document.body.classList.add('scroll-block')
	})
})

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		// Сбрасываем активные классы
		tabs.forEach(t => t.classList.remove('active'))
		blocks.forEach(b => b.classList.remove('active'))

		// Активируем выбранные
		tab.classList.add('active')
		blocks[index].classList.add('active')
	})
})

const swiper = new Swiper('.equipment__tech', {
	modules: [Navigation, Autoplay], // подключаем модули
	slidesPerView: 'auto',
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation: {
		// важно: маленькая буква "n"
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
const swiper1 = new Swiper('.clients__swiper', {
	modules: [Navigation, Autoplay], // подключаем модули
	slidesPerView: 'auto',
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation: {
		// важно: маленькая буква "n"
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
const swiper2 = new Swiper('.projets__swiper', {
	modules: [Navigation, Autoplay], // подключаем модули
	slidesPerView: 'auto',
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation: {
		// важно: маленькая буква "n"
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
if (window.innerWidth <= 768) {
	const swiper3 = new Swiper('.approach-swiper', {
		modules: [Navigation, Autoplay], // подключаем модули
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	})
}
if (window.innerWidth <= 768) {
	const swiper4 = new Swiper('.product__swiper', {
		modules: [Navigation, Autoplay], // подключаем модули
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	})
}
if (window.innerWidth <= 768) {
	const swiper4 = new Swiper('.pluses__swiper', {
		modules: [Navigation, Autoplay], // подключаем модули
		slidesPerView: 'auto',
		spaceBetween: 10,
	})
}
if (window.innerWidth <= 768) {
	const swiper5 = new Swiper('.tabs__swiper', {
		modules: [Navigation, Autoplay], // подключаем модули
		slidesPerView: 'auto',
		spaceBetween: 10,
	})
}
