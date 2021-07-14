import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b9460e09-239d-4848-81b6-2e2cc1e029da",
  },
});

const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => response.data);
  },

  setUnfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },

  setFollow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  authAccept() {
    return instance.get(
      "https://social-network.samuraijs.com/api/1.0/auth/me",
      {
        withCredentials: true,
      }
    );
  },
  getUserId(userId) {
    return instance.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    );
  },
};

export default usersAPI;
