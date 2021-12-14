import { ColorProvider } from '../hooks/useColor';
import { PalleteProvider } from '../hooks/usePallete';
import { CanvasProvider } from '../hooks/useCanvas';

import Header from '../components/Header';
import Pallete from '../components/Pallete';
import PalleteSettings from '../components/PalleteSettings';
import Canvas from '../components/Canvas';
import CanvasSettings from '../components/CanvasSettings';

export default function Home() {
  return (
    <div>
      <Header />
      <ColorProvider>
        <CanvasProvider>
          <PalleteProvider>
            <main className="w-4/5 mx-auto mt-12 flex justify-between">
              <div className="h-full flex flex-col justify-around items-center">
                <Pallete />
                <PalleteSettings />
                <CanvasSettings />
              </div>
              <Canvas />
            </main>
          </PalleteProvider>
        </CanvasProvider>
      </ColorProvider>
    </div>
  );
}
