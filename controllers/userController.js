const db = require('../models');

module.exports = {

  // function for user to create username and password for user authentication
  newUser: (email, userName, password) => {
    db.User.create({
      email: email,
      user_name: userName,
      password: password
    })
      .then(data => console.log(data.dataValues))
      .catch(err => console.log(err));
  },

  // allows user to update their password
  updatePassword: (userId, password) => {
    db.User.update(
      {
        password: password
      },
      {
        where: {
          id: userId
        }
      }
    )
      .then(result =>
        console.log("User: " + userId + "'s password was successfully changed!")
      )
      .catch(err => console.log(err));
  },

  // allows user to update their stored email address
  updateEmail: (userId, email) => {
    db.User.update(
      {
        email: email
      },
      {
        where: {
          id: userId
        }
      }
    )
      .then(result =>
        console.log("User: " + userId + "'s email was successfully changed!")
      )
      .catch(err => console.log(err));
  },

  // finds all users and sorts them by most reputaiton to least
  findAll: () => {
    db.User.findAll({
      order: [["reputation", "DESC"]]
    })
      .then(users => console.log(users))
      .catch(err => console.log(err));
  },

  // Allows user to find another user by their user name
  findUser: userId => {
    db.User.findOne({
      where: {
        id: userId
      },
      include: [{
          model: models.Posts
        }]
    })
      .then(user => user.get({ plain: true }))
      .catch(err => console.log(err));
  },

  // Finds all of a user's posts
  findAllPosts: userId => {
      db.User.findAll({
        where: {
          id: userId
        },
        include: [
          {
            model: Post
          }
        ]
      })
        .then(posts => posts.get({ plain: true }))
        .catch(err => console.log(err));
  },

    // Allows users to increase rep of specified user for helpful answers
  increaseReputation: userId => {
      db.User.findById(userId)
      .then(user => 
         user.increment({
            reputation: 1
        })
      )
      .then(thread => console.log("user has been updated"))
      .catch(err => console.log(err));
  },

  // Allows users to decrease rep of other users 
  decreaseReputation: userId => {
      db.User.findById(userId)
      .then(user => 
         user.decrement({
            reputation: 1
        })
      )
      .then(thread => console.log("user has been updated"))
      .catch(err => console.log(err));
  },      

  // allows a mod or the specified user to delete their information
  deleteUser: userId => {
      db.User.destroy({
          where: {
              id: userId
          }
      })
      .then(user => console.log('User has been deleted'))
      .catch(err => console.log(err));
  }
};