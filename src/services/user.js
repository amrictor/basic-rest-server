const security = require('../utils/security')

class UserService {

  async signUp({ userEmail, userNickname, userPassword, userFirstName, userLastName }) {
    const userSalt = security.generateSalt();
    const encryptedUserPassword = security.sha512(userPassword, userSalt);
    // Insert columns (UserEmail, UserNickname, UserPassword, UserSalt, UserFirstName, UserLastName) 
    // into mongoDB User table and handle any possible database errors
  }

  async logIn({ userNickname, userPassword }) {
    // Get user from database using provided username or throw error indicating user was not found
    const dbUser = {}
    const encryptedUserPassword = security.sha512(userPassword, dbUser.UserSalt)
    // Compare dbUser.UserPassword to encryptedUserPassword and throw unauthorized error if they don't match
    return security.generateToken(dbUser.UserID)
  }

  async changePassword({ userID, userNewPassword }) {
    const userSalt = security.generateSalt();
    const encryptedNewUserPassword = security.sha512(userNewPassword, userSalt)
    // Update columns (UserPassword, UserSalt) in mongoDB User table 
    // and handle any possible database errors
  }
  
}

module.exports = UserService