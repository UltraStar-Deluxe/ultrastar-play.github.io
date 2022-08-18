const NavigationSection = () => (

<nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
    <div className="container px-5">
        <a id="navbar-title" className="navbar-brand fw-bold" href="#page-top">UltraStar&nbsp;Play</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item"><a className="nav-link me-lg-3 active" href="#page-top">Home</a></li>
                {/* <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Features</a></li> */}
                <li className="nav-item dropdown">
                    <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">Features</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#features">Overview</a></li>
                        <li><a className="dropdown-item" href="#community-created-songs">Community</a></li>
                        <li><a className="dropdown-item" href="#song-editor">Song Editor</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Download</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="PrivacyPolicy">Privacy Policy</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="https://github.com/UltraStar-Deluxe/Play">GitHub</a></li>
            </ul>
        </div>
    </div>
</nav>

)

export default NavigationSection;

////////////////////////////////////////////////////
// Open sub menu on hover
const unfoldNavItemOnHover = (element: Element) => 
{
    const doHide = (elementLink: Element | null) =>
    {
        if (!elementLink)
        {
            return;
        }

        let nextElement = elementLink.nextElementSibling;
        elementLink.classList.remove('show');
        if (nextElement)
        {
            nextElement.classList.remove('show');
        }
    }

    const doShow = (elementLink: Element | null) =>
    {
        if (!elementLink)
        {
            return;
        }

        let nextElement = elementLink.nextElementSibling;
        elementLink.classList.add('show');
        if (nextElement)
        {
            nextElement.classList.add('show');
        }
    }

    element.addEventListener('mouseover', function (this: Element, e)
    {
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doShow(elementLink);
    });

    element.addEventListener('mouseleave', function (this: Element, e: Event)
    {
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doHide(elementLink);
    })

    element.addEventListener('click', function (this: Element, e)
    {
        console.log("close by click")
        let elementLink = this.querySelector('a[data-bs-toggle]');
        doHide(elementLink);
    });
}

if (typeof document !== "undefined" && document)
{
    document.addEventListener("DOMContentLoaded", () =>
    {
        if (window.innerWidth <= 992)
        {
            return;
        }

        document.querySelectorAll('.navbar .nav-item')
            .forEach((element) => unfoldNavItemOnHover(element));
    })
}
