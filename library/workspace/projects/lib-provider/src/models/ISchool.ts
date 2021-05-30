import { IStudent } from "./IStudent";

export interface ISchool {
    id: number,
    name: string,
    students: IStudent[]
}