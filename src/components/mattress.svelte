<script lang="ts">

    import { Container, Col, Row, Breadcrumb, BreadcrumbItem } from 'sveltestrap';
    export let mattress: any = null

    $: if (mattress !== null) {
        console.log('mattress', mattress)
    }
  
</script>
{#if mattress}
sadf

<!-- <Container class='mattress-container' > -->
      <!-- <div class='breadcrumb-wrapper'>
        <div class='breadcrumb-container'>
          <Row>
            <Col>
              <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Mattress</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
      </div> -->
      <!-- <div class='mattress-purchase-wrapper'>
        <div class='mattress-purchase-container'>
          <Row>
            <Col lg='7' class='mattress-purchase-img-col'>
              <div class='mattress-purchase-box'>
                  <img src={marymattress} alt='Unwind Sleep Mattress' />
              </div>
            </Col>
            <Col lg='5' class='mattress-purchase-col'>
              <div class='mattress-purchase-box'>
                <h3 class='mattress-title'>Unwind Sleep Mattress</h3>
                <span class="mattress-price">${variant.price}</span>
                <p class='mattress-size'>Select a size</p>
                {variantSelectors}
                <div class='addtocart-box'>
                  {addToCartButton}  
                </div> 
                <div class='mattress-svg-container'>
                  <Row class='home-svg-row'>
                    <Col class='home-svg-col'>
                                    <div class='home-svg-box'>
                                    <svg 
                                        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                            viewBox="0 0 512 512">
                                        <g>
                                            <g>
                                                <path d="M386.689,304.403c-35.587,0-64.538,28.951-64.538,64.538s28.951,64.538,64.538,64.538
                                                    c35.593,0,64.538-28.951,64.538-64.538S422.276,304.403,386.689,304.403z M386.689,401.21c-17.796,0-32.269-14.473-32.269-32.269
                                                    c0-17.796,14.473-32.269,32.269-32.269c17.796,0,32.269,14.473,32.269,32.269C418.958,386.738,404.485,401.21,386.689,401.21z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M166.185,304.403c-35.587,0-64.538,28.951-64.538,64.538s28.951,64.538,64.538,64.538s64.538-28.951,64.538-64.538
                                                    S201.772,304.403,166.185,304.403z M166.185,401.21c-17.796,0-32.269-14.473-32.269-32.269c0-17.796,14.473-32.269,32.269-32.269
                                                    c17.791,0,32.269,14.473,32.269,32.269C198.454,386.738,183.981,401.21,166.185,401.21z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M430.15,119.675c-2.743-5.448-8.32-8.885-14.419-8.885h-84.975v32.269h75.025l43.934,87.384l28.838-14.5L430.15,119.675z"
                                                    />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="216.202" y="353.345" width="122.084" height="32.269"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M117.781,353.345H61.849c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h55.933
                                                    c8.912,0,16.134-7.223,16.134-16.134C133.916,360.567,126.693,353.345,117.781,353.345z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M508.612,254.709l-31.736-40.874c-3.049-3.937-7.755-6.239-12.741-6.239H346.891V94.655
                                                    c0-8.912-7.223-16.134-16.134-16.134H61.849c-8.912,0-16.134,7.223-16.134,16.134s7.223,16.134,16.134,16.134h252.773v112.941
                                                    c0,8.912,7.223,16.134,16.134,16.134h125.478l23.497,30.268v83.211h-44.639c-8.912,0-16.134,7.223-16.134,16.134
                                                    c0,8.912,7.223,16.134,16.134,16.134h60.773c8.912,0,16.134-7.223,16.135-16.134V264.605
                                                    C512,261.023,510.806,257.538,508.612,254.709z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M116.706,271.597H42.487c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h74.218
                                                    c8.912,0,16.134-7.223,16.134-16.134C132.84,278.82,125.617,271.597,116.706,271.597z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M153.815,208.134H16.134C7.223,208.134,0,215.357,0,224.269s7.223,16.134,16.134,16.134h137.681
                                                    c8.912,0,16.134-7.223,16.134-16.134S162.727,208.134,153.815,208.134z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M180.168,144.672H42.487c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h137.681
                                                    c8.912,0,16.134-7.223,16.134-16.134C196.303,151.895,189.08,144.672,180.168,144.672z"/>
                                            </g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>
                                    <p>Free Shipping</p>
                                    <p class='home-svg-info'></p>
                                </div>
                                </Col>
                    <Col class='home-svg-col'>
                                    <div class='home-svg-box'>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74" width="512" height="512"><g id="Numbers"><text transform="translate(31.994 -17.877)" font-size="18" fill="red" font-family="ArialMT, Arial">7<tspan x="-5.005" y="124">17</tspan><tspan x="-5.005" y="248">27</tspan><tspan x="-5.005" y="372">37</tspan><tspan x="-5.005" y="496">47</tspan><tspan x="-5.005" y="620">57</tspan><tspan x="-5.005" y="744">67</tspan><tspan x="-5.005" y="868">77</tspan><tspan x="-5.005" y="992">87</tspan><tspan x="-5.005" y="1116">97</tspan><tspan x="-10.011" y="1240">107</tspan><tspan x="-9.343" y="1364" letter-spacing="-0.074em">1</tspan><tspan x="-0.668" y="1364">17</tspan><tspan x="-10.011" y="1488">127</tspan><tspan x="-10.011" y="1612">137</tspan><tspan x="-10.011" y="1736">147</tspan><tspan x="-10.011" y="1860">157</tspan><tspan x="-10.011" y="1984">167</tspan><tspan x="-10.011" y="2108">177</tspan><tspan x="-10.011" y="2232">187</tspan><tspan x="-10.011" y="2356">197</tspan><tspan x="-10.011" y="2480">207</tspan><tspan x="-10.011" y="2604">217</tspan><tspan x="-10.011" y="2728">227</tspan><tspan x="-10.011" y="2852">237</tspan><tspan x="-10.011" y="2976">247</tspan><tspan x="-10.011" y="3100">257</tspan><tspan x="-10.011" y="3224">267</tspan><tspan x="-10.011" y="3348">277</tspan><tspan x="-10.011" y="3472">287</tspan><tspan x="-10.011" y="3596">297</tspan></text></g><g id="Icons"><path d="M16.49,60.96a1,1,0,0,1-.726-.313A30.551,30.551,0,0,1,13.769,58.3a1,1,0,1,1,1.582-1.222,28.671,28.671,0,0,0,1.866,2.194,1,1,0,0,1-.727,1.687Z"/><path d="M41.347,71.82A34.891,34.891,0,0,1,21.2,65.387a1,1,0,0,1,1.152-1.635A33.038,33.038,0,0,0,63.906,60.9,35.018,35.018,0,0,1,33.265,4.776,33.106,33.106,0,0,0,8.583,40.625a1,1,0,0,1-.877,1.108A.985.985,0,0,1,6.6,40.856,35.092,35.092,0,0,1,35.7,2.224,1,1,0,0,1,36.6,3.879,33.017,33.017,0,0,0,66.468,58.573a1,1,0,0,1,.9,1.658A35.279,35.279,0,0,1,41.347,71.82Z"/><path d="M10.771,52.58a1,1,0,0,1-.9-.553,29.76,29.76,0,0,1-1.282-2.97,1,1,0,1,1,1.875-.694,27.919,27.919,0,0,0,1.2,2.77,1,1,0,0,1-.893,1.447Z"/><path d="M60.285,46.6a1.015,1.015,0,0,1-.466-.114L56,44.481,52.181,46.49a1,1,0,0,1-1.452-1.054l.73-4.254L48.368,38.17a1,1,0,0,1,.555-1.706l4.27-.62,1.911-3.87a1.041,1.041,0,0,1,1.792,0l1.911,3.87,4.27.62a1,1,0,0,1,.555,1.706l-3.091,3.012.73,4.254a1,1,0,0,1-.986,1.168ZM56,42.352a1.012,1.012,0,0,1,.466.114l2.491,1.31L58.481,41a1,1,0,0,1,.288-.885l2.015-1.965L58,37.748a1,1,0,0,1-.753-.548L56,34.676,54.754,37.2a1,1,0,0,1-.753.548l-2.785.4,2.015,1.965a1,1,0,0,1,.288.885l-.476,2.774,2.491-1.31A1.012,1.012,0,0,1,56,42.352Z"/><path d="M46.229,25.438a1,1,0,0,1-.466-.115L43,23.87l-2.763,1.453a1,1,0,0,1-1.451-1.054l.527-3.078-2.236-2.179a1,1,0,0,1,.555-1.706l3.09-.449,1.382-2.8a1.04,1.04,0,0,1,1.792,0l1.382,2.8,3.09.449a1,1,0,0,1,.555,1.706l-2.236,2.179.527,3.078a1,1,0,0,1-.985,1.169ZM43,21.74a1,1,0,0,1,.466.115l1.434.755-.273-1.6a1,1,0,0,1,.287-.885l1.161-1.132-1.6-.233a1,1,0,0,1-.753-.547L43,16.76l-.718,1.454a1,1,0,0,1-.753.547l-1.6.233,1.161,1.132a1,1,0,0,1,.287.885l-.273,1.6,1.434-.755A1,1,0,0,1,43,21.74Z"/></g>
                                        </svg>
                                        <p>101 Night Trial</p>
                                        <p class='home-svg-info'></p>
                                    </div>
                                </Col>
                    <Col class='home-svg-col'>
                                    <div class='home-svg-box'>
                                        <svg
                                            version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 512 512"  >
                                            <g>
                                                <g>
                                                    <path d="M511.918,226.455c-0.436-4.146-2.568-7.927-5.891-10.444l-40.557-30.721l14.756-48.69
                                                        c1.209-3.99,0.713-8.302-1.371-11.912c-2.085-3.61-5.571-6.196-9.63-7.144l-49.548-11.569l-6.325-50.482
                                                        c-0.519-4.136-2.726-7.874-6.098-10.324c-3.372-2.451-7.607-3.394-11.702-2.61l-49.968,9.584L319.27,8.598
                                                        c-2.156-3.567-5.693-6.084-9.77-6.95c-4.078-0.867-8.333-0.007-11.752,2.375L256,33.103L214.251,4.023
                                                        c-3.421-2.382-7.675-3.242-11.753-2.375s-7.614,3.382-9.77,6.951l-26.311,43.546l-49.968-9.584
                                                        c-4.093-0.783-8.33,0.159-11.703,2.61c-3.372,2.451-5.58,6.187-6.098,10.324l-6.325,50.482l-49.548,11.569
                                                        c-4.06,0.948-7.545,3.534-9.63,7.144c-2.085,3.611-2.581,7.922-1.372,11.911l14.754,48.691L5.974,216.012
                                                        c-3.323,2.517-5.455,6.297-5.891,10.443c-0.435,4.146,0.865,8.287,3.592,11.44l33.281,38.481l-24.554,44.56
                                                        c-2.011,3.651-2.422,7.972-1.134,11.937c1.288,3.963,4.16,7.218,7.934,8.989l46.056,21.616l-4.309,50.696
                                                        c-0.353,4.154,1.029,8.269,3.819,11.367c2.789,3.098,6.737,4.902,10.904,4.986l50.87,1.014l16.681,48.064
                                                        c1.367,3.938,4.303,7.136,8.111,8.831c3.809,1.695,8.149,1.738,11.99,0.12l46.885-19.763l34.791,37.124
                                                        c2.85,3.042,6.833,4.768,11.002,4.768s8.151-1.726,11.002-4.768l34.791-37.124l46.882,19.763c3.841,1.617,8.181,1.575,11.99-0.12
                                                        c3.809-1.696,6.745-4.891,8.111-8.83l16.684-48.065l50.867-1.014c4.169-0.083,8.116-1.888,10.905-4.986
                                                        c2.789-3.098,4.172-7.212,3.819-11.367l-4.309-50.696l46.059-21.616c3.773-1.771,6.646-5.026,7.934-8.99
                                                        c1.288-3.963,0.878-8.285-1.135-11.937l-24.557-44.559l33.284-38.481C511.053,234.742,512.353,230.601,511.918,226.455z
                                                        M443.562,281.733l21.86,39.667l-41.001,19.242c-5.713,2.682-9.152,8.639-8.617,14.927l3.836,45.128l-45.282,0.903
                                                        c-6.31,0.126-11.874,4.168-13.944,10.13l-14.852,42.788l-41.734-17.594c-5.816-2.452-12.543-1.022-16.858,3.583L256,473.553
                                                        l-30.97-33.047c-2.911-3.107-6.92-4.769-11.006-4.769c-1.97,0-3.96,0.387-5.853,1.185l-41.736,17.594l-14.85-42.787
                                                        c-2.07-5.963-7.633-10.006-13.944-10.131l-45.285-0.903l3.836-45.128c0.535-6.288-2.904-12.245-8.617-14.927l-40.998-19.243
                                                        l21.858-39.668c3.046-5.528,2.326-12.367-1.801-17.141l-29.627-34.255l36.102-27.347c5.031-3.811,7.156-10.351,5.326-16.392
                                                        l-13.134-43.345l44.107-10.298c6.146-1.435,10.747-6.547,11.533-12.809l5.63-44.938l44.481,8.531
                                                        c6.198,1.19,12.481-1.609,15.745-7.011l23.422-38.763l37.165,25.886c5.179,3.607,12.057,3.607,17.235,0l37.163-25.886
                                                        l23.424,38.764c3.263,5.401,9.543,8.2,15.745,7.01l44.481-8.531l5.63,44.938c0.785,6.262,5.387,11.374,11.533,12.809
                                                        l44.107,10.298l-13.136,43.344c-1.831,6.04,0.294,12.582,5.325,16.393l36.104,27.347l-29.629,34.255
                                                        C441.235,269.364,440.515,276.205,443.562,281.733z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M256,111.722c-79.556,0-144.278,64.723-144.278,144.277S176.446,400.277,256,400.277S400.278,335.554,400.278,256
                                                        S335.555,111.722,256,111.722z M256,370.122c-62.927,0-114.122-51.195-114.122-114.122S193.073,141.878,256,141.878
                                                        S370.122,193.073,370.122,256S318.927,370.122,256,370.122z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M315.114,213.039c-5.89-5.889-15.437-5.889-21.325,0l-53.938,53.937l-21.639-21.638c-5.888-5.889-15.435-5.887-21.323,0
                                                        c-5.887,5.888-5.887,15.435,0.001,21.323l32.301,32.3c2.944,2.944,6.803,4.416,10.661,4.416c3.859,0,7.718-1.473,10.661-4.416
                                                        l64.6-64.599C321.001,228.475,321.001,218.927,315.114,213.039z"/>
                                                </g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                        </svg>
                                        <p>5 Year Warranty</p>
                                        <p class='home-svg-info'></p>
                                    </div>
                                </Col>
                  </Row>
                </div>
                <div class='mattress-dropdown-box'>
                  <MattressInfo />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div> -->
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
<!-- </Container> -->
{/if}
  
<style lang='scss'>
  
</style>
  