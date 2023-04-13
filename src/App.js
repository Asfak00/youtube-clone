import React, { useEffect, useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";

// importing react router dom for routing
import { Switch, Route, useHistory } from "react-router-dom";

// manually imported files
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import HomeScreen from "./Components/HomeScreen";
import BigHomeMenu from "./Components/BigHomeMenu";
import SignUp from "./Components/SignUp";
import NotFoundPage from "./Components/NotFoundPage";
import { useSelector } from "react-redux";
import WatchScreen from "./Components/WatchScreen";
import SearchScreen from "./Components/SearchScreen";
import SubscriptionsScreen from "./Components/SubscriptionsScreen";
import ChannelScreen from "./Components/ChannelScreen";

// make a layout component for the routing
const Layout = ({ children, Sidebar }) => {
  // toggle menu bar
  const [toggle, setToggle] = useState(false);
  const handleToggleMenu = () => {
    setToggle((value) => !value);
  };
  return (
    <>
      <BigHomeMenu toggle={toggle} />
      <Header handleToggleMenu={handleToggleMenu} />
      <div className="app__container">
        {Sidebar}
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { loading, accessToken } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/signup");
    }
  }, [loading, accessToken, history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout Sidebar={<Sidebar />}>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/search/:query">
        <Layout Sidebar={<Sidebar />}>
          <SearchScreen />
        </Layout>
      </Route>

      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route path="/feed/subscriptions">
        <Layout Sidebar={<Sidebar />}>
          <SubscriptionsScreen />
        </Layout>
      </Route>

      <Route path="/channel/:channelId">
        <Layout Sidebar={<Sidebar />}>
          <ChannelScreen />
        </Layout>
      </Route>

      <Route path="*">
        <Layout Sidebar={<Sidebar />}>
          <NotFoundPage />
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
