import { createSlice } from "@reduxjs/toolkit";

const authState={
    isLoggedIn:false,
    token:'',
    userId:'',
    emailVerify:false,
    ttoggle:false
}

const authSlice = createSlice({
    name:'auth',
    initialState:authState,
    reducers:{
        logIn(state){
            state.isLoggedIn = !state.isLoggedIn
        },
        LogOut(state){
            state.isLoggedIn = !state.isLoggedIn
        },
        userIdUpdater(state,action){
            state.userId = action.payload
        },
        tokenUpdater(state,action){
            state.token=action.payload
        },
        emailVerifyUpdater(state,action){
            state.emailVerify = action.payload
        },
        toggleUpdater(state){
            state.ttoggle = !state.ttoggle
        }
    }
})

export const  authAction = authSlice.actions
export default authSlice.reducer