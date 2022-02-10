import { User } from '../auth/user.entity';
import { UserRepository } from '../auth/users.repository';
export declare class ProfileService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getProfiles(): Promise<User[]>;
}
