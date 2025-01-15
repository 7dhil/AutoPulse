document.addEventListener('DOMContentLoaded', () => {
    let intro = document.querySelector('.intro');
    let logoSpan = document.querySelectorAll('.logo');

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, (logoSpan.length + 1) * 400);
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 3500);
});
