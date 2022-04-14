import Menubar from './pages/Menubar';
import Main from './pages/Main';
import Notice from './pages/Notice';
import TimeTable from './pages/TimeTable';
import Event from './pages/Event';
import Map from './pages/Map';
import Board from './pages/Board';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route index element={<Main />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/timetable" element={<TimeTable />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/board" element={<Board />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
