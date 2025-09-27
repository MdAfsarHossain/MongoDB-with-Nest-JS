import { Injectable } from '@nestjs/common';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>,
        @InjectModel(Profile.name) private profileModel: Model<Profile>,
    ) { }

    // Create new employee
    async createEmployee(): Promise<Employee> {
        const profile = await new this.profileModel({
            age: 20,
            qualification: "Masters"
        }).save()
        const employee = new this.employeeModel({
            name: "Afsar",
            profile: profile._id
        })

        return employee.save()
    }

    // Get All Employee
    async findAll(): Promise<Employee[]> {
        return this.employeeModel.find().populate('profile').exec()
    }
}
