import React from "react";
import SectionTitle from "../components/SectionTitle";
import monitor from "../assets/img/svg/display.svg";
import globe from "../assets/img/svg/world.svg";
import lab from "../assets/img/svg/lab.svg";
import "./ServicePackages.scss";

function ServicePackages() {
  return (
    <section className="services-section">
      <SectionTitle
        title="Packages"
        subtitle="I offer flexible packages to suit your needs and budget. Whether you need a clean one-pager or a full custom site, I’ve got you covered."
      />
      <div className="pricing_grid">
        <div className="pricing_card">
          <img src={monitor} className="pricing_icon" />
          <h4 className="price_title">Starter</h4>
          <p className="price_subtitle"> from $300</p>
          <ul className="pricing_list">
            <li className="pricing_list_item"> One-page landing site</li>
            <li className="pricing_list_item"> 3-5 sections</li>
            <li className="pricing_list_item">
              {" "}
              Ideal for simple launches or portfolios
            </li>
            <li className="pricing_list_item">
              {" "}
              Responsive layout with modern design
            </li>
            <li className="pricing_list_item"> 1 round of design feedback</li>
          </ul>
        </div>
        <div className="pricing_card">
          <img src={globe} className="pricing_icon" />
          <h4 className="price_title">Professional</h4>
          <p className="price_subtitle"> from $600</p>
          <ul className="pricing_list">
            <li className="pricing_list_item">
              {" "}
              3–5 page website (e.g., Home, About, Services, Contact, etc.)
            </li>
            <li className="pricing_list_item"> Contact form integration</li>
            <li className="pricing_list_item">Stronger layout customization</li>
            <li className="pricing_list_item">2 rounds of design feedback</li>
            <li className="pricing_list_item">
              {" "}
              Platform & hosting consultation included
            </li>
          </ul>
        </div>
        <div className="pricing_card">
          <img src={lab} className="pricing_icon" />
          <h4 className="price_title">Custom</h4>
          <p className="price_subtitle"> from $900</p>
          <ul className="pricing_list">
            <li className="pricing_list_item">
              {" "}
              Fully tailored structure and design
            </li>
            <li className="pricing_list_item">
              {" "}
              Unique layout needs, animations, or integrations
            </li>
            <li className="pricing_list_item">Flexible page count</li>
            <li className="pricing_list_item">
              Copy/content guidance if needed
            </li>
            <li className="pricing_list_item">
              {" "}
              Multiple revision rounds based on project scope
            </li>
          </ul>
        </div>
      </div>
      <h4>💡 Don’t need a full new site?</h4>
      <p>
        If you already have a website but it feels outdated, slow, or hard to
        use — I can help with that too. Whether it’s improving layout and
        design, making it mobile-friendly, or rebuilding it in a better platform
        like Webflow or Framer, I can take what you have and make it better.
      </p>
    </section>
  );
}

export default ServicePackages;
