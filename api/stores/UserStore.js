const userStore = {
    _user: [
        {id: 'baayoo71', password: 1234, name: '이영규', location: '서울시 이태원 코딩도장 2층'},
    ]
  };

const getUserProfile = ({email, password}) => {
    console.log(email);
    const userProfile = userStore._user.map(e => {
        if(email == e.id && password == e.password){
            console.log('fsdfsd');
             
                
            
        }
    })
    
    return userProfile;
}

module.exports = {
    getUserProfile,
}