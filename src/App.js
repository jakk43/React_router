import { Route, Switch } from "react-router-dom";
import "./App.css";
import AppHeader from "./component/AppHeader";
import Page404 from "./component/Page404";
import PageAbout from "./component/PageAbout";
import PageHome from "./component/PageHome";
import PagePost from "./component/PagePost";

function App() {
  return (
    <div>
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <PageHome />
        </Route>

        <Route path="/about">
          <PageAbout />
        </Route>

        <Route path="/post/:postId">
          <PagePost />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
