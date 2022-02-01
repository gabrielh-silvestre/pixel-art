import { useArt } from '../../hooks/useArt';

import Pixel from '../Pixel';


export default function Lines() {
  const { size } = useArt();
  const pixels = new Array(size).fill(1);

  return (
    <div className="flex">
      {pixels.map((_, i) => (
        <Pixel index={i} />
      ))}
    </div>
  );
}
