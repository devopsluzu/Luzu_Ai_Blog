// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import "@styles/navbar/Navbar.css";
// import Link from "next/link";
// import Image from "next/image";
// import { IoIosMenu } from "react-icons/io";
// import DefaultProfile from "@public/Images/navbar/default.svg";
// import { UserAuth } from "@context/AuthContext";
// import { useRouter } from "next/navigation";
// import prfeclogo from "@public/Images/navbar/prfec-logo.svg"
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [hover, setHover] = useState(false);
//   const [dropOpen, setDropOpen] = useState(false);
//   const [dropOpen1, setDropOpen1] = useState(false);
//   const [dropOpen2, setDropOpen2] = useState(false);
//   const router = useRouter();
//   const dropdownRef = useRef(null);

//   const menuRef = useRef(null);
//   const { user, logOut, loading } = UserAuth();

//   const handleServiceDropDown = () => {
//     setDropOpen((prev) => !prev);
//   };
//   const handleServiceDropDown1 = () => {
//     setDropOpen1((prev) => !prev);
//   };

//   const handleServiceDropDown2 = () => {
//     setDropOpen2((prev) => !prev);
//   };
//   const handleMenuClick = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleDropDown = () => {
//     setHover(!hover);
//   };

//   const handleLogOut = async () => {
//     try {
//       console.log("Logut Working");
//       await logOut();
//       setHover(false);
//       router.push("/");
//       router.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   function handleNavigation(targetPath) {
//     if (targetPath.startsWith("#")) {
//       setMenuOpen(false);
//       setHover(false);
//       document.body.classList.remove("overflow");
//       const element = document.querySelector(targetPath);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else if (targetPath.startsWith("http")) {
//       window.location.href = targetPath;
//     } else if (router.pathname !== targetPath) {
//       setMenuOpen(false);
//       setHover(false);
//       document.body.classList.remove("overflow");
//       router.push(targetPath);
//     }
//   }
//   if (loading) {
//     return null; // Or a loading spinner, if preferred
//   }
//   const handleItemClick = () => {
//     setDropOpen(false); // Close the dropdown
//     setMenuOpen(false); // Close the menu
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <Link href="/" onClick={handleLinkClick}>
//           <div style={{fontSize:"16px",fontFamily:"var(--h-font)",fontWeight:"500",color:"var(--prfec-black)"}}>
//             Luzu AI
//           </div>
//           </Link>
//         </div>

//           <div className="navbar-contents">
//             <div className="flex gap-1">
//               <div onClick={handleServiceDropDown} className="navbar-contents-category">
//                 Services
//               </div>
//               <div className="mt-1">
//                 {dropOpen ? (
//                   <IoIosArrowUp onClick={handleServiceDropDown} className="h-[13px] " style={{color:"var(--p-black)"}}/>
//                 ) : (
//                   <IoIosArrowDown onClick={handleServiceDropDown} className="h-[13px] " style={{color:"var(--p-black)"}}/>
//                 )}
//               </div>
//             </div>

//             {dropOpen && (
//               <div
//                 className="navbar-service-dropdown flex justify-center"
//                 ref={dropdownRef}
//               >
//                 <Link  href="https://business.luzu.ai/seo" onClick={handleItemClick}>
//                   SEO
//                 </Link>
//                 <Link 
//                   href="https://business.luzu.ai/content"
//                   onClick={handleItemClick}
//                 >
//                   Content
//                 </Link>
//                 <Link 
//                   href="https://business.luzu.ai/email"
//                   onClick={handleItemClick}
//                 >
//                   Email
//                 </Link>
//                 <Link 
//                   href="https://business.luzu.ai/sma"
//                   onClick={handleItemClick}
//                 >
//                   Social Media Advertising
//                 </Link>
//                 <Link 
//                   href="https://business.luzu.ai/payperclick"
//                   onClick={handleItemClick}
//                 >
//                   Pay Per Click
//                 </Link>
//                 <Link 
//                   href="https://business.luzu.ai/analytics"
//                   onClick={handleItemClick}
//                 >
//                   Analytics and Reporting
//                 </Link>
//               </div>
//             )}

//             <Link href='https://blog.luzu.ai' className="navbar-contents-category">Resources</Link>
//             <Link href='https://luzu.ai/contact-sales' className="navbar-contents-category" onClick={handleItemClick}
//             >Contact us</Link>

//             <Link href="https://app.luzu.ai" className="navbar-login" style={{ marginLeft: "10px" }}>
//               Get Started
//             </Link>
//           </div>
       

//         <div className="navbar-menu-icons">
//           {!menuOpen && (
//             <IoIosMenu
//               className="h-[26px] w-[auto]"
//               alt="Menu"
//               onClick={handleMenuClick}
//               style={{color:"var(--p-black)"}}
//             />
//           )}
//           {menuOpen && (
//             <RxCross2
//               alt="Close"
//               className="h-[26px] w-[auto]"
//               onClick={handleMenuClick}
//               style={{color:"var(--p-black)"}}
//             />
//           )}
//         </div>

//         {menuOpen && (
//           <div className='navbar-menu'
//             ref={menuRef}
//           >
//             <div className="flex justify-end  pt-[10px] pb-[10px] ">            
//               <RxCross2 alt="Close" className="h-[26px] w-[auto]" onClick={handleMenuClick} style={{color:"var(--p-black)"}}/>
//             </div>

//               <div className="pt-[8px] flex flex-col gap-[1rem]">
//               <div className="flex gap-2 items-center">
//                 <div onClick={handleServiceDropDown} className="navbar-contents-category">
//                   Services
//                 </div>
//                 <div className="mt-1">
//                   {dropOpen ? (
//                     <IoIosArrowUp onClick={handleServiceDropDown} className="h-[15px] " style={{color:"var(--p-black)"}}/>
//                   ) : (
//                     <IoIosArrowDown onClick={handleServiceDropDown} className="h-[15px] " style={{color:"var(--p-black)"}}/>
//                   )}
//                 </div>
//             </div>
//             {dropOpen && (
//               <div
//                 className="flex flex-col gap-[0.9rem] pl-[10px] "
//                 ref={dropdownRef}
//               >
//                 <Link  href="https://business.luzu.ai/seo" onClick={handleItemClick} className="navbar-contents-category">
//                   SEO
//                 </Link>
//                 <Link className="navbar-contents-category"
//                   href="https://business.luzu.ai/content"
//                   onClick={handleItemClick}
//                 >
//                   Content
//                 </Link>
//                 <Link className="navbar-contents-category"
//                   href="https://business.luzu.ai/email"
//                   onClick={handleItemClick}
//                 >
//                   Email
//                 </Link>
//                 <Link className="navbar-contents-category"
//                   href="https://business.luzu.ai/sma"
//                   onClick={handleItemClick}
//                 >
//                   Social Media Advertising
//                 </Link>
//                 <Link className="navbar-contents-category"
//                   href="https://business.luzu.ai/payperclick"
//                   onClick={handleItemClick}
//                 >
//                   Pay Per Click
//                 </Link>
//                 <Link className="navbar-contents-category"
//                   href="https://business.luzu.ai/analytics"
//                   onClick={handleItemClick}
//                 >
//                   Analytics and Reporting
//                 </Link>
//               </div>
//             )}
//               <Link href='https://blog.luzu.ai' className="navbar-contents-category">Resources</Link>
//               <Link href='https://luzu.ai/contact-sales' className="navbar-contents-category" onClick={handleItemClick}
//               >Contact us</Link>
//               </div>
           
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "@styles/navbar/Navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
// import DefaultProfile from "@public/Images/navbar/default.svg";
import { UserAuth } from "@context/AuthContext";
import { useRouter } from "next/navigation";
import logo from "@public/assets/Images/navbar/logo-black.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [dropOpen1, setDropOpen1] = useState(false);
  const [dropOpen2, setDropOpen2] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const menuRef = useRef(null);
  const { user, logOut, loading } = UserAuth();

  const handleServiceDropDown = () => {
    setDropOpen((prev) => !prev);
  };
  const handleServiceDropDown1 = () => {
    setDropOpen1((prev) => !prev);
  };

  const handleServiceDropDown2 = () => {
    setDropOpen2((prev) => !prev);
  };
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropDown = () => {
    setHover(!hover);
  };

  const handleLogOut = async () => {
    try {
      console.log("Logut Working");
      await logOut();
      setHover(false);
      router.push("/");
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  function handleNavigation(targetPath) {
    if (targetPath.startsWith("#")) {
      setMenuOpen(false);
      setHover(false);
      document.body.classList.remove("overflow");
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (targetPath.startsWith("http")) {
      window.location.href = targetPath;
    } else if (router.pathname !== targetPath) {
      setMenuOpen(false);
      setHover(false);
      document.body.classList.remove("overflow");
      router.push(targetPath);
    }
  }
  if (loading) {
    return null; // Or a loading spinner, if preferred
  }
  const handleItemClick = () => {
    setDropOpen(false); // Close the dropdown
    setMenuOpen(false); // Close the menu
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link href="/" onClick={handleLinkClick}>
            <Image src={logo} className={styles.logo} alt="luzu logo"/>
          </Link>
        </div>

        <div className={styles.navbarContents}>
          <div className={styles.navbarflex}>
            <div onClick={handleServiceDropDown} className={styles.navbarContentsCategory}>
              Services
            </div>
            <div className={styles.iconWrapper}>
              {dropOpen ? (
                <IoIosArrowUp onClick={handleServiceDropDown} className={styles.icon} />
              ) : (
                <IoIosArrowDown onClick={handleServiceDropDown} className={styles.icon} />
              )}
            </div>
          </div>

          {dropOpen && (
            <div className={styles.navbarServiceDropdown} ref={dropdownRef}>
              <Link href="https://business.luzu.ai/seo" onClick={handleItemClick}>
                SEO
              </Link>
              <Link href="https://business.luzu.ai/content" onClick={handleItemClick}>
                Content
              </Link>
              <Link href="https://business.luzu.ai/email" onClick={handleItemClick}>
                Email
              </Link>
              <Link href="https://business.luzu.ai/sma" onClick={handleItemClick}>
                Social Media Advertising
              </Link>
              <Link href="https://business.luzu.ai/payperclick" onClick={handleItemClick}>
                Pay Per Click
              </Link>
              <Link href="https://business.luzu.ai/analytics" onClick={handleItemClick}>
                Analytics and Reporting
              </Link>
            </div>
          )}


          <Link href='https://luzu.ai/contact-sales' className={styles.navbarContentsCategory} onClick={handleItemClick}>
            Contact us
          </Link>

          <Link href="https://app.luzu.ai" className={styles.navbarLogin}>
            Get Started
          </Link>
        </div>

        <div className={styles.navbarMenuIcons}>
          {!menuOpen ? (
            <IoIosMenu className={styles.menuIcon} onClick={handleMenuClick} />
          ) : (
            <RxCross2 className={styles.menuIcon} onClick={handleMenuClick} />
          )}
        </div>

        {menuOpen && (
          <div className={styles.navbarMenu} ref={menuRef}>
            <div className={styles.closeMenu}>
              <RxCross2 className={styles.menuIcon} onClick={handleMenuClick} />
            </div>

            <div className={styles.menuContent}>
              <div className="flex gap-[0.3rem] items-center" style={{display:"flex",gap:"0.3rem",alignItems:"center"}}>
                <div onClick={handleServiceDropDown} className={styles.navbarContentsCategory}>
                  Services
                </div>
                <div className={styles.iconWrapper}>
                  {dropOpen ? (
                    <IoIosArrowUp onClick={handleServiceDropDown} className={styles.icon} />
                  ) : (
                    <IoIosArrowDown onClick={handleServiceDropDown} className={styles.icon} />
                  )}
                </div>
              </div>

              {dropOpen && (
                <div className={styles.dropdownMenu} ref={dropdownRef}>
                  <Link href="https://business.luzu.ai/seo" onClick={handleItemClick} className={styles.navbarContentsCategory}>
                    SEO
                  </Link>
                  <Link href="https://business.luzu.ai/content" onClick={handleItemClick} className={styles.navbarContentsCategory}>
                    Content
                  </Link>
                  <Link href="https://business.luzu.ai/email" onClick={handleItemClick} className={styles.navbarContentsCategory}>
                    Email
                  </Link>
                  <Link href="https://business.luzu.ai/sma" onClick={handleItemClick} className={styles.navbarContentsCategory}>
                    Social Media Advertising
                  </Link>
                  <Link href="https://business.luzu.ai/payperclick" onClick={handleItemClick} className={styles.navbarContentsCategory}>
                    Pay Per Click
                  </Link>
                  <Link href="https://business.luzu.ai/analytics" onClick={handleItemClick} className={styles.navbarContentsCategory}>
                    Analytics and Reporting
                  </Link>
                </div>
              )}


              <Link href='https://luzu.ai/contact-sales' className={styles.navbarContentsCategory} onClick={handleItemClick}>
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

