import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Employee.name, schema: EmployeeSchema },
            { name: Profile.name, schema: ProfileSchema }
        ])
    ],
    providers: [EmployeeService],
    controllers: [EmployeeController]
})
export class EmployeeModule { }
