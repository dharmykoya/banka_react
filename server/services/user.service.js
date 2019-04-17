/* eslint-disable max-len */
import Helper from './helper';
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
  static signUp(user) {
    const {
      email, firstName, lastName, password, type, isAdmin,
    } = user;
    const usersLength = UserData.users.length;
    const lastId = UserData.users[usersLength - 1].id;
    const id = lastId + 1;
    const newUser = new User(id, email, firstName, lastName, password, type, isAdmin);
    UserData.users = [...UserData.users, newUser];
    // generating token
    const token = Helper.generateToken(newUser);
    return {
      token,
      id,
      email,
      firstName,
      lastName,
      type,
    };
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
    const foundUser = UserData.users.find(userDetails => email === userDetails.email && password === userDetails.password);
    if (!foundUser) {
      const response = { error: true, message: 'No user found/Incorrect email or password' };
      return response;
    }
    // generating token
    const token = Helper.generateToken(foundUser);
    return { token, ...foundUser };
  }
}

export default UserService;