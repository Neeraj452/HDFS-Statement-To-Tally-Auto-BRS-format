import Config from "../utils/Config"

const INITIAL_STATE = {
    show: false,
    loading: false,
    allusers: [],
    text: '',
    id:"",
    update_id:"",
    username:"",
    full_name:"",
    company:"",
    ArrayData:[]
}

export function accountStatementReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch(type) {
            case 'getID':
                state.id = action.data;
                return {...state}

            case 'getUsername':
                state.username = action.data;
                return {...state}

            case 'getFull_name':
                state.full_name = action.data;
                return {...state}

            case 'getCompany':
                state.company = action.data;
                return {...state}

            case 'getAdd':
                    return {
                    ...state,
                    ArrayData: [
                        ...state.ArrayData,
                        {
                            id:state.id,
                            username:state.username,
                            full_name:state.full_name,
                            company:state.company
                        }
                    ]
                
                }

            case 'Update_UserID':
                state.update_id = action.data;
                return {...state}

            case 'Update_Username':
                state.username = action.data;
                return {...state}
            case 'Update_Company':
                state.company = action.data;
                return {...state}
            case 'Update_Full_name':
                state.full_name = action.data;
                return {...state}

            case 'Delete':
                state.ArrayData= state.ArrayData.filter((Element)=>
                Element.id!==action.data
                )
                return {...state}

            case Config.EMPLOYEE_UPDATE:

                let index = action.data.index;
                let type = action.data.type;
                let value = action.data.value;
                let employee = {...state.ArrayData[index]};
                if(type==='username'){
                  employee.username=value;
                }
                else if(type==='fullname'){

                }
                else{
                
                }

                console.log(action.data)
                return {...state}







        case 'CLEAR_DATAS':
            return {
                ...state,
                show: false,
                allusers: []
            }
        case 'ACCOUNT_DETAILS_STATUS':
            switch(payload.type) {
                case Config.ACCOUNT_DETAILS_COPY_STARTING:
                    return {
                        ...state,
                        loading: true,
                    }
                case Config.ACCOUNT_DETAILS_COPY_ERROR:
                    return {
                        ...state,
                        loading: false,
                        error: payload.err,
                    }
                case Config.ACCOUNT_DETAILS_COPY_FETCH_COMPLETED:
                    return {
                        ...state,
                        loading: false,
                    }
                case Config.FILE_TRANSFORM_STARTING_EVENT:
                    return {
                        ...state,
                        loading: true,
                    }
                case Config.FILE_TRANSFORM_ERROR:
                    return {
                        ...state,
                        loading: false,
                        error: payload.err,
                    }
                case Config.FILE_TRANSFORM_ERROR_DISMISS:
                    return {
                        ...state,
                        loading: false,
                        customerIdError: false,
                        error: undefined
                    }
                case Config.CUSTOMER_ID_TRANSFORM_ERROR:
                    return {
                        ...state,
                        loading: false,
                        customerIdError: true,
                        error: payload.err,
                    }
                case Config.FILE_TRANSFORM_COMPLETED:
                    return {
                        ...state,
                        loading: false,
                    }
                default:
                    return state    
            } 
        case 'ACCOUNT_FILE_SELECTED':
            return {
                ...state,
                loading: false,
                show: true,
                allusers: payload
            }
        case 'SHOW_STATE_TO_FALSE':
            return {
                ...state,
                show: false
            }
        case 'CONVERT_BUTTON_CLICK':
            return {
                ...state,
                show: true
            }                  
        default:
            return state    
    }
}