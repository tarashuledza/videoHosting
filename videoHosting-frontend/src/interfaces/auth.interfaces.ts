export interface IRegister {
	name: string
	email: string
	password: string
}
export interface IAuth extends Omit<IRegister, 'name'> {}
export interface IResult {
	message: string
	isSuccess: boolean
}
export interface IUser {
	id: number
	email: string
	name: string
	isAdmin: boolean
}
export interface IMeResponse {
	isSuccess: boolean
	user: IUser
}
