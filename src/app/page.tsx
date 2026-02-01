'use client';

import { BrowserRouter } from 'react-router-dom';
import '../index.css';
import dynamic from 'next/dynamic';
const App = dynamic(() => import('../App'), { ssr: false });

export default function Page() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
