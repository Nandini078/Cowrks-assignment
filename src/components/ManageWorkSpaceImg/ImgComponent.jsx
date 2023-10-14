import backgrounImg from '../../assets/AA-4.jpg';
import secondImg from '../../assets/managedWorkSpaces.png';
import { Container, Row, Col, Image, Overlay, Popover } from 'react-bootstrap';
import './ImgComponent.css';
import { Managed, Managed_Workspaces, Workspaces } from '../Const';
export const ImgComponent = () => {
    return (
        <div className="image-container">
          <img src={backgrounImg} alt="Background" className="background-image" />
          <div className="overlay">
            <img src={secondImg} alt="Second Image" />
            <h2 class="h2-sapphire elementToScroll"></h2>
            <div className="text">
              <h2 className='img-h2'>{Managed}</h2>
              <h2 className='img-h2'>{Workspaces}</h2>
              <div className='img-p-layout'>
                <p className='img-p'>BUILT FOR YOUR</p>
                <p className='img-p'>BUSINESS</p>
              </div>
            </div>
          </div>
        </div>
    );
}