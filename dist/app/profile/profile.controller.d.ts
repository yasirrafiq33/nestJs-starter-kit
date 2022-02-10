import { User } from '../auth/user.entity';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    getProfiles(): Promise<User[]>;
}
