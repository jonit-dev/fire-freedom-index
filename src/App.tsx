import React from 'react';
import { CountryAnalysis } from './components/CountryAnalysis';
import { countries } from './data/countries';

function App() {
  // For demo purposes, showing the first country
  return <CountryAnalysis country={countries[0]} />;
}

export default App;