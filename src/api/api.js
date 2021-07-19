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
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  setFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
  authAccept() {
    return instance.get("auth/me", {
      withCredentials: true,
    });
  },
  getUserId(userId) {
    console.warn("USE PROFILE API !!!!!!!!");
    return profileAPI.getUserId(userId);
  },
};

export const profileAPI = {
  getUserId(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status });
  },
};

export default usersAPI;
