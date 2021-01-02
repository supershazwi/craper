import Head from 'next/head'
import Layout from '../components/layout'

export default function Scrapers({}) {
	return (
  	<Layout>
      <section>
          <div className="container d-flex align-items-center py-5 py-lg-6">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="row align-items-center mb-4">
                          <div className="col">
                            <h2 className="mb-2">Browse Helpers</h2>
                            <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                      <div className="row mx-n2">
                          <div className="col-lg-4 px-2">
                              <div className="card">
                                  <div className="card-body">
                                      <div className="icon">
                                          <img alt="Image placeholder" src="/img/logos/shopee.png" className="svg-inject" style={{ width: "50px", height: "50px"}} />
                                      </div>
                                      <a href="#" className="d-block mt-3"><strong style={{ fontSize: "24px", lineHeight: "1.5rem" }}>Shopee Product Listing Monitor</strong></a>
                                      <p className="text-sm text-muted" style={{ marginTop: "0.5rem" }}>
                                        Interested at a set of product listings on Shopee? Track various details such as price movements, ratings and reviews via a beautiful dashboard and plan your next ten moves accordingly.
                                      </p>
                                      <div className="mt-1">
                                          <a href="#" className="avatar avatar-xs rounded-lg">
                                              <img alt="Image placeholder" src="/img/theme/light/person-1.jpg" className="" />
                                          </a>
                                          <a href="#" className="h5 text-sm" style={{ marginLeft: "0.5rem" }}>Shazwi Suwandi</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </Layout>
	)
}