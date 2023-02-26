import { useEffect, useState } from 'react';
import BackgroundContainer from "./Backgroundcontainer/BackgroundContainer";
import Card from "./Card/Card";
import { GlobalStyle } from "./GlobalStyle";
import SearchBar from "./SearchBar";
import Wrapper from "./Wrapper";
import { baseFetch } from 'servises/Fetch';


export const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [error, setError] = useState(null);
  const [, setiIsLoading] = useState(false);
  
  useEffect(() => {
        if (!location) {
            return;
        }
        baseFetch(location).then(res => {
            setData(res.data);
        }).catch(error => setError(error.message))
      .finally(setiIsLoading(false));
    }, [location])
  
  const handleSubmitForm = location => {
    setLocation(location)
  }
  
  return (
    <>
      {error && alert('Error, wrong http request')}
      <BackgroundContainer>
        <Wrapper>
          <SearchBar onSubmit={handleSubmitForm}/>
          <Card data={data} />
        </Wrapper>
      </BackgroundContainer>
      <GlobalStyle />
    </>
    
  );
};
