import { Audio, staticFile } from 'remotion';
import { ImageOverlay } from './ImageOverlay';
import SynchronizedText from './SynchronizedText'; // Import the component

const textParts = [
  { text: "The tortoise was mocked for being slow-moving,",duration:60, start:0 },
  { text: "and the hare challenges it to a race.",duration:90, start:60},
  { text: "The hare leaves the tortoise behind", duration:40, start:150 },
  { text: "and being very confident of its triumph,", duration:70, start:190 },
  { text: "falls asleep midway.", duration:45, start:260 },
  { text: "Once he wakes up, he finds that his competitor,", duration:95, start:305 },
  { text: "crawling slowly but steadily, has arrived before him.", duration:103, start:400 },
  { text: "The tortoise won,", duration:42, start:503 },
  { text: "teaching us that slow, steady work brings success.", duration:135, start:545 },
];

export const MyVideo: React.FC = () => {

  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Audio src={staticFile('audio1.mp3')} />
      <ImageOverlay />
      <div
        style={{
          position: 'absolute',
          fontSize: 100,
        }}
      >
        <SynchronizedText textParts={textParts} />
      </div>
    </div>
  );
};
