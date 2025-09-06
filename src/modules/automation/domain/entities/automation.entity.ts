export class Automation {
    constructor(
      public automationId: string,
      public type: string,
      public name: string,
      public startDate: Date,
      public address?: string,      
      public endDate?: Date,
    ) {}
}  