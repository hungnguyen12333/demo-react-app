import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test Link
        <button>
          <Link to="/users"> go to user page link</Link>
        </button>
        <button>
          <Link to="/admins"> go to admin page link</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
