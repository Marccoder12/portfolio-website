import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./mainStyle.css";
import { MainPage } from "./features/MainLayout/MainPage";
import { HeroContent } from "./features/HeroPage/HeroContent";
import { ProjectContent } from "./features/ProjectPage/ProjectContent";
import { ContactMeContent } from "./features/ContactMePage/ContactMeContent";
import { ToastContainer } from "react-toastify";
// Your main App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/">
          <Route index element={<HeroContent />} path="/" />
          <Route element={<ProjectContent />} path="projects" />
          <Route element={<ContactMeContent />} path="contact" />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
      />
    </BrowserRouter>
  );
}

export default App;
