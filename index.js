import dogs from './data.js';
import Dog from './Dog.js';

const dislikeBtn = document.getElementById('btn-dislike');
const likeBtn = document.getElementById('btn-like');

let activeDogIndex = 0;
let activeDog = new Dog(dogs[activeDogIndex]);
let dislikedDogs = [];

/** EVENTLISTENERS FOR THE BUTTONS */
likeBtn.addEventListener('click', like);
dislikeBtn.addEventListener('click', dislike);

render();

/** FUNCTION TO RENDER THE HTML FOR THE DOGS */
function render() {
  document.getElementById('profile-container').innerHTML =
    activeDog.getProfileHtml();
}

/** FUNCTION THAT GENERATES NEXT DOG TO SHOW UP IN THE APP */
function getNextDog() {
  activeDogIndex += 1;
  if (dogs[activeDogIndex]) {
    activeDog = new Dog(dogs[activeDogIndex]);
    render();
  } else {
    activeDogIndex = 0;
    activeDog = new Dog(dogs[activeDogIndex]);
    render();
  }
}

/** FUNCTION FOR LIKING A DOG */
function like() {
  document.querySelector('#like-badge').classList.remove('hidden');
  activeDog.setMatchStatus(true);
  buttonsDisabled();

  setTimeout(() => {
    buttonsEnabled();
    document.querySelector('#like-badge').classList.add('hidden');
    getNextDog();
  }, 1000);
}

/** FUNCTION FOR DISLIKING A DOG */
function dislike() {
  document.querySelector('#dislike-badge').classList.remove('hidden');
  activeDog.setMatchStatus(false);
  buttonsDisabled();

  dislikedDogs.push(activeDog);

  setTimeout(() => {
    buttonsEnabled();
    document.querySelector('#dislike-badge').classList.add('hidden');
    getNextDog();
  }, 1000);
}

/** FUNCTIONS TO ENABLE/DISABLE BUTTONS WHILE RENDERING NEW DOG PROFILE */
function buttonsDisabled() {
  likeBtn.setAttribute('disabled', '');
  dislikeBtn.setAttribute('disabled', '');
}
function buttonsEnabled() {
  likeBtn.removeAttribute('disabled', '');
  dislikeBtn.removeAttribute('disabled', '');
}
