export const fetchCommentableComments = (commentableId, commentableType) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/comments`,
      data: { commentable_id: commentableId, commentable_type: commentableType }
    })
  );
};

export const createComment = (comment) => {
  return (
    $.ajax({
      method: "POST",
      url: `api/comments`,
      data: comment
    })
  );
};

export const deleteComment = (commentId) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/comments/${commentId}`
    })
  );
};
