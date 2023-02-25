import BackgroundContainer from "./Backgroundcontainer/BackgroundContainer";
import SearchBar from "./SearchBar";
import Wrapper from "./Wrapper";

export const App = () => {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${process.env.API_KEY}`
  return (
    <>
      <BackgroundContainer>
        
        <Wrapper>
          <SearchBar/>
          <div>
            React homework template
            by kutsim`
          </div>
        </Wrapper>
      </BackgroundContainer>
      
    </>
    
  );
};
