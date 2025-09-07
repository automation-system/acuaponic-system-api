export class Ph {
    constructor(
      public phId: string,      
      public phValue: number,
      public analogDigitalConverter?: number,
      public voltaje?: number,
      public automationId?: string,      
      public createdAt?: Date,      
    ) {}
}  