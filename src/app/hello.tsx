import { ArticleContent } from './components/article-content';
import * as React from 'react';
import * as Scroll from 'react-scroll';
import { Grid, Row, Col } from 'react-bootstrap';
import './hello.scss';

interface IHelloProps {};

interface IHelloState {};

export class Hello extends React.Component<IHelloProps, IHelloState> {

  currentPage = 'about-me';

  divStyle = {
    backgroundImage: 'url(./img/pexels-photo-851555.jpeg)'
  };

  scrollPage() : void {
    window.scrollTo(0, window.innerHeight);
  }

  scrollTo(point: string) : void  {
    Scroll.scroller.scrollTo(point,
      {
        duration: 700,
        delay: 20,
        smooth: 'easeInOutQuint'
    });
  }

  showPage(pageTitle: string) : void {
    var el = document.getElementById(this.currentPage);
    el.style.visibility = 'hidden';
    el.style.display = 'none';

    el = document.getElementById(pageTitle);
    el.style.visibility = 'visible';
    el.style.display = 'inline';

    this.currentPage = pageTitle;
  }

  render() {
    return (
      <div>
        <Grid className='container-full'>
          <Row className='main-header'>
            <div className='intro' style={this.divStyle}>
              <div className='title-name'>
                <h1 id='titlename'>{'Joshua Toth'}</h1>
                <h4>{'Holistic software engineer'}</h4>
                <a target='blank' href='https://www.twitter.com/tothjoshuaj'><i className='fa fa-twitter fa-5'></i></a>
                <a target='blank' href='https://github.com/JoshuaToth'><i className='fa fa-github fa-5'></i></a>
                <a target='blank' href='https://www.linkedin.com/in/joshua-toth-aab7b8b0/'><i className='fa fa-linkedin fa-5'></i></a>
                <a itemType='application/rss+xml' href='http://feeds.feedburner.com/JoshuaToth'><i className='fa fa-rss fa-5'></i></a>
              </div>
              <i className='fa fa-angle-double-down fa-6' aria-hidden='true' onClick={() => this.scrollTo('the-rest')}></i>
              
            </div>
          </Row>
          <Row id='the-rest' className='the-rest'>
            <Col md={3}></Col>
            <Col md={6}>
              <ArticleContent
                title={'A first look into React Native'}
                tldr={`Why did I try React Native? I’ve been toying with an app idea and wanted to give app development another shot.`}
                date={'15th April 2018'}
                articleLocation={'https://medium.com/@tothjoshuaj/a-first-look-into-react-native-10583925e7d1'}
              />
              <ArticleContent
                title={'Windows: Use PuTTY for git SSH (Or any SSH agent)'}
                tldr={`Something that seems to come up a lot when using git on windows is wanting to use an SSH client to manage keys. When you want to use something like PuTTY its a fairly simple, but somewhat hidden process.`}
                date={'6th March 2018'}
                articleLocation={'https://medium.com/@tothjoshuaj/windows-use-putty-for-git-ssh-or-any-ssh-agent-9929b578cf44'}
              />
              <ArticleContent
                title={'Git extensions: Show commit date instead of author date'}
                tldr={`Git extensions has an annoying default setting of showing when a commit was authored, rather than when it was committed to the repository…`}
                date={'5th March 2018'}
                articleLocation={'https://medium.com/@tothjoshuaj/git-extensions-show-commit-date-instead-of-author-date-75b4d8b0a022'}
              />
              <ArticleContent
                title={'Breaking apart your Monolith: Free your Front-end'}
                tldr={`Breaking apart a monolith is something that takes a while… a long while. There are a few things that while not reducing code, can have a pretty large impact on the overall agility of your product development.`}
                date={'5th March 2018'}
                articleLocation={'https://medium.com/@tothjoshuaj/breaking-apart-your-monolith-free-your-front-end-1d23876e4588'}
              />
              <ArticleContent
                title={'Breaking apart your Monolith: 4 Issues with scheduled deployments'}
                tldr={`For the last few years I’ve been on a journey of breaking down a monolith application. A common occurrence with monolithic and legacy applications are a painfully slow release cycle.`}
                date={'8th February 2018'}
                articleLocation={'https://medium.com/@tothjoshuaj/breaking-apart-monoliths-4-issues-with-scheduled-deployments-8f67c7bbafb3'}
              />
              <ArticleContent
                title={'Creating your own website part 4: Adding Travis deployment'}
                tldr={`Now you have your site setup and you want those updates to flow out asap.`}
                date={'13th December 2017'}
                articleLocation={'./byo-site-4'}
              />
              <ArticleContent
                title={'Creating your own website part 3: Using https with AWS and Cloudfront'}
                tldr={`There is no reason NOT to be using HTTPS. So add it.`}
                date={'13th November 2017'}
                articleLocation={'./byo-site-3'}
              />
              <ArticleContent
                title={'IIS 10 Windows Fall Creators Update (1709): Cannot read \\\\?\\<EMPTY> configuration file'}
                tldr={`So you've installed Windows update 1709 and now your IIS hosted website isn't working?`}
                date={'24nd October 2017'}
                articleLocation={'./windows-iis'}
              />
              <ArticleContent
                title={'Microservice mistakes part 1: Push vs Pull vs Pub/Sub'}
                tldr={`An exploration into the pain behind different distributed system models.`}
                date={'22nd October 2017'}
                articleLocation={'./micro-mistakes-1'}
              />
              <ArticleContent
                title={'React router with Cloudfront and S3'}
                tldr={`React router isn't automatically supported with S3 + Cloudfront. This is how you can make it work.`}
                date={'26th September 2017'}
                articleLocation={'./react-router-fix'}
              />
              <ArticleContent
                title={'Creating your own website part 2: Setting up a static website with AWS'}
                tldr={`The way I host this website is via AWS. It’s pretty cheap to host and can be set up for free.`}
                date={'23rd September 2017'}
                articleLocation={'./byo-site-2'}
              />
              <ArticleContent
                title={'Creating your own website part 1: The build and design of the site'}
                tldr={'I decided it was time for me to build my own website and publish it to my own domain. I think it’s something that every developer should try.'}
                date={'21st September 2017'}
                articleLocation={'./byo-site-1'}
              />
              <ArticleContent
                title={'DynamoDB and Projection Expressions — Why?'}
                tldr={'While modifying one of our API endpoints, I realised the need for another (endpoint) to read from DynamoDB. I deep dive into projection expressions'}
                date={'25 May 2016'}
                articleLocation={'https://medium.com/pageup-tech/dynamodb-and-projection-expressions-why-c08c40243195'}
              />
              <ArticleContent
                title={'About Me'}
                date={'Updated 2 September 2017'}
                articleLocation={'./about'}
              />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Grid>
        <p className='footer'><b>Joshua Toth</b> © 2017. info@joshuatoth.com</p>
      </div>
    );
  }
}
