<script lang="ts">
    import {
        Container,
        Col,
        Row,
        Breadcrumb,
        BreadcrumbItem,
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        Styles,
    } from "sveltestrap";
    import { shoppingBag } from "../assets/svgs/svg";

    let links = [
        {
            href: "/unwind-sleep-mattress",
            title: "Mattress",
        },
        {
            href: "/unwind-sleep-pillow",
            title: "Pillow",
        },
        {
            href: "/ourstory",
            title: "Our story",
        },
        {
            href: "/contact",
            title: "Contact",
        },
        {
            href: "/faqs",
            title: "FAQs",
        },
    ];

    let isMobile = false;
    let isOpen = false;
    let headerClientWidth: any;

    $: if (headerClientWidth && headerClientWidth < 768) {
        isMobile = true
    } else {
        isMobile = false
    }

    function handleUpdate(event) {
        console.log(event);
        isOpen = event.detail;
    }

</script>

<Styles icons={false} />

<div class="header-wrapper" bind:clientWidth={headerClientWidth}>
    <Container class="header-container" lg>
        <div class="desktop-nav">
            <Row class="header-column-spacing">
                <Col xs="2">
                    <div class="logo">
                        <a href="/"
                            ><img
                                src="src/assets/images/unwindlogo.png"
                                alt="Logo"
                            /></a
                        >
                    </div>
                </Col>
                {#if isMobile === false}
                <Col xs="8">
                    <div class="link-box {isMobile ? 'mobile' : 'desktop'}">
                        {#each links as link}
                            <div>
                                <a class="link-text {isMobile ? 'mobile' : 'desktop'}" href={link.href}>
                                    <span>{link.title}</span>
                                </a>
                            </div>
                        {/each}
                    </div>
                </Col>
                {/if}
                <Col xs="2">
                    <!-- onClick={this.props.handleCartOpen} -->
                    <div class="right-navigation">
                        {@html shoppingBag}
                    </div>
                </Col>
            </Row>
        </div>
        <!-- <div class='mobile-nav'>
        <Row class="header-column-spacing">
          <Col>
            <div class="left-navigation">
              <div class="header-hamburger-menu">
                <BurgerMenu /> 
              </div>
            </div>
          </Col>
          <Col>
            <div class='logo'>
              <a href="/">
                <img src={ unwindlogo } alt="Unwind logo"/> 
              </a>
            </div>
          </Col>
          <Col>
            <div class="right-navigation">
                onClick={this.props.handleCartOpen} 
              <svg class='header-icons' type="image" 
                  width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.06997 1.70327C6.18582 0.765578 7.81418 0.765578 8.93003 1.70327C9.60835 2.27328 10 3.11398 10 4V5.42829H4V4C4 3.11398 4.39166 2.27328 5.06997 1.70327ZM3 6.42829V9.42829H4V6.42829H10V9.42829H11V6.42829H13.5V15.5012C13.5 16.7993 12.7666 17.986 11.6056 18.5665C11.1297 18.8044 10.605 18.9283 10.0729 18.9283H4.42705C3.89502 18.9283 3.37029 18.8044 2.89443 18.5665C1.7334 17.986 1 16.7993 1 15.5012V6.42829H3ZM3 5.42829V4C3 2.81864 3.52221 1.6977 4.42663 0.937687C5.91443 -0.312562 8.08558 -0.312562 9.57337 0.937687C10.4778 1.6977 11 2.81864 11 4V5.42829H14H14.5V5.92829V15.5012C14.5 17.1781 13.5526 18.711 12.0528 19.4609C11.4381 19.7683 10.7602 19.9283 10.0729 19.9283H4.42705C3.73977 19.9283 3.06193 19.7683 2.44721 19.4609C0.947399 18.711 0 17.1781 0 15.5012V5.92829V5.42829H0.5H3Z" fill="black"/>
                </svg>
            </div>
          </Col>
        </Row>
      </div> -->
    </Container>
    <!-- <Navbar expand="md">
        <NavbarBrand href="/">
            <img src='src/assets/images/unwindlogo.png' alt='Logo' />
        </NavbarBrand>
        <NavbarToggler on:click={() => (isOpen = !isOpen)} />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
          <div class="link-box {isOpen ? 'mobile' : 'desktop'}">
            <Nav navbar>
                {#each links as link}
                <NavItem>
                    <NavLink href={link.href} style={isOpen ? '' : 'padding: 0; margin-left: 1rem; margin-right: 1rem;'}><span class="link-text">{link.title}</span></NavLink>
                </NavItem>
                {/each}
              </Nav>
          </div>
        </Collapse>
      </Navbar> -->
</div>

<style lang="scss">
    .header-wrapper {
        margin: 1rem 0;

        .link-box {
        width: 100%;

        &.mobile {
        }

        &.desktop {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .link-text {
            font-family: "Eina", sans-serif;
            font-size: 1rem;
            font-weight: 800;
            color: black;
            text-decoration: none;

            &.mobile {
                margin-top: 1rem;
            }

            &.desktop {
                margin-left: 1rem;
                margin-right: 1rem;

            }
        }

        .link-text:hover {
            color: #ba7fcd;
            text-decoration: none;
        }
    }
    }
</style>
