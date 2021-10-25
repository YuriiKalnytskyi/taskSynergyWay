module.exports = {
    updateUser: async (req, res, next) => {
        try {
            const { userId } = req.body.data
            const data = req.body.data.data

            const readyToUpdate = new Object();

            for (let userField in data) {
                if (data[userField]) {
                    readyToUpdate[userField] = data[userField];
                }
            }

            req.updateUserFields = { readyToUpdate, id: userId };
            next();
        } catch (e) {
            next(e)
        }
    }
}