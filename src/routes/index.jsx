import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import TaskPage from "../pages/TaskPage";
import Sidebar from "../components/Sidebar";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/tasklist" element={<TaskPage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}
