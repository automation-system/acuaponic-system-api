export class Ph {
    constructor(
      public phId: string,
      public analogDigitalConverter: number,
      public voltaje: number,
      public phValue: number,
      public createdAt: Date,
      public automationId: string,
    ) {}
  }
  