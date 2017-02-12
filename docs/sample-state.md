```js
{
  currentUser: {
    id: 1,
    username: "MaxR"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPost: {errors: ["body can't be blank"]}
  },
  posts: {
    1: {
      body: "Just opened a new position",
      stockSym: "SPY",
      price: 138.24,
      amount: 200,
      trader_id: 1,
      status: "open"
      comments: {
        1: {
          id: 1,
          user_id: 5,
          body: "Great purchase!"
        }
      }
    }
  },
  friendings: {
    1: {
      id: 1,
      friender_id: 1,
      friendee_id: 3,
      status: "pending"
    }
    2: {
      id: 3,
      friender_id: 4,
      friendee_id: 1,
      status: "accepted"
    }
  }
}
```
