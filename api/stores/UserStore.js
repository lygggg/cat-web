const userStore = {
    _users: [
        {
            email: 'baayoo71@naver.com',
            password: '1234',
            name: '이영규',
            location: '서울시 이태원 코딩도장 2층'
        },

    ],

};

const getUserProfile = (email, password) => userStore._users.filter(e => {

    if (e.email === email && e.password === password) {
        return e;
    }

})



// const getUserProfile = (email, password) => {
//     const userProfile = {
//         _profile: [
//         ]
//     }
//     userStore._users.forEach(e => {
//         if (email == e.email && password == e.password) {
//             userProfile._profile = [{
//                 email: e.email,
//                 password: e.password,
//                 name: e.name,
//                 location: e.location,
//             }];
//         }// 로그인 부분 수정필요
//         else {
//             userProfile._profile = [{
//                 email: 'undefind',
//             }];
//         }
//     })
//     return userProfile._profile;
// }

function signUp(user) {
    userStore._users = [...userStore._users, user];
    console.log(userStore._users);
    return userStore._users;
}

module.exports = {
    getUserProfile,
    signUp,
};
