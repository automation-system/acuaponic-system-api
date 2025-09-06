export class Ph {
    constructor(
      public phId: string,      
      public phValue: number,
      public analogDigitalConverter?: number,
      public voltaje?: number,      
      public createdAt?: Date,
      public automationId?: string,
    ) {}
}  