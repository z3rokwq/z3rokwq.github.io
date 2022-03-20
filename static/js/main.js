// preloader
function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
    })
};

loadData()
.then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('preloader');
    let contentEl = document.getElementById('page-wrapper');
    contentEl.classList.add('visible');
    contentEl.classList.remove('hidden');
    let particlesEl = document.getElementById('particles-js');
    particlesEl.classList.add('visible');
    particlesEl.classList.remove('hidden');
});


$('.rev_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

// menu
document.addEventListener('DOMContentLoaded', () => {
    const revealerNav = window.revealer({
    revealElementSelector: '.nav-js',
    options: {
        anchorSelector: '.nav-btn-js',
    },
    });

    const actionBtn = document.querySelector('.nav-btn-js');
    actionBtn.addEventListener('click', () => {
    document.getElementById('toggle').classList.toggle('active')
    if (!revealerNav.isRevealed()) {
        revealerNav.reveal();
        actionBtn.setAttribute('data-open', true);
    } else {
        revealerNav.hide();
        actionBtn.setAttribute('data-open', false);
    }
    });
});

function changeItem(){document.getElementById('pointer').style = 'width: 60px; height: 60px;'};
function rechangeItem(){document.getElementById('pointer').style = 'width: 35px; height: 35px;'};

// slow redirrect
$('.time-slow').on('click', function(e) {
    e.preventDefault();
    var 
       href = $(this).attr('href'),
       timeout = 500;
    setTimeout(function() {
       location.href = href;
    }, timeout);
});   

$('#type').typed({
    strings: ["^300Lua Coder", "^300 14y.o", "^300Ru/En", "^300Live in Rostov-on-Don"],
    typeSpeed: 40,
    loop: true,
})

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
    },
});
