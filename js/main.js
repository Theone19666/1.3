let swiperInstance;

function createSwiper() {
    swiperInstance = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        speed: 400,
        //spaceBetween: 16,
        width: 240
    });
}

function hideBrands(brandsCount = 6) {
    document.querySelectorAll(`.brand:not(:nth-child(-n+${ brandsCount }))`).forEach((item) => {
        item.classList.add('hidden');
    });
}

function showBrands(brandsCount = 6) {
    document.querySelectorAll(`.brand:not(:nth-child(-n+${ brandsCount }))`).forEach((item) => {
        item.classList.remove('hidden');
    });
}

function showFirstBrands(brandsCount = 8) {
    document.querySelectorAll(`.brand:nth-child(-n+${ brandsCount })`).forEach((item) => {
        item.classList.remove('hidden');
    });
}

function hideButtonShowBrands({ brandsCount = 6, repairButton = {} } = {}) {
    repairButton.textContent = 'Скрыть';
    repairButton.classList.add('more-button_hide');
    showBrands(brandsCount);
}

function showButtonHideBrands({ brandsCount = 6, repairButton } = {}) {
    repairButton.textContent = 'Показать всё';
    repairButton.classList.remove('more-button_hide');
    hideBrands(brandsCount);
}

function deleteSwiperStyle() {
    document.querySelectorAll('.brand').forEach((item) => {
        item.style.width = '';
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        deleteSwiperStyle();
        if(swiperInstance) {
            swiperInstance.destroy(true);
        }
        if (window.innerWidth < 1120) {
            //showBrands();
            hideBrands();
        } else {
            showFirstBrands();
            hideBrands(8);
        }
    } else {
        createSwiper();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) {
        createSwiper();
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
        hideBrands();
    }
    if (window.innerWidth >= 1120) {
        hideBrands(8);
    }
});

document.addEventListener('click', (event) => {
    const repairButton = event.target.closest('.repair__more-button');
    if (repairButton) {
        if (window.innerWidth >= 768 && window.innerWidth < 1120) { 
            if (repairButton.classList.contains('more-button_hide')) {
                showButtonHideBrands({ repairButton });
            } else {
                hideButtonShowBrands({ repairButton });
            }
        }
        if ( window.innerWidth >= 1120) { 
            if (repairButton.classList.contains('more-button_hide')) {
                showButtonHideBrands({ brandsCount: 8, repairButton });
            } else {
                hideButtonShowBrands({ brandsCount: 8, repairButton });
            }
        }
    }
});