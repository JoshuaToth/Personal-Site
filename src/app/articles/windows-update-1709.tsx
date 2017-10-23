import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = `# IIS 10 Windows Fall Creators Update (1709): 'Cannot read \\\\\\\\?\\\\\\<EMPTY\\> configuration file'
So you've installed Windows update 1709 and now your IIS hosted website isn't working?

Common Symptoms: 
- 503 Unavailable
- App pool will immediately stop
- Heaps of application errors that will say something along the line of: 

Windows update 1709 has corrupted the temp files for IIS app pools. 
There is a relatively simple fix: 
* Go to C:\\inetpub\\temp\\appPools 
You will see folders representing your app pools but they look like shortcuts and cant be navigated to
* Delete the folders (If they cant be deleted, run in powershell: 'IISRESET /stop' and then delete)
* Run in powershell IISRESET
* Hit your site again / Start the app pools: The temporary files should repopulate normally
`;

const divStyle = {
    backgroundImage: 'url(./img/iis/helping.jpg)'
  };
// image obtained and licenced for free from https://static.pexels.com/photos/296282/pexels-photo-296282.jpeg
export const WindowsIISFix = (props) => {
    return (
        <div className='WindowsIISFix'>
            <Article content={content} background={divStyle}/>
        </div>
    );
};
