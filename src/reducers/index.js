import changeplaylist from "./changeplay";
import changethesong from "./changesong"

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeplaylist,
        changethesong
    }
);

export default reducers;