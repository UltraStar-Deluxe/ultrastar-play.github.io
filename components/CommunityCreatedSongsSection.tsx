import Image from "next/legacy/image";
import { useTranslationUnescaped } from "../lib/utils";
import { T } from "./T";
import WaveBackground from "./WaveBackground"

const songWebsiteUrls = [
    'usdb.eu',
    'ultrastar-es.org/en'
]

const SingIdeaEntry = (props: {title: string, image: string}) => 
{
    let size = '150px';

    return (
<div className="col col-md-4 d-flex flex-column justify-content-between align-items-center pb-5">
    <div className="fs-3 text-white font-alt">{props.title}</div>
    <div className="image-container circle-image-cropped" style={{position: "relative"}}>
        <Image src={props.image} alt="" layout="fill" />
    </div>
</div>
)
}

const doSongSearch = () => {
    if (typeof document == "undefined" || !document)
    {
        return;
    }

    const searchInputField = document.getElementById('example-search-input') as HTMLInputElement;
    const searchText = searchInputField.value;
    const escapedSearchText = encodeURI(searchText);
    const sitesQuery = songWebsiteUrls.map(site => `site:${site}`).join(" OR ");
    const url = `https://www.google.com/search?q=${escapedSearchText}+${sitesQuery}`

    console.log(`searching for songs by text '${searchText}' via url ${url}`)
    const newTab = open(url, '_blank');
    newTab?.focus()
}

const CommunityCreatedSongsSection = () => {

    const { t } = useTranslationUnescaped("common")

    return <>
        <div id="community-created-songs">
        </div>

        <WaveBackground colorFrom="#0f0163" colorTo="#0f0163" />

        <section className="text-center py-0" style={{background: 'linear-gradient(0deg, #380a74, #0f0163)'}}>
            <div className="container px-md-5">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <h1 className="display-3 text-white font-alt"><T i18nKey="communityCreatedSongs_title" /></h1>
                        <h3 className="text-white font-alt"><T i18nKey="communityCreatedSongs_subtitle" /></h3>
                    </div>
                </div>
            </div>
            
            {/* <div className="row justify-content-center mt-3">
                <div className="col col-md-4">
                    <div className="input-group">
                        <input className="form-control" type="search" id="example-search-input" placeholder={ t("communityCreatedSongs_searchHint") } onKeyUp={evt => evt.keyCode === 13 ? doSongSearch() : ""}  />
                        <span className="input-group-append">
                            <button className="btn btn-primary" type="button" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} onClick={doSongSearch}>
                                <span className="bi bi-search" />
                            </button>
                        </span>
                    </div>
                </div>
            </div> */}

            <div className="container px-md-5">
                <hr className="bg-light"/>
                <div className="row">
                    <SingIdeaEntry title={ t("communityCreatedSongs_currentTopHits") } image="/img/vinyl-2202325.png"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_filmAndTV") } image="/img/animals-44569.svg"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_games") } image="/img/controller-1784573.svg"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_vocaloid") } image="/img/sing-570519.png"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_event") } image="/img/halloween-6784081.jpg"/>
                    <SingIdeaEntry title={ t("communityCreatedSongs_regional") } image="/img/singer-250933_1920-cut.jpg"/>
                </div>
                <hr className="bg-light"/>
            </div>
            

            <div className="container px-md-5">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="fs-3 text-white font-alt"><T i18nKey="communityCreatedSongs_footer" /></div>
                    </div>
                </div>
            </div>
        </section>

        <WaveBackground flipY={true} colorFrom="#380a74" colorTo="#380a74" />
    </>

}

export default CommunityCreatedSongsSection
