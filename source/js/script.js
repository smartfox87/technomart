const modalMessage = document.querySelector('.modal-message');
const modalMessageOpen = document.querySelector('.about-us__message');
const modalMessageClose = document.querySelector('.modal-message__close');
const modalMessageFocus = modalMessage.querySelector('#modal-message__name');
const modalMap = document.querySelector('.modal-map');
const modalMapOpen = document.querySelector('.services__map');
const modalMapClose = document.querySelector('.modal-map__close');
const slide1 = document.querySelector('.slider__slide--perforators');
const slide2 = document.querySelector('.slider__slide--drills');
const slidePrev = document.querySelector('.slider__toggle--prev');
const slideNext = document.querySelector('.slider__toggle--next');
const servicesDeliveryToggle = document.querySelector('.services__categorie-name--delivery');
const servicesGuaranteeToggle = document.querySelector('.services__categorie-name--guarantee');
const servicesCreditToggle = document.querySelector('.services__categorie-name--credit');
const servicesDeliveryContent = document.querySelector('.services__categorie-content--delivery');
const servicesGuaranteeContent = document.querySelector('.services__categorie-content--guarantee');
const servicesCreditContent = document.querySelector('.services__categorie-content--credit');

function clickServices(name1, name2, name3, content1, content2, content3) {
    name1.addEventListener('click', function (event) {
        event.preventDefault();
        name1.classList.add('services__categorie-name--active');
        name2.classList.remove('services__categorie-name--active');
        name3.classList.remove('services__categorie-name--active');
        content1.classList.add('services__categorie-content--show');
        content2.classList.remove('services__categorie-content--show');
        content3.classList.remove('services__categorie-content--show');
    })
}

function clickModal(showModal, nameModal, prefixModal) {
    showModal.addEventListener('click', function (event) {
        event.preventDefault();
        nameModal.classList.toggle('modal-' + prefixModal + '--show');
        if (showModal === modalMessageOpen) {
            modalMessageFocus.focus();
        }
    })
}

function clickSlider(sliderToggle) {
    sliderToggle.addEventListener('click', function (event) {
        event.preventDefault();
        slide1.classList.toggle('slider__slide--show');
        slide2.classList.toggle('slider__slide--show');
    })
}

clickModal(modalMessageOpen, modalMessage, 'message');
clickModal(modalMessageClose, modalMessage, 'message');
clickModal(modalMapOpen, modalMap, 'map');
clickModal(modalMapClose, modalMap, 'map');
clickSlider(slidePrev);
clickSlider(slideNext);
clickServices(servicesDeliveryToggle, servicesGuaranteeToggle, servicesCreditToggle, servicesDeliveryContent, servicesGuaranteeContent, servicesCreditContent);
clickServices(servicesGuaranteeToggle, servicesDeliveryToggle, servicesCreditToggle, servicesGuaranteeContent, servicesDeliveryContent, servicesCreditContent);
clickServices(servicesCreditToggle, servicesDeliveryToggle, servicesGuaranteeToggle, servicesCreditContent, servicesDeliveryContent, servicesGuaranteeContent);