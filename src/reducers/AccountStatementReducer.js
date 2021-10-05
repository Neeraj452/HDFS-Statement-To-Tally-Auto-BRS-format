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
    FileData:[],
    hearder:"",
    dataBaseData:[]
}


export function accountStatementReducer (state = INITIAL_STATE, action) {
    const { payload } = action;
    switch(action.type) {
            case Config.ADD:
                function removeDuplicate(data){
                    let newArray = [];
                    let uniqueObject = {};
                    for (let i in data) {
                        let objfull_name = data[i]['full_name'];
                        uniqueObject[objfull_name] = data[i];
                    }
                      
                    for (const i in uniqueObject) {
                        newArray.push(uniqueObject[i]);
                    }
                    state.EmployeeData=newArray
                   }
              
                state.dataBaseData=[]
                state.dataBaseData=state.EmployeeData
                state.dataBaseData.push(action.data)
                removeDuplicate(state.dataBaseData)
                
                return {...state}
              

            case Config.DELETE:
                state.EmployeeData = state.EmployeeData.filter((Element)=>
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
                state.FileData = JSON.parse(localStorage.getItem("FileData"))
                state.FileData === null && localStorage.setItem("FileData",JSON.stringify(state.FileData=[]))
                state.FileData = JSON.parse(localStorage.getItem("FileData"))
                state.FileData.length >0 ? state.FileData = JSON.parse(localStorage.getItem("FileData")) : state.FileData =[] 
                state.FileData.push(action.data)
                localStorage.setItem("FileData",JSON.stringify(state.FileData))
                return {...state}
               
            case Config.FILECLEAR:
                console.log("action.data",action.data)
                state.FileData = state.FileData.filter((Element)=>
                (Element.id !==action.data)
                )
                localStorage.setItem("FileData",JSON.stringify(state.FileData))
                return {...state}
 
            case Config.HEARDER:
                state.hearder=action.data
                return{...state}


               







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