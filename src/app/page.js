// import Navbar from "@/components/Navbar";
// import styles from "./page.module.css";
// import Link from "next/link";

// export default function Home() {
//   const Services = [
//     {
//       "id": "1",
//       "title": "01 / OFFICIAL",
//       "name": "Certified translation",
//       "desc": "Official translations for immigration, education, legal, government and other high-stakes submissions.",
//       "icon": "h"
//     },
//     {
//       "id": "  2",
//       "title": "02 / EVERYDAY",
//       "name": "Document translation",
//       "desc": "Professional translation for contracts, reports, certificates, presentations, websites and business documents.",
//       "icon": "h"
//     },
//     {
//       "id": "3",
//       "title": "03 / GLOBAL",
//       "name": "Localization",
//       "desc": "Adapt language, tone and cultural details so your product and content feel native in every market.",
//       "icon": "h"
//     },
//     {
//       "id": "4",
//       "title": "04 / SCALE",
//       "name": "Business solutions",
//       "desc": "Team accounts, centralized billing, recurring workflows and tailored language programs for organizations.",
//       "icon": "h"
//     },
//   ]
//   return (
//     <div className={styles.page}>
//       <Navbar />

//       <section className="container-custom  ">
//         <section className={`${styles.hero} row align-items-center`}>
//           <div className="col-lg-5 col-md-12 col-sm-12 col-12">
//             <span className={`${styles.badge} d-inline-flex align-items-center gap-2`}>
//               <span className={styles.dot}></span>
//               Global language partner · 65+ languages
//             </span>
//             <h1 className={`${styles.title} my-lg-5 my-3`}>
//               Make your
//               <br />
//               business
//               <br />
//               <span className={`${styles.customGradientColor}`}>
//                 understood.
//               </span>
//             </h1>

//             <p className={`fs-22 text-secondary`}>
//               Professional translation and localization for companies,
//               documents, products and people — combining native-language
//               expertise with a beautifully simple digital experience.
//             </p>

//             <div className="d-flex flex-wrap gap-2 mt-4">

//               <Link
//                 href="#"
//                 className={`${styles.darkBtn} btn rounded-pill fw-bold`}
//               >
//                 Start a translation →
//               </Link>

//               <Link
//                 href="#"
//                 className="btn bg-white border rounded-pill fw-bold px-4 py-3"
//               >
//                 Explore solutions
//               </Link>

//             </div>

//             <div className={`${styles.features} d-flex flex-wrap gap-3 mt-3 fs-13`}>
//               <span>✓ Native-speaking professionals</span>
//               <span>✓ Transparent pricing</span>
//               <span>✓ Fast delivery</span>
//             </div>

//           </div>

//           <div className=" col-lg-7 col-md-12 col-sm-12 col-12">
//             <div className={styles.translation}>
//               <div className={styles.circle}></div>
//               <div className={styles.card}>
//                 <h2 className="fs-4 fw-bold mb-4">
//                   Create a translation
//                 </h2>
//                 <div className="row align-items-center g-3">
//                   <div className="col">
//                     <div className={styles.language}>
//                       <strong className="me-2">US</strong>
//                       English
//                     </div>
//                   </div>
//                   <div className="col-auto">
//                     <div className={styles.swap}>
//                       ↔
//                     </div>
//                   </div>
//                   <div className="col">
//                     <div className={styles.language}>
//                       <strong className="me-2">DE</strong>
//                       German
//                     </div>
//                   </div>
//                 </div>
//                 <div className={styles.upload}>
//                   <div className={styles.uploadIcon}>
//                     ↑
//                   </div>
//                   <strong>
//                     Drop your document here
//                   </strong>
//                   <small>
//                     PDF, DOCX, PPTX, XLSX and more · Secure upload
//                   </small>
//                 </div>

//                 <div className="border-top mt-3 pt-3 d-flex justify-content-between">
//                   <div>
//                     <small className="d-block text-secondary">
//                       Estimated delivery
//                     </small>
//                     <strong className="fs-4">
//                       24–48 hrs
//                     </strong>
//                   </div>

//                   <div className="text-end">
//                     <small className="d-block text-secondary">
//                       From
//                     </small>
//                     <strong className="fs-4">
//                       $24.95
//                     </strong>
//                   </div>
//                 </div>
//               </div>

//               <span className={styles.languages}>
//                 65+ languages
//               </span>
//               <span className={styles.available}>
//                 • Available now
//               </span>
//               <span className={styles.secure}>
//                 🔒 Secure workflow
//               </span>
//               <span className={styles.rating}>
//                 ★ 4.9 / 5 customer rating
//               </span>
//             </div>
//           </div>
//         </section>
//       </section>

//       <section className={`${styles.trusted} border-top border-bottom my-lg-5 my-md-4 my-3`}>
//         <div className="row align-items-center g-0">
//           <div className="col-12 col-md-auto">
//             <span className={styles.trustedTitle}>
//               Trusted by global teams
//             </span>
//           </div>
//           <div className="col">
//             <div className={`${styles.brands} d-flex align-items-center justify-content-between`}>
//               <span className="fs-14 fw-bold">UNICEF</span>
//               <span lang="fs-14 fw-bold">YUM!</span>
//               <span className="fs-14 fw-bold">EF</span>
//               <span className="fs-14 fw-bold">deel.</span>
//               <span className="fs-14 fw-bold">YMCA</span>
//               <span className="fs-14 fw-bold">SOTHEBY'S</span>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }












import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const Services = [
    {
      "id": "1",
      "title": "01 / OFFICIAL",
      "name": "Certified translation",
      "desc": "Official translations for immigration, education, legal, government and other high-stakes submissions.",
      "icon": "h"
    },
    {
      "id": "  2",
      "title": "02 / EVERYDAY",
      "name": "Document translation",
      "desc": "Professional translation for contracts, reports, certificates, presentations, websites and business documents.",
      "icon": "h"
    },
    {
      "id": "3",
      "title": "03 / GLOBAL",
      "name": "Localization",
      "desc": "Adapt language, tone and cultural details so your product and content feel native in every market.",
      "icon": "h"
    },
    {
      "id": "4",
      "title": "04 / SCALE",
      "name": "Business solutions",
      "desc": "Team accounts, centralized billing, recurring workflows and tailored language programs for organizations.",
      "icon": "h"
    },
  ]
  return (
    <div className={styles.page}>
      <Navbar />

      <section className="container-custom  ">
        <section className={`${styles.hero} row align-items-center`}>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <span className={`${styles.badge} rounded-pill d-inline-flex align-items-center gap-2`}>
              <span className={styles.dot}></span>
              Global language partner · 65+ languages
            </span>
            <h1 className={`${styles.title} my-lg-5 my-3`}>
              Make your
              <br />
              business
              <br />
              <span className={`${styles.customGradientColor}`}>
                understood.
              </span>
            </h1>

            <p className={`fs-22 text-secondary`}>
              Professional translation and localization for companies,
              documents, products and people — combining native-language
              expertise with a beautifully simple digital experience.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-4">

              <Link
                href="#"
                className={`${styles.darkBtn} btn rounded-pill fw-bold`}
              >
                Start a translation →
              </Link>

              <Link
                href="#"
                className="btn bg-white border rounded-pill fw-bold px-4 py-3"
              >
                Explore solutions
              </Link>

            </div>

            <div className={`${styles.features} d-flex flex-wrap gap-3 mt-3 fs-13`}>
              <span>✓ Native-speaking professionals</span>
              <span>✓ Transparent pricing</span>
              <span>✓ Fast delivery</span>
            </div>

          </div>

          <div className=" col-lg-7 col-md-12 col-sm-12 col-12">
            <div className={styles.translation}>
              <div className={styles.circle}></div>
              <div className={styles.card}>
                <h2 className="fs-4 fw-bold mb-4">
                  Create a translation
                </h2>
                <div className="row align-items-center g-3">
                  <div className="col">
                    <div className={`${styles.language} d-flex align-items-center fs-14`}>
                      <strong className="me-2">US</strong>
                      English
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className={`${styles.swap} d-flex align-items-center justify-content-center`}>
                      ↔
                    </div>
                  </div>
                  <div className="col">
                    <div className={`${styles.language} d-flex align-items-center fs-14`}>
                      <strong className="me-2">DE</strong>
                      German
                    </div>
                  </div>
                </div>
                <div className={`${styles.upload} d-flex flex-column align-items-center justify-content-center`}>
                  <div className={`${styles.uploadIcon} d-flex align-items-center justify-content-center`}>
                    ↑
                  </div>
                  <strong>
                    Drop your document here
                  </strong>
                  <small>
                    PDF, DOCX, PPTX, XLSX and more · Secure upload
                  </small>
                </div>

                <div className="border-top mt-3 pt-3 d-flex justify-content-between">
                  <div>
                    <small className="d-block text-secondary">
                      Estimated delivery
                    </small>
                    <strong className="fs-4">
                      24–48 hrs
                    </strong>
                  </div>

                  <div className="text-end">
                    <small className="d-block text-secondary">
                      From
                    </small>
                    <strong className="fs-4">
                      $24.95
                    </strong>
                  </div>
                </div>
              </div>

              <span className={`${styles.languages} fs-13`}>
                65+ languages
              </span>
              <span className={`${styles.available} fs-12`}>
                • Available now
              </span>
              <span className={`${styles.secure} fs-12`}>
                🔒 Secure workflow
              </span>
              <span className={`${styles.rating} fs-12`}>
                ★ 4.9 / 5 customer rating
              </span>
            </div>
          </div>
        </section>
      </section>

      <section className={`${styles.trusted} border-top border-bottom my-lg-5 my-md-4 my-3`}>
        <div className="row align-items-center g-0">
          <div className="col-12 col-md-auto">
            <span className={`${styles.trustedTitle} fs-14`}>
              Trusted by global teams
            </span>
          </div>
          <div className="col">
            <div className={`${styles.brands} d-flex align-items-center justify-content-between`}>
              <span className="fs-14 fw-bold">UNICEF</span>
              <span lang="fs-14 fw-bold">YUM!</span>
              <span className="fs-14 fw-bold">EF</span>
              <span className="fs-14 fw-bold">deel.</span>
              <span className="fs-14 fw-bold">YMCA</span>
              <span className="fs-14 fw-bold">SOTHEBY'S</span>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}