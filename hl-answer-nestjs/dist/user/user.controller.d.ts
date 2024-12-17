import { UserService } from "./user.service";
import { UserDTO } from "./dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
    }[]>;
    find(id: number): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    create(dto: UserDTO): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    update(id: number, dto: UserDTO): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
}
