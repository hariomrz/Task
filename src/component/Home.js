import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function ValidForm(){

    const VValidation = data =>{
        const errors ={};
        
        if(!data.Name){
            errors.Name ='Name is required'
        } 

       if(!data.LastName){
           errors.LastName = 'LastName is required'
       } else{
    }
       if(!data.Job){
           errors.Job = 'Job title required'
       }
        return errors;
    }

    const navigate = useNavigate()

    const formik = useFormik({
       initialValues :{
           Name:'',
           LastName:'',
           Job:''
       },

       validate : VValidation,

       onSubmit: values =>{
        alert(JSON.stringify(values));
        navigate('/detailspage')
       }
    })
    
    return(
        <div className="container-fluid align-items-center m-5">
            <form onSubmit={formik.handleSubmit} className="w-25">
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input className="form-control" type="text" onBlur={formik.handleBlur} name="Name" value={formik.values.Name} onChange={formik.handleChange} />
                    </dd>
                    <dd className="text-danger">{formik.touched.Name && (formik.errors.Name)?formik.errors.Name:null}</dd>
                    <dt>LastName</dt>
                    <dd>
                        <input className="form-control" type="text" onBlur={formik.handleBlur} name="LastName" value={formik.values.LastName} onChange={formik.handleChange} />
                    </dd>
                    <dd className="text-danger">{formik.touched.LastName && (formik.errors.LastName)?formik.errors.LastName:null}</dd>
                    <dt>Job Title</dt>
                    <dd>
                        <input className="form-control" type="text" onBlur={formik.handleBlur} name="Job" value={formik.values.Job} onChange={formik.handleChange} />
                    </dd>
                    <dd className="text-danger">{formik.touched.Job && (formik.errors.Job)?formik.errors.Job:null}</dd>
                    
                </dl>
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
        </div>
    )
}