import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar"
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import Home from "./pages/Home"
import Footer from "./component/Footer";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Use configureStore from Redux Toolkit
import rootReducer from './Redux/Reducer'; // Import your combined reducers

const store = configureStore({
  reducer: rootReducer,
});

function App() {
 return (
 <Provider store={store}>
 <BrowserRouter>
 <Navbar />
 <div className="container">
 <Switch>
 <Route exact path="/" component={Home} />
 <Route exact path="/add" component={Add} />
 <Route exact path="/edit/:rowIndex" component={Edit} />
 </Switch>
 </div>
 <Footer />
 </BrowserRouter>
 </Provider>
 );
}
export default App;



