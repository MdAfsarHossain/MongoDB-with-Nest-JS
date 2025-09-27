import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { LibraryModule } from './library/library.module';

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
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
