import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileFrame from "./layouts/MobileFrame";
import Welcome from "./pages/Welcom";
import CreateAccount from "./pages/CreateAccount";
import Account from "./pages/Account";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileFrame><Welcome /></MobileFrame>} />
        <Route path="/login" element={<MobileFrame><Login /></MobileFrame>} />
        <Route path="/create-account" element={<MobileFrame><CreateAccount /></MobileFrame>} />
        <Route path="/account" element={<MobileFrame><Account /></MobileFrame>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
