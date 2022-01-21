import { ArtProvider } from '../../hooks/useArt';

import Header from '../../components/Header';
import Pallete from '../../components/Pallete';
import Canvas from '../../components/Canvas';
import Eraser from '../../components/Eraser';
import { Settings } from '../../components/Settings';

import { ContentContainer, HomeMain } from './style';

const MAX_CANVAS_SIZE = 70;
const MIN_CANVAS_SIZE = 5;

const MAX_COLORS_NUMBER = 64;
const MIN_COLORS_NUMBER = 4;

export default function Home() {
  return (
    <>
      <Header />
      <ArtProvider>
        <HomeMain>
          <ContentContainer>
            <Pallete />
            <Eraser />
            <Settings
              settingType='pallete'
              label='Quantas cores?'
              maxValue={MAX_COLORS_NUMBER}
              minValue={MIN_COLORS_NUMBER}
              initialQuatity={16}
            />
            <Settings
              settingType='canvas'
              label='Qual a proporção do quadro?'
              maxValue={MAX_CANVAS_SIZE}
              minValue={MIN_CANVAS_SIZE}
              initialQuatity={MIN_CANVAS_SIZE}
            />
          </ContentContainer>
          <Canvas />
        </HomeMain>
      </ArtProvider>
    </>
  );
}
