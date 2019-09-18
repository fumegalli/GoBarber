import User from '../models/User'

class UserController {
  async create(req, res) {
    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      },
    })

    if (userExists)
      return res.status(404).json({
        error: 'User already exists',
      })

    const { id, name, email, provider } = await User.create(req.body)

    return res.json({
      id,
      name,
      email,
      provider,
    })
  }

  async update(req, res) {
    return res.json({
      ok: req.userId,
    })
  }
}

export default new UserController()
