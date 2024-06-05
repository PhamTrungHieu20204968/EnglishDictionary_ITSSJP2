import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search/SearchPage';
import ListTopics from './pages/topic/ListTopics';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="topics" element={<ListTopics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
