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
}

module.exports = UserStorage
