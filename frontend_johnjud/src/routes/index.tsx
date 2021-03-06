import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from '../Navigation/Navigation';
import Navigation2 from '../Navigation/Navigation2';

import home from '../pages/home/home';
import article from '../pages/article/article'
import aboutUS from './../pages/aboutUS/aboutUS';
import faq from './../pages/faq/faq';

import signin from './../pages/signin/signin';
import signin2 from './../pages/signin/signin2';
import signup from '../pages/signup/signup';
import signup2 from '../pages/signup/signup2';
import signup3 from '../pages/signup/signup3';
import signup4 from '../pages/signup/signup4';
import signup5 from '../pages/signup/signup5';
import signup6 from '../pages/signup/signup6';


import bookmark from '../pages/bookmark/bookmark';
import chat from '../pages/chat/chat';
import suggestion from '../pages/chat/suggest';


import article1 from '../pages/article/article1'
import userprofile from '../pages/userprofile/userprofile1'
import petprofile from '../pages/petprofile/petprofile1'


export default () => (
  <Switch>
    <Navigation />
    <Navigation2/>
    <Route exact path="/" component={home}/>
    <Route exact path="/article" component={article} />
    <Route exact path="/aboutUS" component={aboutUS} />
    <Route exact path="/faq" component={faq} />

    <Route exact path="/signin" component={signin} />
    <Route exact path="/signin2" component={signin2} />
    <Route exact path="/signup" component={signup} />
    <Route exact path="/signup2" component={signup2} />
    <Route exact path="/signup3" component={signup3} />
    <Route exact path="/signup4" component={signup4} />
    <Route exact path="/signup5" component={signup5} />
    <Route exact path="/signup6" component={signup6} />

    <Route path="/bookmark" component={bookmark}/>
    <Route path="/chat" component={chat}/>
    <Route path="/suggestion" component={suggestion}/>

    <Route path="/article1" component={article1}/>
    <Route path="/userprofile1" component={userprofile}/>
    <Route path="/petprofile1" component={petprofile}/>

  </Switch>
)