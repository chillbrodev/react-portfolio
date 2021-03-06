import rxJavaTalk from '../images/projectGallery/rxJava.png'
import android from '../images/projectGallery/androidTesting.png'
import planetExpress from '../images/projectGallery/planetExpress.png'
import mineShaft from '../images/projectGallery/mineBlast.png'
import robot from '../images/projectGallery/robotRampage.png'
import custom from '../images/projectGallery/customViews.png'
import militarium from '../images/projectGallery/militarium.png'
import salvage from '../images/projectGallery/salvage.png'
import mothersWrath from '../images/projectGallery/mothersWrath.png'
import shatteredCore from '../images/projectGallery/shatteredCore.png'
import santaCruzin from '../images/projectGallery/santaCruzin.png'
import troupeAi from '../images/projectGallery/troupe.png'
import iheartRadio from '../images/projectGallery/iHeartRadio.png'
import AAA from '../images/projectGallery/aaaLogo.png'
import wonderland from '../images/projectGallery/wonderland.png'
import commandCenter from '../images/projectGallery/commandCenter.png'
import thaiger from '../images/projectGallery/thaiger.png'
import fireTV from '../images/logos/firetv_logo.png'
import playStore from '../images/logos/google_play.png'
import alexa from '../images/logos/alexa_logo.png'
import download from '../images/logos/download_logo.png'
import icons from './Icons'

const SampleData = {
  projects: [
    {
      logo: iheartRadio,
      title: 'iHeart Radio TV',
      tags: ['android', 'tv'],
      icons: [icons.Android, icons.Tv],
      available: [
        {
          url:
            'https://www.amazon.com/iHeartMedia-iHeartRadio-TV/dp/B00E9B1OCE',
          asset: fireTV
        },
        {
          url:
            'https://play.google.com/store/apps/details?id=com.clearchannel.iheartradio.tv',
          asset: playStore
        }
      ],
      images: [],
      media: [],
      shortDescription:
        "Utilized modern Android practices and Kotlin to overhaul the OTT experience for iHeartRadio. This project was built as a main codebase which used Android's Product Flavors to separate FireTV & AndroidTV requirements. The team was able to deploy to both platforms with ease. Both apps have a 3.5+ rating on their respective store."
    },
    {
      logo: wonderland,
      title: "Wonderland Queen's Revenge",
      tags: ['voice', 'game'],
      icons: [icons.Voice, icons.Game],
      available: [
        {
          url:
            'https://www.amazon.com/DevTester4Life-Wonderland-Queens-Revenge/dp/B07KQBSKHH',
          asset: alexa
        }
      ],
      images: [],
      media: [
        {
          info: 'View Video',
          url: 'https://www.youtube.com/watch?v=nNFcU_BRme0'
        },
        {
          info: 'View Hackathon Entry',
          url: 'https://devpost.com/software/wonderland-queen-s-revenge'
        }
      ],
      shortDescription:
        "Developed using AWS Lambda, Node.JS and Alexa Presentation Language (APL). This is an interactive voice game built for the Echo Show. The project was built in two weeks and was submitted to the DevPost Hackathon. Can you help the white rabbit break free of the Queen's evil magic?"
    },
    {
      logo: android,
      title: 'Demystifying Android Testing',
      tags: ['android', 'talk'],
      icons: [icons.Android, icons.Talk],
      available: [
        {
          url:
            'http://chillbrodev.com/talks/androidtesting/AndroidUnitTesting.pdf',
          asset: download
        }
      ],
      media: [],
      images: [],
      shortDescription:
        'I gave a talk to the Orange County Android Meetup about writing unit tests. This talk broke down common terminology and showcased how to write tests using Java and Mockito.'
    },
    {
      logo: robot,
      title: 'Robot Rampage',
      tags: ['game'],
      icons: [icons.Game],
      available: [
        {
          url: '',
          asset: download
        }
      ],
      images: [],
      media: [
        {
          info: 'View Blog Post',
          url:
            'https://medium.com/tribalscale/create-your-own-game-with-unity-heres-how-7f2c2e6091f8'
        }
      ],
      shortDescription:
        "Robot Rampage started as a Unity tutorial from Ray Wenderlich's Unity Games by Tutorials book. Upon completion of the tutorial I went ahead and fixed some bugs, added additional features and included a leader-board. This gave the game a more polished feel and allowed players to compete against each other. The game can be described as a time based shooter where players must defeat as many robots as possible within the time limit."
    },
    {
      logo: troupeAi,
      title: 'Troupe.ai',
      tags: ['android'],
      icons: [icons.Android],
      available: [
        {
          url:
            'https://play.google.com/store/apps/details?id=ai.troupe.app&hl=en_US',
          asset: playStore
        }
      ],
      images: [],
      media: [],
      shortDescription:
        'Troüpe is an AI platform that is creating meaningful people to people connections. I was tasked with building the beta application in two short weeks. I used Kotlin, Retrofit2, RxJava, and Twilio to rapidly develop the application. Attendees of TedX Toronto utilized this application to converse and network during the conference.'
    },
    {
      logo: rxJavaTalk,
      title: 'RxJava 2: Reactive Revolution',
      tags: ['talk', 'android'],
      icons: [icons.Android, icons.Talk],
      available: [
        {
          url: 'http://chillbrodev.com/talks/rxjava/RxJavaRevolution.pdf',
          asset: download
        }
      ],
      images: [],
      media: [],
      shortDescription:
        'Reactive programming is a paradigm in which the application reacts to events triggered in your application via users or other systems. RxJava allows developers to create fully fledged reactive applications. I gave a Lunch and Learn about the basics of Rx* and showcased how to use Rx in Kotlin applications.'
    },
    {
      logo: mineShaft,
      title: 'Mineshaft Explosion',
      tags: ['3D'],
      icons: [icons.Art],
      available: [],
      images: [],
      media: [
        {
          info: 'View Video',
          url: 'https://vimeo.com/260682314'
        },
        {
          info: 'View Still',
          url: 'https://storage.googleapis.com/three-d-renders/mineshaft.png'
        }
      ],
      shortDescription:
        'I utilized a tutorial from the folks at Greyscale Gorilla to create my very first motion graphic. This amazing tutorial showcases how to build a mineshaft explosion using dynamics, animations, texturing and modeling techniques.'
    },
    {
      logo: commandCenter,
      title: 'Isometric Command Center',
      tags: ['3D'],
      icons: [icons.Art],
      available: [],
      images: [],
      media: [
        {
          info: 'View Still',
          url:
            'https://storage.googleapis.com/three-d-renders/CommandCenterIso.png'
        }
      ],
      shortDescription:
        "While viewing art on Instagram one week, I noticed an increase in isometric rooms. I thought these were a pretty cool medium to showcase art. I noticed there was nothing related to Power Rangers and thought what a cool opportunity. I spent a weekend over Christmas break creating Zordon's Command Center as an isometric room."
    },
    {
      logo: AAA,
      title: 'AAA Android',
      tags: ['android'],
      icons: [icons.Android],
      available: [
        {
          url:
            'https://play.google.com/store/apps/details?id=com.ace.shell.production',
          asset: playStore
        }
      ],
      images: [],
      media: [],
      shortDescription:
        'During a digital transformation engagement with AAA I was responsible for teaching Android and showcasing modern development practices. I also taught the engineers how to use modern libraries/frameworks such as MVP, RxJava2, Retrofit2 & Dagger2. We used Pair Programming and TDD to revamp their application and deploy major updates.'
    },
    {
      logo: planetExpress,
      title: 'Planet Express',
      tags: ['3D'],
      icons: [icons.Art],
      available: [],
      images: [],
      media: [
        {
          info: 'View Still',
          url:
            'https://storage.googleapis.com/three-d-renders/PlanetExpress.png'
        }
      ],
      shortDescription:
        'After creating my first motion graphic, I wanted to explore low poly modeling. My favorite show is Futurama and I decided to recreate the Planet Express HQ. This is my first 3D model made using various reference images.'
    },
    {
      logo: thaiger,
      title: 'Thaiger',
      tags: ['3D'],
      icons: [icons.Art],
      available: [],
      images: [],
      media: [
        {
          info: 'View Video',
          url: 'https://vimeo.com/324383858'
        },
        {
          info: 'View Still',
          url: 'https://storage.googleapis.com/three-d-renders/Thaiger.png'
        }
      ],
      shortDescription:
        'While visiting Toronto for work, I was out with some friends and saw some artwork in the Thai restaurant. I was stunned with its beauty and complexities, I also thought it would be a cool 3D model. I spent the next few nights meticulously tracing each piece of the photo and assembling a color palette.'
    },
    {
      logo: shatteredCore,
      title: 'Shattered Core',
      tags: ['3D'],
      icons: [icons.Art],
      available: [],
      images: [],
      media: [
        {
          info: 'View Video',
          url: 'https://vimeo.com/260682185'
        },
        {
          info: 'View Still',
          url: 'https://storage.googleapis.com/three-d-renders/DesertStill.png'
        }
      ],
      shortDescription:
        'I crafted a simplistic motion graphic using the low poly style. I created an oasis environment that showcases a mystical core that rises above the ground thus controlling the shattered water.'
    },
    {
      logo: custom,
      title: 'Custom Views: No Fragments',
      tags: ['talk', 'android'],
      icons: [icons.Android, icons.Talk],
      available: [
        {
          url: 'http://chillbrodev.com/talks/customviews/CustomViews.pdf',
          asset: download
        }
      ],
      images: [],
      media: [],
      shortDescription:
        'My first talk at the Orange County Android Meetup focused on using custom views as an alternative to Fragments. I wanted to show others that is possible to create a fully fledged system using custom views instead of the standard of Fragments. I constructed this system while building a custom multimedia application.'
    },
    {
      logo: militarium,
      title: 'Militarium',
      tags: ['game'],
      icons: [icons.Game],
      available: [],
      images: [],
      media: [
        {
          info: 'View Video',
          url: 'https://www.youtube.com/watch?v=ayMZVQtI77w'
        }
      ],
      shortDescription:
        'For my senior thesis, my team and I made history at UC Santa Cruz by being the first team to create a custom engine and a real time strategy game. We created Militarium which is heavily influenced by the ancient Chinese game Go. Militarium featured a player profile and achievement system. Militarium won the Peer choice award at the UCSC Sammy Awards.'
    },
    {
      logo: santaCruzin,
      title: 'Santa Cruzin',
      tags: ['game'],
      icons: [icons.Game],
      available: [],
      images: [],
      media: [
        {
          info: 'View Video',
          url: 'https://youtu.be/HFwOxZvS9BI'
        }
      ],
      shortDescription:
        'Santa Cruzin 3D Kinect was built in two weeks with a team of four using C#/XNA. Santa Cruzin won peer choice award at the UCSC Sammy Awards. We utilized text files to describe the height maps of each level. These files were loaded and used to generate 3D terrain. The game features both single and multiplayer experiences.'
    },
    {
      logo: mothersWrath,
      title: "Mother's Wrath",
      tags: ['game'],
      icons: [icons.Game],
      available: [
        {
          url: 'http://chillbrodev.com/downloads/MothersWrathRelease.zip',
          asset: download
        }
      ],
      images: [],
      media: [
        {
          info: 'View Video',
          url: 'https://youtu.be/ahTm76QSFvs'
        }
      ],
      shortDescription:
        "Mother's Wrath is a single player top down action game where you play as Mother Earth and are trying to take back the Earth from the evil clutches of humanity. Mother's Wrath was built in C#/XNA using advanced AI systems to provide squad style behavior for enemies and an engaging multi-phase final boss fight. We built this game in about five weeks, creating all art, effects and sounds from scratch. This game is playable on Windows with an XBox Gamepad."
    },
    {
      logo: salvage,
      title: 'Salvage',
      tags: ['game'],
      icons: [icons.Game],
      available: [
        {
          url: 'http://chillbrodev.com/downloads/Salvage.zip',
          asset: download
        }
      ],
      images: [],
      media: [
        {
          info: 'View Video',
          url: 'https://youtu.be/KTw_a1B9xAY'
        }
      ],
      shortDescription:
        'Salvage is a game where you must collect fuel cells and use space junk to defeat enemies. It was made in GameMaker in about five weeks. It was the first game I ever made. I focused on level design, UI and QA. Salvage placed first in the internal class competition. This game is playable on Windows or using an exe emulator.'
    }
  ]
}

export default SampleData
