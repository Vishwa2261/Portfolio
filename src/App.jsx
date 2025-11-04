
import Navbar from "./Components/Navbar"
import AnimatedRoutes from "./AnimatedRoutes";
import CustomCursor from "./Components/cursor";
import "../src/App.css"
import AnimatedBackground from "./Components/background";

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}
