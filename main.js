const tweeter = Tweeter();

const render = Renderer(tweeter.getPosts());

$("#twit-button").on("click", function () {
  const postInput = $("#post-input");
  tweeter.addPost(postInput.val());
  render.renderPosts();
  postInput.val("");
});

POSTS_ELEMENT.on("click", ".delete-post", function () {
  tweeter.removePost($(this).closest(".post").data().id);
  render.renderPosts();
});


