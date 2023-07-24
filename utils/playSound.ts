import {Platform} from 'react-native';
import Sound from 'react-native-sound';

function playSound(soundPath: string | undefined) {
  console.log('Hello');
  if (Platform.OS === 'android') {
    soundPath = soundPath?.split('/')[1];
  }
  const sound = new Sound(soundPath, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
    sound.play();
  });
}

export {playSound}; // able to export many functions this way {}
