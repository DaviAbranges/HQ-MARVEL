import ReactDOM from "react-dom";
import App from "./App.tsx";
import ComicDetail from "./components/comicDetail.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/comicdetails" element={<ComicDetail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
