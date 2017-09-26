import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = `
# Creating your own website part 2: Setting up a static website with AWS
The way I host this website is via AWS. 
It’s pretty cheap to host and can be set up for free. 
## Step one
Set up and AWS account. 
This is a fairly straightforward process and you will need to register using a credit/debit card to be able to start using services.

## Step two
AWS has a helpful interface for getting started: 
console.aws.amazon.com/quickstart-website/home

![alt text](../img/byo2/byo1.png "Starting the wizard")

Clicking ‘new website’ kicks off the wizard.

![alt text](../img/byo2/byo2.png "Creating the website")

Choose a name for the website, this doesn’t need to reflect your domain name, but it will use this to name your AWS resources.
In this example i’ll upload a copy of my blog site. 

![alt text](../img/byo2/byo3.png "Website dashboard")

The wizard will then redirect you to quickstart website dashboard. 

Here you can: 

See a preview of your site

See the url to your site

Upload a new version of your site. 

Access the three AWS components that your site uses.

A few things were created under the covers here, AWS provides a helpful diagram: 

![alt text](../img/byo2/byo4.png "AWS diagram for a static site")

Your website content sits within the Amazon s3 bucket. It’s a bucket that only you have write access to:

![alt text](../img/byo2/byo5.png "S3 bucket for the site")

The content of the bucket is then served through Amazon cloudfront: 

![alt text](../img/byo2/byo6.png "Cloudfront dist dashboard")

Both of these services sit within the AWS free tier and shouldn’t cost you anything

Route 53 doesn’t get automatically setup for you though. What route 53 does is essentially redirect traffic through your domain, i.e. joshuatoth.com to your cloudfront distribution: https://dzmj0y42e1g3q.cloudfront.net/

This service does cost. 

If you don’t have your own domain name, you can register it through AWS, this cost me $12 USD (And is not covered by AWS credit if you have any)
The Route 53 hosted zone (the part that routes your traffic) costs $0.50 USD per month. 

And that’s it. Even without the route 53 setup you now have a publicly accessible spot on the internet!
`;

const divStyle = {
    backgroundImage: 'url(./img/byo2/byo-header.png)'
  };

export const ByoSite2 = (props) => {
    return (
        <div className='byo-site-2-article'>
            <Article content={content} background={divStyle}/>
        </div>
    );
};
