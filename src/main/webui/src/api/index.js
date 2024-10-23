import request from './request'

export const TestApi = params => request.get('/api/test', {params: params})