import NavBar from "../components/headerComponents/NavBar"
import TapBar from "../components/headerComponents/TopBar"

export const HeaderComponent = () =>{
    return(
        <>
        <TapBar />
        <div className="container-custom-padding">
            <NavBar />
        </div>
        </>
    )
}