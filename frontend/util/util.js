export const isFriend = (currentUser, profileOwner) => {
  if (currentUser.friends && profileOwner) {
    return currentUser.friends.some((friend) => {
      return friend.friendee_id === profileOwner.id
        || friend.friender_id === profileOwner.id;
    });
  } else {
    return false;
  }
};

export const isPendingFriend = (currentUser, profileOwner) => {
  if (currentUser.pendingFriends && profileOwner) {
    return currentUser.pendingFriends.some((friend) => {
      return friend.friendee_id === profileOwner.id
        || friend.friender_id === profileOwner.id;
    });
  } else {
    return false;
  }
};
