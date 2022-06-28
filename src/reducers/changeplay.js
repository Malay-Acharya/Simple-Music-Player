const initialState = [];

const changeplaylist = (state = initialState, action) => {
    Object.assign(state, state)
    switch (action.type) {
        case "ADDSONG": 
        const index = state.map(object => object.name).indexOf(action.payload.playlist);
        if(index >=0){
            state[index].song.push(action.payload.song)
            return [...state];
        }
        else{
            let i = {
                name: `${action.payload.playlist}`,
                song: [action.payload.song],
            }
            state.push(i);
            return [...state];
        }
        default: return state;
    }
}

export default changeplaylist;