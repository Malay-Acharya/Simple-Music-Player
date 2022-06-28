const initialState = {name: "",artist:"",image:"", id:""};

const changethesong = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "CHANGESONG": 
        state = action.payload.song;

        console.log(state);
        Object.assign(state, state)
        return state;
        default: return state;
    }
}

export default changethesong;