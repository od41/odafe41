import React from 'react';

const HeroSection = () => {

    return (
        <>
            <div className="rslider-component activated" data-theme="dark">
                <ul className="rslider-pagination">
                    <li title="Firefox Branding" className="is-current"></li>
                    <li title="salesforce" className=""></li>
                    <li title="turo"></li>
                    <li title="mozilla labs website"></li>
                    <li title=""></li>
                </ul>

                <ul className="rslider-component-inner">
                    <li className="rslide is-loaded is-current" data-theme="dark">
                        <div className="rslide-inner" style={{ zIndex: "5", backgroundColor: "#006ff9" }}>
                            <div className="container">
                                <a className="rslide-background" href="https://www.ramotion.com/firefox-brand-redesign/">

                                    <img src="./Branding, Web Design &amp; UI_UX Design Agency_files/slide-firefox-2880x2160.png"
                                        alt="Firefox Branding" className="is-loaded" />



                                </a>

                                <div className="rslide-text">

                                    <img src="./Branding, Web Design &amp; UI_UX Design Agency_files/mozilla-white.svg"
                                        alt="Firefox Branding" />

                                    <h1>Evolving the Firefox Brand</h1>


                                    <p>
                                        <a className="btn-solid" href="https://www.ramotion.com/firefox-brand-redesign/">
                                            <span>Read case study</span>
                                        </a>
                                    </p>

                                </div>

                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
};

export default HeroSection;