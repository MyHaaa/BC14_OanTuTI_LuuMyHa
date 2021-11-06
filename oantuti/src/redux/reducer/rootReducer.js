import {combineReducers} from 'redux'
import BTOanTuTiReducer from './BTOanTuTiReducer'

export const rootReducer = combineReducers({
    //Nơi sẽ chứa các reducer cho từng nghiệp vụ (store con)
    BTOanTuTiReducer: BTOanTuTiReducer
    
})