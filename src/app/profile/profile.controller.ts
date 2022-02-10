import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
import { ProfileService } from './profile.service';

@Controller('user')
@UseGuards(AuthGuard())
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Get('/profile')
  getProfiles(): Promise<User[]> {
    return this.profileService.getProfiles();
  }
}
