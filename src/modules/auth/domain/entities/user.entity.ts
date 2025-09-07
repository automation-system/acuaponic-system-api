export class User {
    constructor(
        public readonly userId: string,
        public name: string,
        public lastName: string,
        public email: string,
        public cellPhoneNumber: string,
        public dni: string,
        public userName: string,
        public password: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {}
}