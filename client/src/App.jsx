import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-cyan-600 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
       <Link to="https://www.linkedin.com/in/samir-kumar-yadav-308531198/">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Sky_Group_logo_2020.svg/2560px-Sky_Group_logo_2020.svg.png" alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter text-lg bg-rose-600 text-white px-6 py-2 rounded-md">Create</Link> 
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-cyan-100 min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;