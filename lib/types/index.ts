export interface IProfileCard {
  handleTimeFrameTypeChange: () => Record<string, unknown>;
}

export interface ITrackingCard {
  title: string;
  timeFrames: string;
  timeFrameType: string;
}

export interface ITrackingCardCollection {
  timeFrameType: string;
}
