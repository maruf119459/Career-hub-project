import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id,logo,job_title, company_name, remote_or_onsite,location,job_type, salary } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt={job_title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <div className='flex gap-3'>
                <p>{company_name}</p> <p>{location}</p>
                </div>
                <div className='flex gap-3'>
                <p>{remote_or_onsite}</p> <p>{job_type}</p> <p>Salary:{salary}</p>
                </div>
                
                <div className="card-actions justify-end">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;

Job.propTypes = {
    job: PropTypes.object.isRequired,
};