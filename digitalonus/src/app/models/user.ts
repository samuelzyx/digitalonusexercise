import { Address } from './address';
import { Company } from './company';

export class User {
    constructor(
        public id: string,
        public name: string,
        public usename: string,
        public address: Address,
        public phone: string,
        public website: string,
        public company: Company
    ) { }
}
