import './App.css';
// import './components/nasa/Nasa'
import Github from './components/github/Github';
// import getGeoLocation from './hooks/getGeolocation'
import { Alert } from 'reactstrap';


function App() {
  // const location = getGeoLocation();

  return (
        // <div className="text-center">
        // <Alert color="primary">
        // <h2>You are located at:</h2>
        // {location.loaded ? JSON.stringify(location) : "Location data not available yet."}
        // </Alert>
        // </div>

      <div><Github/></div>  
       
  );
}

export default App;
