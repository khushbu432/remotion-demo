import React from 'react';
import { interpolate, Sequence, useCurrentFrame } from 'remotion';

const SynchronizedText: React.FC<{ textParts: { text: string; duration: number; start: number; }[] }> = ({ textParts }) => {
  const frame = useCurrentFrame();

  return (
    <>
      {textParts.map((val, key) => {
        const startFrame = val.start;

        return (
          <Sequence key={key} from={startFrame} durationInFrames={val.duration}>
            <div
              style={{
                opacity: interpolate(frame - startFrame, [0, 30], [0, 1]),
                transform: `translateY(${interpolate(frame - startFrame, [0, 30], [100, 0])}px)`,
              }}
            >
              {val.text}
            </div>
          </Sequence>
        );
      })}
    </>
  );
};

export default SynchronizedText;
