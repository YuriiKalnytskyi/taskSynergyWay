const { models: { userModel } } = require('../dataBase')

module.exports = {
    add: async (req, res, next) => {
        try {

            console.log(req.body)
            await userModel.create(req.body, { returning: true, raw: true, nest: true })
            res.json('ok')
        } catch (e) {
            next(e);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const groups = await userModel.findAll({ returning: true, raw: true, nest: true })

            res.json(groups);
        } catch (e) {
            next(e);
        }
    },
    updateUserId: async (req, res, next) => {
        try {
            const { readyToUpdate, id } = req.updateUserFields

             await userModel.update(readyToUpdate, { where: { id }, }, { returning: true, raw: true, nest: true })
            res.json("ok");
        } catch (e) {
            console.log(e)
            next(e);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
             await userModel.destroy({ where :{ id: req.params.id } })
            res.json('ok')
        } catch (e) {
            next(e)
        }
    }
}