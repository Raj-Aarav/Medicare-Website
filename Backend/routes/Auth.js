const express = require('express');
const router = express.Router();
const UserDetail = require('../models/Entry');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserDetail.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User not found' })
        }
        else {
            const matching = (user.password === password)
            console.log(matching);
            if (matching) {
                console.log("after pass matxh")
                return res.status(200).json({ msg: "You're authorized" }); //This status 200 should be same as in the EntryPage.jsx
            }
            else {
                console.log("issue is in password matching");
                return res.status(400).json({ msg: "server error for password auth" });
                
            }
        }
    }
    catch (error) {
        console.log("error from auth.js ", error);
    }
}
)

module.exports = router;