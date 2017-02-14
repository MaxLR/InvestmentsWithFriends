# InvestmentsWithFriends

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/Tb9PgI1l/investmentswithfriends

## Minimum Viable Product

InvestmentsWithFriends is a web application inspired by Facebook, and was built
using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at
minimum, satisfy the following criteria, implementing smooth, bug free
navigation, appropriate seed data and well designed CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Profiles
- [ ] Posts and appropriate filtering
- [ ] Friend Requests
- [ ] News Feed
- [ ] Comments & Likes
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 day)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Profile Model, API, and components (1 day)

**Objective:** Profile info can be created, read, edited and destroyed through
the API, and pictures can be set as profile, and cover images.

### Phase 3: Post Trades (2 days)

**Objective:** Users can create posts when logged in, and can include pertinent
information about trade. Users will have a list of "open" trades, in order to
quickly be able to update specific trade information when "closing"

### Phase 4: Friend Requests (1 day)

**Objective:** Users can send eachother friend requests, and respond through the
API.

### Phase 5: News Feed (2 days)

**Objective:** Show a news feed with posts from current user's friends in
reverse chronological order

### Phase 6: - Comments and Likes (1 day)

**Objective:** Allow users to comment on/like posts

### Bonus Features (TBD)
- [ ] Infinite scroll on news feed & profile
- [ ] Notifications
- [ ] Groups
- [ ] Search functionality
