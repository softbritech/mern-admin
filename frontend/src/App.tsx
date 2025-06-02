import './App.css'
import {Provider} from "react-redux";
import {store} from "./store";
import Router from "./app/routes/Router.tsx";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <>
        <Provider store={store}>
            <Router/>
        </Provider>
    </>
}

export default App
