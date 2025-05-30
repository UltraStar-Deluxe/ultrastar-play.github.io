import BackToHomeNavigationSection from "./BackToHomeNavigationSection";

// @ts-ignore
const MdxLayoutComponent: any = (props: {additionalClasses?: string, children: React.ReactNode}) =>
{
    return (
        <>
            <BackToHomeNavigationSection title={ `UltraStar Play` }/>
            <div className={ `mdx-content ${props.additionalClasses} `}>
                <div className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MdxLayoutComponent;