import Taro from '@tarojs/taro';
import api from '../constants/api';
import { getJSON, postJSON } from '../utils/request';

//验证accesstoken
export function accessUserToken(params) {
    return async dispatch => {
        let result = await postJSON(api.checkusertoken, params);
        if (result && result.data && result.data.success) {
            dispatch({ type: 'loginSuccess', accesstoken: params.accesstoken, loginname: result.data.loginname, avatar_url: result.data.avatar_url })
            return result.data;
        } else {
            dispatch({ type: 'loginFail', accesstoken: null, loginname: null })
        }
        return false;
    }
}