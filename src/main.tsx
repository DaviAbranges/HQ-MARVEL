import ReactDOM from "react-dom";
import App from "./App.tsx";
import ComicDetail from "./screens/ComicDetail.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./screens/Characters.tsx";
import CharactersDetail from "./screens/CharactersDetail.tsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/characters" element={<Characters />}></Route>
      <Route path="/comicdetails/:id" element={<ComicDetail />} />
      <Route
        path="/characterdetails/:id"
        element={<CharactersDetail />}
      ></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
