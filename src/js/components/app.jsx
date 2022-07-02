import React from "react";
import ReactDOM from 'react-dom/client';
import Tabs from './tabs.jsx';

export default function App() {
  return (
    <>
      <section className="agency">
        <div className="container">
          <div className="agency__inner">
            <div className="agency__content">
              <h2 className="section-title section-title--large">
                your agency.<br />
                <span className="text-special">in a box.</span>
              </h2>
              <p className="agency__text">All of your work in one place. And much more</p>
              <form className="agency__form" method="post">
                <label>
                  <span className="visually-hidden">Your email:</span>
                  <input className="input input--small agency__input" type="email" placeholder="Enter your email address" />
                </label>
                <div className="agency__group">
                  <button className="agency__submit button" type="submit">Sign up</button>
                  <span className="agency__hint">AND BE PART OF<br /> THE CLOSED BETA</span>
                </div>
              </form>
              <div className="agency__reviews">Based on 100+ marketers reviews on</div>
              <ul className="agency__list">
                <li><img src="./img/reviews/crowd.svg" alt="crowd" /></li>
                <li><img src="./img/reviews/trustpilot.svg" alt="trustpilot" /></li>
                <li><img src="./img/reviews/capterra.svg" alt="capterra" /></li>
              </ul>
            </div>
            <div className="agency__img">
              <img src="./img/agency.png" srcSet="./img/agency@2x.png 2x" alt="Application screens" />
            </div>
          </div>
        </div>
      </section>
      <section className="capabilities">
        <div className="bg-container">
          <div className="container">
            <h2 className="visually-hidden">Capabilities</h2>
            <Tabs />
          </div>
        </div>
      </section>
      <section className="selling">
        <div className="bg-container bg-container--second">
          <div className="container">
            <div className="selling__inner">
              <div className="selling__left">
                <div className="vertical-align">
                  <h2 className="section-title section-title--medium">
                    stop
                    <span className="text-special">selling yourself.</span>
                  </h2>
                  <p className="text">
                    There is more in life than prospection. Just focus on your craft and let us take care of the rest
                  </p>
                </div>
              </div>
              <div className="selling__right">
                <div className="vertical-align">
                  <ul className="selling__list">
                    <li>
                      <h3 className="selling__title">dedicated landing page</h3>
                      <p className="selling__text">When onboarding on snikpic, you will have your own dedicated and shareable landing page optimized for conversion.</p>
                    </li>
                    <li>
                      <h3 className="selling__title selling__title--phone">purchasable prospect</h3>
                      <p className="selling__text">
                        Use snikpic’s experience running ads and only buy from us prospect who have shown direct interest in your profile. We take care of the rest
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing">
        <div className="pricing__container">
          <div className="pricing__inner">
            <div className="pricint__left">
              <div className="vertical-align">
                <h2 className="section-title section-title--medium">one simple <span className="text-special">&nbsp;pricing.</span></h2>
                <ul className="pricing__tags tags">
                  <li>Unlimited features</li>
                  <li>Unlimited members</li>
                  <li>Unlimited workflows</li>
                  <li>Unlimited calendars</li>
                  <li>Unlimited meeting</li>
                </ul>
                <a className="pricing__button button" href="#">Sign up</a>
              </div>
            </div>
            <div className="pricing__right">
              <div className="pricing__group">
                <div className="pricing__box">
                  <span className="pricing__value">49€</span>
                  <span className="pricing__hint">/ client / month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feedbacks">

        <div className="bg-container bg-container--third">
          <div className="container">
            <h2 className="visually-hidden">Feedbacks about US</h2>
            <div className="feedbacks__inner">
              <div className="feedbacks__swiper swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="feedbacks__content">
                      <div className="feedbacks__avatar">
                        <img src="./img/avatar.jpg" alt="Christophe Bourand, ChrisWebMarketing" />
                      </div>
                      <div className="feedbacks__group">
                        <span className="feedbacks__authors">Christophe Bourand, ChrisWebMarketing</span>
                        <p className="text">
                          Juggling with all my clients and making sure everything was done correctly took me a lot of energy.
                          Not did Snikpic enabled me to tremendously release that extra useless work,
                          but I quickly found myself able to take on much more clients than I originally could
                        </p>
                        <ul className="feedbacks__list">
                          <li>
                            <img src="./img/movie.png" alt="ChrisWebMarketing" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="feedbacks__content">
                      <div className="feedbacks__avatar">
                        <img src="./img/avatar.jpg" alt="Christophe Bourand, ChrisWebMarketing" />
                      </div>
                      <div className="feedbacks__group">
                        <span className="feedbacks__authors">Christophe Bourand, ChrisWebMarketing</span>
                        <p className="text">
                          Juggling with all my clients and making sure everything was done correctly took me a lot of energy.
                          Not did Snikpic enabled me to tremendously release that extra useless work,
                          but I quickly found myself able to take on much more clients than I originally could
                        </p>
                        <ul className="feedbacks__list">
                          <li>
                            <img src="./img/movie.png" alt="ChrisWebMarketing" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev swiper-button"></div>
                <div className="swiper-button-next swiper-button"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="beta">
        <div className="bg-container bg-container--third">
          <div className="container">
            <form className="beta__form" method="post">
              <h2 className="section-title section-title--medium">
                apply to our
                <span className="text-special">closed beta.</span>
              </h2>
              <div className="beta__inner">
                <div className="beta__group">
                  <label className="beta__label" htmlFor="name">Name</label>
                  <input className="input" type="text" name="name" id="name" placeholder="Let’s not be strangers" />
                </div>
                <div className="beta__group">
                  <label className="beta__label" htmlFor="website">Website</label>
                  <input className="input" type="url" name="website" id="website" placeholder="Put the URL right there" />
                </div>
                <div className="beta__group">
                  <label className="beta__label" htmlFor="phone">Phone Number</label>
                  <input className="input" type="tel" name="phone" id="phone" placeholder="470000000" />
                </div>
                <div className="beta__group">
                  <label className="beta__label" htmlFor="email">Email Address</label>
                  <input className="input" type="email" name="email" id="email" placeholder="That’s right, we need your email" />
                </div>
              </div>
              <button className="beta__submit button" type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
