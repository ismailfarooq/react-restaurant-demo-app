import { Link } from "react-router-dom";
import logo from './../../assets/logo.svg';
import './index.scss';

function Home() {
  return (
    <div className="App">
      <h2>Content from Home component</h2>
      <img src={logo} className="app-logo" alt="logo" />

      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products (From App)</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Home;
