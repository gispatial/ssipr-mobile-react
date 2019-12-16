import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/Templates/Nothing';
import TemplateSidebar from '../components/Templates/Sidebar';

// Routes
import Home from '../components/Home';

import RecipesContainer from '../../containers/Recipes';
import RecipeListingComponent from '../components/Recipe/Listing';
import RecipeSingleComponent from '../components/Recipe/Single';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/User/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/User/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/User/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/User/UpdateProfile';

import Error from '../components/UI/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/sign-up"
      render={props => (
        <TemplateNothing pageTitle="Sign Up">
          <SignUpContainer {...props} Layout={SignUpComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateNothing pageTitle="Login">
          <LoginContainer {...props} Layout={LoginComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/forgot-password"
      render={props => (
        <TemplateNothing pageTitle="Lupa Kata Laluan">
          <ForgotPasswordContainer {...props} Layout={ForgotPasswordComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/update-profile"
      render={props => (
        <TemplateSidebar pageTitle="Kemas Kini Profil">
          <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/recipes"
      render={props => (
        <TemplateSidebar pageTitle="Paparan Notifikasi">
          <RecipesContainer {...props} Layout={RecipeListingComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/recipe/:id"
      render={props => (
        <TemplateSidebar pageTitle="IPR Ditawarkan">
          <RecipesContainer {...props} Layout={RecipeSingleComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar pageTitle="&nbsp">
          <Error {...props} title="" content="Profil Pengguna SSIPR -------------------------- Tiada Paparan Notifikasi Setakat Ini. Maaf!" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
