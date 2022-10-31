import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <div className="container">
      <header className="page-title">
        <h1>The Job Board</h1>
      </header>

      <div className="all-box">
        {/* box */}

        <Content
          title="Full Time Sales Associate - Syndney Boutique"
          contractType="CDI -"
          country="Australie -"
          city="Sydney"
        />

        <Content
          title="Agent de Sécurité - Pantin"
          contractType="CDI -"
          country="France -"
          city="Pantin"
        />

        <Content
          title="Responsable d'Atelier (H/F)"
          contractType="CDD -"
          country="France -"
          city="Paris"
        />
      </div>

      {/* footer */}
      <footer className="end">
        <p>Made with React at Le Reacteur By Rico</p>
      </footer>
    </div>
  );
}

export default App;
