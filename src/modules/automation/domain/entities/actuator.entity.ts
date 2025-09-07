export class Actuator {
  constructor(
    public actuatorId: string,
    public type: string,
    public status: boolean, 
    public automationId?: string|null,           
    public createdAt?: Date,
    public updatedAt?: Date,      
  ) {}
}  