import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from "store";
import { Provider } from 'react-redux';

import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Events from "./containers/pages/Events";
import Contact from "./containers/pages/Contact";
import Characters from "./containers/pages/Characters";
import News from "./containers/pages/News";
import Community from "./containers/pages/Community";
import Guide from "./containers/pages/Guide";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/news" element={<News />} />
          <Route path="/community" element={<Community />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
