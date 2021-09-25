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
    EmployeeData:[],
    FileData:[]
}


export function accountStatementReducer (state = INITIAL_STATE, action) {
   
    const { payload } = action;
    switch(action.type) {

            case Config.ADD:
                state.EmployeeData.sort((a, b) => {
                    let fa = a.full_name.toLowerCase(),
                        fb = b.full_name.toLowerCase();
                
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                   });
                return {
                ...state,
                EmployeeData:[
                    ...state.EmployeeData,
                     action.data
                ]}

            case Config.DELETE:
                state.EmployeeData= state.EmployeeData.filter((Element)=>
                 (Element.id !==action.data)
                
                )
                return {...state}
                

            case Config.EMPLOYEE_UPDATE:
                let index = action.data.index;
                let type = action.data.type;
                let value = action.data.value;
                let employee = state.EmployeeData[index];
                if(type ==='username'){
                  employee.username=value; 
                }
                else if(type==='fullname'){
                  employee.full_name=value;
                }
                else{
                    employee.company=value;
                }
                return {...state}
            case Config.FILEUPLOAD:
                return {
                    ...state,
                    FileData:[
                        ...state.FileData,
                           action.data
                        
                    ]}
               







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