// import React from "react";
// import SignUp from "./Components/SignUp";
// import HomeScreen from "./Components/HomeScreen";
// import Qr from "./Components/Qr";

// function App() {
//   return (
//     <>
//       {/* <SignUp /> */}
//       {/* <HomeScreen /> */}
//       <Qr />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import HomeScreen from "./Components/HomeScreen";
import Qr from "./Components/Qr";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/qr" element={<Qr />} />
      </Routes>
    </Router>
  );
}

export default App;
