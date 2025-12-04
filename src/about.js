import chickenURL from "./assets/images/chicken.jpg";
import orangeURL from "./assets/images/orange.jpg";
export function create_about() {
       const content = document.querySelector('#content');
        content.style.cssText = `
        background-color: #013220b6;
        border-radius: 1rem;
        min-height: 50rem;
        padding: 1rem;
        background-attachment: fixed;
        margin: 2rem;
        border-right: 2rem solid #013220a8;
        border-left: 2rem solid #013220e8;
        border-top: 1rem solid  #C19A6B;
        border-bottom: 1rem solid  #C19A6B;
        display: grid;
        grid-template-rows: 1fr 2fr;
        width: auto;
        
       `

    //    first-card
        const hero_cont = document.createElement('div');
        hero_cont.style.cssText = `
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            line-height: 1rem;
            
            

        `
        content.appendChild(hero_cont);

        // first-card_firstchild
        const hero_msg = document.createElement('p');
        hero_msg.textContent = "Why Dine With US?";
        hero_msg.style.cssText = `
            
            height: 10rem;
            font-size: 4.5rem;
            align-content: center;
            // border: 2px solid red;
            margin: 0px;
        `
        hero_cont.appendChild(hero_msg);

        // first-card secondChild
        const sub_hero = document.createElement('p');
        sub_hero.textContent = "From classic favorites to modern culinary creations, our menu is designed to tantalize your.";
        sub_hero.style.cssText = `
            // flex: 1;
            font-size: 2rem;
            line-height: 1.8rem;
            padding: 0.3rem;
            // border: 2px solid blue;
            align-content: center;
            margin: 0px;
            
        `
        hero_cont.appendChild(sub_hero);

        // first_card thirdChild
        const sub_hero_last = document.createElement('p');
        sub_hero_last.textContent = "taste buds, Every dish is made with the freshest ingredients and an extra dash of love.";
        sub_hero_last.style.cssText = `
            // flex: 1;
            font-size: 1.5rem;
            align-content: center;
            // border: 2px solid green;
            padding: 0.3rem;
            margin: 0px;
        `
        hero_cont.appendChild(sub_hero_last);

    // second-card
    const second_card = document.createElement('div');
    second_card.style.cssText = `
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(2, 1fr);
        padding: 1rem;
        gap: 1rem;

        
        background-color: #1d263581;
        
    `
    content.appendChild(second_card)

    // second-card firstChild img
    const chickenImg = document.createElement('img');
    chickenImg.src = chickenURL;
    chickenImg.alt = "a nice chicken";
    chickenImg.style.cssText = `
        width: 30rem;
        align-content: center;
        background-size: cover;
        background-position: center center;
        border: 2px solid  #C19A6B;
        border-radius: 1rem;
    `
    second_card.appendChild(chickenImg);

    //second-card secondChild 
    const fromFresh = document.createElement('div');
    fromFresh.style.cssText = `
        background-color: #013220a8;
        display: flex;
        flex-direction: column;
        height: auto;
        
    `
    second_card.appendChild(fromFresh);

    //secondChild first-element
    const header = document.createElement('p');
    header.textContent = "Fresh, Locally Sourced Ingredients.";
    header.style.cssText = `
        padding: 1rem;
        margin: 0px;
        font-size: 2rem;
        color: #C19A6B;

        
    `
    fromFresh.appendChild(header);

    //secondChild second-element
    const sub_header = document.createElement('p');
    sub_header.textContent = "We use only the freshest ingredients & traditional recipes to ensure each dish is a masterpiece.";
    sub_header.style.cssText=`
        margin: 0px;
        padding: 1rem;
        font-size: 1.5rem;
        color: white;

    `
    fromFresh.appendChild(sub_header);

    //secondChild third-element
    const btn = document.createElement('button');
    btn.textContent = 'View menu';
    btn.style.cssText = `
        color: #C19A6B;
        border: 1px #C19A6B solid;
        background-color: #1d2635;
        margin: 0px auto;
        padding: 0.5rem;
        border-radius: 1rem;
        font-size: 1rem;
        width: 7rem;
    `
    fromFresh.appendChild(btn);
   


    //thirdChild img
    const orange = document.createElement('img');
    orange.src = orangeURL;
    orange.alt = "a nice orange";
    orange.style.cssText = `
        width: 30rem;
        align-content: center;
        background-size: cover;
        background-position: center center;
        border: 2px solid  #C19A6B;
        border-radius: 1rem;
    `
    second_card.appendChild(orange);

    //fourthChild 
    const contact_info = document.createElement('div');
    contact_info.style.cssText = `
        background-color: #C19A6B;
        display: flex; 
        flex-direction: column;      
        line-height: 2rem;
        padding: 1rem;
        border-right: 2rem solid #013220;
        border-left: 2rem solid #013220;
        border-top: 1rem solid  #C19A6B;
        border-bottom: 1rem solid  #C19A6B;
    `
    second_card.appendChild(contact_info)

    // fourthChild firstElement
    const head = document.createElement('p');
    head.textContent = "Aroma Village Details";
    head.style.cssText = `
        font-size: 2rem;
        color: white;
        margin: 0px;
        text-align: center;
    `
    contact_info.appendChild(head);



    // fourthChildk secondElement
    const location = document.createElement('p');
    location.textContent = 'Location: Ohwim Amanfrom';
    location.style.cssText = ` 
        font-size: 1.5rem;
        color: white;
        margin: 0px auto;
        padding: 1rem;       
    `
    contact_info.appendChild(location);

    //fourthChild thirdElement
    const contact = document.createElement('div')
    contact.textContent = "Contact: 0533257960"
    contact.style.cssText = `
        color: white;
        font-size: 1.5rem;
        margin: 0px auto;
        padding: 1rem;
    `
    contact_info.appendChild(contact);

    const open = document.createElement('div')
    open.textContent = "Opening Hours: Monday - Saturday 8am - 11pm"
    open.style.cssText = `
        color: white;
        font-size: 1.5rem;
        margin: 0px auto;
        padding: 1rem;
    `
    contact_info.appendChild(open);


}