export interface ILogin{
    id: number,
    ip_address:string,
    username:string,
    language:string,
    password:string,
    salt:string,
    email:string,
    activation_code:string,
    forgotten_password_code:string,
    forgotten_password_time:number,
    remember_code:string,
    created_on:number,
    last_login:number,
    active:number,
    first_name:string,
    last_name:string,
    company:string,
    phone:string

}