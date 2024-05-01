import {NavButton} from '../components/navBar/navButton';
import {NavBar} from '../components/navBar/navButton';



export function Hotel() {
    return (
        <>
            <NavBar
                children1={<NavButton children="ACCUEIL" link={"./home"}/>}
                children2={<NavButton children="HOTEL" />}
                children3={<NavButton children="VOLES" />}
                children4={<NavButton children="S'INSCRIRE" />}
                children5={<NavButton children="LOGIN" />}
            />  

        </>
    )

}