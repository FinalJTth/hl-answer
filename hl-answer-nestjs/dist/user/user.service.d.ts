import { UserDTO } from "./dto";
import { DatabaseService } from "../database/database.service";
export declare class UserService {
    private databaseService;
    constructor(databaseService: DatabaseService);
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
