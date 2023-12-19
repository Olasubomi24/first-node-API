// user.service.js
const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into user_accounts(firstname, lastname, gender, email, password, phonenumber) values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.phonenumber
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id, firstname, lastname, gender, email, phonenumber, insert_dt from user_accounts`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsersByUserId: (id, callBack) => {
        pool.query(
            `select id, firstname, lastname, gender, email, phonenumber, insert_dt from user_accounts where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update user_accounts set firstname = ?, lastname = ?, gender = ? , email = ?, password = ? , phonenumber= ? where id =? `,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.phonenumber,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from user_accounts where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
