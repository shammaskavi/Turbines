import "./App.css";
// import { app } from "./firebase-config";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Components/Common/Login/Login";
import Signup from "./Components/Common/Signup/Signup";

import Dashboard from "./Components/Main/Pages/Dashboard/Dashboard";
import LiveData from "./Components/Main/Pages/LiveData/Livedata";
import Settings from "./Components/Main/Pages/Settings/Settings";
import Navbar from "./Components/Main/Components/Navbar/Navbar";

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleAction = (id) => {
  //   const authentication = getAuth();
  //   console.log(id);
  //   if (id === 2) {
  //     createUserWithEmailAndPassword(authentication, email, password).then(
  //       (response) => {
  //         console.log(response);
  //       }
  //     );
  //   } else if (id === 1) {
  //     signInWithEmailAndPassword(authentication, email, password).then(
  //       (response) => {
  //         console.log(response);
  //       }
  //     );
  //   }
  // };

  let navigate = useNavigate();
  const handleAction = () => {
    console.log("handling navigation");
    let path = `newPath`;
    navigate(path);
  };

  return (
    <Router>
      <Navbar />
      <div className="App">
        <>
          <Routes>
            <Route
              path="/login"
              element={<Login />}
              // setEmail={setEmail}
              // setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />

            <Route
              path="/register"
              element={<Signup />}
              // setEmail={setEmail}
              // setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />

            <Route exact path="/" element={<Dashboard />} />

            <Route exact path="/data" element={<LiveData />} />

            <Route exact path="/setting" element={<Settings />} />

            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;

// something in the way, ouuuhh hooo somethig in the wayy yeaah
