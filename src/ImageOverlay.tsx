import { Img, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { slide } from '@remotion/transitions/slide';
import { clockWipe } from '@remotion/transitions/clock-wipe';
import { fade } from '@remotion/transitions/fade';
import { flip } from '@remotion/transitions/flip';
import { wipe } from '@remotion/transitions/wipe';
import { useVideoConfig } from 'remotion';

export const ImageOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Function to handle zoom in and out
  const getZoomAnimation = (fromFrame: number, toFrame: number) => {
    return interpolate(
      frame,
      [fromFrame, (fromFrame + toFrame) / 2, toFrame],
      [1, 1.2, 1],
      { extrapolateRight: 'clamp' }
    );
  };

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={60}>
        <Img
          src={staticFile('image4.jpg')}
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${getZoomAnimation(0, 60)})`,
          }}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={120}>
        <Img
          src={staticFile('Image1.png')}
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${getZoomAnimation(60, 180)})`,
          }}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={clockWipe({ width, height })}
        timing={linearTiming({ durationInFrames: 30 })}
      />
      <TransitionSeries.Sequence durationInFrames={90}>
        <Img
          src={staticFile('Image2.png')}
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${getZoomAnimation(150, 240)})`,
          }}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={120}>
        <Img
          src={staticFile('Image3.jpg')}
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${getZoomAnimation(220, 310)})`,
          }}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={flip()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={120}>
        <Img
          src={staticFile('image4.jpg')}
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${getZoomAnimation(320, 430)})`,
          }}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: 'from-bottom-right' })}
        timing={linearTiming({ durationInFrames: 30 })}
      />
      <TransitionSeries.Sequence durationInFrames={120}>
        <Img
          src={staticFile('Image5.jpg')}
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${getZoomAnimation(410, 540)})`,
          }}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: 'from-top' })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={150}>
        <Img
          src={staticFile('Image6.jpg')}
          style={{
            width: '100%',
            height: '100%',
            transform: `scale(${getZoomAnimation(540, 670)})`,
          }}
        />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
