import { Address } from "./Address";
import { Shift } from "./Shift";

export interface BootcampRegistration {
    name: string,
    email: string,
    phone: string,
    address: Address,
    interest: string,
    shift: Shift,
    subscribeForNews?: boolean
}