import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './app/auth/auth.module';
import { ProfileModule } from './app/profile/profile.module';

@Module({
  imports: [
    AuthModule,
    ProfileModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'wellness-dashboard',
      username: 'root',
      password: 'mysql123',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
