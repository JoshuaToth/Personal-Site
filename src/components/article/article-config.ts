import { ButtonType, IArticleConfig } from './article-card'
import { FreeBirdPhoto } from './photos/free-bird'
import { GitPhoto } from './photos/GitPhoto'
import { IOTPhoto } from './photos/IOTPhoto'
import { MonolithCirclePhoto } from './photos/MonolithCirclePhoto'
import { ReactPhoto } from './photos/ReactPhoto'

export const ArticleConfigs: IArticleConfig[] = [
  {
    imgObj: IOTPhoto(),
    articleTitle: 'Building A Serverless IoT FinTech App with AWS and NodeJS',
    articleBlurb:
      // tslint:disable-next-line: max-line-length
      'Building an AWS native, Node.js, serverless, event-driven system to back up an IOT device capable of real time messaging and events.',
    buttonType: ButtonType.medium,
    link:
      'https://medium.com/crowdbotics/a-node-js-serverless-iot-fintech-project-surely-its-not-possible-55a1aaa380da',
    addedOrder: 0,
  },
  {
    imgObj: ReactPhoto(),
    articleTitle: 'A first look into React Native',
    articleBlurb:
      'Why did I try React Native? I’ve been toying with an app idea and wanted to give app development another shot.',
    buttonType: ButtonType.medium,
    link:
      'https://medium.com/@tothjoshuaj/a-first-look-into-react-native-10583925e7d1',
    addedOrder: 1,
  },
  {
    imgObj: GitPhoto(),
    articleTitle: 'Windows: Use PuTTY for git SSH (Or any SSH agent)',
    articleBlurb:
      // tslint:disable-next-line: max-line-length
      'Something that seems to come up a lot when using git on windows is wanting to use an SSH client to manage keys. When you want to use something like PuTTY its a fairly simple, but somewhat hidden process.',
    buttonType: ButtonType.medium,
    link:
      'https://medium.com/@tothjoshuaj/windows-use-putty-for-git-ssh-or-any-ssh-agent-9929b578cf44',
    addedOrder: 2,
  },
  {
    imgObj: GitPhoto(),
    articleTitle: 'Git extensions: Show commit date instead of author date',
    articleBlurb:
      // tslint:disable-next-line: max-line-length
      'Git extensions has an annoying default setting of showing when a commit was authored, rather than when it was committed to the repository.',
    buttonType: ButtonType.medium,
    link:
      'https://medium.com/@tothjoshuaj/git-extensions-show-commit-date-instead-of-author-date-75b4d8b0a022',
    addedOrder: 3,
  },
  {
    imgObj: FreeBirdPhoto(),
    articleTitle: 'Breaking apart your Monolith: Free your Front-end',
    articleBlurb:
      // tslint:disable-next-line: max-line-length
      'Breaking apart a monolith is something that takes a while… a long while. There are a few things that while not reducing code, can have a pretty large impact on the overall agility of your product development.',
    buttonType: ButtonType.medium,
    link:
      'https://medium.com/crowdbotics/a-node-js-serverless-iot-fintech-project-surely-its-not-possible-55a1aaa380da',
    addedOrder: 4,
  },
  {
    imgObj: MonolithCirclePhoto(),
    articleTitle:
      'Breaking apart your Monolith: 4 Issues with scheduled deployments',
    articleBlurb:
      // tslint:disable-next-line: max-line-length
      'For the last few years I’ve been on a journey of breaking down a monolith application. A common occurrence with monolithic and legacy applications are a painfully slow release cycle.',
    buttonType: ButtonType.medium,
    link:
      'https://medium.com/crowdbotics/a-node-js-serverless-iot-fintech-project-surely-its-not-possible-55a1aaa380da',
    addedOrder: 5,
  },
]
