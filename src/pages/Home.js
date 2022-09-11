import React, { useState } from 'react';
import Header from '../components/Header';
import CardsContainer from '../components/CardsContainer';
import Footer from '../components/Footer';

export default function Home() {
    /**
      * Home component contains the three principal components:
      * Header - CardsContainer - Footer 
      * Stateful component with states:
      *     -> input
      *     -> query
      * Logical component with handleSubmit & handleChange functions
    */
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      setQuery(input);
    }
    const handleChange = (e) => {
      setInput(e.target.value);
    } 
    return (
      <div>
        <Header onChange={handleChange} inputValue={input} onSubmit={handleSubmit} />
        <CardsContainer query={query} />
        <Footer />
      </div>
    );
  }
  