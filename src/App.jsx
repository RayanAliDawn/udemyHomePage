
import Navbar from './components/Navbar';
import Carousol from './components/Carousol';
import theme from './theme'
import { Container, ThemeProvider } from '@mui/material'
import CarousalCard from './components/CarousalCard';
import FeedbackCarousal from './components/FeedbackCarousal';
import StudentsViewing from './components/StudentsViewing';
import TopCategories from './components/TopCategories';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {


  return (
    <ThemeProvider theme={theme} >
      <Navbar />
      <Carousol />
      <CarousalCard />
      <FeedbackCarousal />
      <StudentsViewing />
      <TopCategories />
      <Featured />

      <Footer />
    </ThemeProvider>
  )
}

export default App
