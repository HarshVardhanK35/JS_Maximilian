// !!! ADVANCED DOM AND EVENTS
// ?--------------------------

/**
 * 
 * ! 1. How the DOM really works? 
 * ------------------------------
 * 
 * ! WHAT IS A DOM?
 * ---
 * DOM is an interface between JS code and the browser, with JS to interact with the browser.
 * create, modify, delete HTML elements; set styles, classes and attributes; listen and respond to events.
 * DOM tree generates with HTML doc and this tree is made with the nodes .. 
 * DOM is an API -> has lots of methods and properties to interact with DOM tree.
 * 
 * ex: 
 * methods => (.querySelector(); .querySelectorAll(); .addEventListener(); .createElement()); properties => (.textContent; .innerHTML)
 * these all methods are accessible only on document (an obj) => DOCUMENT is a type of node
 * each node in the DOM tree is represented as an object in JS .. 
 * 
 * ! INHERITANCE IN DOM NODES
 * ---
 * Inheritance make the nodes work => means the child nodes have access to methods and properties of their parent nodes
 * 
 *            NODE
 *             |
 *        ELEMENT-1 (parent)         => this holds: .innerHTML; .classList; .children; .append(); .remove(); .querySelector() etc.,
 *             |
 *       HTML element (child)        => so it this child element also gets the access to its parent (ELEMENT-1) and also from 'NODE'
 * 
 * so, these elements inherit more properties and methods from parents as well as from ancestors
 * 
 * let, a "document" which is 'parent' to both ELEMENT-1 and HTML element so any method on document, gets accessed by it's children
 * 
 * DOM API allows all the node types to listen to the events, we usually do it using ".addEventListener()" .. how does this work?
 * * cause there is special node type called "EventTarget" .. which is parent for all the nodes in the DOM tree including "window and document"
 * * so, all the nodes inherit the ".addEventListener()" method from "EventTarget" node (cause of inheritance)
 * 
 * NOTE: we have never created EventTarget node, this is because of abstraction in DOM API and this works behind the scenes
 * 
 * 
 * ! 2. SELECTING, CREATING AND DELETING ELEMENTS
 * ----------------------------------------------
 * 
 * ! SELECTORS:
 * ---
 * to select the entire document, use => document.documentElement => total HTML| document.head => head | document.body => body
 * 
 * ! QuerySelector:
 * ---
 * to select an element use "querySelector" which selects the element on it's 1st appearance
 * but "querySelectorAll" selects every element that matches the argument passed to it => returns a NodeList[]
 * to select an element use => document.querySelector('.className') | document.querySelectorAll('.className') => returns a NodeList[]
 * 
 * ! DOCUMENT-GETTERS:
 * ---
 * document.getElementById('section--1') 
 * => this need an ID and return the element
 * document.getElementsByTagName('button') 
 * => this need a tag name and returns an HTMLCollection[] an array of all buttons in the present document / HTML page
 * doc.getElementsByClassName()
 * => this need a class name and returns the HTMLCollection (type: array)
 * 
 * ? difference between HTMLCollection and NodeList:
 * - so HTMLCollection changes when DOM changes where it will updates automatically but NodeList does not update itself on change in DOM
 * - 
 * 
 * ! Creating and Inserting Elements:
 * ---
 * .createElement()         => returns a dom element 
 * .insertAdjacentHTML()    => inserts an element into another another (this works different !)
 * 
 * ? ex: 
 * const allSections = document.querySelectorAll('.section')
 * const header = document.querySelector('.header')
 * 
 * * create an element
 * const message = document.createElement('div')
 * 
 * * add class to the element 
 * message.classList.add('cookie-message')
 * 
 * * using textContent  => to add text message inside the element 
 * message.textContent = 'we use cookies for improved functionality and analytics!'
 * 
 * * using innerHTML    => to add an HTML inside an element
 * message.innerHTML =  `we use cookies for improved functionality and analytics! <button class = "btn btn--close-cookie">Got it!</button>`
 * 
 * * to insert into the DOM using "header" element { const header =  document.querySelector('.header') }
 * header.prepend(message)
 * 
 * ? inserting through .prepend(<element>) and .append(<element>)
 * - prepend: adds an element as the 1st child of another element
 * - append: adds as an last child to an element
 * 
 * * NOTE: 
 * * 1. using both prepend and append simultaneously results in moving a component/element from 1st child to last child of an element
 * * 2. if we want to add same element at both places we use .. 
 * * => header.append(message.cloneNode(true)) which clones same message, prepends and appends message for selected element(header) at same time
 * 
 * - .before(): adds before the element
 * - .after() : adds after the element
 * ex: 
 * header.before(<element>)
 * header.after(<element>)
 * 
 * ! Deleting elements:
 * ---
 * ? for selecting an element '.' and '#' is used before the class and id respectively for the element
 * - select an element by using it's class(.) or id(#) while using "querySelector"
 * ---
 * document.querySelector('.btn--close-cookie')
 * .addEventListener('click', () => {
 *  message.remove()
 * })
 * 
 * - before '.remove()' method we used to select the 'parentElement' of the element we want to remove and used 'removeChild(<element>)'
 * ... could be like this ...
 * message.remove() === message.parentElement.removeChild(message)
 * 
 * * selecting parentElement from a childElement is like moving up and down this is called => DOM-TRAVERSING
 * 
 * 
 * ! 3. Styles, Attributes and Classes
 * -----------------------------------
 * ! ---STYLES---
 * ! set a style on an element
 * ---
 * - to set styles use (.style) property and on it use desired style property that we want to set (.backgroundColor, .width, etc.,)
 * ---
 * message.style.backgroundColor = '#37383d'
 * message.style.width = '120%'
 * 
 * - to read a style property that was set manually using JS we use ...
 * ---
 * console.log(message.style.color)             => this style is not set manually using JS
 * console.log(message.style.backgroundColor)   => this style was set using JS | message.style.backgroundColor = '#37383d'
 * 
 * - to read the styles that were not set using JS ... we use getComputedStyle() fn.
 * - getComputedStyle(<element>).color (getting color prop)
 * - this gets the styles from the style sheet (that were already present with the element inside the style-sheet)
 * ---
 * console.log(getComputedStyle(message).color)
 * 
 * - to modify the height using getComputedStyle() fn. 
 * - as getComputedStyle(<element>) returns a string and if it consists any decimals then it is removed using Number.parseInt()
 * ---
 * message.style.height = Number.parseInt(getComputedStyle(message).height) + 30 + 'px'
 * 
 * ! CSS Custom Properties
 * ---
 * - usually called CSS variables .. similar to variables in JS .. 
 * - CUSTOM PROPERTIES
 * ---
 * :root {
  --color-primary: #5ec576;
  --color-secondary: #ffcb03;
  --color-tertiary: #ff585f;
  --color-primary-darker: #4bbb7d;
  --color-secondary-darker: #ffbb00;
  --color-tertiary-darker: #fd424b;
  --color-primary-opacity: #5ec5763a;
  --color-secondary-opacity: #ffcd0331;
  --color-tertiary-opacity: #ff58602d;
  --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
  --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);
 * }
 * 
 * - as these were set on root .. that means on the "document.documentElement"
 * - modifying the custom CSS properties using JS and "document.documentElement" 
 * ---
 * document.documentElement.style.setProperty('--color-primary', 'red')
 * 
 * ! ---ATTRIBUTES---
 * <div class="section__title"> here attributes are 'class' and for some elements that will be an 'id' ..
 * - for img-element it will be 'src' for link-element it is 'href' etc.,
 * - js recognizes only standard properties
 * 
 * ex:
 *  <img
        src="img/logo.png"
        alt="Bankist logo"
        class="nav__logo"
        id="logo"
 *  />
 * 
 * - selection
 * const logo = document.querySelector('.nav__logo')
 * 
 * - read the standard-attributes
 * console.log(logo.src)
 * console.log(logo.alt)
 * 
 * - non-standard attributes cannot be read but can be using .getAttribute
 * console.log(logo.designer) // undefined
 * console.log(logo.getAttribute('designer')) // harsha
 * 
 * - to read the class-names use.. 'className'
 * console.log(logo.className)
 * 
 * - to set an attribute..
 * logo.alt = 'Beautiful Minimalistic Logo'
 * 
 * - to get a relative value of an attribute 'src' of 'img' element use... getAttribute() or to get absolute use simple element.its_attribute
 * clg(logo.src)                // -> gives a url of image if there is any (absolute)
 * logo.getAttribute('src')     // -> img/logo.png (relative)
 * 
 * ! DATA ATTRIBUTES
 *  <img
        src="img/logo.png"
        alt="Bankist logo"
        class="nav__logo"
        id="logo"
        data-version-number = '3.0'
 *  />
 * - get the data-attribute
 * ---
 * document.querySelector('.nav__logo').dataset.versionNumber // this returns value stored inside the "data-version-number"
 * 
 * * these special attributes are always stored inside dataset object .. we use a lot when we work with UI and when we need to store data in UI
 * 
 * ! CLASSES
 * ---
 * logo.classList.add() 
 * logo.classList.remove() 
 * logo.classList.toggle() 
 * logo.classList.contains() 
 * 
 * - pass in a value of class and also we can pass multiple values if that class of an element holds
 * 
 * set classNames using .. // this overwrites all the existing classes
 * logo.className = 'logo-class' 
*/
