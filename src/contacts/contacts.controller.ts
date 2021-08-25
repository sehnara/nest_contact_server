import { Controller, Get } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {

    constructor(private contactsService : ContactsService){}

    @Get()
    findAll() : string{
        return this.contactsService.getAllContacts();
    }
}
