import { GET_COUNTRIES,SEARCH_COUNTRY } from "./countryAction";

const countryReducer = (state = [], action) => {
    switch (action.type) {
        case `${GET_COUNTRIES}/fulfilled`:
            return action.payload;
        case `${SEARCH_COUNTRY}/fulfilled`:
            return action.payload;
        default:
            return state;
    }
}
export default countryReducer;