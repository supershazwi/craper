import Head from 'next/head'
import Layout from '../../components/layout'


export default function Scraper({}) {
  	return (
  	  <Layout>
        <section>
            <div className="container d-flex align-items-center py-5 py-lg-6 border-bottom">
                <div className="col px-0">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="mb-2">Shopee Product Listing Monitor</h2>
                            <p className="lead mb-0">Interested at a set of product listings on Shopee? Track various details such as price movements, ratings and reviews via a beautiful dashboard and plan your next ten moves accordingly.</p>
                            <div className="d-flex align-items-center my-4">
                                <ul className="list-inline">
                                    <li className="list-inline-item pr-2">
                                        <span className="badge badge-pill badge-success">E-commerce</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="media align-items-center">
                                <a href="#!" className="avatar avatar-sm rounded-lg mr-3">
                                    <img alt="Image placeholder" src="/img/theme/light/person-1.jpg" />
                                </a>
                                <div className="media-body">
                                    <span className="h6 mb-0">Shazwi Suwandi</span>
                                    <span className="text-sm text-muted" style={{ marginLeft: "0.5rem" }}>Last updated 25<sup>th</sup> December 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="slice">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div data-toggle="sticky" data-sticky-offset="50">
                            <div className="card">
                                <div className="card-header">
                                    <span className="h6 mb-0">Sections</span>
                                </div>
                                <div className="list-group list-group-flush">
                                    <a href="#screenshots" data-scroll-to data-scroll-to-offset="50" className="list-group-item list-group-item-action d-flex justify-content-between px-4">
                                        <div>
                                            <i class="fas fa-camera-retro mr-2"></i>
                                            <span style={{ fontSize: "1rem" }}>Screenshots</span>
                                        </div>
                                        <div>
                                            <i data-feather="chevron-right"></i>
                                        </div>
                                    </a>
                                    <a href="#introduction" data-scroll-to data-scroll-to-offset="50" className="list-group-item list-group-item-action d-flex justify-content-between px-4">
                                        <div>
                                            <i className="fas fa-home mr-2"></i>
                                            <span style={{ fontSize: "1rem" }}>Introduction</span>
                                        </div>
                                        <div>
                                            <i data-feather="chevron-right"></i>
                                        </div>
                                    </a>
                                    <a href="#input_output" data-scroll-to data-scroll-to-offset="50" className="list-group-item list-group-item-action d-flex justify-content-between px-4">
                                        <div>
                                            <i className="fas fa-sign-in-alt mr-2"></i>
                                            <span style={{ fontSize: "1rem" }}>Input & Output</span>
                                        </div>
                                        <div>
                                            <i data-feather="chevron-right"></i>
                                        </div>
                                    </a>
                                    <a href="#comments" data-scroll-to data-scroll-to-offset="50" className="list-group-item list-group-item-action d-flex justify-content-between px-4">
                                        <div>
                                            <i class="fas fa-comment-dots mr-2"></i>
                                            <span style={{ fontSize: "1rem" }}>Testimonials</span>
                                        </div>
                                        <div>
                                            <i data-feather="chevron-right"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary btn-block">Add to Dashboard</button>
                        </div>
                    </div>
                    <div className="col-lg-7 mb-5 mb-lg-0 ml-lg-auto">
                        <article>
                            <a name="introduction"><h5>Screenshots</h5></a>
                            <ul style={{ listStyle: "none", overflowX: "scroll", width: "100%", whiteSpace: "nowrap" }}>
                                <li style={{ display: "inline", marginRight: "2.5rem" }}><a href="#"><img alt="Image placeholder" className="shadow" src="/img/screenshot-1.png" style={{ width: "75%", marginBottom: "2rem" }} /></a></li>
                                <li style={{ display: "inline", marginRight: "2.5rem" }}><a href="#"><img alt="Image placeholder" className="shadow" src="/img/screenshot-2.png" style={{ width: "75%", marginBottom: "2rem" }} /></a></li>
                                <li style={{ display: "inline", marginRight: "2.5rem" }}><a href="#"><img alt="Image placeholder" className="shadow" src="/img/screenshot-3.png" style={{ width: "75%", marginBottom: "2rem" }} /></a></li>
                                <li style={{ display: "inline", marginRight: "2.5rem" }}><a href="#"><img alt="Image placeholder" className="shadow" src="/img/screenshot-4.png" style={{ width: "75%", marginBottom: "2rem" }} /></a></li>
                            </ul>
                            <hr />
                            <a name="introduction"><h5>Introduction</h5></a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <hr />
                            <a name="input_output"><h5>Input & Output</h5></a>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <span className="h6 mb-0">Input</span>
                                        </div>
                                        <div className="list-group list-group-flush">
                                            <span className="list-group-item" style={{ fontSize: "1rem", fontWeight: "400", color: "#718096" }}>
                                                Product Link(s)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <span className="h6 mb-0">Output</span>
                                        </div>
                                        <div className="list-group list-group-flush">
                                            <span className="list-group-item" style={{ fontSize: "1rem", fontWeight: "400", color: "#718096" }}>
                                                Price
                                            </span>
                                            <span className="list-group-item" style={{ fontSize: "1rem", fontWeight: "400", color: "#718096" }}>
                                                Ratings
                                            </span>
                                            <span className="list-group-item" style={{ fontSize: "1rem", fontWeight: "400", color: "#718096" }}>
                                                Reviews
                                            </span>
                                            <span className="list-group-item" style={{ fontSize: "1rem", fontWeight: "400", color: "#718096" }}>
                                                Units Sold
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <a name="comments"><h5>Testimonials</h5></a>
                            <div className="media media-comment">
                                <img alt="Image placeholder" className="rounded-circle shadow mr-4" src="/img/theme/light/person-3.jpg" style={{ width: "58px" }} />
                                <div className="media-body">
                                    <div className="media-comment-bubble left-top">
                                        <h6 className="mt-0">Alexis Ren</h6>
                                        <p className="lh-160 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="media media-comment">
                                <img alt="Image placeholder" className="rounded-circle shadow mr-4" src="/img/theme/light/person-4.jpg" style={{ width: "58px" }} />
                                <div className="media-body">
                                    <div className="media-comment-bubble left-top">
                                        <h6 className="mt-0">Tom Cruise</h6>
                                        <p className="lh-160 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="media media-comment align-items-center">
                                <img alt="Image placeholder" className="rounded-circle shadow mr-4" src="/img/theme/light/person-1.jpg" style={{ width: "58px" }} />
                                <div className="media-body">
                                    <form className="rounded-lg border">
                                        <div className="input-group input-group-lg input-group-merge">
                                            <div className="input-group-prepend" style={{ marginRight: "-15px" }}>
                                                <span className="input-group-text border-0 pr-0">
                                                    
                                                </span>
                                            </div>
                                            <input type="text" className="form-control border-0 px-1" aria-label="Find something" placeholder="Write a comment..." />
                                            <div className="input-group-append">
                                                <span className="input-group-text border-0 py-0 pl-2 pr-2">
                                                    <button type="button" className="btn btn-sm btn-primary">Post Testimonial</button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
  	)
}