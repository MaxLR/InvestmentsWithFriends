export const fetchUserPosts = (userId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/posts`,
      data: { postsToFetch: "user", user_id: userId }
    })
  );
};

export const fetchNewsfeedPosts = () => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/posts`,
      data: { postsToFetch: "news_feed" }
    })
  );
};

export const createPost = (post) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/posts`
    })
  );
};

export const deletePost = (postId) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/posts/${postId}`
    })
  );
};
