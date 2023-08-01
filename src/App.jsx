import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import {CustomizationProvider} from "./components/Customization";

function App() {
  return (
    <CustomizationProvider>
      <Canvas>
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 20]} />
        <Experience />
      </Canvas>

      <Configurator />
    </CustomizationProvider>
  );
}

export default App;
