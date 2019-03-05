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
import icons from './Icons'

const SampleData = {
  projects: [
    {
      logo: iheartRadio,
      title: 'iHeart Radio TV',
      tags: ['android', 'tv'],
      icons: [icons.Android, icons.Tv],
      shortDescription:
        "Overhauled iHeart Radio's OTT experiences for FireTV & AndroidTV. Both apps have a 4.0+ rating."
    },
    {
      logo: wonderland,
      title: "Wonderland Queen's Revenge",
      tags: ['voice', 'game'],
      icons: [icons.Voice, icons.Game],
      shortDescription:
        "An interactive voice game built for the Echo Show using Amazon's Alexa Presentation Language (APL). Can you help the white rabbit break free of the Queen's evil magic? "
    },
    {
      logo: troupeAi,
      title: 'Troupe.ai',
      tags: ['android'],
      icons: [icons.Android],
      shortDescription:
        'Beta application for Troupe.ai which was used for conference attendees of TedX Toronto.'
    },
    {
      logo: rxJavaTalk,
      title: 'RxJava 2: Reactive Revolution',
      tags: ['talk', 'android'],
      icons: [icons.Android, icons.Talk],
      shortDescription:
        'Lunch & Learn presentation about the basics and effectiveness of the Rx paradim.'
    },
    {
      logo: robot,
      title: 'Robot Rampage',
      tags: ['game'],
      icons: [icons.Game],
      shortDescription:
        'Defeat as many robots as possible within the time limit. Rise the ranks fo the leaderboard! Made in Unity.'
    },
    {
      logo: AAA,
      title: 'AAA Android',
      tags: ['android'],
      icons: [icons.Android],
      shortDescription:
        'Trained AAA engineers in Android in order to revamp and deploy major updates to their mobile application.'
    },
    {
      logo: mineShaft,
      title: 'Mineshaft Explosion',
      tags: ['3D'],
      icons: [icons.Art],
      shortDescription:
        'Wanna know what happens when a mineshaft blowsup? Watch and see! Made in Cinema4D.'
    },
    {
      logo: planetExpress,
      title: 'Planet Express',
      tags: ['3D'],
      icons: [icons.Art],
      shortDescription:
        'Good news everyone! Planet Express HQ is now available in Low Poly Format. Made in Cinema4D.'
    },
    {
      logo: android,
      title: 'Demystifying Android Testing',
      tags: ['android', 'talk'],
      icons: [icons.Android, icons.Talk],
      shortDescription:
        'An introduction to testing Android using Mockito and common concepts.'
    },
    {
      logo: shatteredCore,
      title: 'Shattered Core',
      tags: ['3D'],
      icons: [icons.Art],
      shortDescription:
        'A mystical core rises from the ground controlling the warped water in this oasis. Made in Cinema4D.'
    },
    {
      logo: custom,
      title: 'Custom Views: No Fragments',
      tags: ['talk', 'android'],
      icons: [icons.Android, icons.Talk],
      shortDescription:
        "Discover how to use Custom Views as an alternative to Android's Fragments."
    },
    {
      logo: militarium,
      title: 'Militarium',
      tags: ['game'],
      icons: [icons.Game],
      shortDescription:
        'GO inspired RTS made with a custom c++ engine and player achievement system.'
    },
    {
      logo: mothersWrath,
      title: "Mother's Wrath",
      tags: ['game'],
      icons: [icons.Game],
      shortDescription:
        'Play as Mother Earth who has risen to take back Earth from the clutches of humanity.'
    },
    {
      logo: santaCruzin,
      title: 'Santa Cruzin',
      tags: ['game'],
      icons: [icons.Game],
      shortDescription:
        'Descend the mountains of Santa Cruz in this 3D Kinect for Windows game. Made C#/XNA.'
    },
    {
      logo: salvage,
      title: 'Salvage',
      tags: ['game'],
      icons: [icons.Game],
      shortDescription:
        'Collect fuel cells and use space junk to defeat enemies. Made in GameMaker.'
    }
  ]
}

export default SampleData
