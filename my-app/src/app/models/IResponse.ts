export interface IResponse<T> {
    success: boolean,
    error: any,
    data: T[]
}