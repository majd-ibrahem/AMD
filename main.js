
const barsOpen = document.querySelector('.bars-open');
const barsClose = document.querySelector('.bars-close');
const body = document.querySelector('.body');


function openMenu()
{
     body.style.transform = 'translateX(305px)';
     barsClose.style.visibility = 'visible';
     body.style.overflow = 'hidden';
}

function closeMenu()
{
     barsClose.style.visibility = 'hidden';
     body.style.transform = 'translateX(0)';
     body.style.overflow = 'visible';
}

// Events Listiners

barsOpen.addEventListener('click', function()
{
     openMenu();
})

barsClose.addEventListener('click', function()
{
     closeMenu();
})