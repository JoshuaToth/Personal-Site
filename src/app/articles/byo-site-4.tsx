import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Article }  from '../components/article';

import './about.scss';
declare function require(name: string);

var content = `
# Creating your own website part 4: Adding Travis deployment
Now you have your site setup and you want those updates to flow out asap. This guide will be using github as a repository host. 
Travis-ci.org is a nice free build and deployment tool you can utilise. 
A caveat here is your repository needs to be public in order to use the free version. For those who have private repositories, there is a Travis-ci.com domain that you can use. (Although there is a cost associated with this)

First thing, hook up your github profile to Travis. You can do this by signing into Travis using github and giving them access to your repository information. 

![alt text](../img/byo4/byo1.png "Sign up to Travis")
![alt text](../img/byo4/byo2.png "Attaching Travis to your githb repositories.")

At this stage you shouldn't have any repositories turned on automatically. Click your account name, you should be presented with a list of all your public repositories. Go ahead and click the toggle to enable travis to run builds off your commit. 

<image3>

Right now, every time you push to your master branch, Travis will build your project. It will have an issue though, it won't know how. 
As far as I know it will try and detect the build process you use (In my case, gulp) and give it it's best shot. 
Let's make this a little more specific. Create a file in your root directory called '.travis.yml' The dot at the start of the file is important. Depending on your OS this may be a bit annoying to do.
The content of the yaml will have a few parts: 

(For those unfamiliar to yaml, spaces are very important, so make sure you keep an eye on them.)
\`\`\`
language: node_js
node_js:
- stable
script:
- gulp default
deploy:
  provider: s3
  bucket: aws-website-joshuatoth-BUCKETID
  acl: public_read
  skip_cleanup: true
  local_dir: dist
  on:
    branch: master
    tags: true
  secret_access_key:
    secure: <MY SECURE KEY>
  access_key_id:
    secure: <MY SECURE ID>
\`\`\`
Language: In this case we are using typescript that compiles down to javascript, so node_js is the way to go. 

node_js: This is the version of node to use. If you are concerned about breaking changes, I would use a specific version here, rather than - stable. For me - stable is fine. 

script: The will be the actually build command. In the case gulp default will run my build steps. 

deploy: These are the settings you will need for our website deployments.

provider: In this case, s3

bucket: your bucket name you want to deploy to. You can check aws for this under s3 -> your bucket.

on: These are the requirements for kicking off a deployment

branch: If you want to use a different 'prod' branch you can have a watch on that, in this case I just using the master branch.

tags: This is important. Meaning the deploy process will ONLY be run when you deploy with a tagged branch. Ill cover this process further down the post. 

secure_access_key and secure_key_id: These are how Travis is able to deploy to your S3 bucket. 
While the bucket is public read, permission is still needed to edit the bucket. 

These can be stored in either code or added as an environment variable though Travis to pick up during the process. 
[Travis has a good write up, here:](https://docs.travis-ci.com/user/deployment/s3/)

So there is less confusion with the Travis instructions, setting your acl to public_read is all you need to do in terms of bucket policy. 
I am using the default s3 region, but it can be explicitly specified with a 'region' option. 
Now that's complete, let's push your changes to master. You should see a build kick off in Travis right away: 

![alt text](../img/byo4/byo3.png "Build Kickoff")

Travis will output the entire build log and you should at this point be able to see if there are any issues with your process. If there are, fix them up and push to master again. A helpful tip in reproducing issues, run a 'git clean -xdf' in your command-line tool and then run npm install again. I would say 90% of the time any discrepancies between your local environment and the build server are package differences. 

Once your build is green/passing you are good to go. 
Let's get this deploying. 
Make sure your package.json file has a version: 
\`\`\`
{
  "author": "Joshua Toth",
  "version": "1.3.0",
  "dependencies": {
    ...
\`\`\`
In my case, it is up to version 1.3.0
Lets go ahead and tag our latest commit and push it to master with the tag. Note: Tags can be pushed retroactively. 

\`\`\`
git tag -a 1.3.0 -m'My first deployment'
git push --follow-tags
\`\`\`

You should see a new build in Travis with your tag name: 

![alt text](../img/byo4/byo4.png "Deployed!")

Keep an eye on your website and the change should be deployed within ~ 10 minutes.
Congratulations! You now have CI/CD within your site, no more zip, drag and drop!

## PS
- This can clutter your bucket with automatically generated filenames, you can specify filenames to mitigate this behaviour.
`;

const divStyle = {
    backgroundImage: 'url(./img/byo4/train.png)'
  };

export const ByoSite4 = (props) => {
    return (
        <div className='byo-site-4-article'>
            <Article content={content} background={divStyle}/>
        </div>
    );
};
