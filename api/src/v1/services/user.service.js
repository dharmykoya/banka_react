import UserData from '../data/user';
import User from '../models/user.model';

/**
 * @class UserService
 * @description handles the request coming from the user controller.
 * @exports UserController
 */

class UserService {
  /**
   * @description Create a User
   * @static
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} API response
   * @memberof UserService
   */
  static getUsers() {
    const allUsers = UserData.users.map((user) => {
      const userInstance = new User(user.id, user.email, user.firstName, user.lastName, user.password, user.type, user.isAdmin);
      return userInstance;
    });
    return allUsers;
  }

  /**
   * @description Create a User
   * @static
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} API response
   * @memberof UserService
   */
  // static signUp(user) {
  //   const usersLength = UserData.users.length;
  //   const lastId = UserData.users[usersLength - 1].id;
  //   const id = lastId + 1;
  //   const newUser = { id, ...user };
  //   const Users = [...UserData.users, newUser];
  //   return Users;
  // }
  static signUp(user) {
    console.log(user);
    const { email, firstName, lastName, password, type, isAdmin } = user;
    const usersLength = UserData.users.length;
    const lastId = UserData.users[usersLength - 1].id;
    const id = lastId + 1;
    const newUser =  new User(id, email, firstName, lastName, password, type, isAdmin);
    const Users = [...UserData.users, newUser];
    return Users;
  }

  /**
   * @description User can signin
   * @static
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} API response
   * @memberof UserService
   */
  static loginUser(user) {
    const { email, password } = user;
    const foundUser = UserData.users.find(user => email === user.email && password === user.password)
    if(!foundUser) {
        const response = {error: true, message: 'No user found/Incorrect email or password'};
        return response;
    }
    return foundUser;        
  }
}

export default UserService;