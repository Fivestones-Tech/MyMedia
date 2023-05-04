// /SIDEBAR////
const menuItems = document.querySelectorAll('.menu-item');

///////////////////////  MESSAGE////////////////
const messagesNotification = document.querySelector
{'#message-notification'};
const messages = document.querySelector('.messages');
//
// remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count')
            .style.display = 'none';
        }
    })
})

//============MESSAGES ===========/////
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';+++++++++++++++ cachesaccccccccccccccccccccccs   ccccccccccccccccccc
})
