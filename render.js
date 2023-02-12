const POSTS_ELEMENT = $("#posts");

const Renderer = function (posts) {
  const renderPosts = function () {
    POSTS_ELEMENT.empty();
    for (let post of posts) {
        _createPostElement(post)
    }
  };

  function _createPostElement(post) {
    const postElenemt = $(`<div class='post' data-id=${post.id}>${post.text}</div>`)
      POSTS_ELEMENT.append(postElenemt);
      for (let comment of post.comments) {
        postElenemt.append($(`<div class='comments' data-id=${comment.id}'>${comment.text}</div>`));
      }
  }

  return {
    renderPosts: renderPosts
  }
};
