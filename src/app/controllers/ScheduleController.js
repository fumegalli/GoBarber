import Appointment from '../models/Appointment'
import User from '../models/User'

class ScheduleController {
  async get(req, res) {
    const checkUserProvider = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    })

    if (!checkUserProvider) {
      return res.status(401).json({
        error: 'User is not a provider',
      })
    }

    const { date } = req.query

    // TODO: Ver essa classe do Diego e ver como está.
    // const appointments = await appointments.findAll({
    //   where:
    // })

    return res.json(date)
  }
}

export default new ScheduleController()
