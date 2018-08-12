import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = `
# Creating your own website part 3: Using https with AWS and Cloudfront.
Since 2014 Google has been penalising webmasters [not using an ssl certificate.](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html)
Really, there is no reason to not do it. 

Firstly, a couple assumptions: You have been following my few-part guide and your site is currently hosted in AWS.

## Lets'a go

![alt text](../img/byo3/byo1.png "Starting the wizard")

After the initial setup Cloudfront will upfront provide you an ssl certificate for it's distribution. This is all well and good, but once you get a domain name involved, you need your own.
AWS provides this service for free. Pop into AWS certificate manager and request a certificate.

![alt text](../img/byo3/byo2.png "Starting the wizard")

Add in the domain names you wish to run https on. This includes domain names with and without the 'www' if you want to be able to exclude the url bloat. Just adding the domain name will cover all extensions https://joshuatoth.com/byo-site-1 for example. You can also add wildcards to your certificate like: *.joshuatoth.com, but at this point I don't need it and there are certain risks involved that I'm not willing to run for the sake of it.

![alt text](../img/byo3/byo3.png "Starting the wizard")

Keep in mind you can only run one certificate off a Route 53 distribution. If you want to add something to the certificate later, you will need to request a new one. 
Once you have added all your domains listed. Go ahead and submit the request.

![alt text](../img/byo3/byo4.png "Starting the wizard")

Once the certificate has been approved, for me it took a few seconds, you can view it in the certificate manager. It still needs to be applied to your Route 53 distribution however.
Jump into your Cloudfront distribution. And hit edit. Selected your SSL certificate and save.

![alt text](../img/byo3/byo5.png "Starting the wizard")

If you want to force HTTPS, you can also add a behaviour to your Cloudfront distribution that will only use HTTPS. Cloudfront > Distribution > Behaviours

![alt text](../img/byo3/byo6.png "Starting the wizard")

And you're done! Enjoy you little padlock and a nice search ratings boost!
`;

const divStyle = {
    backgroundImage: 'url(./img/byo3/door-green-closed-lock.jpg)'
  };
// image taken for free from https://static.pexels.com/photos/4291/door-green-closed-lock.jpg
export const ByoSite3 = (props) => {
    return (
        <div className='byo-site-3-article'>
            <Article content={content} background={divStyle}/>
        </div>
    );
};
