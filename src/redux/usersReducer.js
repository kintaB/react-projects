const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING = "TOOGLE_IS_FOLLOWING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            }
            return u;
          }),
        ],
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOOGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : [...state.followingInProgress.filter((id) => id != action.id)],
      };

    default:
      return state;
  }
};

export let follow = (userId) => {
  return { type: FOLLOW, userId };
};

export let unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

export let setUsers = (users) => {
  return { type: SET_USERS, users };
};

export let setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, page };
};

export let setTotalCount = (totalCount) => {
  return { type: SET_TOTAL_COUNT, totalCount };
};

export let toogleisFetching = (isFetching) => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};

export let toogleFollowingInProgress = (followingInProgress, id) => {
  return { type: TOOGLE_IS_FOLLOWING, followingInProgress, id };
};

export default usersReducer;
