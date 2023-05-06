
////SIDEBAR////
const menuItems = document.querySelectorAll('.menu-item');

///////////////////////  MESSAGE////////////////
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//////THEME/////////////
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')
const fontSizes  = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



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
        if(item.id !== 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})
  
////============MESSAGES ===========/////
//////////SEARCH CHATS////////
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) !== -1){
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}




////////////////SEARCH CHAT/////
messageSearch.addEventListener('keyup', searchMessage);


///////highlight messages card when messages menu item is clicked/////
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})


//////////////////////Theme customization////////////
 
 
 ///////OPEN MODAL//////////
 const openThemeModal = () => {
     themeModal.style.display = 'grid';
 }
 
 ///////CLOSE MODAL//////////
 const closeThemeModal = (e) => {
     if(e.target.classList.contains('customize-theme')){
         themeModal.style.display = 'none';
     }
 }
 
 
  ///////CLOSE MODAL//////////
 themeModal.addEventListener('click', closeThemeModal);
 
 theme.addEventListener('click', openThemeModal);



//////////////FONTS/////////////////////
fontSizes.forEach(size => {
    let fontSize;
    
   size.addEventListener('click', () => {
    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    } else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    } else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    } else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    } else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('----sticky-top-left', '-12rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    }
    
      ////CHANGE FONT SIZE OF THE ROOT HTML ELEMENT///////
      document.querySelector('html').style.fontSize =  fontSize;
   })
    
})


//REMOVE ACTIVE CLASS FROM COLORS///////////
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//////////////////CHANGE PRIMARY COLORS///////////////
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        //REMOVE ACTIVE CLASS FROM COLORS///////////
        changeActiveColorClass();
        
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


///////THEME BACKGROUND VALUES///////////////
let lightColorLightness;
let whiteColorLightness;
let darkColorlightness;

/////////////CHANGE BACKGROUND COLOR///////////
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorlightness);
}


/////////////CHANGE BACKGROUND COLORS///////
Bg1.addEventListener('click', () => {
    //ADD ACTIVE CLASS/////////
    Bg1.classList.add('active');
    //////REMOVE ACTIVE CLASS FROM THE OTHERS////
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    ////REMOVE CUSTOMIZED CHANGES FROM LOCAL STORAGE///
    window.location.reload();
})

    Bg2.addEventListener('click', () => {
        darkColorlightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';
        
        //ADDACTIVE CLASS/////////
        Bg2.classList.add('active');
        //////REMOVE ACTIVE CLASS FROM THE OTHERS////
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBG();
    });

    Bg3.addEventListener('click', () => {
        darkColorlightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';
        
        //ADDACTIVE CLASS/////////
        Bg3.classList.add('active');
        //////REMOVE ACTIVE CLASS FROM THE OTHERS////
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBG();
    })


///////////////END//////////////