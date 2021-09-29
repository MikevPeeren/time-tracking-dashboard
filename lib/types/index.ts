export interface IProfileCard {
  handleTimeFrameTypeChange: (arg0: string) => void;
}

export interface ITrackingCard {
  title: string;
  timeFrames: {
    [k: string]: { current: number; previous: number };
  };
  timeFrameType: string;
}

export interface ITrackingCardCollection {
  timeFrameData: [
    {
      title: string;
      timeFrames: { [k: string]: { current: number; previous: number } };
      index: number;
    }
  ];
  timeFrameType: string;
}
