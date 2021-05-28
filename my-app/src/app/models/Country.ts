import { ICountry } from './ICountry'

export class Country implements ICountry {
    constructor(
        public code: number,
        public name: string
    ) {
        
    }
}