const Tweeter = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = 2
  let commentIdCounter = 6

  const getPosts = function () {
    return _posts
  }

  const addPost = function (text) {
    const post = _buildPostObject(text)
    _posts.push(post)
    postIdCounter += 1
  }

  const removePost = function (postID) {
    const postLocation = _findMypost(postID)
    _posts.splice(postLocation, 1)
    postIdCounter -= 1

  }
  const addComment = function (text, postID) {
    const newComment =_buildComment(postID, text)
    const postLocation = _findMypost(postID)
    _posts[postLocation].comments.push(newComment)
    commentIdCounter += 1
  }
  const removeComment = function (postID, commentID) {
    const postLocation = _findMypost(postID)
    const comments = _posts[postLocation].comments
    const commentLocation = _findMyComment(comments, commentID)
    comments.splice(commentLocation, 1)
    commentIdCounter -= 1


  }

  
  function _buildPostObject (text) {
    const post = {}
    post['text'] = text
    const idNumber = postIdCounter + 1
    post.id = "p" + idNumber
    post.comments = []

    return post
  }
  function _findMypost (postID) {
    for (let index = 0; index < _posts.length; index++){
        if (postID === _posts[index].id) {
            return index
        }
    }
  }
  function _buildComment(postID, text) {
    const comment = {}
    const commentNumber = commentIdCounter + 1
    comment.id = 'c' + commentNumber
    comment.text = text
    return comment

  }
  function _findMyComment (comments, commentID) {
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
const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================
tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts()[0].comments)
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}
tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts()[0].comments)
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
