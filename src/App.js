import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { Faqs } from './components/Faqs';
import { Contact } from './components/Contact';
import { Blogs } from './components/Blogs';
import './bootstrap/css/bootstrap.min.css';
import React, {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    fetch("https://us-central1-dlt-counselling-services.cloudfunctions.net/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, [])

  return (
    <div className="App">
        <NavBar />
        <Banner />
        <AboutMe />
        <Services />
        <Blogs /> 
        <Faqs />
        <Contact />
    </div>
  );
};

export default App;