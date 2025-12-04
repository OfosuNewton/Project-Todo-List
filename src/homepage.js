import chickenURL from './assets/images/chicken.jpg';
import grapesURL from './assets/images/grapes.jpg';
import org from './assets/images/orange.jpg';
import coff from './assets/images/coffee.jpg';
import pizza from './assets/images/pizza.jpg';

export const initial_page_load = function () {  
    const content = document.querySelector('#content');
    content.style.cssText = `
        display: grid;
        grid-template-rows: 1fr 2fr;
        row-gap: 4rem;
        min-height: 100vh;
        
        
        
    `//first card
   const first_card = document.createElement('div');
    // first_card.innerHTML = `<div>Naturally Delicious,</div><br>Always Fresh.</br>`
    first_card.classList.add('hero-msg');
    first_card.style.cssText = `
        margin-top: 3rem;
        font-family: Trebuchet MS
        line-height: 5rem;
        background-attachment: fixed;
        display: flex;
        flex-direction: row;
        border-right: 2rem solid #013220;
        border-left: 2rem solid #013220;
        border-top: 1rem solid  #C19A6B;
        border-bottom: 1rem solid  #C19A6B;
        gap: 2rem;
        color: #F5F5DC;
        padding: 3rem;
        background-color: rgba(0, 0, 0, 0.404);
    `
   content.appendChild(first_card)

   //first_card- firstChild
//    const fresh = document.createElement('div');
//    fresh.textContent = "Always Fresh."
//    fresh.style.cssText = `
//         align-self: center;
//         grid-column: 1 / 2;
//    `
//    first_card.appendChild(fresh);

   //first_card - secondChild img
   const img = document.createElement('img');
   img.src = chickenURL;
   img.alt = 'Restuarant interior';
   img.style.cssText = `
        width: 20rem;
        self-align: center;
        background-size: cover;
        background-position: center center;
        border: 2px solid  #C19A6B;
        border-radius: 1rem;
   `
   first_card.appendChild(img)

   //first_card thirdChild img
   const grapesImg = document.createElement('img');
   grapesImg.src = grapesURL;
   grapesImg.alt = 'grapes picture';
   grapesImg.style.cssText = `
        width: 20rem;
        align-item: center;
        background-size: cover;
        background-position: center center;
        border: 2px solid  #C19A6B;
        border-radius: 1rem;
   `
   first_card.appendChild(grapesImg);

   //first_card fourthChild img
   const orange = document.createElement('img');
   orange.src = org;
   orange.alt = 'oranges';
   orange.style.cssText = `
        width: 20rem;
        align-items: center;
        background-size: cover;
        background-position: center center;
        border: 2px solid  #C19A6B;
        border-radius: 1rem;
   `
    first_card.appendChild(orange);

    //first_card fifthChild img
    const coffee = document.createElement('img');
    coffee.src = coff;
    coffee.alt = 'coffee';
    coffee.style.cssText = `
        max-width: 10rem;
        align-items: center;
        background-size: cover;
        background-position: center center;
        border: 2px solid  #C19A6B;
        border-radius: 1rem;
   `
    first_card.appendChild(coffee);

    //first_card sixthChild img
    const pizzaURL = document.createElement('img');
    pizzaURL.src = pizza;
    pizzaURL.ALT = 'pizza';
    pizzaURL.style.cssText = `
        width: 10rem;
        background-size: center;
        bacground-position: center center;
        border: 2px solid #C19A6B;
        border-radius: 1rem;
    `
    first_card.appendChild(pizzaURL);


       

   //second card
   const second_card = document.createElement('div');
        second_card.style.cssText = `
        background-color: #013220d0;
        padding: 2rem;
        display: grid;
        grid-template-rows: 10rem 5rem 5rem 5rem 10rem;
        border: 2px solid  #C19A6B;
        width: 100%;
        
        max-height: 50rem;
        
    `
        
        content.appendChild(second_card);

        //second card-firstChild
        const Welcome_msg = document.createElement('p');
        Welcome_msg.classList.add('welcome-msg')
        Welcome_msg.textContent = "Welcome To Auroma Village..."
        Welcome_msg.style.cssText = `
            margin: 0px;
            padding: 0px;
            color: #E1C16E;
            align-self: center;
            text-align: center;
            font-family: Trebuchet MS;
            font-size: 5rem;
            
            line-height: rem;
        `
        second_card.appendChild(Welcome_msg)

        //second card-secondChild
        const craving_info = document.createElement('p');
        craving_info.textContent = "Craving hits at midnight?"
        craving_info.style.cssText = `
            font-size: 3rem;
            text-align: center;
            margin: 0px auto;
            align-self: center;
            color: #C19A6B;
            font-family: Trebuchet MS;


        `
        second_card.appendChild(craving_info);

        //second card-thirdChild
        const enjoy_info = document.createElement('p');
        enjoy_info.textContent = "Enjoy fresh, tasty food delivered super fast."
        enjoy_info.style.cssText = `
            font-size: 2.5rem;
            text-align: center;
            margin: 0px auto;
            align-self: center;
            color: #E1C16E;
            font-family: Trebuchet MS;


        `
        second_card.appendChild(enjoy_info);

        //second card-fourthChild
        const last_info = document.createElement('p');
        last_info.textContent = "just for you.";
        last_info.style.cssText = `
            font-size: 2.5rem;
            text-align: center;
            align-self: center;
            color: #4d9b74ff;
            font-family: Trebuchet MS;

        `
        second_card.appendChild(last_info);

        //second card-fifthChild
        const open_info = document.createElement('p');
        open_info.textContent = "Opened for Breakfast, Lauch and Dinner."
        open_info.style.cssText = `
            font-size: 2.5rem;
            text-align: center;
            align-self: center;
            color: #C19A6B;
        `
        second_card.appendChild(open_info);
        
    

    
}