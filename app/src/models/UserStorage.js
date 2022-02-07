'use strict'

class UserStorage {
  static #users = {
    id: ['gitae97', 'harry', 'james'],
    password: ['hgr30209!', '1234', '12345'],
    name: ['박기태', '해리', '제임스'],
  }

  static getUsers(...fields) {
    const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
    return newUsers
  }

  static getUserInfo(id) {
    const users = this.#users
    const index = users.id.indexOf(id)
    const usersKeys = Object.keys(users)
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][index]
      return newUser
    }, {})

    return userInfo
  }

  static save(userInfo) {
    const users = this.#users
    users.id.push(userInfo.id)
    users.name.push(userInfo.name)
    users.password.push(userInfo.password)
    console.log(users)
  }
}

module.exports = UserStorage
