import React from "react";
import "../css/product.css";

export default function product() {
  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper">
          <div className="content">
            <div className="info">
              <div className="block published">
                <div className="mini-title">Published</div>
                10/08/2022
              </div>
              <div className="block published">
                <div className="mini-title">Views</div>359
              </div>
              <div className="block published">
                <div className="mini-title">Downloads</div>
                156
              </div>
              <div className="block published">
                <div className="mini-title">Likes</div>
                56
              </div>
            </div>
            <div>
              <div className="words">
                <h1>Heading</h1>
                <img
                  src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                  alt="some "
                  style={{ width: "100%" }}
                />
                <p>Description</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique nostrum ea soluta est fugiat vel adipisci, debitis
                  temporibus quasi recusandae reprehenderit impedit culpa saepe
                  aspernatur possimus sequi praesentium eum quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae error perspiciatis voluptas consequatur delectus
                  aperiam nihil ratione nostrum amet impedit debitis, culpa
                  veniam illo nemo velit. Velit excepturi repellat iste. Enim,
                  accusamus voluptatibus. Nam est facere ea nemo soluta autem
                  corporis tempora maxime deleniti, quas recusandae minima
                  exercitationem incidunt qui, velit inventore doloremque
                  excepturi! Nesciunt fugiat eaque eveniet numquam eius?
                </p>

                <p>
                  Date: 17th February 2023 <br /> Coordinator: Smt. S.S.Sant and
                  Smt. N.R.Wagh. <br /> Participants: All department
                </p>
                <div className="buttons">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <h2 style={{ textAlign: "center" }}>Note</h2>

          <div className="content">
            <div>
              Our department website features a blog page that has been created
              for educational purposes. All of the blogs posted on the page have
              been carefully verified by the website's administrators to ensure
              that they do not contain any inappropriate content.
            </div>
            <div>
              Our aim is to provide readers with informative and engaging
              content that can help them learn and expand their knowledge on a
              variety of topics. We encourage users to take advantage of this
              resource and explore the different blog posts available on our
              website.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
