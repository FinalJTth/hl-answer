import { UserService } from "../services/user.service";
import { UserDTO } from "../dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<{
        name: string;
        email: string;
        id: number;
    }[]>;
    find(id: number): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
    create(dto: UserDTO): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
    update(id: number, dto: UserDTO): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
}
