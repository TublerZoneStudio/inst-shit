import { AxiosResponse } from 'axios'
import $api from '../http'
import { IContent } from '../models/IContent'

export default class UserService {
    static async login(contact: string, password: string): Promise<void> {
        return $api.post('/login', {contact, password})
    }
    
    static async check(admin_psw: string): Promise<AxiosResponse<boolean>> {
        return $api.post('/check', {admin_psw})
    }

    static async getContent(admin_psw: string): Promise<AxiosResponse<IContent[]>> {
        return $api.post<IContent[]>('/content', {admin_psw})
    }
} 