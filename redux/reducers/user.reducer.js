import { getData,addEducation as Edu,addWorkExperience as Exp, addSkills, addProfile , addNewRecruiter as Rec } from "../actionTypes";

const initialState = {
  first_name: "",
  last_name: "",
  email: '',
  phone_number: '',
  user_education: [],
  user_work_experience: [],
  user_profile: null,
  user_skills: [],
  educLoading:false,
  expLoading: false,
  skillsLoading: false,
  profileLoading:false,
  recruits_for: null,
}

export const userReducer = (state=initialState,action)=>{
  switch(action.type){
    case 'SET_TRUE_SUCCESS':
      state = {
        ...state,
        is_phone_valid:true,
        is_email_valid:true,
        email:'fake@gm.com',
        phone_number:'1111111111'
      }
    case getData.GETDATA_REQUEST : 
      state = {
        ...state,
      }
      break;
    case getData.GETDATA_SUCCESS : 
      state = {
        ...state,
        ...action.payload
      }
      break;
    case getData.GETDATA_FAILURE : 
      state = {
        ...initialState,
      }
      break;
    default:
  }
  return state;
}