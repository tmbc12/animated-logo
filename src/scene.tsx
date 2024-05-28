import { Canvas } from "@react-three/fiber";
import Ring from "./ring";

export default function Scene() {
  return (
    <Canvas className="bg-black">
      <Ring text="TMBCTMBCTMBCTMBC" radius={2} height={4} segments={32} />
    </Canvas>
  );
}
