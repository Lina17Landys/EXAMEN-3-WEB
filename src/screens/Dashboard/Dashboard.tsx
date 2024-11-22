import "./dashboard.css";
import CreatePoemButton from "../../components/addPoemBtn/newPoem";
import { useNavigate } from "react-router-dom";

interface DashboardProps {
  poems: {
    id: string;
    title: string;
    excerpt: string;
  }[];
}

const Dashboard: React.FC<DashboardProps> = ({ poems }) => {
  const navigate = useNavigate();

  const handleViewPoem = (id: string) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button className="poem-button" onClick={() => handleViewPoem(poem.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>
<CreatePoemButton/>
      <div className="btn">

      </div>
    </div>
  );
};

export default Dashboard;

