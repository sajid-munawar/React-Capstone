import { GET_COUNTRIES } from "./countyAction";

const countryReducer = (state = [], action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return action.payload;
        default:
            return state;
    }
}
export default countryReducer;