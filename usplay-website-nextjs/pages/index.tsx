import type { NextPage } from 'next'
import NavigationSection from './components/NavigationSection'
import IntroSection from './components/IntroSection'
import CommunityCreatedSongsSection from './components/CommunityCreatedSongsSection'
import FeaturesSection from './components/FeaturesSection'
import SongEditorSection from './components/SongEditorSection'
import PlannedFeaturesSection from './components/PlannedFeaturesSection'
import DownloadCallToActionSection from './components/DownloadCallToActionSection'
import EasyToUseSection from './components/EasyToUseSection'
import FooterSection from './components/FooterSection'
import CrossPlatformSection from './components/CrossPlatformSection'
import OpenSourceSection from './components/OpenSourceSection'

const Home: NextPage = () => {
  return (

<>
    <NavigationSection />
    <IntroSection />
    <FeaturesSection />
    <CommunityCreatedSongsSection />
    <EasyToUseSection />
    <SongEditorSection />
    <CrossPlatformSection />
    <OpenSourceSection />
    <PlannedFeaturesSection />
    <DownloadCallToActionSection />
    <FooterSection />
</>

  )
}

export default Home
