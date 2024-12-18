import { UserDTO } from "../dto";
import { DatabaseService } from "../../database/services/database.service";
export declare class UserService {
    private databaseService;
    constructor(databaseService: DatabaseService);
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
