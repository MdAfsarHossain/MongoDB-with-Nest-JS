/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { LibraryModule } from './library/library.module';
import { ProductModule } from './product/product.module';
import { ProjectModule } from './project/project.module';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // For .env
    // ConfigModule.forRoot({
    //   isGlobal: true
    // })
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL!),
    StudentModule,
    UserModule,
    EmployeeModule,
    ProductModule,
    LibraryModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
