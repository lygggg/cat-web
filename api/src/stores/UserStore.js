const userStore = {
  _users: [
    {
      email: 'baayoo71@naver.com',
      password: '1234',
      name: '이영규',
      location: '서울시 이태원 코딩도장 2층',
    },
    {
      email: 'baayoo79@naver.com',
      password: '1234',
      name: '이영규',
      location: '서울시 이태원 코딩도장 2층',
    },
  ],

};

const getUserProfile = (email, password) => userStore._users.filter((e) => {
  if (e.email === email && e.password === password) {
    return e;
  }
});

function signUp(user) {
  userStore._users = [...userStore._users, user];
  return userStore._users;
}

export {
  getUserProfile,
  signUp,
};
