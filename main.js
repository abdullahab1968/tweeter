const tweeter = Tweeter();

const render = Renderer(tweeter.getPosts());

$("#twit-button").on("click", function () {
  const postInput = $("#post-input");
  if(!postInput.val()){
    return
  }
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
    if(!comment){
        return
    }
    tweeter.addComment(comment, postID)
    render.renderPosts()
})
POSTS_ELEMENT.on("click", ".delete-comment", function(){
    const postID = $(this).closest('.post').data().id
    const commentID = $(this).closest('.comment').data().id
    tweeter.removeComment(postID, commentID)
    render.renderPosts()
})

