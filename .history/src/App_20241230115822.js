import "./App.css";

import Repositories from "./components/Repositories";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  const { name, login, logout, isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <button onClick={() => login()}>Login</button>
        </header>
        <Repositories />
        {<span>hello</span>}
      </div>
    </AuthProvider>
  );
}

export default App;
