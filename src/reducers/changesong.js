const initialState = {name: "",artist:"",image:"https://via.placeholder.com/150/ADFF2F/000000?text=Select+a+song", id:""};

const changethesong = (state = initialState, action) => {
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