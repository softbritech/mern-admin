import './App.css'
import {Provider} from "react-redux";
import {store} from "./store";
import Router from "./app/routes/Router.tsx";
function App() {
    return <>
        <Provider store={store}>
            <Router/>
        </Provider>
    </>
}

export default App
