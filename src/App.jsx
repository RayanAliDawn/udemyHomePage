
import Navbar from './components/Navbar';
import Carousol from './components/Carousol';
import theme from './theme'
import { ThemeProvider } from '@mui/material'
import CarousalCard from './components/CarousalCard';
import FeedbackCarousal from './components/FeedbackCarousal';
function App() {


  return (
    <ThemeProvider theme={theme} >
      <Navbar />
      <Carousol />
      <CarousalCard />
      <FeedbackCarousal />
    </ThemeProvider>
  )
}

export default App
