import type { NextPage } from 'next'
import NavigationSection from '../../components/NavigationSection'
import IntroSection from '../../components/IntroSection'
import CommunityCreatedSongsSection from '../../components/CommunityCreatedSongsSection'
import FeaturesSection from '../../components/FeaturesSection'
import SongEditorSection from '../../components/SongEditorSection'
import PlannedFeaturesSection from '../../components/PlannedFeaturesSection'
import DownloadCallToActionSection from '../../components/DownloadCallToActionSection'
import EasyToUseSection from '../../components/EasyToUseSection'
import FooterSection from '../../components/FooterSection'
import CrossPlatformSection from '../../components/CrossPlatformSection'
import OpenSourceSection from '../../components/OpenSourceSection'
import NewsletterSection from '../../components/NewsletterSection'
import CookieBanner from '../../components/CookieBanner'

// Load translations (see https://github.com/i18next/next-language-detector/tree/main/examples/basic)
import { makeStaticProps } from '../../lib/getStatic'
import { getStaticPaths } from '../../lib/getStatic'
import MelodyManiaSection from '../../components/MelodyManiaSection'
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
            <MelodyManiaSection />
            <DownloadCallToActionSection />
            <NewsletterSection />
            <FooterSection />
            <CookieBanner />
        </>

    )
}

export default Home