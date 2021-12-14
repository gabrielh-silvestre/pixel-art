import { ArtProvider } from '../hooks/useArt';

import Header from '../components/Header';
import Pallete from '../components/Pallete';
import PalleteSettings from '../components/PalleteSettings';
import Canvas from '../components/Canvas';
import CanvasSettings from '../components/CanvasSettings';
import Eraser from '../components/Eraser';

export default function Home() {
  return (
    <div>
      <Header />
      <ArtProvider>
        <main className="w-4/5 mx-auto mt-12 flex justify-between">
          <div className="h-full flex flex-col justify-around items-center">
            <Pallete />
            <Eraser />
            <PalleteSettings />
            <CanvasSettings />
          </div>
          <Canvas />
        </main>
      </ArtProvider>
    </div>
  );
}
