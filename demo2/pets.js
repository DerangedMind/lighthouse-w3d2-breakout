const pets = [
  {
    name: 'Dingo',
    type: 'dog',
    age: 1,
  },
  {
    name: 'Kongo',
    type: 'snake',
    age: 3,
  },
  {
    name: 'Meowngo',
    type: 'cat',
    age: 2,
  },
  {
    name: 'Bongo',
    type: 'dog',
    age: 2,
  },
];

const createArticle = (pet) => {
  const { name, type, age } = pet;

  const $article = $('<article>');

  const $header = $('<header>');
  $('<h2>').text(name).appendTo($header);

  const $contentDiv = $('<div>').addClass('content');

  const $ul = $('<ul>');
  $('<li>').append($('<span>').text('Species: ')).append(type).appendTo($ul);
  $('<li>').append($('<span>').text('Age: ')).append(age).appendTo($ul);

  $contentDiv.append($ul);

  const $footer = $('<footer>').text(`${name} is a ${type} and is ${age} years old`);

  $article.append($header, $contentDiv, $footer);
  return $article;
};

$(function(){

  $('.pets-container').append(createArticle(pets[0]));

});


// <article>
// <header>
//   <h2>Dingo</h2>
// </header>

// <div class="content">
//   <ul>
//     <li><span>Species:</span> Dog</li>
//     <li><span>Age: 1</span></li>
//   </ul>
// </div>

// <footer>
//   Dingo is a dog that is 1 years old
// </footer>
// </article>