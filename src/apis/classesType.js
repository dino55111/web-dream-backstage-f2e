import axios from '@/plugins/axios'

export const apiGetClassesType = async () => {
    try {
        const response = await axios.get('/api/classesType')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostClassesType = async (classesType) => {
    try {
        const response = await axios.post('/api/classesType', classesType)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutClassesType = async (classesType) => {
    try {
        const response = await axios.put('/api/classesType', classesType)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteClassesType = async (id) => {
    try {
        const response = await axios.delete(`/api/classesType/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}