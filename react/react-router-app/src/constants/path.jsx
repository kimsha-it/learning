const PATHS = {
  // RootLayout에 중첩된 경로
  ROOT: {
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POST_DETAIL: "/posts/:postId",
    getPostDetail: (postId) => `/posts/${postId}`,

    PROFILE: "/profile",
  },

  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
};

export default PATHS;
