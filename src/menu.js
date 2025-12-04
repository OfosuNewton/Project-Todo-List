import alcoholicURL from "./assets/images/alcoholic.jpg"
import happyURL from "./assets/images/happy.jpg";
import chickenURL from "./assets/images/chicken.jpg";
import PizzaURL from "./assets/images/pizza.jpg";
import orangeURL from "./assets/images/orange.jpg";
import grapeURL from "./assets/images/grapes.jpg";
export function create_menu () {
    const content = document.querySelector('#content')
    content.style.cssText = `
        background-color: #013220b6;
        color: white;
        margin: 0px auto;
        text-align: center;
        width: 30rem;
        height: auto;
        padding: 1rem;
        border-radius: 1rem;
           border-right: 2rem solid #013220;
        border-left: 2rem solid #013220;
        border-top: 1rem solid  #C19A6B;
        border-bottom: 1rem solid  #C19A6B;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
        
    `
   

    //first card
     const menu = document.createElement('div');
        menu.style.cssText = `
            color: white;            
            align-items: center;
            background-color: #C19A6B;
            margin: 0px auto;
            padding: 1.5rem;
            border-radius: 1rem;
            border: 5px #03291bcc solid;
            font-size: 2rem;
            cursor: pointer;

           
            
            

        `
        menu.textContent = "Menu"
        content.appendChild(menu);

    // first card-firstChild
    const Beverages = document.createElement('div');
     Beverages.style.cssText = `
            color: white;            
            justify-content:;
            background-color: #C19A6B;
            margin: 0px auto;
            padding: 2rem;
            border-radius: 1rem;
            border: 5px #03291bcc solid;
            cursor: pointer;
            font-size: 2rem;
        `
    Beverages.textContent = " Beverages";
    content.appendChild(Beverages);

    // Beverages first card
    const B_card = document.createElement('div')
    B_card.style.cssText = `
        background-color: #00000086;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: 2px #C19A6B solid;
        border-radius: 1rem;
        cursor: pointer;
    `
   
    
    content.appendChild(B_card);

    // B_firstCard FirstChild
    const b_info = document.createElement("p")
    b_info.textContent = "A warm, sweet Beverage made with pure quality ingredients and a bit of lemon to start you day off right!"
    b_info.style.cssText = `
        font-size: 1.5rem;
        margin: 0;
    `
    B_card.appendChild(b_info);

    //B_firstCard SecondChild
    const b_price = document.createElement("p")
    b_price.textContent = "$10"
    b_price.style.cssText = `
        font-size: 1.5rem;
        // margin: 0;
    `
    B_card.appendChild(b_price);

    // B_firstCard ThirdChild img
    const B_img = document.createElement('img');
    B_img.src = alcoholicURL;
    B_img.alt = " a nice beverage"
    B_img.style.cssText = `
        
        width: 20rem;
        margin: 0px auto;
        
    `
    B_card.appendChild(B_img);

    // B_SecondCard
       const B_card2 = document.createElement('div')
        B_card2.style.cssText = `
        background-color: #00000086;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: 2px #C19A6B solid;
        border-radius: 1rem;
        cursor: pointer;
    `
   
    
    content.appendChild(B_card2);

      // B_secondCard FirstChild
    const b2_info = document.createElement("p")
    b2_info.textContent = "A comforting, almost filling fruit juice infused with flavors of several kind of berries. Best served cold but can be served hot on request!"
    b2_info.style.cssText = `
        font-size: 1.5rem;
        margin: 0;
    `
    B_card2.appendChild(b2_info);

      //B_secondCard SecondChild
    const b2_price = document.createElement("p")
    b2_price.textContent = "$15"
    b2_price.style.cssText = `
        font-size: 1.5rem;
        // margin: 0;
    `
    B_card2.appendChild(b2_price);

       // B_secondCard ThirdChild img
    const B2_img = document.createElement('img');
    B2_img.src = happyURL;
    B2_img.alt = " a nice beverage"
    B2_img.style.cssText = `
        
        width: 20rem;
        margin: 0px auto;
        
    `
    B_card2.appendChild(B2_img);


       // first card-secondChild
    const dishes = document.createElement('div');
     dishes.style.cssText = `
            color: white;            
            justify-content:;
            background-color: #C19A6B;
            margin: 0px auto;
            padding: 2rem;
            border-radius: 1rem;
            border: 5px #03291bcc solid;
            
            font-size: 2rem;

        `
    dishes.textContent = "Dishes";
    content.appendChild(dishes);

    //Dishes firstChild
      const D_card = document.createElement('div')
        D_card.style.cssText = `
        background-color: #00000086;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: 2px #C19A6B solid;
        border-radius: 1rem;
        cursor: pointer;
    `
   
    
    content.appendChild(D_card);

    
      // D_firstCard FirstChild
    const D_info = document.createElement("p")
    D_info.textContent = "A stock of homemade chicken breast, served with our locally sourced maple syrup"
    D_info.style.cssText = `
        font-size: 1.5rem;
        margin: 0;
    `
    D_card.appendChild(D_info);

      //D_firstCard SecondChild
    const D_price = document.createElement("p")
    D_price.textContent = "$15"
    D_price.style.cssText = `
        font-size: 1.5rem;
        // margin: 0;
    `
    D_card.appendChild(D_price);

        // D_firstCard ThirdChild img
    const D_img = document.createElement('img');
    D_img.src = chickenURL;
    D_img.alt = " a nice beverage"
    D_img.style.cssText = `
        
        width: 20rem;
        margin: 0px auto;
        
    `
    D_card.appendChild(D_img);

    
    //Dishes secondChild
      const D_card2 = document.createElement('div')
        D_card2.style.cssText = `
        background-color: #00000086;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: 2px #C19A6B solid;
        border-radius: 1rem;
        cursor: pointer;
    `
   
    
    content.appendChild(D_card2);

     
      // D_secondCard FirstChild
    const D2_info = document.createElement("p")
    D2_info.textContent = "Three slices of chocolate pizza from french toast you will ever eat, served with our locally sourced maple syrup"
    D2_info.style.cssText = `
        font-size: 1.5rem;
        margin: 0;
    `
    D_card2.appendChild(D2_info);

      //D_secondCard SecondChild
    const D2_price = document.createElement("p")
    D2_price.textContent = "$9"
    D2_price.style.cssText = `
        font-size: 1.5rem;
        // margin: 0;
    `
    D_card2.appendChild(D2_price);

        // D_secondCard ThirdChild img
    const D2_img = document.createElement('img');
    D2_img.src = PizzaURL;
    D2_img.alt = " a nice beverage"
    D2_img.style.cssText = `
        
        width: 20rem;
        margin: 0px auto;
        
    `
    D_card2.appendChild(D2_img);

    //Dishes thirdcard
      const D_card3 = document.createElement('div')
        D_card3.style.cssText = `
        background-color: #00000086;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: 2px #C19A6B solid;
        border-radius: 1rem;
        cursor: pointer;
    `
   
    
    content.appendChild(D_card3);

     
      // D_thirdCard FirstChild
    const D3_info = document.createElement("p")
    D3_info.textContent = "Our house specialtly, you can't go wrong with a hearty bagel topped with sustainably harvested salmon"
    D3_info.style.cssText = `
        font-size: 1.5rem;
        margin: 0;
    `
    D_card3.appendChild(D3_info);

      //D_thirdCard SecondChild
    const D3_price = document.createElement("p")
    D3_price.textContent = "$6"
    D3_price.style.cssText = `
        font-size: 1.5rem;
        // margin: 0;
    `
    D_card3.appendChild(D3_price);

        // D_fourthCard ThirdChild img
    const D3_img = document.createElement('img');
    D3_img.src = orangeURL;
    D3_img.alt = " a nice beverage"
    D3_img.style.cssText = `
        
        width: 20rem;
        margin: 0px auto;
        
    `
    D_card3.appendChild(D3_img);

     //Dishes fouthcard
      const D_card4 = document.createElement('div')
        D_card4.style.cssText = `
        background-color: #00000086;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: 2px #C19A6B solid;
        border-radius: 1rem;
        cursor: pointer;
    `
   
    
    content.appendChild(D_card4);

     
      // D_thirdCard FirstChild
    const D4_info = document.createElement("p")
    D4_info.textContent = "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up."
    D4_info.style.cssText = `
        font-size: 1.5rem;
        margin: 0;
    `
    D_card4.appendChild(D4_info);

      //D_fouthCard SecondChild
    const D4_price = document.createElement("p")
    D4_price.textContent = "$13"
    D4_price.style.cssText = `
        font-size: 1.5rem;
        // margin: 0;
    `
    D_card4.appendChild(D4_price);

        // D_fourthCard ThirdChild img
    const D4_img = document.createElement('img');
    D4_img.src = grapeURL;
    D4_img.alt = " a nice beverage"
    D4_img.style.cssText = `
        
        width: 20rem;
        margin: 0px auto;
        
    `
    D_card4.appendChild(D4_img);

    
}