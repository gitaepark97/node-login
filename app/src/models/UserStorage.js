'use strict'

const fs = require('fs').promises

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data)
    const index = users.id.indexOf(id)
    const usersKeys = Object.keys(users)
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][index]
      return newUser
    }, {})
    return userInfo
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data)
    if (isAll) return users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
    return newUsers
  }

  static async getUsers(isAll, ...fields) {
    try {
      const data = await fs.readFile('./src/database/users.json')
      return this.#getUsers(data, isAll, fields)
    } catch (err) {
      return console.error
    }
  }

  static async getUserInfo(id) {
    try {
      const data = await fs.readFile('./src/database/users.json')
      return this.#getUserInfo(data, id)
    } catch (err) {
      return console.error
    }
  }

  static async save(userInfo) {
    const users = await this.getUsers(true)
    if (users.id.includes(userInfo.id)) {
      throw '이미 존재하는 아이디입니다.'
    }
    users.id.push(userInfo.id)
    users.name.push(userInfo.name)
    users.password.push(userInfo.password)
    fs.writeFile('./src/database/users.json', JSON.stringify(users))
    return { success: true }
  }
}

module.exports = UserStorage
