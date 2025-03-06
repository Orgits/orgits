/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header orgits-header-section orgits-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
						<NavItem url="/">Home</NavItem>
							<NavItem url="about-us">About Us</NavItem>
							<NavItem dropdown title="Services">
							<Dropdown>
									<DropdownItem url="home-two">Zoho | Hubspot | Salesforce</DropdownItem>
									<DropdownItem url="home-three">SEO Optimization</DropdownItem>
									<DropdownItem url="home-four">Business Consultation</DropdownItem>
									<DropdownItem url="home-five">Digital Marketing</DropdownItem>
									<DropdownItem url="home-seven">Branding agency</DropdownItem>
								</Dropdown>
							</NavItem>
						
							<NavItem url="blog-grid">Blogs</NavItem>
							
							<NavItem url="contact-us">Contact Us</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="orgits" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
