import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/countryAction';

const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    useEffect(() => {
            dispatch(getCountries());        
    }, [dispatch]);
    // console.log(countries); 
    return (<>
        {countries && countries.map(country => <div key={country.name.common}>
            {country.name.common}
            {/* <img className="flag" src={country.flags.png} alt="flag" /> */}
        </div>)}
    </>);
}
 
export default Countries;