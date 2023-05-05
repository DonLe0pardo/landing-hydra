
const anchors = document.querySelectorAll('a[href*="#"]');

function navScroll(anchors) {

    anchors.forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            setSmoothness(anchor)
            
        })
    });
}


 function setSmoothness(anchor) {
    const href = anchor.getAttribute('href').substring(1);
    
    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

anchors && navScroll(anchors);
 













