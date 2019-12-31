const userStore = {
    _user: [
        {email: 'baayoo71', password: 1234, name: '이영규', location: '서울시 이태원 코딩도장 2층'},
    
    ],
    _userItemsId: [

    ]
  };
const getProfile = () => {
    return userStore._user;

}

const putBasket = (itemId) => {
    
}

const getUserProfile = (email, password) => {
    const userProfile = {
        _profile: [

        ]
    }
    userStore._user.forEach(e => {
        if(email == e.email && password == e.password){
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

module.exports = {
    getUserProfile,
}