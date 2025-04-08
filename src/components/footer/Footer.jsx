
// 'use client'
// import React from 'react'
// import '@styles/footer/Footer.css'
// import Image from 'next/image'
// import logo from '@public/Images/navbar/Prfec Logo White.png'
// import facebookWhite from '@public/Images/footer/facebook-white.png';
// import xWhite from '@public/Images/footer/x-white.png';
// import Instagram from '@public/Images/footer/instagram-white.png'
// import Linkedin from '@public/Images/footer/linkedin-white.png'

// import Link from "next/link";


// export const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className='footer-container'>
//           <div className='footer-left'>
//             <div className='footer-contents'>
//             <div className="footer-content-text"><Link href="/terms-of-service"> <p>Terms of Service</p> </Link></div>
//             <div className="footer-content-text"><Link href="/privacy-policy"><p>Privacy Policy</p></Link></div>
//             <div className="footer-content-text"><Link href="/cookie-policy"><p>Cookie Policy</p></Link></div>
//             <div className="footer-content-text"><Link href="/refund-policy"><p>Refund Policy</p></Link></div>
//             </div>
//             <div className='footer-contents'>
//             <div style={{fontSize:"18px",fontFamily:"var(--h-font)",fontWeight:"600",color:"var(--prfec-white)"}}>
//             Luzu AI
//           </div>
//           </div>
//           </div>
//           <div className='footer-right'>
//               <div className='footer-socials'>
//                   <Image src={facebookWhite} alt='facebook'/>
//                   <Image src={xWhite} alt='X'/>
//                   <Image src={Instagram} alt='Instagram'/>
//                   <Image src={Linkedin} alt='Linkedin'/>
//               </div>
//               <p>@copyright luzu.ai, 2025</p>

//           </div>
//         </div>
//     </div>
//   )
// }

'use client'
import React from 'react'
import styles from '@styles/footer/Footer.module.css'
import Image from 'next/image'
import facebookWhite from "@public/assets/Images/footer/facebook-white.png";
import xWhite from "@public/assets/Images/footer/x-white.png";
import Instagram from "@public/assets/Images/footer/instagram-white.png"
import Linkedin from '@public/assets/Images/footer/linkedin-white.png'
import logo from "@public/assets/Images/navbar/logo-white.png"
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerContents}>
          <div className={styles.footerContentText}>
            <Link href="https://luzu.ai/terms-of-service">
              <p>Terms of Service</p>
            </Link>
          </div>
          <div className={styles.footerContentText}>
            <Link href="https://luzu.ai/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
          </div>
          <div className={styles.footerContentText}>
            <Link href="https://luzu.ai/cookie-policy">
              <p>Cookie Policy</p>
            </Link>
          </div>
          <div className={styles.footerContentText}>
            <Link href="https://luzu.ai/refund-policy">
              <p>Refund Policy</p>
            </Link>
          </div>
        </div>
        <div className={styles.footerContents}>
          <Link href="/" >
            <Image src={logo} className={styles.logo} alt='luzu logo' />
          </Link>
        </div>
      </div>

      <div className={styles.footerRight}>
        <div className={styles.footerSocials}>
          <Image src={facebookWhite} alt='facebook'/>
          <Image src={xWhite} alt='X'/>
          <Image src={Instagram} alt='Instagram'/>
          <Image src={Linkedin} alt='Linkedin'/>
        </div>
        <p className={styles.footerCopyright}>&copy; luzu.ai, 2025</p>
      </div>
    </div>
  </div>
  )
}