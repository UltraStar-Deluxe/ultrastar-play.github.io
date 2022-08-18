import type { NextPage } from 'next'
import NavigationSection from './components/NavigationSection'
import IntroSection from './components/IntroSection'
import CommunityCreatedSongsSection from './components/CommunityCreatedSongsSection'
import FeaturesSection from './components/FeaturesSection'
import SongEditorSection from './components/SongEditorSection'
import FutureFeaturesSection from './components/FutureFeaturesSection'
import DownloadCallToActionSection from './components/DownloadCallToActionSection'
import EasyToUseSection from './components/EasyToUseSection'
import FooterSection from './components/FooterSection'

const Home: NextPage = () => {
  return (

<>
    <NavigationSection />
    <IntroSection />
    <FeaturesSection />
    <CommunityCreatedSongsSection />
    <EasyToUseSection />
    <SongEditorSection />
    <FutureFeaturesSection />
    <DownloadCallToActionSection />
    <FooterSection />
</>

  )
}

export default Home
