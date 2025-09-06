export class UltrasonicDistanceSensor {
    constructor(
        public ultrasonicDistanceSensorId: string,
        public distance: number,
        public time?: number,            
        public createdAt?: Date,   
        public automationId?: string,   
    ) {}
}
  