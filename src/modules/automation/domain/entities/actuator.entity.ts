export class Actuator {
    constructor(
      public actuatorId: string,
      public type: string,
      public status: boolean,            
      public createdAt?: Date,
      public updatedAt?: Date,
      public automationId?: string,
    ) {}
  }
  