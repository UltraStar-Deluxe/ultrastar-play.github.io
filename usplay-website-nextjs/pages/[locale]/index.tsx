import type { NextPage } from 'next'
import NavigationSection from '../components/NavigationSection'
import IntroSection from '../components/IntroSection'
import CommunityCreatedSongsSection from '../components/CommunityCreatedSongsSection'
import FeaturesSection from '../components/FeaturesSection'
import SongEditorSection from '../components/SongEditorSection'
import PlannedFeaturesSection from '../components/PlannedFeaturesSection'
import DownloadCallToActionSection from '../components/DownloadCallToActionSection'
import EasyToUseSection from '../components/EasyToUseSection'
import FooterSection from '../components/FooterSection'
import CrossPlatformSection from '../components/CrossPlatformSection'
import OpenSourceSection from '../components/OpenSourceSection'
import { makeStaticProps } from '../../lib/getStatic'
import { getStaticPaths } from '../../lib/getStatic'
import GetResponseNewsletterForm from '../components/GetResponseNewsletterForm'

// Load translations (see https://github.com/i18next/next-language-detector/tree/main/examples/basic)
const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

// Main page
const Home: NextPage = () =>
{
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
            <GetResponseNewsletterForm />
        </>

    )
}

export default Home