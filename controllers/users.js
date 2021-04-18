// import { v4 as uuid } from "uuid";
import usersFromData from "./../data.js";
let users = usersFromData;

export const getUsers = (req, res) => {
    // console.log(usersFromData);
    // console.log(`Users in the database: ${users}`);
    // let newId = users.length;
    // console.log(newId);

    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    let len = users.length;
    let newId = users[len - 1].id + 1;
    // console.log(newId);

    users.push({ id: newId, ...user });
    res.status(200).send(`User [${user.username}] added to the database.`);
    // console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
    const id = req.params.id;
    const user = users.filter((user) => {
        // (user.id==id)?return user : null
        if (user.id == id) {
            return user;
        }
    });
    // console.log(user);
    if (user.length > 0) {
        res.send(user);
    } else {
        res.send("user not found");
    }
    // res.send(req.params.id);
};

export const deleteUser = (req, res) => {
    console.log(`user with id ${req.params.id} has been deleted`);
    let id = req.params.id;
    // console.log(id);
    const newUsers = users.filter((user) => user.id != req.params.id);
    if (newUsers.length === users.length) {
        res.send("user not found!!!");
    } else {
        res.send(newUsers);
    }
    // res.send(`user has been deleted and the new users are ${users}`);
};

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id == req.params.id);
    console.log(user);
    if (user == null) {
        res.send("user not found!!!");
    } else {
        user.username = req.body.username;
        // console.log(user);
        users = users.map((e) => {
            if (e.id == req.params.id) {
                return user;
            } else {
                return e;
            }
        });
        res.send(users);
    }
    // console.log(`username has been updated to ${req.body.username}`);
};
