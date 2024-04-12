import axios from 'axios'
import { BookType } from '@/types/types';


export async function fetchData(endpoint: string) {
    const responseTemplate = {
        data: null,
        error: null
    }
    try {
        const res = await axios.get<any>(`http://localhost:4000/${endpoint}`)
        responseTemplate.data = res.data;
        return responseTemplate;
    } catch (error: any) {
        if (error.message) {
            responseTemplate.error = error.message;
            return responseTemplate;
        } else if (error.request) {
            responseTemplate.error = error.message;
            return responseTemplate;
        } else {
            console.error()
        }
    }
}