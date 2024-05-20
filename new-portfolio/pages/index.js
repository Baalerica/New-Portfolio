import Image from "next/image";
import { Inter } from "next/font/google";

<head>
  <meta charset="utf-8" />

  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

  <title>Portfolio | Erica Rdz</title>

  <meta property="og:title" content="Portfolio| Erica Rdz" />

  <meta property="og:locale" content="en_US" />

  <link rel="canonical" href="//" />

  <meta property="og:url" content="//" />

  <meta name="description"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

  <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

  <meta name="theme-color" content="#5540af" />

  <meta property="og:site_name" content="Atom Template" />

  <meta property="og:image" content="//assets/img/social.jpg" />

  <meta name="twitter:card" content="summary_large_image" />

  <meta name="twitter:site" content="@tailwindmade" />

  <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

  <link as="style"
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
    rel="preload" />

  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
    rel="stylesheet" />

  <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

  <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />

  <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


</head>


<body :class="{ 'overflow-hidden max-h-screen': mobileMenu }" class="relative" x - data="{ mobileMenu: false }" >

  <div id="main" class="relative">
    <div x-data="{
    triggerNavItem(id) {
        $scroll(id)
    },
    triggerMobileNavItem(id) {
        mobileMenu = false;
        this.triggerNavItem(id)
    }
}">
      <div class="w-full z-50 top-0 py-3 sm:py-5  absolute
  ">
        <div class="container flex items-center justify-between">
          <div>
            <a href="/">
              <img src="/assets/img/logo.png" class="w-24 lg:w-48" alt="logo image" />
            </a>
          </div>
          <div class="hidden lg:block">
            <ul class="flex items-center">

              <li class="group pl-6">

                <span @click="triggerNavItem('#about')"
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>

                <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li class="group pl-6">

                <span @click="triggerNavItem('#services')"
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

                <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li class="group pl-6">

                <span @click="triggerNavItem('#portfolio')"
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

                <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li class="group pl-6">

                <span @click="triggerNavItem('#clients')"
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>

                <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li class="group pl-6">

                <span @click="triggerNavItem('#work')"
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

                <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li class="group pl-6">

                <span @click="triggerNavItem('#statistics')"
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>

                <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li class="group pl-6">

                <span @click="triggerNavItem('#blog')"
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>

                <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li >

              <li class="group pl-6">

                <span @click="triggerNavItem('#contact')"
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

                <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li >

            </ul >
          </div >
  <div class="block lg:hidden">
    <button @click="mobileMenu = true">
    <i class="bx bx-menu text-4xl text-white"></i>
  </button>
          </div >
        </div >
      </div >

      <div
        class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
        :class="{ 'opacity-100 pointer-events-auto': mobileMenu }">
        <div class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click="mobileMenu = false">
            <img src="/assets/img/icon-close.svg" class="h-10 w-auto" alt="" />
          </button>

          <ul class="mt-8 flex flex-col">

            <li class="py-2">

              <span @click="triggerMobileNavItem('#about')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>

            </li>

            <li class="py-2">

              <span @click="triggerMobileNavItem('#services')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

            </li>

            <li class="py-2">

              <span @click="triggerMobileNavItem('#portfolio')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

            </li >

  <li class="py-2">

    <span @click="triggerMobileNavItem('#clients')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>

            </li >

  <li class="py-2">

    <span @click="triggerMobileNavItem('#work')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

            </li >

  <li class="py-2">

    <span @click="triggerMobileNavItem('#statistics')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>

            </li >

  <li class="py-2">

    <span @click="triggerMobileNavItem('#blog')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>

            </li >

  <li class="py-2">

    <span @click="triggerMobileNavItem('#contact')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

            </li >

          </ul >
        </div >
      </div >


  <div>
    <div class="relative bg-cover bg-center bg-no-repeat py-8"
      style="background-image: url(/assets/img/bg-hero.jpg)">
      <div
        class="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
      </div>

      <div class="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
        <div class="flex flex-col items-center justify-center lg:flex-row">
          <div class="rounded-full border-8 border-primary shadow-xl">
            <img src="/assets/img/blog-author.jpg" class="h-48 rounded-full sm:h-56" alt="author" />
          </div>
          <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 class="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
              Hello I'm Erica Rodríguez!
            </h1>
            <div class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div class="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p class="font-body text-lg uppercase text-white">Let's connect</p>
                <div class="hidden sm:block">
                  <i class="bx bx-chevron-right text-3xl text-yellow"></i>
                </div>
              </div>
              <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">

                <a href="https://github.com/Baalerica" class="pl-4">
                  <i class="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="https://www.linkedin.com/in/erica-rodríguez" class="pl-4">
                  <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                </a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-grey-50" id="about">
      <div class="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Erica Rodríguez, I'm going to become A Web Developer
          </h4>
          <p class="pt-6 font-body leading-relaxed text-grey-20">
            I'm an engineer in Business Management,
            currently pursuing a Masters degree in Industrial Engineering.
            Alongside my academic endeavors, Ive embarked on the exciting
            journey of learning front-end programming. This dual focus
            reflects my dedication to expanding my skills and knowledge base in
            both business and technology domains. I am eager to leverage this
            diverse expertise to drive innovation and make meaningful contributions
            in the fields of business management and industrial engineering.
          </p>
          <div class="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div class="flex items-center justify-center sm:justify-start">
              <p class="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div class="hidden sm:block">
                <i class="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="https://www.linkedin.com/in/erica-rodríguez" class="pl-4">
                <i class="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
              </a>
              <a href="https://github.com/Baalerica" class="pl-4">
                <i class="bx bxl-github text-2xl text-primary hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-black">
                HTML & CSS
              </h4>
              <h3 class="font-body text-3xl font-bold text-primary">85%</h3>
            </div>
            <div class="mt-2 h-3 w-full rounded-full bg-lila">
              <div class="h-3 rounded-full bg-primary" style="width: 85%"></div>
            </div>
          </div>
          <div class="pt-6">
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-black">Python</h4>
              <h3 class="font-body text-3xl font-bold text-primary">70%</h3>
            </div>
            <div class="mt-2 h-3 w-full rounded-full bg-lila">
              <div class="h-3 rounded-full bg-primary" style="width: 70%"></div>
            </div>
          </div>
          <div class="pt-6">
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-black">
                Javascript
              </h4>
              <h3 class="font-body text-3xl font-bold text-primary">98%</h3>
            </div>
            <div class="mt-2 h-3 w-full rounded-full bg-lila">
              <div class="h-3 rounded-full bg-primary" style="width: 98%"></div>
            </div>
          </div>
          <div class="pt-6">
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-black">Figma</h4>
              <h3 class="font-body text-3xl font-bold text-primary">91%</h3>
            </div>
            <div class="mt-2 h-3 w-full rounded-full bg-lila">
              <div class="h-3 rounded-full bg-primary" style="width: 91%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-16 md:py-20" id="services">
      <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here's what I'm good at
      </h2>
      <h3 class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services Ioffer
      </h3>

      <div class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div class="group rounded px-8 py-12 shadow hover:bg-primary">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img src="/assets/img/icon-development-white.svg" alt="development icon" />
            </div>
            <div class="block group-hover:hidden">
              <img src="/assets/img/icon-development-black.svg" alt="development icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              WEB DEVELOPMENT
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              In progress.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow hover:bg-primary">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" />
            </div>
            <div class="block group-hover:hidden">
              <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Project Management
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              In progress.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow hover:bg-primary">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" />
            </div>
            <div class="block group-hover:hidden">
              <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Social media management
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              In progress.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow hover:bg-primary">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" />
            </div>
            <div class="block group-hover:hidden">
              <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Accounting services
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              In progress.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow hover:bg-primary">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" />
            </div>
            <div class="block group-hover:hidden">
              <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Web Design
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              In progress.
            </p>
          </div>
        </div>
        <div class="group rounded px-8 py-12 shadow hover:bg-primary">
          <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div class="hidden group-hover:block">
              <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" />
            </div>
            <div class="block group-hover:hidden">
              <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Consultancy
            </h3>
            <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              In progress.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-16 md:py-20" id="portfolio">
      <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h2>
      <h3 class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>

      <div class="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <a href="https://refuzzed.vercel.app/" class="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <img src="/assets/img/portfolio-fuzze.png" class="w-full shadow" alt="portfolio image" />
        </a>
        <a href="https://cavycorner.vercel.app/" class="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <img src="/assets/img/portfolio-cavycorner.png" class="w-full shadow" alt="portfolio image" />
        </a>
        <a href="https://www.microforge.me/" class="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <img src="/assets/img/portfolio-microforge.png" class="w-full shadow" alt="portfolio image" />
        </a>
        <a href="https://github.com/TriceraGod/Awuita"
          class="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <img src="/assets/img/portfolio-ecoflow.png" class="w-full shadow" alt="portfolio image" />
        </a>
      </div>
    </div>

    <div class="bg-grey-50" id="clients">
      <div class="container py-16 md:py-20">
        <div class="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            My latest clients
          </h2>
          <div class="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
            <span class="m-8 block">
              <img src="/assets/img/logo-coca-cola.svg" alt="client logo" class="mx-auto block h-12 w-auto" />
            </span>
            <span class="m-8 block">
              <img src="/assets/img/logo-apple.svg" alt="client logo" class="mx-auto block h-12 w-auto" />
            </span>

            <span class="m-8 block">
              <img src="/assets/img/logo-netflix.svg" alt="client logo" class="mx-auto block h-12 w-auto" />
            </span>

            <span class="m-8 block">
              <img src="/assets/img/logo-amazon.svg" alt="client logo" class="mx-auto block h-12 w-auto" />
            </span>

            <span class="m-8 block">
              <img src="/assets/img/logo-stripe.svg" alt="client logo" class="mx-auto block h-12 w-auto" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-16 md:py-20" id="work">
      <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I did before freelancing
      </h3>

      <div class="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span class="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

        <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div class="md:w-2/5">
            <div class="flex justify-center md:justify-start">
              <span class="shrink-0">
                <img src="/assets/img/logo-imbera.png" class="h-auto w-32" alt="company logo" />
              </span>
              <div class="relative ml-3 hidden w-full md:block">
                <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div class="md:w-3/5">
            <div class="relative flex md:pl-18">
              <span
                class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div class="mt-1 flex">
                <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div class="md:-mt-1 md:pl-8">
                  <span class="block font-body font-bold text-grey-40">Jul 2021 - Present</span>
                  <span class="block pt-2 font-header text-xl font-bold uppercase text-primary">Accounting</span>
                  <div class="pt-2">
                    <span class="block font-body text-black">Tax return and SAT documents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div class="md:w-2/5">
            <div class="flex justify-center md:justify-start">
              <span class="shrink-0">
                <img src="/assets/img/logo-citc.png" class="h-auto w-32" alt="company logo" />
              </span>
              <div class="relative ml-3 hidden w-full md:block">
                <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div class="md:w-3/5">
            <div class="relative flex md:pl-18">
              <span
                class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div class="mt-1 flex">
                <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div class="md:-mt-1 md:pl-8">
                  <span class="block font-body font-bold text-grey-40">Jun 2023 - Dic 2023</span>
                  <span class="block pt-2 font-header text-xl font-bold uppercase text-primary">Professional
                    residences</span>
                  <div class="pt-2">
                    <span class="block font-body text-black">Managed accounting and organized events.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div class="md:w-2/5">
            <div class="flex justify-center md:justify-start">
              <span class="shrink-0">
                <img src="/assets/img/logo-imbera.png" class="h-auto w-32" alt="company logo" />
              </span>
              <div class="relative ml-3 hidden w-full md:block">
                <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div class="md:w-3/5">
            <div class="relative flex md:pl-18">
              <span
                class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div class="mt-1 flex">
                <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div class="md:-mt-1 md:pl-8">
                  <span class="block font-body font-bold text-grey-40">Jul 2021 - Dic 2022</span>
                  <span class="block pt-2 font-header text-xl font-bold uppercase text-primary">Warehouse
                    management</span>
                  <div class="pt-2">
                    <span class="block font-body text-black">Manage work order inventories with Oracle PeopleSoft
                      software.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
      style="background-image: url(/assets/img/experience-figure.png)" id="statistics">
      <div class="container">
        <div class="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
          <div class="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
            <div class="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <img src="/assets/img/icon-project.svg" class="mx-auto h-12 w-auto md:h-20" alt="icon project" />
              </div>
              <div class="pt-5 md:pl-5 md:pt-0">
                <h1 class="font-body text-2xl font-bold text-primary md:text-4xl">
                  5
                </h1>
                <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Participation in hackathons
                </h4>
              </div>
            </div>

            <div class="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <img src="/assets/img/icon-award.svg" class="mx-auto h-12 w-auto md:h-20" alt="icon award" />
              </div>
              <div class="pt-5 md:pl-5 md:pt-0">
                <h1 class="font-body text-2xl font-bold text-primary md:text-4xl">
                  2
                </h1>
                <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  School competitions won
                </h4>
              </div>
            </div>

            <div
              class="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
              <div>
                <img src="/assets/img/icon-happy.svg" class="mx-auto h-12 w-auto md:h-20"
                  alt="icon happy clients" />
              </div>
              <div class="pt-5 md:pl-5 md:pt-0">
                <h1 class="font-body text-2xl font-bold text-primary md:text-4xl">
                  8
                </h1>
                <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Happy Clients
                </h4>
              </div>
            </div>

            <div
              class="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
              <div>
                <img src="/assets/img/icon-puzzle.svg" class="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" />
              </div>
              <div class="pt-5 md:pl-5 md:pt-0">
                <h1 class="font-body text-2xl font-bold text-primary md:text-4xl">
                  99
                </h1>
                <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Bugs Fixed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-grey-50" id="blog">
      <div class="container py-16 md:py-20">
        <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          I also like to play
        </h2>
        <h4 class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Check out my latest scores!
        </h4>
        <div class="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
          <a href="https://www.op.gg/summoners/lan/Val%C3%A9rica-LAN" class="shadow">
            <div style="background-image: url(/assets/img/post-01.png)"
              class="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
              <span
                class="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
              <span
                class="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                More</span>
            </div>
            <div class="bg-white py-6 px-5 xl:py-8">
              <span class="block font-body text-lg font-semibold text-black">League of Legends</span>
              <span class="block pt-2 font-body text-grey-20">Op.gg.</span>
            </div>
          </a>
          <a href="https://steamcommunity.com/id/Erythea" class="shadow">
            <div style="background-image: url(/assets/img/steam-erythea.png)"
              class="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
              <span
                class="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
              <span
                class="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                More</span>
            </div>
            <div class="bg-white py-6 px-5 xl:py-8">
              <span class="block font-body text-lg font-semibold text-black">Steam</span>
              <span class="block pt-2 font-body text-grey-20">In proces.</span>
            </div>
          </a>
          <a href="/post" class="shadow">
            <div style="background-image: url(/assets/img/post-03.png)"
              class="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
              <span
                class="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
              <span
                class="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                More</span>
            </div>
            <div class="bg-white py-6 px-5 xl:py-8">
              <span class="block font-body text-lg font-semibold text-black">Steam</span>
              <span class="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="container py-16 md:py-20" id="contact">
      <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here's a contact form
      </h2>
      <h4 class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Have Any Questions?
      </h4>
      <div class="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p class="font-body text-grey-10">
          Feel free to tell me what you want or contact me.
        </p>
      </div>
      <form class="mx-auto w-full pt-10 sm:w-3/4">
        <div class="flex flex-col md:flex-row">
          <input class="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name" type="text" id="name" />
          <input
            class="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Email" type="text" id="email" />
        </div>
        <textarea class="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message" id="message" cols="30" rows="10"></textarea>
        <button
          class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
          Send
          <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
      </form>
      <div class="flex flex-col pt-16 lg:flex-row">
        <div class="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
          <div class="flex items-center">
            <i class="bx bx-phone text-2xl text-grey-40"></i>
            <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Phone
            </p>
          </div>
          <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            (+881) 111 222 333
          </p>
        </div>
        <div
          class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div class="flex items-center">
            <i class="bx bx-envelope text-2xl text-grey-40"></i>
            <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Email
            </p>
          </div>
          <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            erica_rdzb@hotmail.com
          </p>
        </div>
        <div
          class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div class="flex items-center">
            <i class="bx bx-map text-2xl text-grey-40"></i>
            <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Address
            </p>
          </div>
          <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            Chihuahua Chih.
          </p>
        </div>
      </div>
    </div>

  </div>
    </div >
  </div >

  <div class="bg-primary">
    <div class="container flex flex-col justify-between py-6 sm:flex-row">
      <p className="text-center font-body text-white md:text-left">
        © Copyright 2024. All right reserved, Baalerica.
      </p>
      <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
        <a href="https://www.linkedin.com/in/erica-rodríguez" class="pl-4">
          <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
        </a>
        <a href="https://github.com/Baalerica" class="pl-4">
          <i class="bx bxl-github text-2xl text-white hover:text-yellow"></i>
        </a>
      </div>
    </div>
  </div>

  </div >

  <script src="/assets/js/main.js"></script>


</body >