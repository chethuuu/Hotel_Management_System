const mongoose = require('mongoose');
const User = require('../models/User');
const adminData = { Fullname: 'minosh imantha ', email: 'minoshadmin@gmail.com', pNumber: '0715681831', password: 'Admin', date:"2022-12-23", userRole:"admin" };
describe('Admin Model Test', () => {


    beforeAll(async () => {
        process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        };
    });

    it('create admin without required field should failed', async () => {
        const adminWithoutRequiredField = new User({ Fullname: 'minosh imantha ' });
        let err;
        try {
            const savedAdminWithoutRequiredField = await adminWithoutRequiredField.save();
            error = savedAdminWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.password).toBeDefined();
    });

})

