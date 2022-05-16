import { Box} from '@chakra-ui/react'
import Homepage from './components/suggestionPage/Home';
import RequestDetail from './components/feedbackDetails';
import AddQuery from './components/AddFeedback';
import RoadMap from './components/RoadMapPage';
import EditQuery from "./components/EditFeedback"
import "../src/index.css"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
    <Box 
      height="90rem" 
      className="App" 
      width={["100%", "100%", "100%", "100%"]} 
      margin="auto"
      bgColor="#f2f2f2">
      <ScrollToTop>
      <Routes>
        
          <Route path ="/" element={<Homepage/>}/>
        <Route path="/Product-Request" element= {<RequestDetail/>}/>
        <Route path="/Roadmap" element= {<RoadMap/>}/>
        <Route path="/Add-Feedbacks" element= {<AddQuery/>}/>
        <Route path="/Edit-Feedback" element= {<EditQuery/>}/>
        
        
      </Routes>
      </ScrollToTop>
      
    </Box> 
    </BrowserRouter>
    
  );
}

export default App;