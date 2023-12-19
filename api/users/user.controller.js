// user.controller.js
const { genSaltSync, hashSync ,compareSync } = require("bcrypt");
const {sign} = require("jsonwebtoken");
const { create, getUsers, getUsersByUserId, updateUser, deleteUser ,getUsersByUserEmail} = require("./user.service");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
    
        // Validate that the required fields are present
        const requiredFields = ["first_name", "last_name", "gender", "email", "password", "phonenumber"];
        for (const field of requiredFields) {
            if (!body[field]) {
                return res.status(400).json({
                    success: 1,
                    message: `Please provide ${field.replace('_', ' ')}.`
                });
            }
        }
    
        // Ensure that the password exists in the request body before hashing
        if (body.password) {
            const hashedPassword = hashSync(body.password, salt);
            body.password = hashedPassword;
        }
    
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 1,
                    message: "Database connection error",
                    data: results
                });
            }
            return res.status(200).json({
                success: 0,
                data: results
            });
        });
    },
    
    getUsersByUserId: (req, res) => {
        const id = req.params.id;
        getUsersByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 1,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 0,
                message: "Successful",
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 0,
                message: "Successful",
                data: results
            });
        });
    },
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(body.password, salt);
        
        // Update the password property in the request body
        body.password = hashedPassword;
        
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update user"
                });
            }
            return res.json({
                success: 0,
                message: "Update Successfully"
            });
        });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "User deleted successfully"
                });
            }
        });
    },
    login : (req, res) => {},
};
