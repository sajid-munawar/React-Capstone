import { GET_COUNTRIES } from "./countryAction";

const countryReducer = (state = [], action) => {
    switch (action.type) {
        case `${GET_COUNTRIES}/fulfilled`:
            return action.payload;
        default:
            return state;
    }
}
export default countryReducer;