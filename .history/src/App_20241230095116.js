import { useState } from "react";
import "./App.css";
import {
  signInWithPopup,
  auth,
  provider,
  GithubAuthProvider,
} from "./firebase/firebase";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [repos, setRepos] = useState([]);

  const githubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // Save token for future use
      setToken(accessToken);
      setUser(result.user);
      console.log(result);
      console.log("Logged in user:", result.user);
      console.log("Access token:", accessToken);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={githubLogin}>Login</button>
      </header>
      <Repositories />
    </div>
  );
}

export default App;
