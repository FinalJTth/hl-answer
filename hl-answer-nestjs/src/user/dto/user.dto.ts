import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
