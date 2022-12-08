import LanguageSwitcher from './LanguageSwitcher';
import RedirectLink from './RedirectLink'
import { T } from './T';

const BackToHomeNavigationSection = (props: {title: string}) =>
{
    return <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav"
        style={{paddingTop: "0.5rem", paddingBottom: "0.5rem"}}>
        <div className="container px-5">
            <a className="navbar-brand fw-bold" href="#page-top">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li className="nav-item"><RedirectLink className="nav-link me-lg-3" href="/">Home</RedirectLink></li>
                </ul>
            </div>
        </div>
    </nav>
</>

}

export default BackToHomeNavigationSection