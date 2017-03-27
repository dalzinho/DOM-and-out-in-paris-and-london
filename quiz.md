# Quiz
## What does DOM stand for?
DOM stands for Document Object Model

## What is the name of the object we can use to get information about the browser enviroment?

`window` gives us information about the browser environment.

## What is the name of the object that we can use to get access to the DOM representation of the page?

`document` allows us to access the DOM representation of the page.

## What type of files might we see in the Network tab for in Chrome devTools?

We might find `.css` and `.js` files in the Network tab.

## What version of HTML is document.querySelector from?

`document.querySelector` is from HTML5.

## Which event do we hook into when we want to know the DOM has loaded, window.onload or document.onload?

We would use `window.onload` to know when the DOM has loaded.

## We use window.createElement to make new DOM elements, true or false?

False, we would use `document.createElement` to make new DOM elements.

## List two ways to get all the elements by class 'cat'

`document.getElementsByClassName('cat')` or `document.querySelectorAll('.cat')`

## List two ways to retrieve the element with id "goat"

`document.getElementbyId('goat')` or `document.querySelector('#goat')`

## List two ways to get all the li elements

`document.querySelectorAll('li')` or `document.getElementsbyTagName('li')`

## List two ways to get the first li element

`document.querySelector('li')` or `document.getElementsByTagName('li')[0]`

## How can we set the a given element to be hidden?

We could do this by selecting the element using one of the methods listed above, then calling `element.style.visibility = 'hidden';`