const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      name: "Nigga",
      userId: "1",
      location: { country: "Russia", city: "Kras" },
      profileImage:
        "https://img1.freepng.ru/20180714/ggq/kisspng-user-profile-computer-icons-login-clip-art-profile-picture-icon-5b49de2f1ef441.4301202215315676631268.jpg",
      status: "i hate niggers",
      follow: true,
    },
    {
      name: "Nigga",
      userId: "2",
      location: { country: "Russia", city: "Ekt" },
      profileImage:
        "https://img1.freepng.ru/20180714/ggq/kisspng-user-profile-computer-icons-login-clip-art-profile-picture-icon-5b49de2f1ef441.4301202215315676631268.jpg",
      status: "апчихба",
      follow: false,
    },
    {
      name: "Nigga",
      userId: "3",
      location: { country: "Russia", city: "Moscow" },
      profileImage:
        "https://img1.freepng.ru/20180714/ggq/kisspng-user-profile-computer-icons-login-clip-art-profile-picture-icon-5b49de2f1ef441.4301202215315676631268.jpg",
      status: "обэме",
      follow: false,
    },
    {
      name: "Nigga",
      userId: "4",
      location: { country: "Russia", city: "Spb" },
      profileImage:
        "https://img1.freepng.ru/20180714/ggq/kisspng-user-profile-computer-icons-login-clip-art-profile-picture-icon-5b49de2f1ef441.4301202215315676631268.jpg",
      status: "почему так",
      follow: true,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((u) => {
            if (u.userId === action.userId) {
              return { ...u, follow: true };
            }
            return u;
          }),
        ],
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.userId === action.userId) {
            return { ...u, follow: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, user: [...state.users, action.users] };
    default:
      return state;
  }
};

export let followAC = (userId) => {
  return { type: FOLLOW, userId };
};

export let unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export let setUsersAC = (users) => {
  return { type: SET_USERS, users };
};

export default usersReducer;
