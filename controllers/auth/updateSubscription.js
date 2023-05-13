const { User } = require("../../models");

const updateSubscription = async (req, res) => {
    const { _id } = req.user;
    const { subscription } = req.body;
    await User.findByIdAndUpdate(_id, { subscription: subscription }, { new: true });

    res.json({
        subscription,
    })
}

module.exports = updateSubscription;