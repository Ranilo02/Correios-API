import { Route, Routes } from "react-router-dom";
import NewUser from "../pages/newUser";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewUser />} />
    </Routes>
  );
}
