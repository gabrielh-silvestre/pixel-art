import { ColorProvider } from '../hooks/useColor';
import { PalleteProvider } from '../hooks/usePallete';

import Header from '../components/Header';
import Pallete from '../components/Pallete';
import PalleteSettings from '../components/PalleteSettings';
import Canvas from '../components/Canvas';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-4/5 mx-auto mt-12 flex justify-between">
        <ColorProvider>
          <div className="h-full flex flex-col justify-around items-center">
            <PalleteProvider>
              <Pallete />
              <PalleteSettings />
            </PalleteProvider>
          </div>
          <Canvas />
        </ColorProvider>
      </main>
    </div>
  );
}
