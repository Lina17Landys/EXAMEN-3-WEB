import "./App.css";

import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

const poems = [
  {
    id: "1",
    title: "The Road Not Taken",
    excerpt: "Two roads diverged in a yellow wood",
    author: "Robert Frost",
    linecount: "20",
    lines: ["Two roads diverged in a yellow wood,", "And sorry I could not travel both"],
  },
  {
    id: "2",
    title: "Ozymandias",
    excerpt: "I met a traveler from an antique land",
    author: "Percy Bysshe Shelley",
    linecount: "14",
    lines: ["I met a traveler from an antique land", "Who said: Two vast and trunkless legs of stone"],
  },
  {
    id: "3",
    title: "Daffodils",
    excerpt: "I wandered lonely as a cloud",
    author: "William Wordsworth",
    linecount: "24",
    lines: ["I wandered lonely as a cloud", "That floats on high o'er vales and hills"],
  },
];

function DetailPage() {
  const { id } = useParams(); 
  const poem = poems.find((poem) => poem.id === id);

  if (!poem) {
    return <p>Poem not found!</p>;
  }

  return <Detail poem={poem} onBack={() => window.history.back()} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro onNext={() => {}} />} />
        <Route path="/dashboard" element={<Dashboard poems={poems} />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/form" element={<Form />} />

      </Routes>
    </Router>
  );
}

export default App;


//<Intro onNext={() => {}} />; 
// return <Detail poem={examplePoem} onBack={() => {}} />;
  // return <Dashboard poems={poems} onViewPoem={() => {}} />;
  // return <Form onNext={() => {}} />;