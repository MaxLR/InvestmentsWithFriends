# Investments With Friends

![home]

[Investments With Friends][iwf]

## Summary

[Investments With Friends][iwf] is a single-page web application that was inspired by Facebook, and built using Ruby on Rails utilizing React.js/Redux architecture. Investments With Friends allows users to:

* Create an account
* Log in / Log out
* Upload profile/cover photos
* Send, receive, and respond to friend requests
* Create posts on their own page, as well as their friend's
* Comment on posts

## Overall Structure

#### Back end
The app was built using Ruby on Rails on the back end with a postgreSQL database. Back end structure is RESTful and all the data requests use AJAX and are fulfilled with a JSON API. Associations are used to prefetch data in order to minimize SQL queries to the database.

#### Front end
The front end is built completely in [React.js][React] and JavaScript and utilizes React's [Redux][Redux] architecture. React's virtual DOM allows for lightning-quick re-rendering without requiring new pages to be sent from the server.

#### Libraries

Investments With Friends uses:
- [React.js][React]
- [Redux][Redux]
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for authorization
- [Paperclip](https://github.com/thoughtbot/paperclip) to store user profile images using Amazon Web Services
- [figaro](https://github.com/laserlemon/figaro) to securely store keys and other important data.
- [Amazon Web Services][aws] for file hosting, and image upload.

## Primary Components

#### User Authorization
User authentication is handled in Rails using BCrypt for password hashing. Passwords entered are not saved to the database, only encrypted hashes. When users log in, the password they provide is rehashed and compared with the original password hash to verify credentials.

![home]

#### Profiles
Investments With Friends allows users to customize their profiles by uploading personal profile and cover photos.

![user-profile]

#### News Feed
The News Feed allows users to keep up to date with their friends in real time. The list is populated with the most recent posts, either posted by, or on the user's friends.

![feed]

#### Posts
Posts allow users to say what's on their mind as well as keep in touch with their friends. Users are able to post status updates on their own pages as well as post on their friend's pages.

#### Comments
Investments With Friends users can respond to posts with their own comments

![comment]

[iwf]: http://www.investmentswithfriends.com/
[aws]: https://aws.amazon.com/
[React]:https://facebook.github.io/react/
[Redux]:https://github.com/reactjs/react-redux

[user-profile]: ./app/assets/images/user-profile.png
[comment]: ./app/assets/images/new-comment.png
[post]: ./app/assets/images/new-post.png
[feed]: ./app/assets/images/news-feed.png
[signup]: ./app/assets/images/sign-up-errors.png
[home]: ./app/assets/images/home-page.png
