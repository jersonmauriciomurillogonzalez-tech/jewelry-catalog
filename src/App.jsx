import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Catalog />
      <Footer />
    </div>
  );
}