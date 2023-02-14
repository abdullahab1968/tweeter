const Tweeter = function () {
  const _posts = []
  let _postIdCounter = 0
  let _commentIdCounter = 0

  const getPosts = function () {
    return _posts
  }

  const addPost = function (text) {
    const post = buildPostObject(text)
    _posts.push(post)
  }

  const removePost = function (postID) {
    const postLocation = findPost(postID)
    if(postLocation == -1){
      return
    }
    _posts.splice(postLocation, 1)
    

  }
  const addComment = function (text, postID) {
    const newComment = buildCommentObject(postID, text)
    const postLocation = findPost(postID)
    _posts[postLocation].comments.push(newComment)
    _commentIdCounter++
  }
  const removeComment = function (postID, commentID) {
    const postLocation = findPost(postID)
    if(postLocation == -1){
      return
    }
    const comments = _posts[postLocation].comments
    const commentLocation = findComment(comments, commentID)
    if(postLocation == -1){
      return
    }
    comments.splice(commentLocation, 1)
    


  }

  
  function buildPostObject (text) {
    const post = {}
    post['text'] = text

    post.id = "p" + ++_postIdCounter
    post.comments = []

    return post
  }
  function findPost (postID) {
    for (let index = 0; index < _posts.length; index++){
        if (postID === _posts[index].id) {
            return index
        }
    }
    return -1
  }
  function buildCommentObject(postID, text) {
    const comment = {}
    const commentNumber = _commentIdCounter + 1
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
    return -1

  }
  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment
  }

};
