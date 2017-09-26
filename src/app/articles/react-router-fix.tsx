import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = `# React router with Cloudfront and S3
One of the issues I ran into when setting up this site was the way cloudfront treats url paths and how react router uses url paths.

![alt text](../img/rrfix/rrfix1.png "Example of react routing in code")

While running the site on localhost: http://localhost:4200/about will go to my about me page and when deployed you would expect joshuatoth.com/about would have the same behavior. Instead, I was greeted with this page: 

![alt text](../img/rrfix/rrfix3.png "Permission denied via cloudfront")

What's happening here is: cloudfront is trying to serve files from myS3bucket/about.
Specifically: myS3bucket/about/index.html and returning forbidden because it doesn’t exist.

To get around this issue we want to replace the forbidden page with our landing page, which is normally located at myS3bucket/index.html

To make this replacement go to: 
Cloudfront Manager > The distribution serving your site from S3 > Error pages > *create custom error response*

![alt text](../img/rrfix/rrfix4.png "Cloudfront error page location")

Here we want to replace the 403 forbidden response to return an OK response with our landing page:

![alt text](../img/rrfix/rrfix2.png "Error replacement configuration")

We now have a rule that will load in the /index.html triggering react to respond to the route correctly

![alt text](../img/rrfix/rrfix5.png "Final result with the new error rule")
`;

const divStyle = {
    backgroundImage: 'url(./img/rrfix/rrfixheader.png)'
  };

export const ReactRouterFix = (props) => {
    return (
        <div className='react-router-fix-article'>
            <Article content={content} background={divStyle}/>
        </div>
    );
};
