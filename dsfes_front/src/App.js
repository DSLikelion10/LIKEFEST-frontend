import Menubar from "./pages/Menubar";
import Main from "./pages/Main";
import Notice from "./pages/Notice";
import TimeTable from "./pages/TimeTable";
import Event from "./pages/Event";
import Board from "./pages/Board";
import NoticeManage from "./pages/NoticeManage";
import { Routes, Route } from "react-router-dom";
import AdminNotice from "./pages/AdminNotice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route index element={<Main />}></Route>
        <Route path="/Notice" element={<Notice />}></Route>
        <Route path="/timetable" element={<TimeTable />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/manager" element={<NoticeManage />}></Route>
        <Route path="/adminntc" element={<AdminNotice />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
