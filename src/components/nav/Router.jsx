import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../Main";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import CourseBlog from "./pages/CourseBlog";
import AboutMe from "./pages/AboutMe";
import NoMatch from "./pages/NoMatch";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/course-blog" element={<CourseBlog />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
