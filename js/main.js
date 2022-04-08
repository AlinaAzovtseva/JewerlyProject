new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        
        slidesOffsetBefore: -200,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          prevEl: ".swiper__btn-prev",
          nextEl: ".swiper__btn-next",
             },
              
                  breakpoints: {
                800: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    navigation: false,
                     },
                 
                1025: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    slidesOffsetBefore: 0,
                     },
                 }

                 

      });
    