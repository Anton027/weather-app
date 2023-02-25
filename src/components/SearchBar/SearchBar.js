import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

// import TextField from '@mui/material/TextField';
const SearchBar = () => {
    return (
        <>
            <header>
                <FormControl>
                    <InputLabel text="my-input">
                        Please give Sity name
                    </InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                    />
                </FormControl>

            </header>
        </>
    )
}
export default SearchBar;