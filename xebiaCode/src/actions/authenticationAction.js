export const loginRequest = (user) => {
    return {
        type: "LOGIN_REQUEST",
        user : user
    };
};

export const logout = () => {
    return {
        type: "LOGOUT"
    };
};