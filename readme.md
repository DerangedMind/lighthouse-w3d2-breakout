# What is jQuery

- It simplifies and optimize Javascript coding for:

  - Manipulating the DOM
  - Handling events
  - Performing animations
  - Making AJAX calls

- It used to be about cross-browser compatibility but that is largely a non-issue now
- It's super popular. It's used by over 70% of Websites. Altough it's on a downward trend (being replaced by React for example)

## Library or Framework?

- jQuery is considered a library because it's collection of objects/functions.
- You get building blocks that you can use anywhere.
- You remain in control on how you use it.

- A framework will enforce a pattern (certain way of doing things) such as MVC.
- The framework will dictate the structure of your app.

## JQuery VS JQuery UI

jQuery UI adds interactive components to jQuery (buttons, sliders, tabs, etc).

## Adding jQuery to Your Project

### 3 ways to add jQuery

1.  cdn
2.  download
3.  npm

- Minified version:
  Compacted version of jQuery that reduces its file size.

### Adding Your Script File

- Add a script tag in the head of your HTML page (such as app.js)
- In the external JS file, we must ensure the DOM is loaded:

  $(document).ready(function(){

  })

Or

$(function(){

})

# jQuery Manipulations

- jQuery documentation is pretty good
  [https://api.jquery.com/](https://api.jquery.com/)

## Targetting Elements

You can create a selector similar to CSS:

Will select all p tags on the page:
$('p')

Will select all elements with that class name:
$('.my-class)

Same with id:
$('#my-id')

## Traversal

- .find()
- .first()
- .last()
- .closest()
- .next()

## Manipulating

- .html()
- .text()
- .val()

# Demos

- Demo 1: Handling Events (say hello to our aliens &#x1F47E; and &#x1F47D; that wants to talk '\u{1F4AC}')
- Basic creation of elements
- More complete demo, the Weather App
