const { models: { groupModel } } = require('../dataBase')

module.exports = {
    add: async (req, res, next) => {
        try {
            await groupModel.create(req.user, { returning: true, raw: true, nest: true })
            res.json("ok")
        } catch (e) {
            next(e);
        }
    },
    getOne: async (req, res, next) => {
        try {

            const groupDb = await groupModel.findOne({ where: { id:req.params.id }, }, { returning: true, raw: true, nest: true })

            const group = {
                id: groupDb.id,
                name: groupDb.name,
                dataAnalytics:groupDb.dataAnalytics,
                servicesAnalytics:groupDb.servicesAnalytics,
                voiceAnalytics:groupDb.voiceAnalytics,
                queueStats:groupDb.queueStats,
                voiceStats:groupDb.voiceStats,
                video:groupDb.video,
                smartAccess:groupDb.smartAccess,
                diagrams:groupDb.diagrams
            }
            res.json(group)
        } catch (e) {
            next(e)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const groups = await groupModel.findAll({ returning: true, raw: true, nest: true })
            const a = (arr) => {
                const q = []
                for (let groups of arr) {
                    const newusers = {
                        id: groups.id,
                        name: groups.name,
                        checkbox: {
                            dataAnalytics: groups.dataAnalytics,
                            servicesAnalytics: groups.servicesAnalytics,
                            voiceAnalytics: groups.voiceAnalytics,
                            queueStats: groups.queueStats,
                            voiceStats: groups.voiceStats,
                            video: groups.video,
                            smartAccess: groups.smartAccess,
                            diagrams: groups.diagrams,
                        }
                    }
                    q.push(newusers)
                }
                return q
            }
            res.json(a(groups));
        } catch (e) {
            next(e);
        }
    },
    updateGroupId: async (req, res, next) => {
        try {
            const {id ,group } = req
            groupModel.update(group, { where: { id }, }, { returning: true, raw: true, nest: true })
            res.json("ok");
        } catch (e) {
            console.log(e)
            next(e);
        }
    },
    deleteGroup: async (req, res, next) => {
        try {
            await groupModel.destroy({ where :{ id: req.params.id } })
            res.json('ok')
        } catch (e) {
            next(e)
        }
    }

}
