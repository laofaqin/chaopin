import * as API from './index'

export default{
    getUsersInfo(){
        return API.GET('/api/v1/users/info')
    }
}