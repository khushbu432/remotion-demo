import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";
// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={680} 
        fps={30}
        width={1024}
        height={1080}
      />
    </>
  );
};
// src/Video.tsx
