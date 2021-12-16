import { ArtProvider } from '../../hooks/useArt';

import Header from '../../components/Header';
import Pallete from '../../components/Pallete';
import PalleteSettings from '../../components/PalleteSettings';
import Canvas from '../../components/Canvas';
import CanvasSettings from '../../components/CanvasSettings';
import Eraser from '../../components/Eraser';
import { ContentContainer, HomeMain } from './style';

export default function Home() {
  return (
    <>
      <Header />
      <ArtProvider>
        <HomeMain>
          <ContentContainer>
            <Pallete />
            <Eraser />
            <PalleteSettings />
            <CanvasSettings />
          </ContentContainer>
          <Canvas />
        </HomeMain>
      </ArtProvider>
    </>
  );
}
