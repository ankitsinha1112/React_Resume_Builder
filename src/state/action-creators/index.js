export const addSkill = (skill) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_SKILL",
            payload: skill
        })
    }
}

export const removeSkill = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_SKILL",
            payload: index
        })
    }
}

