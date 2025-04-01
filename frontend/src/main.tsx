import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import AdminRoute from "./admin/routes/AdminRoute.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
          <Route path="/*" element={<App/>}></Route>
          <Route path="admin/*" element={<AdminRoute/>}></Route>
      </Routes>
  </BrowserRouter>,
)
