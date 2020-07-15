
let button = document.querySelector("button.button");

button.onclick = function () {
    alert(" Извините! Товар закончился на складе!");
}
// отправка заявки
$(document).ready(function() {

	$('#contact-form_1').submit(function() { 
// проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)

		const name = $('#name').val();
		const phone = $('#phone').val();
		console.log(name,phone)
		if (name == '' || phone == '' ) {
			valid = false;
			const error = document.querySelector('.offer__error')
			error.style.display = 'block';
			return valid;
		}else{
			const error = document.querySelector('.offer__error')
			error.style.display = 'none';
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#contact-form_1').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});


// Маска ввода номера телефона (плагин maskedinput)
// $(function($){
// 	$('[name="phone"]').mask("+7(999) 999-9999");
// });

















document.querySelector(".contact-form__input").oninput = function () {
    console.log(" Вы что то вводите");
};

// document.querySelector(".button ").onclick = function () {
//     alert(" Извините! Товар закончился на складе!");
// };
// document.querySelector(".offer__button ").onclick = function () {
//     alert(" Извините! Товар закончился на складе!");
// };



// $('.feedbacks__row').slick({
//     // dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 // dots: true
//             }
//         },
//         {
//             breakpoint: 769,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 375,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
  
//     ]
// });

// $('.about-us__stages').slick({
//     // dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1025,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 // dots: true
//             }
//         },
//         {
//             breakpoint: 769,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 413,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }

//     ]
// });
// $('.working__stages').slick({
//     // dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1025,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 // dots: true
//             }
//         },
//         {
//             breakpoint: 769,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 413,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }

//     ]
// });
// window.onload = function()  {
//     alert(" Страница Загрузилась!");
// };
