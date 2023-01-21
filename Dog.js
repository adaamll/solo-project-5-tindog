// Create the Dog class here
import dogs from './data.js';

/** CLASS THAT CONSTRUCTS A NEW INSTANCE OF EVERY DOG WHICH DATA IS PUT IN THE CLASS */
class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  }

  getProfileHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <img
      class="profile-pic"
      id="profile-pic"
      src="${avatar}"
      alt="photo of a dog"
    />
    <div class="profile-info" id="profile-info">
      <h1 class="profile-name" id="profile-name">${name}, ${age}</h1>
      <p class="profile-bio" id="profile-bio">${bio}</p>
    </div>`;
  }
}

export default Dog;
