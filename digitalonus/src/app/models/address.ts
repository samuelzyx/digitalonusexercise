import { Geo } from './geo';

export class Address {
    constructor(
        public street: string,
        public suite: string,
        public city: string,
        public zipcode: any,
        public geo: Geo,
    ) { }
}
