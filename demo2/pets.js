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

const createArticle = ({ name, type, age }) => {

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

$(function () {
  $.each(pets, (index, pet) => {
    $('.pets-container').append(createArticle(pet));
  });
});
