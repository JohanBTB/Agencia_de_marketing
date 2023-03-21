import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from "store";
import { Provider } from 'react-redux';

import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Cases from "./containers/pages/Cases";
import Services from "./containers/pages/Services";
import Aboutus from "./containers/pages/About-us";
import Blog from "./containers/pages/Blog";
import Contacts from "./containers/pages/Contacts";
import Careers from "./containers/pages/Careers";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
