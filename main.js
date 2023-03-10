const tweeter = Tweeter();

const renderer = Renderer();

$("#twit-button").on("click", function () {
  const postInput = $("#post-input");
  if(!postInput.val()){
    return
  }
  tweeter.addPost(postInput.val());
  renderer.renderPosts(tweeter.getPosts());
  postInput.val("");
});

POSTS_ELEMENT.on("click", ".delete-post", function () {
  tweeter.removePost($(this).closest(".post").data().id);
  renderer.renderPosts(tweeter.getPosts());
});

POSTS_ELEMENT.on("click", ".comment-button", function(){
    const postID = $(this).closest('.post').data().id
    const comment = $(this).siblings().val()
    if(!comment){
        return
    }
    tweeter.addComment(comment, postID)
    renderer.renderPosts(tweeter.getPosts())
})
POSTS_ELEMENT.on("click", ".delete-comment", function(){
    const postID = $(this).closest('.post').data().id
    const commentID = $(this).closest('.comment').data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
})



