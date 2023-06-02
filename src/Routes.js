import { useRoutes } from 'react-router-dom'
import DesktopComponent1 from './Comps/DesktopComponent1';
import Pagenotfound from './Comps/Pagenotfound';



//this variable is for local development 
export const startUrl = `/`;



function Routes() {


    return useRoutes([
        {
            path: `*`,
            element: <Pagenotfound />
        },
        {
            path: startUrl,
            element: <DesktopComponent1 />,
        },
    ])
}

export default Routes