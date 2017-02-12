# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `SHOW /api/users/:userId`
- `GET /api/users/:userId/posts`
  - Get all posts of a specific user

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
  - Get all posts of current users' friends
- `POST /api/posts`
- `PATCH /api/posts/:postId`
- `DELETE /api/posts/:postId`
- `GET /api/posts/:postId/comments`
  - Get all comments for a post
- `GET /api/posts/:postId/likes`
  - Get all likes for a post

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `DELETE /api/comments/:commentId`
- `GET /api/comments/:commentId/likes`
  - Get all likes for a comment

### Friendships

- `GET /api/friendships`
- `POST /api/friendships`
- `PATCH /api/friendships/:friendshipId`
  - Updates friend requests from pending to accepted
- `DELETE /api/friendships/:friendshipId`

### Likes

- `GET /api/likes`
- `POST /api/likes`
- `DELETE /api/likes/:likeId`
