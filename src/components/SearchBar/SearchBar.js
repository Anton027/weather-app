import { useState } from 'react';

import css from './SearchBar.module.css'

const SearchBar = ({onSubmit}) => {
    const [location, setLocation] = useState('')
    
    const handleLocatChange = e => {
        setLocation(e.currentTarget.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (location.trim() === '') {
            // alert('Please write correct city');
            return;
        }
        onSubmit(location);
        setLocation('');
    };
    return (
        <>
            <header className={css.Header}>
                <h1 className={css.Title}>
                    Weather App
                </h1>
                <form className={css.SearchForm}
                    onSubmit={handleSubmit}
                >
                    <input
                        className={css.Input}
                        type="text"
                        name='location'
                        value={location}
                        placeholder="Enter City"
                        autoComplete="off"
                        required
                        onChange={handleLocatChange}
                    />
                    <button
                        className={css.SubmitBtn}
                        type="submit"

                    >
                        Search
                    </button>
                </form>
            </header>
        </>
    )
}
export default SearchBar;