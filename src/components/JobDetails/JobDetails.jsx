import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStoage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idINT = parseInt(id)
    const job = jobs.find(job => job.id === idINT);

    const handleApplyJob =() =>{
        if(saveJobApplication(idINT)){
            toast("Successfuly Apply.");
        }
        else{
            toast("You Already Apply !");
        }
    }

    return (
        <div>
            <Helmet>
                <title>Career Hub | {job.job_title}</title>
            </Helmet>
            <h2>Job details {idINT}</h2>
            <p>{job.job_title}</p>
            <p>{job.job_description}</p>
            <p>{job.job_responsibility}</p>
            <button onClick={()=>handleApplyJob()} className="btn btn-primary">Apply</button>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;