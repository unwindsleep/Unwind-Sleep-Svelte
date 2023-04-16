<script lang="ts">
  import { Container, Col, Row, Breadcrumb, BreadcrumbItem } from "sveltestrap";
  import {
    freeShippingTruck,
    nightTrial,
    fiveYearWarranty,
  } from "../assets/svgs/svg";

  export let mattress: any = null;

  $: console.log("mattress", mattress);

  let selectedItem: any = null;
</script>

{#if mattress}
  <Container class="mattress-container">
    <div class="breadcrumb-wrapper">
      <div class="breadcrumb-container">
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
              <BreadcrumbItem active>Mattress</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    </div>
    <div class="mattress-purchase-wrapper">
      <div class="mattress-purchase-container">
        <Row>
          <Col lg="7" class="mattress-purchase-img-col">
            <div class="mattress-purchase-box">
              <!-- <img src={marymattress} alt='Unwind Sleep Mattress' /> -->
            </div>
          </Col>
          <Col lg="5" class="mattress-purchase-col">
            <div class="mattress-purchase-box">
              <h3 class="mattress-title">Unwind Sleep Mattress</h3>
              <!-- <span class="mattress-price">${variant.price}</span> -->
              <p class="mattress-size">Select a size</p>
              <!-- {variantSelectors} -->
              <div class="addtocart-box">
                <!-- {addToCartButton}   -->
              </div>
              <div class="mattress-svg-container">
                <Row class="home-svg-row">
                  <Col class="home-svg-col">
                    <div class="home-svg-box">
                      {@html freeShippingTruck}
                      <p>Free Shipping</p>
                      <p class="home-svg-info" />
                    </div>
                  </Col>
                  <Col class="home-svg-col">
                    <div class="home-svg-box">
                      {@html nightTrial}
                      <p>101 Night Trial</p>
                      <p class="home-svg-info" />
                    </div>
                  </Col>
                  <Col class="home-svg-col">
                    <div class="home-svg-box">
                      {@html fiveYearWarranty}
                      <p>5 Year Warranty</p>
                      <p class="home-svg-info" />
                    </div>
                  </Col>
                </Row>
              </div>
              <div class="mattress-dropdown-box">
                <!-- <MattressInfo /> -->
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <!-- <div class='mattress-image-wrapper'>
        <div class='mattress-image-container'>
          <Row>
            <Col lg='6' class='mattress-image-col'>
              <div class='mattress-image-box'>
                <img src={mattress5} alt='Close up of Unwind Sleep logo on the Unwind Sleep Mattress' />
              </div>
            </Col>
            <Col lg='6' class='mattress-image-col'>
              <div>
                <Row>
                  <Col class='mattress-image-col'>
                    <div class='mattress-image-box'>
                      <img src={mattress2} alt='Unwind Sleep Mattress with a small bed side table to the left and a medium sized tree to the right in a white pot' />
                    </div>
                  </Col>
                  <Col class='mattress-image-col'>
                    <div class='mattress-image-box'>
                      <img src={dog} alt='Brown labradoodle laying on the Unwind Sleep Mattress' />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col class='mattress-image-col'>
                    <div class='mattress-image-box'>
                      <img src={mattress4} alt='Close up of Unwind Sleep Mattress fabric, four purple angular lines with grey and white wave like stitching in between them' />
                    </div>
                  </Col>
                  <Col class='mattress-image-col'>
                    <div class='mattress-image-box'>
                      <img src={homemattress1} alt='Couple with black short hair and long blonde hair laying down laughing on an Unwind Sleep Mattress' />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div> -->

    <!-- <div class='mattress-safe-wrapper'>
        
        <div class='mattress-safe-container'>
          <Row>
            <Col lg='6'>
              <div class='mattress-safe-box'>
                <img src={family2} alt='A father and daughter clapping hands with smiles on their faces on an Unwind Sleep Mattress' />
              </div>
            </Col>
            <Col lg='6'>
              <div class='mattress-safe-box'>
                <div class='mattress-safe-box-inner'>
                  <h3 class='mattress-safe-title'>
                    Designed to be the safest
                  </h3>
                  <p class='mattress-safe-info'>
                    Our mattresses are crafted with only the 
                    highest quality fabrics. Our fiberglass-free rayon-based 
                    fire retardant fabric will provide you with the
                    healthiest sleep you’ve ever had.
                  </p>
                  <ul class='mattress-info-svg-box'>
                    <li>
                      <div class='mattress-info-svgs'>
                        <img src={stateoftheart} alt='State of the art fabric' /> <span>State of the art fabric</span>
                      </div>
                    </li>
                    <li>
                      <div class='mattress-info-svgs'>
                        <img src={fire} alt='Fire Retardant Fabric' /> <span>Fire Retardant fabric</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        
      </div>
      <div class='mattress-soft-wrapper'>
        
        <div class='mattress-soft-container'>
          <Row>
            <Col lg='6'>
              <div class='mattress-soft-box'>
                <img src={family3} alt='A young child rolling around smiling on an Unwind Sleep Mattress' />
              </div>
            </Col>
            <Col lg='6'>  
              <div class='mattress-soft-box'>
                <div class='mattress-soft-box-inner'>
                  <h3 class='mattress-soft-title'>
                    Crafted to be the softest
                  </h3>
                  <p class='mattress-soft-info'>
                    Our patented Relax™ layer made from state-of-the-art visco elastic foam 
                    is guaranteed to bask you in the feeling of luxury with softness, stretch 
                    and comfort you never knew possible.
                  </p>
                  <ul class='mattress-info-svg-box'>
                    <li>
                      <div class='mattress-info-svgs'>
                        <img src={comfort} alt='Comfort Visco Elastic Foam' /> <span>Comfort Visco Elastic Foam</span>
                      </div>
                    </li>
                    <li>
                      <div class='mattress-info-svgs'>
                        <img src={patent} alt='Patented Response Layer' /> <span>Patented Response Layer</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div class='mattress-soft-container-two'>
          <Row>
            <Col lg='6'>  
              <div class='mattress-soft-box'>
                <div class='mattress-soft-box-inner'>
                  <h3 class='mattress-soft-title'>
                    Crafted to be the softest
                  </h3>
                  <p class='mattress-soft-info'>
                    Our patented Relax™ layer made from state-of-the-art visco elastic foam 
                    is guaranteed to bask you in the feeling of luxury with softness, stretch 
                    and comfort you never knew possible.
                  </p>
                  <ul class='mattress-info-svg-box'>
                    <li>
                      <div class='mattress-info-svgs'>
                        <img src={comfort} alt='Comfort Visco Elatic Foam' /> <span>Comfort Visco Elastic Foam</span>
                      </div>
                    </li>
                    <li>
                      <div class='mattress-info-svgs'>
                        <img src={patent} alt='Patented Response Layer' /> <span>Patented Response Layer</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div class='mattress-soft-box'>
                <img src={family3} alt='A young child rolling around smiling on an Unwind Sleep Mattress' />
              </div>
            </Col>
          </Row>
        </div>
      </div> 
        <div class='mattress-bednbox-container'>
          <Row>
            <Col lg='6'>
              <div class='mattress-bednbox-box-img'>
                <img src={unwindbox} alt='Box with white top section, front of the box is a diagonal purple line with Unwind Sleep logo on it, the side of the box is a diagonal dark gray line with Unwind Sleep logo' />
              </div>
            </Col>
            <Col lg='6'>
              <div class='mattress-bednbox-box'>
                <h3 class='mattress-bednbox-title'>Bed in a box</h3>
                <p class='mattress-bednbox-info'>
                  Your mattress is shipped free of charge in an efficiently 
                  compressed box to keep space and costs down to a minimum. 
                </p>
              </div>
            </Col>
          </Row>
        </div> -->
  </Container>
{/if}

<style lang="scss">
  /* CONTAINER */

  .mattress-container {
    font-family: "Eina", sans-serif, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;

    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-top: 4rem !important;
  }

  /* ROWS */

  .mattress-info-row {
    background-color: white;

    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .mattress-luxury-row {
    background: rgb(227, 214, 233, 0.3);

    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .mattress-render-row {
    background: rgb(227, 214, 233, 0.5);
  }

  /* COL */

  .mattress-purchase-img-col {
    padding-left: 0.25rem !important;
    padding-top: 0.25rem;
    padding-right: 0.25rem !important;
    padding-bottom: 0.25rem;
  }

  .mattress-image-col {
    padding: 0 !important;
  }

  /* BREADCRUMB */

  .breadcrumb-wrapper {
    background: #f5f6f8 !important;
  }

  .breadcrumb-container {
    max-width: 1400px;

    margin-left: auto !important;
    margin-right: auto !important;

    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }

  .breadcrumb {
    background: transparent !important;

    padding-left: 0 !important;

    margin-bottom: 0 !important;

    letter-spacing: 0.05rem;
    font-size: 0.8rem;
  }

  .breadcrumb-item a {
    color: #2b2823;
  }

  /* MATTRESS PURCHASE */

  .mattress-purchase-wrapper {
    background-color: rgb(227, 214, 233, 0.25);

    padding-bottom: 3rem;
  }

  .mattress-purchase-container {
    max-width: 1400px;

    margin-left: auto;
    margin-right: auto;
  }

  .mattress-purchase-box img {
    width: 100%;

    border-radius: 5px;
  }

  .mattress-title {
    margin-top: 1rem;

    font-size: 1.8rem;
    font-weight: 600;

    color: #c5acd2;
  }

  .mattress-size {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05rem;

    margin-top: 1rem;
    margin-bottom: 0.25rem;

    font-family: "Poppins";
  }

  .mattress-price {
    font-size: 1.25rem;

    font-family: "Poppins";
  }

  /* IN CASE OF DISCOUNTS APPLY CLASSNAME TO SPANS */

  .original-price {
    font-size: 1rem;

    text-decoration: line-through;

    color: grey;
  }

  .Product__option {
    padding: 1rem;

    border-radius: 3px;

    font-family: "Poppins";
  }

  .Product__option option {
    border: 1px solid black;
  }

  .add-to-cart {
    width: 100%;

    background: #c5acd2;

    border-radius: 3px;
  }

  .add-to-cart:hover {
    background: purple;
  }

  .mattress-carousel-desktop-img {
    padding: 1rem;
  }

  /* MATTRESS DROPDOWN */

  .mattress-dropdown-box {
    font-family: "Eina";

    margin-top: 2rem;
  }

  .mattress-dropdown-button,
  .mattress-dropdown-button-two {
    padding: 1.2rem;

    width: 100%;

    background: transparent;

    color: #c5acd2;
    font-size: 1.2rem;
    font-weight: 600;

    border-left: 0;
    border-right: 0;
    border-top: 1px solid grey;
    border-bottom: 0;
  }

  .mattress-dropdown-button-two {
    border-bottom: 1px solid grey;
  }

  .mattress-dropdown-button:hover,
  .mattress-dropdown-button-two:hover {
    font-size: 1.22rem;
  }

  .mattress-measurement-box,
  .mattress-qualities-box {
    padding: 1rem;

    font-family: "Eina";
  }

  .mattress-measurement-title {
    font-size: 1.1rem;
    font-weight: 600;

    margin: 0;
  }

  .mattress-measurement-info {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .mattress-qualities-info {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .mattress-qualities-info img {
    width: 3rem;

    margin-left: -1rem;
  }

  /* MATTRESS SVG */

  .mattress-svg-container {
    max-width: 1400px;

    margin-right: auto;
    margin-left: auto;

    background-color: rgb(227, 214, 233, 0.25);

    padding-top: 1rem;
    padding-bottom: 1rem;

    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .home-svg-box {
    text-align: center;

    font-size: 0.8rem;
    font-weight: 600;
  }

  .home-svg-box p {
    margin: 0;

    padding-top: 0.5rem;
  }

  .home-svg-box svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .home-svg-info {
    font-weight: 500;
  }

  /* MATTRESS TAB SECTION */

  .benefit-tab-wrapper {
    margin-top: 1rem;
  }

  .benefittab-box {
    padding-top: 1rem;
  }

  .tab-box {
    text-align: center;
  }

  .tab-title {
    color: #c5acd2;
  }

  .nav-item {
    padding: 0;
  }

  .nav-link.active {
    background-color: transparent !important;

    border-top: none !important;
    border-right: none !important;
    border-left: none !important;

    color: #c5acd2;
  }

  .tab-item {
    padding: 0 !important;
  }

  .nav-link:hover {
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
  }

  .tab-content {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    padding-top: 1rem;
  }

  /* MATTRESS IMAGE SECTION */

  .mattress-image-wrapper {
    max-width: 1400px;

    margin-left: auto;
    margin-right: auto;

    margin-top: 3rem;
  }

  .mattress-image-box {
    padding: 0.25rem;
  }

  .mattress-image-box img {
    width: 100%;

    border-radius: 5px;
  }

  /* LUXURY SECTION */

  .mattress-luxury-wrapper {
    margin-top: 8vh;
    margin-bottom: 8vh;
  }

  .mattress-luxury-container {
    max-width: 1400px;

    margin-right: auto !important;
    margin-left: auto !important;

    text-align: center;
  }

  .mattress-luxury-box h3 {
    width: 40vw;

    margin-left: auto;
    margin-right: auto;

    color: #c5acd2;
    font-size: 2rem;
    font-weight: 800;
  }

  .mattress-luxury-box p {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    max-width: 40vw;

    margin-left: auto;
    margin-right: auto;
  }

  .mattress-luxury-box video {
    width: 100%;
  }

  /* SAFE SECTION */

  .mattress-safe-wrapper {
    margin-top: 4rem;

    background-color: rgb(227, 214, 233, 0.5);
  }

  .mattress-safe-container {
    padding-top: 7rem;
    padding-bottom: 7rem;

    text-align: center;

    max-width: 1400px;

    margin-left: auto;
    margin-right: auto;
  }

  .mattress-safe-box img {
    width: 100%;

    border-radius: 5px;
  }

  .mattress-safe-title {
    color: #c5acd2;

    font-weight: 600;
  }

  .mattress-safe-info {
    width: 90%;

    margin-left: auto;
    margin-right: auto;

    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .mattress-safe-box-inner,
  .mattress-soft-box-inner {
    padding: 3rem 0;
  }

  /* SOFT SECTION */

  .mattress-soft-wrapper {
    background-color: rgb(227, 214, 233, 0.5);
  }

  .mattress-soft-container,
  .mattress-soft-container-two {
    padding-top: 7rem;
    padding-bottom: 7rem;

    text-align: center;

    max-width: 1400px;

    margin-left: auto;
    margin-right: auto;

    display: none;
  }

  .mattress-soft-container-two {
    display: block;
  }

  .mattress-soft-box img {
    width: 100%;

    border-radius: 5px;
  }

  .mattress-soft-title {
    color: #c5acd2;

    font-weight: 600;
  }

  .mattress-soft-info {
    width: 90%;

    padding-top: 1rem;

    margin-left: auto;
    margin-right: auto;

    font-family: "Poppins";
  }

  /* BED IN A BOX */

  .mattress-bednbox-container {
    max-width: 1400px;

    margin-left: auto;
    margin-right: auto;

    margin-top: 2vh;
    margin-bottom: 2vh;

    padding-top: 4vh;
    padding-bottom: 4vh;

    text-align: center;
  }

  .mattress-bednbox-box {
    padding-top: 8rem;

    width: 60%;

    margin-left: auto;
    margin-right: auto;
  }

  .mattress-bednbox-title {
    margin-top: 6rem;

    font-weight: 600;

    color: #c5acd2;
  }

  .mattress-bednbox-info {
    font-family: "Poppins";
  }

  .mattress-bednbox-box-img img {
    width: 90%;

    margin-left: auto;
    margin-right: auto;

    text-align: center;
  }

  /* SVG MODALS */

  .svg-modals svg {
    width: 2rem;
    height: 2rem;
  }

  .svg-modals {
    text-align: center;
  }

  .svg-modals p {
    font-weight: 600;
  }

  .mattress-info-svgs img {
    width: 3rem;
  }

  .mattress-info-svg-box {
    padding: 0;

    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .mattress-info-svg-box {
    list-style-type: none;

    display: inline-block;
  }

  .mattress-info-svg-box li {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  /* MEDIA QUERY */

  @media only screen and (max-width: 992px) {
    /* CONTAINER */

    /* ROW */

    /* COL */

    /* BREADCRUMB */

    /* MATTRESS PURCHASE */

    /* MATTRESS */

    .mattress-soft-container {
      display: block;
    }

    .mattress-soft-container-two {
      display: none;
    }

    /* MATTRESS SAFE */

    .mattress-safe-title {
      margin-top: 2rem;
    }

    .mattress-safe-box-inner {
      padding: 0;
    }

    /* MATTRESS SAFE */

    .mattress-soft-box-inner {
      padding: 0;
    }

    .mattress-soft-title {
      margin-top: 2rem;

      font-size: 1.5rem;
    }

    /* BEDNBOX */

    .mattress-bednbox-title {
      margin-top: 2rem;
    }

    .mattress-bednbox-box {
      padding-top: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    /* CONTAINER */

    .mattress-container {
      padding-top: 3.75rem !important;
    }

    /* ROW */

    /* COL */

    /* BREADCRUMB */

    /* MATTRESS PURCHASE */

    .mattress-title {
      font-size: 1.5rem;
    }

    /* MATTRESS SAFE */

    .mattress-safe-title {
      margin-top: 2rem;
    }

    .mattress-safe-box-inner {
      padding: 0;
    }

    .mattress-safe-title {
      font-size: 1.5rem;
    }

    /* HOME SVG */

    .home-svg-box {
      font-size: 0.8rem;
    }

    /* MATTRESS BEDNBOX */

    .mattress-bednbox-box {
      text-align: center;

      width: 100%;
    }
  }

  /* ANIMATION */

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
