import { useEffect } from "react"
import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import TheMap from "./components/Map/TheMap";
import store from "./redux/Store";
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"



const App = () => {
  useEffect(() => {
      M.AutoInit()
  }, [])

  return (
    <Provider store={store}>
      <Header />
      <h4 className="left-title">Search for Restaurants, Places and Hotels around the globe</h4>
      
      <div className="row">
        <div className="col s12 m4">
          <List />
        </div>
        <div className="col s12 m8">
          <TheMap />
        </div>
      </div>
    </Provider>
  );
};

export default App;
