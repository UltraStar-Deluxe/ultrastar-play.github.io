import type { NextPage } from 'next'
import Navigation from './components/Navigation'
import IntroSection from './components/IntroSection'
import CommunityCreatedSongsSection from './components/CommunityCreatedSongsSection'
import FeaturesSection from './components/FeaturesSection'
import SongEditorSection from './components/SongEditorSection'
import FutureFeaturesSection from './components/FutureFeaturesSection'
import DownloadCallToActionSection from './components/DownloadCallToActionSection'

const Home: NextPage = () => {
  return (

<>
    <Navigation />

    <IntroSection />

    <FeaturesSection />

    <CommunityCreatedSongsSection />
    
    <SongEditorSection />

    <FutureFeaturesSection />

    <DownloadCallToActionSection />
</>

  )
}

export default Home
