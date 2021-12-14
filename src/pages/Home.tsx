import { ColorProvider } from '../hooks/useColor';
import Header from '../components/Header';
import Pallete from '../components/Pallete';
import Canvas from '../components/Canvas';

export default function Home() {
  return (
    <div>
      <Header />
      <ColorProvider>
        <main className="w-4/5 mx-auto mt-12 flex justify-between">
          <Pallete />
          <Canvas />
        </main>
      </ColorProvider>
    </div>
  );
}
