import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserRepository } from '../auth/users.repository';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]), AuthModule],
  exports: [],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
