export const createFriendship = (friendeeId) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/friendships`,
      data: { friendee_id: friendeeId }
    })
  );
};

export const updateFriendship = (friendshipId, status) => {
  return(
    $.ajax({
      method: "PATCH",
      url: `/api/friendships/${friendshipId}`,
      data: { friendship: { status } }
    })
  );
};

export const deleteFriendship = (friendshipId) => {
  return(
    $.ajax({
      method: "DELETE",
      url: `/friendships/${friendshipId}`
    })
  );
};
