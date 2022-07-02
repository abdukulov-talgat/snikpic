import React from "react";


export default function Tab(props) {
  const { tabTitle, text, replaces, imgSrc, imgSrcSet } = props.tab;

  return (
    <li className="tabs__item">
      <div className="capabilities__tab">
        <div className="capabilities__content">
          <h3 className="capabilities__title section-title">
            {tabTitle.text}
            <span className="text-special">{tabTitle.specialText}</span>
          </h3>
          <p className="text">
            {text}
          </p>
          <div className="capabilities__enum enum">
            <span className="enum__title">Replaces</span>
            <ul className="enum__list">
              {replaces.map((it, index) => <li className="enum__item" key={index}>{it}</li>)}
            </ul>
          </div>
          <a className="button capabilities__button" href="#">Sign up</a>
        </div>
        <div className="capabilities__img">
          <img src={imgSrc} srcSet={imgSrcSet} alt={`${tabTitle.text} ${tabTitle.specialText}`} />
        </div>
      </div>
    </li>
  );
}
