import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

try {
  const burger = document.querySelector(".burger"),
	close = document.querySelector(".header__menu-close"),
	menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
	menu.classList.add("header__menu_active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("header__menu_active");
	document.body.style.overflow = "";
});
} catch (e) {}

try {
  const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".icon-right-open",
        prevEl: ".icon-left-open",
    },
    breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1920: {
        spaceBetween: 35,
        slidesPerView: 3,
      },
  },
  modules: [Navigation, Pagination],
});
} catch (e) {}

try {
  const validator = new JustValidate('.touch__form');
  
  validator.addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Please fill the name',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Min 2 characters',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#question', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 5,
    },
  ], {
    errorsContainer: document
        .querySelector("#question")
        .parentElement.querySelector(".error-message")
  })
  .addField('#checkbox', [
    {
      rule: 'required',
    },
  ], {
    errorsContainer: document
        .querySelector("#question")
        .parentElement.parentElement.querySelector(".checkbox-error-message")
    })
    .onSuccess((event) => {
			const form = event.currentTarget;
			const formData = new FormData(form);

			fetch("https://httpbin.org/post", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Success", data);
					form.reset();
				});
		});
}
catch (e) {}
try {
  const footerValidator = new JustValidate(".footer__form");

      footerValidator.addField(".footer__input", [
        {
          rule: 'required',
          errorMessage: 'Please fill email field',
        },
        {
          rule: 'email',
        },
      ], {
      errorsContainer: document
        .querySelector(".footer__input")
        .parentElement.querySelector(".footer-error-message")
      })
      .addField("#checkbox", [
        {
          rule: 'required',
          errorMessage: 'Please accept the terms of use',
        },
      ], {
      errorsContainer: document
        .querySelector(".footer__check-block")
        .parentElement.querySelector(".checkbox-footer-error-message")
      });
} catch (e) {}
