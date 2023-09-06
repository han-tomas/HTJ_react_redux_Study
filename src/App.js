import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
import Find from "./components/food/Find";
import News from "./components/news/News";
import {Provider} from "react-redux";
import store from './store/store'

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Header/>
          <div className={"container"}>
            <Routes>
              <Route exact path={"/"} element={<Home/>}/>
              <Route exact path={"/food/food_list/:cno"} element={<FoodList/>}/>
              <Route exact path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
              <Route exact path={"/food/food_find"} element={<Find/>}/>
              <Route exact path={"/news/news_find"} element={<News/>}/>
            </Routes>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
