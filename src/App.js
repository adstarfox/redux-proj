import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
// import {selectPotentials} from './redux/slices/potentialCountriesSlice'
import { useSelector } from 'react-redux'
import { selectDisplay } from './redux/slices/displayCountrySlice';
import { loadingSubscription } from "./redux/slices/loadingSlice";
import Loading from "./Components/Loading";

function App() {
    // let potentials = useSelector(selectPotentials)
    let currentDisplay = useSelector(selectDisplay)
    let currentLoading = useSelector(loadingSubscription)
    console.log("Display", currentLoading)

    return (
        <div className="App font-link">
            <Header />
            {currentLoading && (<Loading/>)}
             {currentDisplay ? <MainDisplay/> : <OptionDisplay/>}
        </div>
    );
}

export default App;
