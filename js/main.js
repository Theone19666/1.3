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

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        if(swiperInstance) {
            swiperInstance.destroy(true, true);
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
        document.querySelectorAll('.brand:not(:nth-child(-n+6))').forEach((item) => {
            item.classList.add('hidden');
        });
    }
});

document.addEventListener('click', (event) => {
    const repairButton = event.target.closest('.repair__more-button');
    if (repairButton) {
        if (window.innerWidth >= 768 && window.innerWidth < 1120) { 
            if (repairButton.classList.contains('more-button_hide')) {
                repairButton.textContent = 'Показать всё';
                repairButton.classList.remove('more-button_hide');
                document.querySelectorAll('.brand:not(:nth-child(-n+6))').forEach((item) => {
                    item.classList.add('hidden');
                });
            } else {
                repairButton.textContent = 'Скрыть';
                repairButton.classList.add('more-button_hide');
                document.querySelectorAll('.brand:not(:nth-child(-n+6))').forEach((item) => {
                    item.classList.remove('hidden');
                });
            }
        }
    }
});