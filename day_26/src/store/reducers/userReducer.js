const initState = {name:'', email:''}

const userReducer = (state=initState, action) => {
    switch(action.type){
        case 'CHANGE_USERNAME':
            //console.log("Chaning User name");
            return {...state, name:action.name}

        case 'CHANGE_EMAIL':
            //console.log("Changing Email");
            return {...state, email:action.email}
        default:
            return state
    }
}

export default userReducer