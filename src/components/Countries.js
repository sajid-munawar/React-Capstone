import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, searchCountry } from '../redux/countryAction';

const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    useEffect(() => {
        if (countries.length !==1){
            dispatch(getCountries());
        }
    }, [countries.length, dispatch]);
    console.log(countries); 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        dispatch(searchCountry(e.target.title.value));
        e.target.reset()
    }
    return (<>
        <form action="#" onSubmit={(e) => handleSubmit(e)} >
            <input type="text" name='title' />
            <button type="submit"> Search </button>
        </form>
        {countries && countries.map(country => <div key={country.name.common}>
            {country.name.common}
            <img className="flag" src={country.flags.png} alt="flag" />
        </div>)}
    </>);
}
 
export default Countries;