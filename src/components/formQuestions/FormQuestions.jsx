import { useState } from 'react';
import './FormQuestions.css';
const FormQuestions = () => {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');

    const handleField1Change = (e) => {
        setField1(e.target.value);
    };

    const handleField2Change = (e) => {
        setField2(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Field 1:', field1);
        console.log('Field 2:', field2);
    };

    function handleItemClick(){

    }
    return (
        <>
        <div className='form-questions'>
            <h2 className="common-heading">Have questions? We'd love to answer them.</h2>
            <p>Help us with your requirements and we’ll get out workspace experts to reach out to you at the earliest.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="field1">First Name</label>
                        <input
                            type="text"
                            id="field1"
                            name="field1"
                            value={field1}
                            onChange={handleField1Change}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="field2">Last Name</label>
                        <input
                            type="text"
                            id="field2"
                            name="field2"
                            value={field2}
                            onChange={handleField2Change}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="field1">Company Name*</label>
                        <input
                            type="text"
                            id="field1"
                            name="field1"
                            value={field1}
                            onChange={handleField1Change}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="field2">Work Email Address*</label>
                        <input
                            type="text"
                            id="field2"
                            name="field2"
                            value={field2}
                            onChange={handleField2Change}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="field1">Mobile Number*</label>
                        <input
                            type="text"
                            id="field1"
                            name="field1"
                            value={field1}
                            onChange={handleField1Change}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="field2">Product*</label>
                        <input
                            type="text"
                            id="field2"
                            name="field2"
                            value={field2}
                            onChange={handleField2Change}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="field1">Location*</label>
                        <input
                            type="text"
                            id="field1"
                            name="field1"
                            value={field1}
                            onChange={handleField1Change}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="field2">Center*</label>
                        <input
                            type="text"
                            id="field2"
                            name="field2"
                            value={field2}
                            onChange={handleField2Change}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="field1">Desks Requirment</label>
                        <input
                            type="text"
                            id="field1"
                            name="field1"
                            value={field1}
                            onChange={handleField1Change}
                        />
                    </div>
                    <div className="form-field"></div>
                    <div className="form-field">
                        <button type="submit" style={{width: '100%'}}>Submit</button>
                    </div>
                </div>
                
            </form>
        </div>

        <footer className="footer">
      <div className="footer-column">
        <h3>Column 1</h3>
        <ul>
          <li>Subheading 1</li>
          <li>Subheading 2</li>
          <li>Subheading 3</li>
          <li>Subheading 4</li>
          <li>Subheading 5</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Column 2</h3>
        <ul>
          <li>Subheading 1</li>
          <li>Subheading 2</li>
          <li>Subheading 3</li>
          <li>Subheading 4</li>
          <li>Subheading 5</li>
          <li>Subheading 6</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Column 3</h3>
        <ul>
          <li>Subheading 1</li>
          <li>Subheading 2</li>
          <li>Subheading 3</li>
          <li>Subheading 4</li>
          <li>Subheading 5</li>
        </ul>
      </div>
      <div className="footer-column wide-column">
        <h3>Column 4</h3>
        <ul>
          <li>Subheading 1</li>
          <li>Subheading 2</li>
          <li>Subheading 3</li>
        </ul>
      </div>
    </footer>
        </>
    )
}

export default FormQuestions;