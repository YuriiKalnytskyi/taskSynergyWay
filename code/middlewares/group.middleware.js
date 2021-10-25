const { models: { groupModel } } = require('../dataBase')

module.exports = {
    uddGroup: async (req, res, next) => {
        try {
            const {
                name, data2: {
                    dataAnalytics,
                    servicesAnalytics,
                    voiceAnalytics,
                    queueStats,
                    voiceStats,
                    video,
                    smartAccess,
                    diagrams
                }
            } = req.body

            const user = {
                name,
                dataAnalytics: dataAnalytics || false,
                servicesAnalytics: servicesAnalytics || false,
                voiceAnalytics: voiceAnalytics || false,
                queueStats: queueStats || false,
                voiceStats: voiceStats || false,
                video: video || false,
                smartAccess: smartAccess || false,
                diagrams: diagrams || false
            }
            req.user = user
            next()
        } catch (e) {
            next(e)
        }
    },
    updateGroup: async (req, res, next) => {
        try {
            const {
                name,groupId, updateData: {
                    dataAnalytics,
                    servicesAnalytics,
                    voiceAnalytics,
                    queueStats,
                    voiceStats,
                    video,
                    smartAccess,
                    diagrams
                }
            } = req.body.data

            const group = {
                name,
                dataAnalytics: dataAnalytics || false,
                servicesAnalytics: servicesAnalytics || false,
                voiceAnalytics: voiceAnalytics || false,
                queueStats: queueStats || false,
                voiceStats: voiceStats || false,
                video: video || false,
                smartAccess: smartAccess || false,
                diagrams: diagrams || false
            }
            req.group = group
            req.id = groupId
            next()
        } catch (e) {
            next(e)
        }
    }
}