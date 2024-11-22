import { Poem } from "../../types/poems";
import "./detail.css";

interface DetailProps {
  poem: Poem;
  onBack: () => void;
}

const Detail: React.FC<DetailProps> = ({ poem, onBack }) => {
  const { author, linecount, lines, title } = poem;


  return (
    <div className="detail">
      <button className="back-button" onClick={onBack}>
        &larr; Back
      </button>
      <h1 className="title">{title}</h1>
      <h2 className="author">By {author}</h2>
      <p className="lines">{linecount}</p>
      <p className="poem-lines">{lines}</p>
    </div>
  );
};

export default Detail;
