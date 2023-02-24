import Image from "next/image";
import React, { useState } from "react";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Home",
			icon: "/images/home1.png",
		},
		{
			text: "Contato",
			icon: "/images/call.png",
		},
		{
			text: "Funcionários",
			icon: "/images/employees.png",
		},
		{
			text: "Admin",
			icon: "/images/administrator.png",
		},
		{
			text: "Login",
			icon: "/images/login.png",
		},
	];
	return (
		<div className={isExpanded ? styles.side_nav_container : `${styles.side_nav_container} ${styles.side_nav_container_NX}`}>
			<div className={styles.nav_upper}>
				<div className={styles.nav_heading}>
					{isExpanded && (
						<div className={styles.nav_brand}>
							<h2>Games Emporium</h2>
						</div>
					)}
                    <div className={isExpanded ? styles.hamburger_image_1 : styles.hamburger_out_1}><Image className={isExpanded ? styles.hamburger_in : styles.hamburger_out} src={"/images/cancel_rounded.png"} alt={"Minimizar a sidebar"} width={80} height={80} quality={100} onClick={() => setExpendState(!isExpanded)}/></div>
                    <div className={isExpanded ? styles.hamburger_image_2 : styles.hamburger_out_2}><Image className={isExpanded ? styles.hamburger_in : styles.hamburger_out} src={"/images/menu_blue.png"} alt={"Minimizar a sidebar"} width={80} height={80} quality={100} onClick={() => setExpendState(!isExpanded)}/></div>
				</div>
				<div className={styles.nav_menu}>
					{menuItems.map(({ text, icon }) => (
						<a className={isExpanded ? styles.menu_item : `${styles.menu_item} ${styles.menu_item_NX}`} href="#">
							<Image className={styles.menu_item_icon} src={icon} alt="" width={40} height={40} quality={100} />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className={styles.nav_footer}>
				{isExpanded && (
					<div className={styles.nav_details}>
                    <Image className={styles.nav_footer_avatar} src="/images/sunglasses.png" alt="" width={45} height={45} quality={100} />
						<div className={styles.nav_footer_info}>
							<p className={styles.nav_footer_user_name}>Admin</p>
							<p className={styles.nav_footer_user_position}>Felipe Sant'Anna</p>
						</div>
					</div>
				)}
				<div className={styles.logout_icon_div}><Image className={styles.logout_icon} src="/images/log-out.png" alt="" width={60} height={50} quality={100} /></div>
			</div>
		</div>
	);
};