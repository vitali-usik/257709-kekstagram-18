'use strict';

var POST_COUNT = 25;

var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var NAMES = ['Андрей', 'Диана', 'Роман', 'Виталий', 'Олег'];
var DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
];

var picturesElement = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture').content;

var getRandomFromRange = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var generateComments = function () {
  var commentsCount = getRandomFromRange(0, 5);
  var comments = [];

  for (var i = 0; i < commentsCount; i++) {
    comments.push({
      avatar: 'img/avatar-' + getRandomFromRange(1, 6) + '.svg',
      message: COMMENTS[getRandomFromRange(0, COMMENTS.length)],
      name: NAMES[getRandomFromRange(0, NAMES.length)]
    });
  }

  return comments;
};

var generatePosts = function () {
  var posts = [];

  for (var i = 0; i < POST_COUNT; i++) {
    posts.push({
      url: 'photos/' + (i + 1) + '.jpg',
      description: DESCRIPTIONS[getRandomFromRange(0, DESCRIPTIONS.length)],
      likes: getRandomFromRange(15, 200),
      comments: generateComments()
    });
  }

  return posts;
};

var renderPosts = function (posts) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < posts.length; i++) {
    var elem = pictureTemplate.cloneNode(true);

    elem.querySelector('.picture__img').setAttribute('src', posts[i].url);
    elem.querySelector('.picture__likes').textContent = posts[i].likes;
    elem.querySelector('.picture__comments').textContent = posts[i].comments.length;

    fragment.appendChild(elem);
  }

  picturesElement.appendChild(fragment);
};

var init = function () {
  var posts = generatePosts();
  renderPosts(posts);
};

init();
