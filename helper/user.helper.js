const bcyrpt = require("bcrypt");


const hashPassword = async (password) => {
    try {
        const saltRounds = 5;
        const hash = await bcyrpt.hash(password, saltRounds);
        return hash
    } catch (error) {
        console.log(error)
    }
};


const comparePassword = async (password, hashedPassword) => {
    return await bcyrpt.compare(password, hashedPassword);
}


module.exports = { hashPassword, comparePassword }