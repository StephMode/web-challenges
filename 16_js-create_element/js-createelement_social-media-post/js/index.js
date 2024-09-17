console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

/* das war mein erster Versuch

function createPost() {
  const newPost = document.createElement("article");
  newPost.classList.add("post");
  newPost.textContent = "Lipsum";
  body.append(newPost);
  console.log("Post created");
}

-> hat nicht funktioniert, weil ich die das neu erstellte
Element nicht an die richtige Stelle des DOM appended habe
die richtige Stelle:
=> document.body
mit body.append() habe ich eine in JS nicht vorhandene variable angesprochen
im DOM, über das JS standardmäßig die Baumstruktur des HTML anspricht, gibt es nur document.body
Alternativ müsste eine "const body" deklariert werden

*/

function createPost() {
  // post itself

  const newPost = document.createElement("article");
  newPost.classList.add("post");
  // newPost.textContent = "Lipsum"; -> not needed, there is an element for that
  document.body.append(newPost);
  // content of post
  const newPostConent = document.createElement("p");
  newPostConent.classList.add("post__content");
  newPostConent.textContent =
    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ";
  newPost.append(newPostConent);
  // footer of post
  const newPostFooter = document.createElement("footer");
  newPostFooter.classList.add("post__footer");
  newPost.append(newPostFooter);
  // username in footer in post
  const newPostFooterUsername = document.createElement("span");
  newPostFooterUsername.classList.add("post__username");
  newPostFooterUsername.textContent = "@username2";
  newPostFooter.append(newPostFooterUsername);
  // like-button in footer in post
  const newPostFooterLikeButton = document.createElement("button");
  newPostFooterLikeButton.classList.add("post__button");
  newPostFooterLikeButton.textContent = "♥ Like";
  newPostFooter.append(newPostFooterLikeButton);
  newPostFooterLikeButton.addEventListener("click", handleLikeButtonClick);
}

createPost();
