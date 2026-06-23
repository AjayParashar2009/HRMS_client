import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Panel from "./Components/Admin/panel";
import Dashboard from "./Components/Admin/Dashboard";
import Employees from "./Components/Admin/pages/Employees";
import Attendance from "./Components/Admin/pages/Attendance";
import EmployeeDirectory from "./Components/Admin/pages/EmployeeDirectory";
import LeaveRequest from "./Components/Admin/pages/LeaveRequest";
import Payroll from "./Components/Admin/pages/Payroll";
import Performance from "./Components/Admin/pages/Performance";
import Report from "./Components/Admin/pages/Report";
import Settings from "./Components/Admin/pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Panel" element={<Panel />}>
          <Route index element={<Dashboard />} />
          <Route index path="Dashboard" element={<Dashboard />} />
          <Route path="Employees" element={<Employees />} />
          <Route path="Attendance" element={<Attendance />} />
          <Route path="EmployeeDirectory" element={<EmployeeDirectory />} />
          <Route path="Leave/Request" element={<LeaveRequest />} />
          <Route path="Pay/roll" element={<Payroll />} />
          <Route path="Performance" element={<Performance />} />
          <Route path="Report" element={<Report />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
