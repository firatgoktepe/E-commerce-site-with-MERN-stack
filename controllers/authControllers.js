const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

// signup module

module.exports.sigup = (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }
            const newUser = new User({
                name,
                email,
                password
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }
                            );
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({ error: err });
                        });
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

// Login module 
module.exports.login = async (req, res) => {
    const { email, password } = req.body
    if( !email || !password ){
        return res.status(400).json({ msg: 'Please enter all fields' })
    }
    User.findOne({ email })
        .then(user => {
            if(!user){
                return res.status(400).json({ msg: 'User does not exist' })
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch){
                        return res.status(400).json({ msg: 'Invalid credentials' })
                    }
                    jwt.sign(
                        { id: user._id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        })
}
