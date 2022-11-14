import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import man1 from "../public/images/models/home/m1.jpg";
import man2 from "../public/images/models/home/m2.jpg";
import woman1 from "../public/images/models/home/w1.jpg";
import woman2 from "../public/images/models/home/w2.jpg";
const Home = () => {
  const Footer = dynamic(() => import("./components/footer"));
  return (
    <>
      <main className="home">
        <div className="container">
          <section className="homepage_text">
            <h1>Become a star</h1>
            <h4>Modelling agency</h4>
            <Link href="/about" className="btn home_cta">
              Who we are
            </Link>
          </section>
          <section className="images_home">
            <article className="col">
              <Image src={man1} alt="" />
            </article>
            <article className="col">
              <Image src={woman1} alt="" />
            </article>
            <article className="col">
              <Image src={man2} alt="" />
            </article>
            <article className="col">
              <Image src={woman2} alt="" />
            </article>
          </section>

          <section className="brands page_title">
            <h1>Brands we work with</h1>

            <div className="row">
              <div className="brand_card">
                <svg
                  height="1691"
                  viewBox=".976 1 299.993 202.733"
                  width="2500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m277.983 203.645c-14.03 0-22.35-7.18-22.987-17.52h13.414c0 3.447 1.91 8.035 10.21 8.32 5.752 0 8.935-3.446 8.935-6.037-.637-4.018-5.752-4.303-10.846-5.181-5.752-.834-10.209-1.998-13.414-3.425-4.457-2.305-7.026-7.201-7.026-12.36 0-9.2 7.684-16.38 21.077-16.38 12.778 0 21.077 6.61 21.691 16.665h-12.755c0-2.57-.637-6.894-8.3-6.894-5.115 0-8.298.856-8.935 4.588 0 5.182 10.846 4.896 19.145 6.894 7.662 2.02 12.777 6.894 12.777 13.81 0 12.646-10.209 17.52-22.986 17.52m-244.446-84.845 44.042-25.578 23.623 40.53h-59.366" />
                  <path
                    d="m126.15 202.12v-51.155"
                    stroke="#000"
                    stroke-width="12.887585"
                  />
                  <path d="m13.096 177.299c0 8.035 7.025 14.644 14.665 14.644 8.321 0 14.688-6.609 14.688-14.644 0-7.75-6.367-14.644-14.688-14.644-7.64 0-14.665 6.894-14.665 14.644m14.029 26.434c-14.03 0-26.149-11.79-26.149-26.434s12.12-26.148 26.149-26.148c5.752 0 10.867 1.449 15.324 4.588v-4.018h12.778v50.848h-12.777v-3.161c-3.82 2.876-9.572 4.325-15.324 4.325m170.464-69.993-61.276-106.877 44.041-25.863 76.601 132.74m-185.131 43.559c0 8.035 6.39 14.644 14.688 14.644 7.64 0 14.688-6.609 14.688-14.644 0-7.75-7.048-14.644-14.688-14.644-8.299 0-14.688 6.894-14.688 14.644m14.051 26.434c-14.688 0-26.17-11.79-26.17-26.434s11.482-26.148 26.17-26.148c5.73 0 10.846 1.449 15.325 4.588v-21.538h12.756v68.368h-12.757v-3.161c-4.479 2.876-9.594 4.325-15.325 4.325m-.628-130.614 44.678-25.27 49.158 85.888h-46.61v12.646h-12.757v-12.646m172.976 13.044c-3.205 0-6.388-2.876-6.388-6.323s3.183-6.323 6.388-6.323c3.82 0 6.39 2.877 6.39 6.323s-2.57 6.324-6.39 6.324m0-11.768c-3.205 0-5.115 2.568-5.115 5.444s1.91 5.467 5.115 5.467c3.184 0 5.094-2.59 5.094-5.467s-1.91-5.444-5.094-5.444" />
                  <path d="m294.01 143.927-1.274-2.876h-1.273v2.876h-.966v-6.894h2.876c.637 0 1.91.879 1.91 2.02s-.637 1.713-1.273 1.998l1.273 2.876m-2.547-6.015h-1.273v2.283h1.273c1.274 0 1.274-.285 1.274-1.142 0-.592 0-1.141-1.274-1.141m-84.351 39.387c0 8.035 6.39 14.644 14.688 14.644 7.662 0 14.666-6.609 14.666-14.644 0-7.75-7.004-14.644-14.666-14.644-8.299 0-14.688 6.894-14.688 14.644m14.03 26.434c-14.666 0-26.149-11.79-26.149-26.434s11.483-26.148 26.148-26.148c5.753 0 10.868 1.449 15.325 4.588v-4.018h12.141v50.848h-12.14v-3.161c-4.458 2.876-9.573 4.325-15.326 4.325m-72.714-26.434c0 8.035 7.025 14.644 14.687 14.644 8.3 0 14.688-6.609 14.688-14.644 0-7.75-6.389-14.644-14.688-14.644-7.662 0-14.687 6.894-14.687 14.644m29.375-43.098h12.756v68.368h-12.756v-3.161c-3.842 2.876-8.957 4.325-14.688 4.325-14.687 0-26.807-11.79-26.807-26.434s12.12-26.148 26.807-26.148c5.73 0 10.846 1.449 14.688 4.588z" />
                </svg>
              </div>
              <div className="brand_card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2500"
                  viewBox="0 0 192.744 192.744"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path fill="#fff" d="M0 0h192.744v192.744H0V0z" />
                    <path d="M119.305 64.872v-3.816h-15.266v20.952h15.266v-3.456h-11.018v-5.688h9.649V69.12h-9.649v-4.248h11.018zM115.057 84.168v8.064h-8.354v-8.064h-4.318v20.881h4.318v-9.361h8.354v9.361h4.248V84.168h-4.248zM119.305 110.951v-3.742h-15.266v21.238h15.266v-3.814h-11.018v-5.617h9.649v-3.455h-9.649v-4.61h11.018zM101.592 61.056h-4.248v8.064h-8.352v-8.064h-4.248v20.952h4.248v-9.36h8.352v9.36h4.248V61.056zM66.456 61.056v3.816h6.48v17.136h4.248V64.872h6.48v-3.816H66.456zM53.064 83.592c-6.696 0-10.224 3.816-10.224 11.016 0 7.56 3.528 11.304 10.224 11.304s10.152-3.744 10.152-11.304c0-7.2-3.456-11.016-10.152-11.016zm-5.616 11.016c0-4.824 1.872-7.2 5.616-7.2 4.032 0 5.904 2.376 5.904 7.2 0 5.113-1.872 7.56-5.904 7.56-3.744 0-5.616-2.447-5.616-7.56zM36.72 84.168v14.76l-8.352-14.76h-4.536v20.881h4.032V90.36l8.568 14.689h4.536V84.168H36.72zM56.52 115.848v-4.897h10.728v-3.742H52.272v21.238h4.248v-8.855h9.432v-3.744H56.52zM100.801 87.912v-3.744H83.664v3.744h6.408v17.137h4.32V87.912h6.409zM74.232 97.057c1.368 0 2.448.215 2.952.791l.792 7.201H82.8v-.504c-.504-.289-.792-1.584-.792-4.033 0-2.951-1.08-4.536-2.664-5.328 2.16-.864 3.24-2.448 3.24-5.112 0-3.744-2.16-5.904-6.696-5.904H65.376v20.881h4.32v-7.992h4.536zm-4.536-3.529v-5.616h5.328c2.16 0 3.24.792 3.24 2.664s-1.08 2.952-3.456 2.952h-5.112zM77.184 107.209h-5.112l-7.488 21.238h4.536l1.656-4.607h7.776l1.296 4.607h4.608l-7.272-21.238zm-2.664 4.822l2.664 8.354h-5.328l2.664-8.354zM98.137 114.191h4.248c-.217-1.871-.793-3.455-2.09-4.824-1.871-1.584-4.031-2.664-6.983-2.664s-5.112 1.08-6.984 2.953c-1.584 1.871-2.664 4.535-2.664 8.064 0 7.488 3.168 11.23 9.36 11.23 5.4 0 8.351-2.664 9.361-7.775h-4.248c-.576 2.447-2.449 3.744-4.825 3.744-3.528 0-5.112-2.375-5.112-6.984 0-5.039 1.584-7.488 5.112-7.488 2.376 0 3.745 1.369 4.825 3.744zM44.712 128.16h.072-.072zm.072 0c.72 0 1.296-.289 1.729-.648.36-.432.647-1.008.647-1.799 0-.865-.288-1.441-.647-1.801-.432-.359-1.008-.576-1.729-.576h-.072c-.864 0-1.44.217-1.8.576-.359.359-.576.936-.576 1.801v.07c0 .721.216 1.297.576 1.729.36.359.937.648 1.8.648h.072zm-.072.576c-1.008 0-1.728-.359-2.232-.865-.504-.504-.72-1.223-.72-2.088v-.07c0-1.01.216-1.729.72-2.232.504-.504 1.224-.721 2.232-.721h.072c.864 0 1.584.217 2.088.721s.864 1.223.864 2.232c0 .936-.36 1.654-.864 2.158a2.921 2.921 0 0 1-2.088.865h-.072zm.288-3.312h.072c.288 0 .432-.145.432-.504v-.072s-.072 0-.072-.072c-.072-.072-.216-.072-.432-.072h-.792v.721H45v-.001zm.504.504l.576.721c.072.143 0 .287-.072.359-.144.145-.36.072-.432 0l-.72-1.008h-.648v.791c0 .145-.144.289-.288.289s-.288-.145-.288-.289v-2.375c0-.145.144-.287.288-.287H45.072c.288 0 .576.07.72.215.072.072.144.072.144.145.144.145.144.287.144.432 0 .575-.144.862-.576 1.007zM122.256 61.056c13.393 0 24.984 4.896 34.344 14.256 9.648 9.648 14.473 21.168 14.473 34.631v18.504h-19.584v-19.08c0-7.486-2.664-13.967-8.064-19.295-1.297-1.368-2.664-2.448-4.248-3.528-4.32-2.952-9.432-4.248-14.76-4.248h-2.16v-21.24h-.001zm27.359 67.391h-15.264v-14.76c0-2.447-.791-4.32-2.447-5.904-1.584-1.654-3.744-2.447-5.904-2.447h-3.744V84.168h2.16c5.615 0 10.439 1.584 14.76 4.824 1.08.504 2.16 1.584 2.951 2.376 5.113 5.113 7.488 11.017 7.488 18v19.079zm-17.135 0h-10.225v-21.238H126c1.656 0 3.24.574 4.607 1.871 1.08 1.08 1.873 2.736 1.873 4.607v14.76z" />
                  </g>
                </svg>
              </div>
              <div className="brand_card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="595"
                  viewBox="0.5 0.5 328 78.001"
                >
                  <g fill="#231F20">
                    <path d="M52.244 41.844c-.104-6.346 2.637-11.286 8.217-14.822-3.147-4.576-7.788-7.148-13.925-7.723-2.183-.205-4.974.311-8.369 1.561-3.652 1.354-5.708 2.027-6.164 2.027-.964 0-2.815-.569-5.558-1.716-2.737-1.144-5.072-1.716-7-1.716-3.246.053-6.266.95-9.055 2.691-2.79 1.743-5.021 4.124-6.694 7.137C1.563 33.029.5 37.502.5 42.701c0 4.68.784 9.359 2.356 14.042 1.471 4.473 3.351 8.399 5.631 11.776 2.027 3.069 3.809 5.305 5.326 6.711 2.184 2.183 4.413 3.225 6.699 3.119 1.47-.054 3.396-.599 5.781-1.642 2.23-.983 4.464-1.478 6.697-1.478 2.079 0 4.233.492 6.468 1.478 2.484 1.043 4.515 1.562 6.087 1.562 2.334-.102 4.514-1.117 6.546-3.039.707-.627 1.482-1.484 2.318-2.576a79.861 79.861 0 0 0 2.779-3.9 57.237 57.237 0 0 0 2.093-3.51 35.298 35.298 0 0 0 1.864-3.979c.251-.572.479-1.156.684-1.754.202-.598.405-1.207.608-1.832-1.877-.83-3.577-2.005-5.098-3.514-3.344-3.323-5.044-7.433-5.095-12.321zM107.421 55.75h-.369L91.599 20.436H79.464v56.977H90.04V40.512h.491l12.914 29.302h7.417l12.873-29.302h.493v36.901h10.698V20.436h-12.052zM42.654 12.982c2.69-3.381 4.035-7.021 4.035-10.922v-.779c0-.262-.026-.521-.076-.781-1.878.104-3.868.703-5.975 1.793-2.104 1.094-3.841 2.474-5.213 4.135-2.738 3.279-4.109 6.787-4.109 10.532v.739c0 .236.026.482.076.744 4.212.415 7.966-1.406 11.262-5.461zM258.534 20.436h11.887v56.978h-11.887zM306.323 29.493c7.05 0 10.778 5.427 10.778 11.271H328.5v-1.211c0-11.019-8.404-20.201-22.26-20.201-14.84 0-23.693 9.767-23.693 26.423v6.429c0 16.651 8.771 26.297 23.651 26.297 14.225 0 22.302-9.312 22.302-19.662v-1.252h-11.398c0 5.888-3.647 10.771-10.695 10.771-7.217 0-11.809-5.135-11.809-16.115v-6.424c0-10.942 4.634-16.326 11.725-16.326zM180.39 56.416c0 7.641-4.468 11.855-11.026 11.855-6.6 0-11.067-4.174-11.067-11.855v-35.98H146.49v37.65c0 12.15 8.607 20.414 22.872 20.414 14.225 0 22.873-8.264 22.873-20.414v-37.65H180.39v35.98zM231.564 44.229l-8.484-1.918c-5-1.047-7.624-3.258-7.624-6.557 0-4.381 3.565-7.137 9.307-7.137 6.476 0 9.714 3.715 10 7.723h11.068c-.123-10.061-8.525-17.073-21.029-17.073-11.845 0-21.192 6.221-21.192 17.407 0 9.684 6.56 14.189 14.43 15.905l8.402 1.96c5.657 1.294 8.526 3.174 8.526 7.053 0 4.428-3.526 7.434-10.124 7.434-7.092 0-10.823-3.758-11.149-7.975h-11.397c.167 8.057 5.495 17.449 21.974 17.449 13.854 0 22.423-6.887 22.423-18.078-.004-10.352-6.932-14.401-15.131-16.193z" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="row">
              <div className="brand_card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2500"
                  viewBox="0 0 192.756 192.756"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                    <path d="M169.98 172.395h2.039v17.236l-12.463-13.045v12.404h-2.096v-17.412l12.52 13.104v-12.287zm-58.578 0v10.539c0 1.863-.525 3.377-1.574 4.543-1.105 1.281-2.619 1.863-4.541 1.863-1.805 0-3.318-.582-4.426-1.863-1.105-1.166-1.631-2.68-1.631-4.543v-10.539h2.098v9.84c0 3.436 1.281 5.184 3.959 5.184 2.736 0 4.076-1.748 4.076-5.184v-9.84h2.039zm6.405 0h9.957v1.922h-3.959v14.674h-1.98v-14.674h-4.018v-1.922zm-3.61 0h2.096v16.596h-2.096v-16.596zm-18.343 0h2.271l-7.221 17.527-7.22-17.527h2.271l4.95 12.287 4.949-12.287zm57.763 8.326c0 1.863-.641 3.436-1.979 4.775-1.223 1.281-2.795 1.922-4.602 1.922-1.805 0-3.377-.641-4.715-1.922-1.34-1.34-1.98-2.912-1.98-4.775s.582-3.436 1.863-4.717c1.281-1.338 2.912-1.979 4.832-1.979 1.922 0 3.494.641 4.717 1.979 1.224 1.281 1.864 2.853 1.864 4.717zm-.465-6.114c-1.746-1.689-3.785-2.562-6.115-2.562-2.387 0-4.424.873-6.172 2.562-1.688 1.688-2.562 3.727-2.562 6.113 0 2.445.875 4.484 2.562 6.172 1.689 1.631 3.727 2.447 6.172 2.447 2.389 0 4.484-.816 6.115-2.447 1.689-1.688 2.562-3.727 2.562-6.172.001-2.386-.872-4.425-2.562-6.113zm-15.314-2.212v1.922h-3.902v14.674h-2.096v-14.674h-3.959v-1.922h9.957zm-96.313 3.609c1.223 1.281 1.805 2.854 1.805 4.717s-.641 3.436-1.921 4.775c-1.281 1.281-2.854 1.922-4.659 1.922-1.805 0-3.377-.641-4.716-1.922-1.223-1.34-1.921-2.912-1.921-4.775s.64-3.436 1.863-4.717c1.281-1.338 2.854-1.979 4.775-1.979 1.921 0 3.552.641 4.774 1.979zm1.34-1.397c-1.747-1.689-3.785-2.562-6.114-2.562-2.388 0-4.483.873-6.114 2.562-1.747 1.688-2.62 3.727-2.62 6.113 0 2.445.874 4.484 2.62 6.172 1.631 1.631 3.669 2.447 6.114 2.447 2.446 0 4.484-.816 6.114-2.447 1.747-1.688 2.562-3.727 2.562-6.172 0-2.386-.815-4.425-2.562-6.113zm6.347 7.627c0 3.436 1.339 5.184 4.018 5.184 2.621 0 4.018-1.748 4.018-5.184v-9.84h2.038v10.539c0 1.863-.524 3.377-1.631 4.543-1.106 1.281-2.62 1.863-4.425 1.863-1.863 0-3.319-.582-4.425-1.863-1.165-1.166-1.688-2.68-1.688-4.543v-10.539h2.096v9.84h-.001zm-26.437-9.839v14.732h5.066v1.863h-7.104v-16.596h2.038v.001zm49.903 6.812c2.795 1.105 4.135 2.736 4.135 4.949 0 1.514-.524 2.736-1.572 3.727-.99.99-2.213 1.457-3.669 1.457-1.339 0-2.504-.408-3.493-1.34-.932-.873-1.514-1.98-1.689-3.318l2.096-.467c0 .932.291 1.689.932 2.33.641.582 1.339.873 2.271.873.874 0 1.572-.35 2.213-.99.524-.582.815-1.34.815-2.271 0-1.281-.932-2.328-2.853-3.145l-1.165-.406c-2.329-1.107-3.552-2.504-3.552-4.252 0-1.281.524-2.387 1.456-3.145.99-.814 2.096-1.164 3.436-1.164 1.921 0 3.319.873 4.25 2.562l-1.63.932c-.641-.99-1.514-1.514-2.679-1.514-.699 0-1.398.174-1.922.582-.582.465-.874 1.049-.874 1.746 0 .99.757 1.748 2.387 2.33l1.107.524zm-10.597-6.812h2.097v16.596h-2.097v-16.596zM143.85 22.377l-40.162 94.791-11.08-24.313 20.466-55.705c1.539-4.308 6.924-6.309 16.004-6.309l3.23-8.464H84.606l-3.078 8.464c6.771 0 9.541 2 8.463 6.309L79.836 65.464 59.832 22.377c-3.693-4.616-1.847-6.925 5.386-6.925V5.451H19.053v10.002c8.618 0 14.003 2.309 16.312 6.925l33.854 72.017-15.85 42.317c-.309 5.693-9.233 8.465-26.468 8.465l-3.231 8.463h131.721l18.312-38.932h-9.541c-8.924 20.158-19.234 30.469-30.775 30.469H72.911l8.925-23.852 7.694 15.387h17.235L155.39 22.379c2.309-6.925 8.311-10.617 17.697-10.617V2.834h-39.701v8.926c12.003 0 15.389 3.693 10.464 10.617z" />
                  </g>
                </svg>
              </div>
              <div className="brand_card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2500"
                  viewBox="0 0 192.756 192.756"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                    <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
                  </g>
                </svg>
              </div>
              <div className="brand_card">
                <svg
                  height="1339"
                  viewBox="35.433 30.331 889.299 446.538"
                  width="2500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m512.857 36.99c-2.898.447-5.684 11.118-11.285 16.677-4.096 4.012-9.209 3.761-11.925 8.721-1.031 1.853-.697 5.016-1.867 8.053-2.285 6.074-10.337 6.617-10.337 13.235-.028 7.147 6.715 8.512 12.552 13.583 4.556 4.082 5.002 6.896 10.518 8.874 4.71 1.603 11.717-3.636 18.028-1.755 5.183 1.547 10.142 2.661 11.313 7.983 1.03 4.904-.07 12.51-6.353 11.633-2.118-.237-11.299-3.33-22.583-2.132-13.612 1.547-29.146 5.99-30.664 21.163-.836 8.484 9.654 18.487 19.783 16.453 7.007-1.38 3.692-9.64 7.509-13.653 5.001-5.14 33.338 17.944 59.683 17.944 11.09 0 19.337-2.8 27.53-11.382.765-.655 1.699-2.062 2.883-2.146 1.115.084 3.065 1.184 3.706 1.658 21.218 17.052 37.253 51.255 115.229 51.659 10.964.055 23.46 5.294 33.658 14.6 9.098 8.415 14.42 21.496 19.588 34.773 7.802 19.923 21.79 39.302 42.993 60.868 1.157 1.156 18.613 14.726 20.006 15.743.223.139 1.505 3.204 1.06 4.917-.516 12.929-2.397 50.53 25.633 52.23 6.855.348 5.057-4.472 5.057-7.788-.013-6.548-1.212-13.054 2.244-19.755 4.722-9.222-10.017-13.472-9.585-33.408.306-14.865-12.177-12.33-18.516-23.656-3.65-6.562-6.896-10.044-6.659-18.07 1.421-45.165-9.613-74.84-15.116-82.126-4.29-5.503-7.843-7.69-3.915-10.24 23.392-15.45 28.7-29.828 28.7-29.828 12.44-29.242 23.628-55.95 39.05-67.707 3.107-2.425 11.076-8.373 15.966-10.714 14.391-6.785 21.97-10.894 26.15-14.963 6.617-6.45 11.841-19.894 5.502-28.044-7.885-10.059-21.524-2.076-27.542 1.49-43.007 25.524-49.346 70.55-64.24 96.408-11.883 20.66-31.206 35.832-48.481 37.072-12.957.961-26.916-1.658-40.82-7.76-33.812-14.823-52.314-33.965-56.674-37.35-9.084-7.008-79.606-76.235-136.74-79.063 0 0-7.09-14.196-8.874-14.433-4.18-.53-8.456 8.484-11.521 9.53-2.884.96-7.732-9.767-10.644-9.293m-251.522 413.171c-5.378-.126-9.947-4.542-9.947-10.003l.014-178.214h-58.736v196.45c0 9.627 7.801 17.485 17.372 17.485h102.663c9.64 0 17.345-7.858 17.345-17.485v-196.45h-58.68l-.056 178.214c0 5.461-4.57 9.877-9.975 10.003m196.659-188.217h-88.898c-10.518 0-19.086 8.554-19.086 19.184v194.75h58.79v-178.644c.042-5.475 4.472-9.808 9.934-9.808 5.489 0 9.891 4.235 10.016 9.655v178.798h58.555v-178.8c.07-5.419 4.472-9.654 9.947-9.654 5.434 0 9.92 4.333 9.962 9.808v178.646h58.791v-194.751c0-10.63-8.582-19.184-19.1-19.184zm-343.931 35.665c.042-5.949-4.806-10.184-9.947-10.184h-9.975v108.207h9.975c5.183 0 9.99-4.124 9.947-10.044zm39.413 124.507h-59.335v53.763h-58.708v-213.935h118.42c10.601 0 18.876 8.61 18.876 19.268v121.637c0 10.672-8.595 19.267-19.253 19.267m613.996 5.921c-11.8 0-21.706 10.198-21.706 22.556 0 12.399 9.906 22.513 22.082 22.513 12.079 0 21.859-10.114 21.859-22.513 0-12.386-9.78-22.556-21.86-22.556zm26.442 22.486c0 14.53-11.647 26.345-26.066 26.345-14.573 0-26.275-11.73-26.275-26.345 0-14.336 11.702-26.317 25.843-26.317 14.851 0 26.498 11.62 26.498 26.317" />
                  <path d="m765.131 448.852c4.082 0 6.228-1.449 6.228-4.346 0-2.578-2.076-3.901-6.047-3.901h-1.17v8.247zm15.033 16.913h-7.008l-9.014-11.995v11.995h-5.726v-30.329h6.019c8.178 0 12.524 3.093 12.524 9 0 3.942-2.563 7.44-6.144 8.484l-.418.154zm-115.591-70.09v-98.51c-.14-5.448-4.528-9.627-10.003-9.627-5.42 0-9.906 4.346-9.947 9.78v98.357zm0 80.205v-53.707h-19.95v53.707h-58.68v-194.751c0-10.63 8.567-19.184 19.086-19.184h99.137c10.547 0 19.115 8.554 19.115 19.184v194.75z" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
