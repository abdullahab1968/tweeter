const Tweeter = function () {
  const _posts = []
  let postIdCounter = 0
  let commentIdCounter = 0

  const getPosts = function () {
    return _posts
  }

  const addPost = function (text) {
    const post = buildPostObject(text)
    _posts.push(post)
    postIdCounter += 1
  }

  const removePost = function (postID) {
    const postLocation = findPost(postID)
    _posts.splice(postLocation, 1)
    postIdCounter -= 1

  }
  const addComment = function (text, postID) {
    const newComment = buildCommentObject(postID, text)
    const postLocation = findPost(postID)
    _posts[postLocation].comments.push(newComment)
    commentIdCounter += 1
  }
  const removeComment = function (postID, commentID) {
    const postLocation = findPost(postID)
    const comments = _posts[postLocation].comments
    const commentLocation = findComment(comments, commentID)
    comments.splice(commentLocation, 1)
    commentIdCounter -= 1


  }

  
  function buildPostObject (text) {
    const post = {}
    post['text'] = text
    const idNumber = postIdCounter + 1
    post.id = "p" + idNumber
    post.comments = []

    return post
  }
  function findPost (postID) {
    for (let index = 0; index < _posts.length; index++){
        if (postID === _posts[index].id) {
            return index
        }
    }
  }
  function buildCommentObject(postID, text) {
    const comment = {}
    const commentNumber = commentIdCounter + 1
    comment.id = 'c' + commentNumber
    comment.text = text
    return comment

  }
  function findComment (comments, commentID) {
    for (let index = 0; index < comments.length; index++){
        if (commentID === comments[index].id) {
            return index
        }
    }

  }
  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment
  }

};
