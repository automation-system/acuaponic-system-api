export class UltrasonicDistanceSensor {
    constructor(
        public ultrasonicDistanceSensorId: string,
        public distance: number,
        public time?: number,   
        public automationId?: string,          
        public createdAt?: Date,          
    ) {}
}  