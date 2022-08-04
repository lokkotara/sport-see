import "./NavBar.scss";
import PropTypes from "prop-types";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { isMocked as isMockedFunction } from "../../services/mocked";
import { store } from "../../providers/Store";
import { useState } from "react";

/**
 * @typedef {import ("../../interfaces/interface").navProps} navProps
 */

/** @param {navProps} props*/
export default function NavBar({ side }) {
  const [isMocked] = useState(isMockedFunction);
  let { id } = useParams();
  if (id === undefined) id = store.get.userId;

  const displayMocked = () => {
    return <span>mocked</span>;
  };

  const displayLogo = () => {
    if (side === "top")
      return (
        <div>
          <img src="/images/logo.svg" alt="logo de SportSee"></img>
          {isMocked ? displayMocked() : null}
        </div>
      );
  };

  const displayCopyright = () => {
    if (side === "left")
      return (
        <p className="copyright-text">
          Copyright, SportSee {new Date().getFullYear()}
        </p>
      );
  };

  const displayNavBarLinks = () => {
    if (side === "top")
      return (
        <ul className="navBarLinks">
          <li>
            <Link to={`/user/${id}`}>Accueil</Link>
          </li>
          <li>Profil</li>
          <li>
            <Link to="/Error">Réglage</Link>
          </li>
          <li>Communauté</li>
        </ul>
      );

    if (side === "left")
      return (
        <ul className="navBarLinks">
          <li>
            <img src="/images/icons/yoga.svg" alt="" />
          </li>
          <li>
            <img src="/images/icons/swimming.svg" alt="" />
          </li>
          <li>
            <img src="/images/icons/bike.svg" alt="" />
          </li>
          <li>
            <img src="/images/icons/musculation.svg" alt="" />
          </li>
        </ul>
      );
  };

  return (
    <header className={`navBar-${side} navBar`}>
      {displayLogo()}
      <nav>{displayNavBarLinks()}</nav>
      {displayCopyright()}
    </header>
  );
}

NavBar.propTypes = {
  side: PropTypes.string.isRequired,
};