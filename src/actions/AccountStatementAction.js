import Config from "../utils/Config";

export const ID = (res) => ({
    type: 'getID',
    data:res
});

export const Username = (res) => ({
    type: 'getUsername',   
    data:res
});

export const Full_name = (res) => ({
    type: 'getFull_name',
    data:res
});

export const Company = (res) => ({
    type: 'getCompany',
    data:res
});

export const AddList = () => ({
    type: 'getAdd',
   
});

export const User_ID = (res) => ({
    type: 'Update_UserID',
    data:res
});

export const DeleteData = (res) => ({
    type: 'Delete',
    data:res
});

export const User_Username = (res) => ({
    type: 'Update_Username',
    data:res
});

export const User_Full_name = (res) => ({
    type: 'Update_Full_name',
    data:res
});

export const User_Company = (res) => ({
    type: 'Update_Company',
    data:res
});

export const employeeUpdate = (res) => ({
    type: Config.EMPLOYEE_UPDATE,
    data:res
});









export const convertButtonClick = () => ({
    type: 'CONVERT_BUTTON_CLICK'
});

export const userDetailsClear = () => ({
    type: 'CLEAR_DATAS'
});

export const showStateToFalse = () => ({
    type: 'SHOW_STATE_TO_FALSE',
});

export const onAccountsFetched = (accounts) => async (dispatch) => {
    accounts.sort((accountDetailsA, accountDetailsB) => {
        let nameA = accountDetailsA.accountName.toUpperCase();
        let nameB = accountDetailsB.accountName.toUpperCase();
        return (nameA < nameB) ? -1 : (nameB > nameA) ? 1 : 0;
    });
    dispatch ({
        type: 'ACCOUNT_FILE_SELECTED',
        payload: accounts
    });
};

export const accDetailsStatus = (data) => ({
    type: 'ACCOUNT_DETAILS_STATUS',
    payload: data
});
