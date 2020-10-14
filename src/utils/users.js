const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // Clear the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data
    if(!username || !room){
       return {
           error: 'Username and room are required!'
       } 
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username 
    if(existingUser){
        return{
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room };
    users.push(user);
    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id);
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room);
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id: 22,
//     username: 'Andrew',
//     room: 'Test'
// })

// addUser({
//     id: 42,
//     username: 'Mike',
//     room: '   Test'
// })

// addUser({
//     id: 32,
//     username: 'Andrew',
//     room: 'Test2'
// })

// console.log(users);

// const user = getUser(42);
// console.log(user);

// const userList = getUsersInRoom('Test');
// console.log(userList);

// const res = addUser({
//     id: 33,
//     username: 'andrew',
//     room: 'test'
// })

// console.log(res);

// const removedUser  = removeUser(22);

// console.log(removedUser);
// console.log(users);