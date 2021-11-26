import { Route, Switch, Redirect } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Studies from "./pages/Studies";
import Extras from "./pages/Extras";


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          render={() => {
            return (
              <Redirect to="/home" />
            )
          }}
        />
        <Route path="/home" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/studies" component={Studies} />
        <Route path="/extras" component={Extras} />
      </Switch >
      <Footer />
    </div >
  )
}

export default App;

// cv/home => Comp A
// cv/work => Comp B