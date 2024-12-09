import React, { Fragment, useEffect, useState } from "react";
import Button from "../ui/button";
import classes from "./nav.module.css";
import { HamBurger } from "../features/tick-icon";
import { biopsiesAblations } from "./menuItems";
import Image from "next/image";
import Link from "next/link";
import features from "../services/features";

function NavBar() {
  const [isMenu1, setIsMenu1] = useState(true);
  const onClickMenuHandler1 = () => {
    setIsMenu1(!isMenu1);
  };

  const [mainMenu, setMainMenu] = useState(``);
  const [classNameMenu, setClassNameMenu] = useState(`${classes.active}`);
  const [classNameSubMenuServices, setClassSubNameMenuServices] = useState(
    `${classes.subMenu}`
  );

  // Services
  const onClickServiceHandler = () => {
    setMainMenu(`${classes.moveMenu}`);
    // setClassNameMenu(`${classes.active} `);
    setClassSubNameMenuServices(`${classes.subMenu} ${classes.moveSubMenu}`);
  };

  const onBackClickServicesHandler = () => {
    setMainMenu(`${classes.linearTransition}`);
    // setClassNameMenu(`${classes.active} `);
    setClassSubNameMenuServices(`${classes.subMenu}`);
  };

  // Services submenu Radiology
  const [subService, setSubService] = useState(`${classes.subMenu}`);
  const onClickSubServiceHandler = () => {
    setClassSubNameMenuServices(`${classes.moveMenu1}`);
    setSubService(`${classes.subMenu} ${classes.moveSubMenu}`);
  };
  const onBackClickSubServiceHandler = () => {
    setClassSubNameMenuServices(`${classes.subMenu} ${classes.moveSubMenu}`);
    setSubService(`${classes.subMenu} `);
  };

  //Services submenu biopsiesAblations
  const [subService1, setSubService1] = useState(`${classes.subMenu}`);
  const onClickSubServiceHandler1 = () => {
    setClassSubNameMenuServices(`${classes.moveMenu1}`);
    setSubService1(`${classes.subMenu} ${classes.moveSubMenu}`);
  };
  const onBackClickSubServiceHandler1 = () => {
    setClassSubNameMenuServices(`${classes.subMenu} ${classes.moveSubMenu}`);
    setSubService1(`${classes.subMenu} `);
  };

  // Appointment
  const [classNameSubMenuAppointment, setClassNameSubMenuAppointment] =
    useState(`${classes.subMenu}`);
  const onClickAppointmentHandler = () => {
    setMainMenu(`${classes.moveMenu}`);
    // setClassNameMenu(`${classes.active} `);
    setClassNameSubMenuAppointment(`${classes.subMenu} ${classes.moveSubMenu}`);
  };
  const onBackClickAppointmentHandler = () => {
    setMainMenu(`${classes.linearTransition}`);
    // setClassNameMenu(`${classes.active} `);
    setClassNameSubMenuAppointment(`${classes.subMenu}`);
  };
  const [isClicked, setIsClicked] = useState(false);
  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <nav className={[classes.nav]}>
        <div className={classes.showMob}>
          <div className={classes.mobNav}>
            <div className={classes.images}>
            <Link href="/" >
            <a>
              <Image
                  width={120}
                  height={70}
                  className={classes.img}
                  src="/images/logo.png"
                  alt="sunsol-logo"
                  />
            </a>
          </Link>
          <Link href="https://www.nhima.co.zm/">
            <a className={classes.tooltip}>
              <Image
                width={70}
                height={70}
                className={classes.img}
                src="/images/nhima.png"
                alt="nhima-logo"
              />
              <span className={classes.tooltipText}>
              <p>1. 24x7 Service.including weekends &Public Holiday </p>
              <p>2. Radiology reports By Expert & Qualified Radiologist.</p>
              <p>3. Minimum Reporting turnover Time.</p>
              <p>4. Good Quality & High Resolution Images.</p>
              </span>
            </a>
          </Link>


            </div>
            <div className={classes.icon} onClick={onClickHandler}>
              <div
                className={`${classes.hamburger} ${isClicked && classes.open}`}
                onClick={onClickHandler}
              >
                <div className={`${classes.btn__burger} `}></div>
              </div>
            </div>
          </div>
          <div
            className={`${classes.elements} ${!isClicked && classes.show} ${
              isClicked && classes.hide
            }`}
          >
            <div className={mainMenu}>
              <ul>
                <li>
                  <Link className={`${classes.active}`} href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#footer">About</Link>
                </li>
                <li>
                  <div
                    className={classNameMenu}
                    onClick={onClickServiceHandler}
                  >
                    <Link href="#">Services</Link>
                  </div>
                </li>

                <li>
                  <Link href="/appointment">Appointment</Link>
                </li>
                <li>
                  <Link href="mailto:reports@sanketsunsol.com">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services submenu */}
            <div className={classNameSubMenuServices}>
              <ul>
                <li onClick={onBackClickServicesHandler}>
                  <Link href="#">&lt; Back</Link>
                </li>
                <li onClick={onClickSubServiceHandler}>
                  <Link href="#">Radiology</Link>
                </li>
                <li onClick={onClickSubServiceHandler1}>
                  <Link href="#">Biopsies & Ablations</Link>
                </li>
         
              </ul>
            </div>

            {/* Services Submenu Radiology*/}
            <div className={subService}>
              <ul>
                <li onClick={onBackClickSubServiceHandler}>
                  <Link href="#">&lt; Back</Link>
                </li>
                {features.map((item, index) => (
                  <li key={index}>
                    <Link href={`/services/${item.title}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Services Submenu Biopsies & Ablations*/}
            <div className={subService1}>
              <ul>
                <li onClick={onBackClickSubServiceHandler1}>
                  <Link href="#">&lt; Back</Link>
                </li>
                {biopsiesAblations.map((item, index) => (
                  <li key={index}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <section className={classes.section}></section>
          </div>
        </div>
      </nav>

      {/* Desktop View */}
      <div className={classes.showDesk}>
        <nav className={classes.nav}>
          <div className={classes.images}>

          <Link href="/" >
            <a>
              <Image
                  width={175}
                  height={100}
                  className={classes.img}
                  src="/images/logo.png"
                  alt="sunsol-logo"
                  />
            </a>
          </Link>
          <Link href="https://www.nhima.co.zm/">
            <a className={classes.tooltip}>
              <Image
                width={70}
                height={70}
                className={classes.img}
                src="/images/nhima.png"
                alt="nhima-logo"
              />
              <span className={classes.tooltipText}>
              <p>1. 24x7 Service.including weekends &Public Holiday </p>
              <p>2. Radiology reports By Expert & Qualified Radiologist.</p>
              <p>3. Minimum Reporting turnover Time.</p>
              <p>4. Good Quality & High Resolution Images.</p>
              </span>
            </a>
          </Link>

                  </div>
          <ul>
            <li>
              <Link className={classes.active} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="#footer">About</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
              <ul>
                <li>
                  <Link href="#">Radiology</Link>
                  <ul>
                    {features.map((item, index) => (
                      <li key={index}>
                        <Link href={`/services/${item.title}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link href="#">Biopsies&nbsp;&&nbsp;Ablations</Link>
                  <ul>
                    <li>
                      <Link href="#">CT&nbsp;Guided&nbsp;Biopsies</Link>
                    </li>
                    <li>
                      <Link href="#">CT&nbsp;Guided&nbsp;Biopsies</Link>
                    </li>
                    <li>
                      <Link href="#">Ultrasound&nbsp;Biopsies</Link>
                    </li>
                    <li>
                      <Link href="#">Radiofrequency&nbsp;ablation</Link>
                    </li>
                    <li>
                      <Link href="#">Cryoablation</Link>
                    </li>
                    <li>
                      <Link href="#">Varicose&nbsp;Vein&nbsp;Ablation</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/appointment">Appointment</Link>
            </li>
            <li>
              <Link href="mailto:reports@sanketsunsol.com">Contact</Link>
            </li>
          </ul>

          <section className={classes.section}></section>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
