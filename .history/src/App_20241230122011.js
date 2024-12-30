import "./App.css";

import Repositories from "./components/Repositories";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => login()}>Login</button>
        <button onClick={() => logout()}>Logout</button>
      </header>
      {isAuthenticated && <span>hello</span>}
      {user && <span>{user.displayName}</span>}
    </div>
  );
}

export default App;
