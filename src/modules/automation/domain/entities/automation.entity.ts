export class Automation {
    constructor(
      public automationId: string,
      public type: string,
      public name: string,
      public address: string,
      public startDate: Date,
      public endDate?: Date,
    ) {}
  }
  