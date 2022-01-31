'use strict'

const output = {
  home: (req, res) => {
    res.render('home/index')
  },
  login: (req, res) => {
    res.render('home/login')
  },
}

const users = {
  id: ['gitae97', 'harry', 'james'],
  password: ['hgr30209!', '1234', '12345'],
}

const process = {
  login: (req, res) => {
    const id = req.body.id
    const password = req.body.password

    if (users.id.includes(id)) {
      const index = users.id.indexOf(id)
      if (users.password[index] === password) {
        return res.json({
          success: true,
        })
      }
    }

    return res.json({
      success: false,
      message: '로그인에 실패하셨습니다.',
    })
  },
}

module.exports = {
  output,
  process,
}
