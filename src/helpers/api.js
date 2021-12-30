import axios from "axios";

/**
 * Set API URL
 */
const BASE_URL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = BASE_URL;

const ajaxHandler = async (axiosCall) => {
  try {
    const response = await axiosCall;
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("_UAD_");
        window.location = "/";
      }
      return Promise.resolve(error.response.data);
    } else {
      return Promise.resolve({
        type: "error",
        msg: "Network connection error",
      });
    }
  }
};

const api = {
  auth: {
    register: (data) =>
      ajaxHandler(
        axios.post("/api/auth/sign-up", data, { withCredentials: true })
      ),
    // login: (data) =>
    //   ajaxHandler(
    //     axios.post("/api/auth/login", data, { withCredentials: true })
    //   ),
    // logout: () =>
    //   ajaxHandler(axios.get("/api/auth/logout", { withCredentials: true })),
    // checkAuth: () =>
    //   ajaxHandler(axios.get("/api/auth/check-auth", { withCredentials: true })),
    // setRole: (userType) =>
    //   ajaxHandler(
    //     axios.patch(
    //       "/api/auth/third-party/set-role",
    //       { role: userType },
    //       { withCredentials: true }
    //     )
    //   ),
  },
  user: {},
};

const urls = {
  auth: {
    google: `${BASE_URL}/api/auth/third-party/google`,
  },
};

export default api;
export { urls };
