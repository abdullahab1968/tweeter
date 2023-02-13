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
POSTS_ELEMENT.on("click", ".comment-button", function(){
    const postID = $(this).closest('.post').data().id
    const comment = $(this).siblings().val()
    tweeter.addComment(comment, postID)
    render.renderPosts()
})


