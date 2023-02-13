const POSTS_ELEMENT = $("#posts");

const Renderer = function (posts) {
  const renderPosts = function () {
    POSTS_ELEMENT.empty();
    for (let post of posts) {
      addPostElements(post);
    }
  };

  function addPostElements(post) {
    const postElenemt = $(
      `<div class='post' data-id=${post.id}><h3 class='post-text'>${post.text}</h3></div>`
    );
    POSTS_ELEMENT.append(postElenemt);
    for (let comment of post.comments) {
      postElenemt.append(
        $(`<div class='comments' data-id=${comment.id}'>
<button class='delete-comment'>X</button>${comment.text}</div>`)
      );
    }
    postElenemt.append(
      $(
        "<div class='add-comment'><input type='text' placeholder='Got something to say' class='comment-input'><button class='comment-button'>Comment</button><br></div>"
      )
    );
    postElenemt.append($("<button class='delete-post'>Delete Post</button>"));
  }

  return {
    renderPosts: renderPosts,
  };
};
