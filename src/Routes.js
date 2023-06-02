import { useRoutes } from 'react-router-dom'
import DesktopComponent1 from './Comps/Desktop1/DesktopComponent1';
import DesktopComponent2 from './Comps/Desktop2/DesktopComponent2';
import DesktopComponent3 from './Comps/Desktop3/DesktopComponent3';
import DesktopComponent4 from './Comps/Desktop4/DesktopComponent4';
import DesktopComponent5 from './Comps/Desktop5/DesktopComponent5';
import DesktopComponent6 from './Comps/Desktop6/DesktopComponent6';
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
        {
            path: 'desktop2',
            element: <DesktopComponent2 />,
        },
        {
                    path: 'desktop4',
            element: <DesktopComponent3 />,
        },
        {
                    path: 'desktop3',
            element: <DesktopComponent4 />,
        },
        {
                    path: 'desktop5',
            element: <DesktopComponent5 />,
        },
        {
            path: 'desktop6',
            element: <DesktopComponent6 />,
        },
    ])
}

export default Routes