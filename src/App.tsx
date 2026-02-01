import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2 className="text-center">길을 잃었다~ 어딜 가야 할까~</h2>
      <p>
        <Link to="/">홈으로 이동</Link>
      </p>
    </div>
  );
}
