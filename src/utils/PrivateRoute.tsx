import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element
};

export default function PrivateRoute({children}: Props){
    const form =  JSON.parse(localStorage.getItem("form") || "") 
    if(form.name !== "" && form.phoneNumber !== "" && form.email !== ""){
       return children
    }else{
       return <Navigate to="/" state={"fill the form first"}/>
    }
}