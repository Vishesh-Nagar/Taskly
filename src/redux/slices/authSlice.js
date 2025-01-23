import { createSlice } from '@reduxjs/toolkit';

const loadAuth = () => {
    const saved = localStorage.getItem('auth');
    return saved ? JSON.parse(saved) : { isAuthenticated: false };
};

const saveAuth = (authState) => {
    localStorage.setItem('auth', JSON.stringify(authState));
};

const authSlice = createSlice({
    name: 'auth',
    initialState: loadAuth(),
    reducers: {
        login: (state) => {
            const updatedState = { isAuthenticated: true };
            saveAuth(updatedState);
            return updatedState;
        },
        logout: (state) => {
            const updatedState = { isAuthenticated: false };
            saveAuth(updatedState);
            return updatedState;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;