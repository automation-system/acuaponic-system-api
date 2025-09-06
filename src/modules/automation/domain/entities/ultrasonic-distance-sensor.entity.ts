export class UltrasonicDistanceSensor {
    constructor(
      public ultrasonicDistanceSensorId: string,
      public time: number,
      public distance: number,
      public automationId: string,
      public createdAt?: Date,      
    ) {}
  }
  