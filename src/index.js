//importing css
import "./styles.css";
// importing our homepage
import  { initial_page_load } from  "./homepage.js"
initial_page_load();
//importing about page
import { create_about } from "./about.js"
// create_about();
//importing menu page
import { create_menu } from "./menu.js"
// create_menu();

const nav_btn = function () {
   const  selectAll = document.querySelector('#menu');
    const content = document.querySelector('#content');
    selectAll.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'home-btn':
                console.log('hello home');
                content.innerHTML = "";
                initial_page_load();
                break;
            case 'menu-btn': 
                console.log('hello menu');
                content.innerHTML = "";
                create_menu();
                break;
            case 'about-btn':
                console.log('hello about');
                content.innerHTML = "";
                create_about();
        }
    });
};
nav_btn();

