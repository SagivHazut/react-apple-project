import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthGuardRoute from "./components/AuthGuardRoute";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CardInfoPage from "./pages/CardInfoPage";
import CardsPanelPage from "./pages/CardsPanelPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import CardRegister from "./pages/CardsRegister";
import AuthRegister from "./components/AuthRegister";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";
import CardUpdate from "./pages/CardUpdate";
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
function App() {
  return (
    <div>
      <NavBarComponent></NavBarComponent>
      <ToastContainer />
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={HomePage} />
          <AuthRegister path="/login" component={LoginPage} />
          <AuthRegister path="/signup" component={SignupPage} />
          <AuthGuardRoute path="/cardregister" component={CardRegister} />
          <Route path="/cardspanel" component={CardsPanelPage} />
          <Route path="/card/:id" component={CardInfoPage} />
          <Route path="/aboutpage" component={AboutPage} />
          <AuthGuardRoute path="/CardUpdate" component={CardUpdate} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>

      <Footer></Footer>
    </div>
  );
}

export default App;
