import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { Library } from './schemas/library.schema';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>,
        @InjectModel(Library.name) private libraryModel: Model<Library>
    ) { }

    // Create Library
    async createLibrary(): Promise<Library> {
        const book1 = await this.bookModel.create({
            title: "Nest JS Champion", author: "Afsar"
        })

        const book2 = await this.bookModel.create({
            title: 'Node Champion', author: "Tarek"
        })

        const library = new this.libraryModel({
            name: "Central Library",
            books: [book1.id, book2.id]
        })

        return library.save()
    }

    // Get All Books
    async getLibraries(): Promise<Library[]> {
        return this.libraryModel.find().populate('books');
    }
}
