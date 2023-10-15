import { useEffect, useState } from 'react';
import './FormQuestions.css';
const FormQuestions = () => {
    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        contactNum: '',
        product: '',
        location: '',
        center: '',
        requirement: ''
    });
    const products = [
        'Meeting Rooms',
        'Day Pass',
        'Virtual Office',
        'Events',
        'Flexible Offices',
        'Managed Offices'
    ];
    const locations = [
        'Bengaluru',
        'Mumbai',
        'Delhi NCR',
        'Chennai',
        'Hyderabad',
        'Pune'
    ];
    const centers = [
        'Powai, Winchester',
        'Equinox T3',
        'Worli',
        'Downtown Powai',
        'My location is not listed'
    ]
    const [errors, setErrors] = useState({});

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        console.log('name.....', name, 'value.....', value);
        setFormDetails({
            ...formDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (formDetails.firstName.trim() === '') {
            validationErrors.firstName = 'First name is required';
        }
        if (formDetails.lastName.trim() === '') {
            validationErrors.lastName = 'Last name is required';
        }
        if (formDetails.companyName.trim() === '') {
            validationErrors.companyName = 'Comapny name is required';
        }
        if (formDetails.email.trim() === '') {
            validationErrors.email = 'Email ID is required';
        }
        if (formDetails.contactNum.trim() === '') {
            validationErrors.contactNum = 'Mobile number is required';
        }
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data submitted:', formDetails);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className='form-questions'>
            <h2 className="common-heading">Have questions? We'd love to answer them.</h2>
            <p>Help us with your requirements and we’ll get out workspace experts to reach out to you at the earliest.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="field1">First Name <span style={{ color: 'red' }}>*</span> </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formDetails.firstName}
                            onChange={handleFieldChange}
                        />
                        <span className="error">{errors.firstName}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="field2">Last Name <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            name="lastName"
                            value={formDetails.lastName}
                            onChange={handleFieldChange}
                        />
                        <span className="error">{errors.lastName}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="field1">Company Name <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            name="companyName"
                            value={formDetails.companyName}
                            onChange={handleFieldChange}
                        />
                        <span className="error">{errors.companyName}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="field2">Work Email Address<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="email"
                            name="email"
                            value={formDetails.email}
                            onChange={handleFieldChange}
                        />
                        <span className="error">{errors.email}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="field1">Mobile Number<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="number"
                            name="contactNum"
                            value={formDetails.contactNum}
                            onChange={handleFieldChange}
                        />
                        <span className="error">{errors.contactNum}</span>
                    </div>
                    <div>
                        <label htmlFor="product">Product<span style={{ color: 'red' }}>*</span></label>
                        <select 
                            id="dropdown" 
                            value={formDetails.product} 
                            onChange={handleFieldChange}
                            name="product"
                        >
                            {
                                products.map((item)=>{
                                    return <option value={item}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="product">Location<span style={{ color: 'red' }}>*</span></label>
                        <select 
                            id="dropdown" 
                            value={formDetails.location} 
                            onChange={handleFieldChange}
                            name="location"
                        >
                            {
                                locations.map((item)=>{
                                    return <option value={item}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="product">Center<span style={{ color: 'red' }}>*</span></label>
                        <select 
                            id="dropdown" 
                            value={formDetails.center} 
                            onChange={handleFieldChange}
                            name="center"
                        >
                            {
                                centers.map((item)=>{
                                    return <option value={item}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="field1">Desks Requirment</label>
                        <input
                            type="number"
                            name="requirement"
                            value={formDetails.requirement}
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div className="form-field"></div>
                    <div className="form-field">
                        <button type="submit" style={{ width: '100%' }} >Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default FormQuestions;