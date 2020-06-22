import React from 'react';

const Home = () => {

    return (
        <>
            <section id="home">
                <div className="slide">
                    <div className="slide-inner">
                        <div className="slide-text">
                            <span className="small">Featured</span>
                            <ul className="featured">
                                <li>
                                    <button>Drumbeat App</button>
                                </li>
                                <li>
                                    <button>COVID19 Stats</button>
                                </li>
                                <li>
                                    <button>PlatePay</button>
                                </li>
                            </ul>
                        </div>

                        <div className="slide-background">
                            <img src="assets/images/product-mockup-mobile.png" device-orientation="mobile" alt="Product Mockup" />
                            <img src="assets/images/product-mockup-desktop.png" device-orientation="desktop" alt="Product Mockup" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;