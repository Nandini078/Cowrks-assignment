import { useEffect, useState } from "react";
import { MANAGED_OFFICE } from "../Const";
import '../BuiltForEnterprises/BuiltForEnterprises.css';
import { Image } from "react-bootstrap";
import EnterPrisesImg from '../../assets/COWRKS-Managed-Office-1.png';
import './managedOffices.css';
import YouTube from "react-youtube";

const ManagedOffice = ({videoUrl}) =>{
    const opts = {
        height: '390',
        playerVars: {
          autoplay: 1,
        },
    };
    const videoId = new URL(videoUrl).searchParams.get('v');
    return(
        <>
        <div className="built-enterprises-layout">
            <h2 className="common-heading">Built for Enterprises</h2>
            <p className="managed-office">{MANAGED_OFFICE}</p>
            <div className="youtube-video">
            <YouTube videoId={videoId} opts={opts} />
            </div>
        </div>
        </>
    )
}
export default ManagedOffice;