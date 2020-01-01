const userStore = {
    _users: [
        {
            email: 'baayoo71',
            password: 1234,
            name: '이영규',
            location: '서울시 이태원 코딩도장 2층'
        },

    ],
    _usersItemsId: [

    ]
};
const getProfile = () => {
    return userStore._users;

}

const putBasket = (itemId) => {

}

const getUserProfile = (email, password) => {
    const userProfile = {
        _profile: [
        ]
    }
    userStore._users.forEach(e => {
        if (email == e.email && password == e.password) {
            userProfile._profile = [{
                email: e.email,
                password: e.password,
                name: e.name,
                location: e.location,
            }];
        }
        else {
            userProfile._profile = [{
                email: 'undefind',
            }];
        }
    })
    return userProfile._profile;
}

function signUp(user) {
    console.log(userStore._users);
    userStore._users = [...userStore._users, user];
    return userStore._users;
}

module.exports = {
    getUserProfile,
    signUp,
}