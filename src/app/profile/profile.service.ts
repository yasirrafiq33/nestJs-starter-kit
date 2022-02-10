import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';
import { UserRepository } from '../auth/users.repository';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getProfiles(): Promise<User[]> {
    return this.userRepository.find();
  }
}
