const instruments = {
  piccolo: {
    octave: 2,
    pitches: [
      "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", 
      "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6", 
      "C7", "Db7", "D7", "Eb7", "E7", "F7"]
  },
  flute: {
    octave: 1,
    pitches: ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
  "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", 
  "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6", 
  "C7"]
  },
  oboe: {
    octave: 1,
    pitches: [
      "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
      "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", 
      "C6", "Db6", "D6"
    ]
  },
  bassoon: {
    octave: -1,
    pitches: [
      "Bb1", "B1",
      "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4"
     ]
  },
  clarinet: {
    octave: 0,
    pitches: [
      "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
      "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", 
      "C6", "Db6", "D6", "Eb6"
    ]
  },
  bassclarinet: {
    octave: -1,
    pitches: [
      "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4"
    ]
  },
  altosax: {
    octave: 0,
    pitches: [
      "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
      "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5"
    ]
  },
  tenorsax: {
    octave: 0,
    pitches: [
      "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
      "C5", "Db5", "D5", "Eb5"
    ]
  },
  barisax: {
    octave: -1,
    pitches: [
      "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4"
    ]
  },
  trumpet: {
    octave: 0,
    pitches: [
      "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
      "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5"
    ]
  },
  frenchhorn: {
    octave: 0,
    pitches: [
      "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
      "C5", "Db5", "D5", "Eb5", "E5", "F5"
    ]
  },
  trombone: {
    octave: -1,
    pitches: [
      "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4"
    ]
  },
  baritone: {
    octave: -1,
    pitches: [
      "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4"
    ]
  },
  tuba: {
    octave: -2,
    pitches: [
      "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1",
      "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3"
    ]
  },
  piano: {
    octave: 0,
    pitches: [
      "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1",
      "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
      "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", 
      "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6", 
      "C7", "Db7", "D7", "Eb7", "E7", "F7"
    ]
  }
};

const allNotes = [
      "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1",
      "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
      "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", 
      "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", 
      "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", 
      "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6", 
      "C7", "Db7", "D7", "Eb7", "E7", "F7"
];


