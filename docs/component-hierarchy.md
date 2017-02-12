## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**SignUpContainer**
 - SignUpFormContainer
  * SignUpForm
  * Home
 - AuthFormContainer

**NewsFeedContainer**
 - Header
 - NewsFeedContainer
  * NewPostContainer
  * NewsFeedItem

**HeaderContainer**
 - Logo
 - NavContainer
  * Home
  * Profile
  * Log Out
 - SearchContainer
  * SearchForm

**ProfileContainer**
 - Header
 - ProfileContainer
  * NewPostContainer
  * NewsFeedItem

**NewPostContainer**
 - NewPostForm
  * Stock Name
  * Stock Price
  * Stock Amount
  * Submit

**NewsFeedItemContainer**
 - NewsFeedItem
 - CommentsContainer
 - NewCommentContainer

**CommentContainer**
 - Comments
  * Body

**NewCommentContainer**
 - Body
 - Submit


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "NewsFeedContainer" |
| "/profile/:profileId" | "ProfileContainer" |
| "/new-post" | "NewPostContainer" |
| "/home/posts/:postId" | "PostContainer" |
| "/home/posts/:postId/new-comment" | "NewCommentContainer" |
