import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";
         // TABS SETTING
try {
    const tabsButtons = document.querySelectorAll(".catalog__tab"),
    tabsTea = document.querySelector(".catalog__content-tea"),
    tabsKitchen = document.querySelector(".catalog__content-kitchen"),
    tabsPlants = document.querySelector(".catalog__content-plants"),
    activeTabStyle = document.querySelector(".catalog__tab_active");

    tabsButtons.forEach((btns, i , allEl) => {
        btns.addEventListener("click", () => {
          if (btns.classList.contains("tea")) {
            tabsTea.classList.remove("hidden");
            tabsKitchen.classList.add("hidden");
            tabsPlants.classList.add("hidden");

            btns.classList.add("catalog__tab_active");
            allEl[1].classList.remove("catalog__tab_active");
            allEl[2].classList.remove("catalog__tab_active");
          }
          else if (btns.classList.contains("kitchen")) {
            tabsKitchen.classList.remove("hidden");
            tabsTea.classList.add("hidden");
            tabsPlants.classList.add("hidden");

            btns.classList.add("catalog__tab_active");
            allEl[0].classList.remove("catalog__tab_active");
            allEl[2].classList.remove("catalog__tab_active");
          }
          else if (btns.classList.contains("plants")) {
            tabsPlants.classList.remove("hidden");
            tabsKitchen.classList.add("hidden");
            tabsTea.classList.add("hidden");

            btns.classList.add("catalog__tab_active");
            allEl[0].classList.remove("catalog__tab_active");
            allEl[1].classList.remove("catalog__tab_active");
          }
          else {
            tabsPlants.classList.add("hidden");
            tabsKitchen.classList.add("hidden");

            allEll[0].classList.add("catalog__tab_active");
          }
      });
    });
} catch (error) {
  console.log("Error on the Tabs setting block", error);
}
              // BURGER BUTTON MENU 
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
} catch (error) {
  console.log("Error on the Burger Button Menu setting block", error);
}
                // SLIDER SETTING 
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
} catch (error) {
  console.log("Error on the Slider setting block", error);
}
                  // FORM VALIDATION SETTINGS 
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
catch (error) {
  console.log("Error on the Form Validation setting block", error);
}
                // FOOTER VALIDATION
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
} catch (error) {
  console.log("Error on the Footer Form Validation setting block", error);
}
