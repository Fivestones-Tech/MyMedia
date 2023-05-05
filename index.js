////SIDEBAR////
const menuItems = document.querySelectorAll('.menu-item');

///////////////////////  MESSAGE////////////////
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


///////////////////sidebar//////////////////
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
  
////============MESSAGES ===========/////
//////////SEARCH CHATS////////
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase
        ();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}




////////////////SEARCH CHAT/////
messageSearch.addEventListener('keyup', searchMessage);


///////hightlight messages card when messages menu item is clicked/////
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
   messagesNotification.querySelector('.notification-count').style.display 
   = 'none';
   setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})
