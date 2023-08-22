const hoverSection = document.querySelectorAll('.sticky_Header_Menu_Item');
const stickyHeader = document.querySelector('.sticky_Header');
const stickyHeaderHeight = stickyHeader.offsetHeight;
hoverSection.forEach(function(section) {
    section.addEventListener('mouseover', function() {
        const a = this.querySelector('a');
        a.classList.add('active');
    });
    section.addEventListener('mouseout', function() {
        const a = this.querySelector('a');
        a.classList.remove('active');
    });
});

const backtoTop = document.querySelector('.fixedButtonToTop');
backtoTop.onclick = function() {
    window.scrollTo(0, 0);
};
