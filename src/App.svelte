<script lang="ts">
  import {
    ArrowRight,
    BadgeCheck,
    Building2,
    Drill,
    Droplets,
    Hammer,
    HardHat,
    House,
    Info,
    Mail,
    Map,
    MapPin,
    MapPinned,
    MessageCircle,
    Phone,
    Send,
    ShieldCheck,
    SquareStack,
    User,
    Wrench,
  } from '@lucide/svelte'
  import businessCardReference from './assets/business-card-reference.jpg'
  import constructionSite from './assets/construction-site.jpg'
  import coreCutting from './assets/core-cutting.jpg'
  import rebarring from './assets/rebarring.jpg'
  import logo from './assets/shivam-logo-v2.png'
  import waterproofing from './assets/waterproofing.jpg'

  type Page = 'home' | 'services' | 'about' | 'contact'
  type IconComponent = typeof House

  let activePage = $state<Page>('home')
  let inquirySent = $state(false)

  const phone = '9148905355'
  const phoneHref = 'tel:+919148905355'
  const whatsappHref = 'https://wa.me/919148905355'
  const emailHref = 'mailto:satishbukte@gmail.com'
  const mapsHref =
    'https://www.google.com/maps/search/?api=1&query=H.no.+6-3+Sonal+Road+Kamalnagar+Bidar+Karnataka'

  const navItems: { id: Page; label: string; icon: IconComponent }[] = [
    { id: 'home', label: 'Home', icon: House },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Phone },
  ]

  const services = [
    {
      title: 'Core Cutting',
      subtitle: 'Industrial diamond drilling',
      description:
        'Clean circular openings for plumbing, electrical, HVAC and machine foundations without disturbing the surrounding structure.',
      image: coreCutting,
      icon: Drill,
      points: ['RCC wall and slab openings', 'Low-vibration cutting', 'Accurate site marking'],
    },
    {
      title: 'Rebarring',
      subtitle: 'Structural strengthening',
      description:
        'Chemical anchoring and post-installed reinforcement for extensions, retrofits and concrete repair work.',
      image: rebarring,
      icon: SquareStack,
      points: ['Post-installed bars', 'Column and beam extensions', 'Load-aware detailing'],
    },
    {
      title: 'Water Proofing',
      subtitle: 'Terrace and leak protection',
      description:
        'Layered treatment for terraces, roofs and damp areas with surface preparation, sealing and finish protection.',
      image: waterproofing,
      icon: Droplets,
      points: ['Terrace waterproofing', 'Leak diagnosis', 'Protective coating systems'],
    },
  ] satisfies {
    title: string
    subtitle: string
    description: string
    image: string
    icon: IconComponent
    points: string[]
  }[]

  const serviceImageRows = [
    { id: 'primary', items: services, reverse: false },
    { id: 'secondary', items: [...services].reverse(), reverse: true },
  ]

  const homeHeroCards = [
    {
      title: 'Core cutting',
      detail: 'Clean RCC openings',
      image: coreCutting,
      icon: Drill,
    },
    {
      title: 'Rebarring',
      detail: 'Chemical anchoring',
      image: rebarring,
      icon: SquareStack,
    },
    {
      title: 'Waterproofing',
      detail: 'Terrace leak control',
      image: waterproofing,
      icon: Droplets,
    },
    {
      title: 'Site execution',
      detail: 'Measured planning',
      image: constructionSite,
      icon: Building2,
    },
  ] satisfies {
    title: string
    detail: string
    image: string
    icon: IconComponent
  }[]

  const homeHeroRows = [
    { id: 'upper', items: homeHeroCards, reverse: false },
    { id: 'lower', items: [...homeHeroCards].reverse(), reverse: true },
  ]

  const homeStats: { value: string; label: string }[] = [
    { value: '20+', label: 'Years experience' },
    { value: '500+', label: 'Projects delivered' },
    { value: '3', label: 'Core services' },
  ]

  const allServices: { label: string; detail: string; icon: IconComponent }[] = [
    { label: 'Core Cutting', detail: 'Wall, slab and beam openings', icon: Drill },
    { label: 'Rebarring', detail: 'Anchoring and reinforcement', icon: SquareStack },
    { label: 'Rock Drilling', detail: 'Controlled drilling for hard surfaces', icon: HardHat },
    { label: 'Breaker on Hire', detail: 'Demolition equipment support', icon: Hammer },
    { label: 'Wiresaw', detail: 'Heavy concrete cutting', icon: Wrench },
    { label: 'Floorsaw', detail: 'Flat slab cutting', icon: Building2 },
    { label: 'Brick Work & Plaster', detail: 'Finishing and repair work', icon: BadgeCheck },
    { label: 'Water Proofing Work', detail: 'Terraces, roofs and damp zones', icon: Droplets },
  ]

  const trustMarks = ['Bidar based team', 'Karnataka service area', 'On-site consultation']

  function navigate(page: Page) {
    activePage = page
    inquirySent = false
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  function scrollToAllServices() {
    document.getElementById('all-services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function getFormValue(formData: FormData, fieldName: string) {
    const value = formData.get(fieldName)

    return typeof value === 'string' ? value.trim() : ''
  }

  function handleInquirySubmit(event: SubmitEvent) {
    event.preventDefault()

    if (!(event.currentTarget instanceof HTMLFormElement)) {
      return
    }

    const formData = new FormData(event.currentTarget)
    const name = getFormValue(formData, 'name')
    const service = getFormValue(formData, 'service')
    const message = getFormValue(formData, 'message')
    const inquiryText = [
      'New Shivam Construction inquiry',
      name && `Name: ${name}`,
      service && `Service: ${service}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join('\n')
    const inquiryHref = `${whatsappHref}?text=${encodeURIComponent(inquiryText)}`

    inquirySent = true
    window.open(inquiryHref, '_blank', 'noopener,noreferrer') ?? window.location.assign(inquiryHref)
  }
</script>

<div class="mobile-shell">
  <header class="sticky top-0 z-40 border-b border-outline-variant bg-surface/95 backdrop-blur">
    <div class="flex h-16 items-center justify-between px-4">
      <button
        class="flex min-w-0 items-center gap-2 text-left"
        type="button"
        aria-label="Go to home"
        onclick={() => navigate('home')}
      >
        <img src={logo} alt="Shivam Construction logo" class="h-10 w-10 shrink-0 object-contain" />
        <span class="leading-none">
          <span class="block text-[18px] font-black uppercase text-primary">Shivam</span>
          <span class="block text-[10px] font-semibold uppercase text-secondary">Construction</span>
        </span>
      </button>

      <a
        class="inline-flex h-10 items-center gap-2 rounded bg-primary px-4 text-sm font-bold uppercase text-white transition active:scale-[0.98]"
        href={phoneHref}
        aria-label="Call Shivam Construction"
      >
        <Phone size={16} strokeWidth={2.4} />
        Call
      </a>
    </div>
  </header>

  <main class="pb-24">
    {#if activePage === 'home'}
      <section class="home-hero relative isolate overflow-hidden bg-inverse-surface text-white">
        <div class="absolute inset-0 -z-20" aria-hidden="true">
          <img
            src={constructionSite}
            alt=""
            class="home-hero__image h-full w-full object-cover"
          />
          <div class="home-hero__blueprint"></div>
          <div class="home-hero__scan"></div>

          {#each homeHeroRows as row (row.id)}
            <div class={['home-hero__column', row.reverse && 'home-hero__column--reverse']}>
              <div class="home-hero__flow">
                {#each [0, 1] as loopIndex (loopIndex)}
                  <div class="home-hero__flow-group">
                    {#each row.items as item (item.title)}
                      {@const Icon = item.icon}
                      <div class="home-hero__work-tile">
                        <img src={item.image} alt="" class="h-full w-full object-cover" />
                        <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04),rgba(7,12,22,0.78))]"></div>
                        <div class="absolute bottom-2 left-2 right-2">
                          <div class="mb-1 flex h-7 w-7 items-center justify-center rounded bg-primary text-white">
                            <Icon size={14} strokeWidth={2.5} />
                          </div>
                          <p class="text-[12px] font-black uppercase leading-tight text-white">
                            {item.title}
                          </p>
                          <p class="mt-0.5 text-[10px] font-semibold leading-tight text-white/78">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    {/each}
                  </div>
                {/each}
              </div>
            </div>
          {/each}

          <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,12,20,0.38),rgba(9,12,20,0.5)_34%,rgba(7,10,17,0.9)_72%,rgba(7,10,17,0.98))]"></div>
          <div class="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_top,rgba(152,0,27,0.48),transparent)]"></div>
        </div>

        <div class="home-hero__content relative z-10 flex flex-col justify-between px-4 py-8">
          <div class="flex items-start justify-between gap-3">
            <div class="inline-flex w-fit items-center gap-2 rounded border border-white/30 bg-white/14 px-3 py-2 text-[11px] font-bold uppercase text-white shadow-[0_10px_28px_rgba(0,0,0,0.2)] backdrop-blur">
              <ShieldCheck size={15} />
              Site-ready team
            </div>

            <div class="min-w-20 rounded border border-white/24 bg-black/20 px-3 py-2 text-right shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur">
              <p class="text-xl font-black leading-none text-white">500+</p>
              <p class="mt-1 text-[10px] font-bold uppercase leading-none text-white/74">Projects</p>
            </div>
          </div>

          <div class="mx-auto w-full max-w-[398px] pb-2 text-center">
            <p class="mb-3 text-xs font-bold uppercase tracking-normal text-primary-fixed">
              Shivam Construction
            </p>
            <h1 class="mx-auto max-w-[13ch] text-[39px] font-black leading-[1.02] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.34)]">
              Concrete site work done right.
            </h1>
            <p class="mx-auto mt-4 max-w-[31ch] text-base font-medium leading-6 text-white/88 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
              Core cutting, rebarring and waterproofing delivered with careful planning across
              Karnataka.
            </p>

            <div class="mt-6 grid w-full grid-cols-2 gap-3">
              <button
                type="button"
                class="inline-flex h-13 items-center justify-center gap-2 rounded bg-primary px-4 text-sm font-bold uppercase text-white shadow-[0_12px_28px_rgba(0,0,0,0.28)] transition active:scale-[0.98]"
                onclick={() => navigate('contact')}
              >
                Inquire now
                <ArrowRight size={17} />
              </button>
              <a
                class="inline-flex h-13 items-center justify-center gap-2 rounded border border-white/38 bg-white/14 px-4 text-sm font-bold uppercase text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur transition active:scale-[0.98]"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="relative isolate overflow-hidden bg-secondary px-4 py-5 text-white" aria-label="Company highlights">
        <div
          class="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(152,0,27,0.34),transparent_42%),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,3.25rem_3.25rem]"
          aria-hidden="true"
        ></div>
        <div class="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true"></div>

        <div class="grid grid-cols-3 divide-x divide-white/16">
          {#each homeStats as stat (stat.label)}
            <article class="min-w-0 px-3 text-center">
              <p class="text-[34px] font-black leading-none text-white">{stat.value}</p>
              <p class="mx-auto mt-2 max-w-[11ch] text-[10px] font-black uppercase leading-[1.15] text-secondary-container">
                {stat.label}
              </p>
            </article>
          {/each}
        </div>
      </section>

      <section class="px-4 py-10">
        <div class="mb-5 flex items-end justify-between gap-4">
          <div>
            <p class="text-xs font-bold uppercase text-primary">Our services</p>
            <h2 class="mt-2 text-3xl font-black text-on-surface">Precision solutions</h2>
          </div>
          <button
            type="button"
            class="inline-flex h-10 shrink-0 items-center gap-1 rounded border border-outline-variant px-3 text-sm font-bold text-secondary"
            onclick={() => navigate('services')}
          >
            All
            <ArrowRight size={15} />
          </button>
        </div>

        <div class="space-y-4">
          {#each services as service (service.title)}
            {@const Icon = service.icon}
            <article class="group overflow-hidden rounded-lg border border-outline-variant bg-surface">
              <div class="relative aspect-[16/10] overflow-hidden">
                <img src={service.image} alt={service.subtitle} class="h-full w-full object-cover transition duration-500 group-active:scale-[1.02]" />
                <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <div class="mb-2 flex h-9 w-9 items-center justify-center rounded bg-primary">
                    <Icon size={18} />
                  </div>
                  <h3 class="text-xl font-black">{service.title}</h3>
                  <p class="text-sm text-white/82">{service.subtitle}</p>
                </div>
              </div>
            </article>
          {/each}
        </div>
      </section>

      <section class="bg-surface-container-low px-4 py-10">
        <div class="grid gap-5">
          <div>
            <p class="text-xs font-bold uppercase text-primary">Why clients call us</p>
            <h2 class="mt-2 text-3xl font-black leading-tight text-on-surface">
              Fast decisions, careful execution.
            </h2>
          </div>

          <div class="grid gap-3">
            {#each trustMarks as mark (mark)}
              <div class="flex items-center gap-3 rounded-lg border border-outline-variant bg-surface px-4 py-3">
                <BadgeCheck class="text-primary" size={20} />
                <span class="font-semibold text-on-surface">{mark}</span>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <section class="px-4 py-10">
        <div class="rounded-lg bg-secondary p-5 text-white">
          <p class="text-xs font-bold uppercase text-secondary-container">Lead engineer</p>
          <h2 class="mt-2 text-2xl font-black">Satish Bukte</h2>
          <p class="mt-3 leading-6 text-white/82">
            A site-first team focused on reliable RCC core cutting, rebarring and waterproofing
            work for practical construction demands.
          </p>
          <button
            type="button"
            class="mt-5 inline-flex h-11 items-center gap-2 rounded bg-white px-4 text-sm font-bold uppercase text-secondary"
            onclick={() => navigate('about')}
          >
            Our story
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    {:else if activePage === 'services'}
      <section class="relative isolate min-h-80 overflow-hidden bg-secondary px-4 py-7 text-white">
        <div class="absolute inset-0 -z-10" aria-hidden="true">
          {#each serviceImageRows as row (row.id)}
            <div
              class={[
                'absolute top-[-8rem] bottom-[-8rem]',
                row.reverse ? 'right-4' : 'left-4',
              ]}
            >
              <div
                class={[
                  'services-hero-flow',
                  row.reverse && 'services-hero-flow--reverse',
                ]}
              >
                {#each [0, 1] as loopIndex (loopIndex)}
                  <div class="services-hero-flow__group">
                    {#each row.items as service (service.title)}
                      <img
                        src={service.image}
                        alt=""
                        class="services-hero-flow__image"
                      />
                    {/each}
                  </div>
                {/each}
              </div>
            </div>
          {/each}
          <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(35,53,95,0.48),rgba(12,17,28,0.94)_72%)]"></div>
          <div class="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(to_top,rgba(35,53,95,0.98),transparent)]"></div>
        </div>

        <div class="relative mx-auto flex min-h-[17rem] max-w-[21rem] flex-col items-center justify-center text-center">
          <div class="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded bg-white/14 backdrop-blur">
            <Wrench size={22} />
          </div>
          <p class="text-xs font-bold uppercase text-secondary-container">Services</p>
          <h1 class="mx-auto mt-1 max-w-[13ch] text-4xl font-black leading-[1.05]">
            View all site services in one place.
          </h1>
          <p class="mx-auto mt-3 max-w-[29ch] text-sm leading-6 text-white/84">
            Jump from the headline services into the complete catalog for cutting, drilling,
            repair and waterproofing needs.
          </p>
          <button
            type="button"
            class="mt-5 inline-flex h-11 w-fit items-center gap-2 rounded bg-white px-4 text-sm font-bold uppercase text-secondary shadow-[0_12px_26px_rgba(0,0,0,0.22)]"
            onclick={scrollToAllServices}
          >
            View all services
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section class="px-4 py-8">
        <p class="text-xs font-bold uppercase text-primary">Featured work</p>
        <h2 class="mt-2 text-3xl font-black text-on-surface">Precision engineering</h2>
        <p class="mt-3 leading-6 text-on-surface-variant">
          High-quality structural solutions for concrete-heavy construction projects.
        </p>

        <div class="mt-6 space-y-5">
          {#each services as service (service.title)}
            {@const Icon = service.icon}
            <article class="overflow-hidden rounded-lg border border-outline-variant bg-surface">
              <img src={service.image} alt={service.subtitle} class="aspect-[16/10] w-full object-cover" />
              <div class="p-4">
                <div class="mb-3 flex items-center gap-3">
                  <span class="flex h-10 w-10 items-center justify-center rounded bg-primary-fixed text-primary">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 class="text-xl font-black text-secondary">{service.title}</h3>
                    <p class="text-sm text-on-surface-variant">{service.subtitle}</p>
                  </div>
                </div>
                <p class="leading-6 text-on-surface-variant">{service.description}</p>
                <div class="mt-4 grid gap-2">
                  {#each service.points as point (point)}
                    <div class="flex items-center gap-2 text-sm font-semibold text-on-surface">
                      <BadgeCheck class="text-primary" size={16} />
                      {point}
                    </div>
                  {/each}
                </div>
              </div>
            </article>
          {/each}
        </div>
      </section>

      <section id="all-services" class="scroll-mt-20 bg-surface-container-low px-4 py-8">
        <p class="text-xs font-bold uppercase text-primary">Complete catalog</p>
        <h2 class="mt-2 text-2xl font-black text-on-surface">All services</h2>
        <div class="mt-5 grid grid-cols-2 gap-3">
          {#each allServices as service (service.label)}
            {@const Icon = service.icon}
            <article class="min-h-34 rounded-lg border border-outline-variant bg-surface p-4">
              <Icon class="text-primary" size={22} />
              <h3 class="mt-4 text-sm font-black uppercase text-secondary">{service.label}</h3>
              <p class="mt-2 text-sm leading-5 text-on-surface-variant">{service.detail}</p>
            </article>
          {/each}
        </div>
      </section>

      <section class="px-4 py-8">
        <div class="rounded-lg bg-primary p-5 text-white">
          <h2 class="text-2xl font-black">Need a quote?</h2>
          <p class="mt-2 leading-6 text-white/86">
            Share the service, site location and concrete thickness. The team can guide the next
            step quickly.
          </p>
          <div class="mt-5 grid gap-3">
            <button
              type="button"
              class="inline-flex h-12 items-center justify-center gap-2 rounded bg-white text-sm font-bold uppercase text-primary"
              onclick={() => navigate('contact')}
            >
              Contact us
              <Send size={16} />
            </button>
            <a
              class="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/45 text-sm font-bold uppercase text-white"
              href={phoneHref}
            >
              <Phone size={16} />
              Call now
            </a>
          </div>
        </div>
      </section>
    {:else if activePage === 'about'}
      <section class="relative h-[260px] overflow-hidden bg-primary">
        <img src={businessCardReference} alt="Shivam Construction reference card" class="h-full w-full object-cover opacity-28" />
        <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(152,0,27,0.15),rgba(152,0,27,0.92))]"></div>
        <div class="absolute bottom-0 left-0 right-0 px-4 pb-7 text-white">
          <p class="text-xs font-bold uppercase text-primary-fixed">Our story</p>
          <h1 class="mt-2 text-4xl font-black leading-tight">Precision. Integrity. Reliability.</h1>
        </div>
      </section>

      <section class="px-4 py-8">
        <article class="rounded-lg border border-outline-variant bg-surface p-5">
          <div class="flex items-center gap-4">
            <div class="relative flex h-18 w-18 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
              <User size={34} />
              <span class="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded bg-primary text-white ring-4 ring-surface">
                <BadgeCheck size={15} />
              </span>
            </div>
            <div>
              <p class="text-xs font-bold uppercase text-primary">Lead engineer & director</p>
              <h2 class="mt-1 text-3xl font-black text-on-surface">Satish Bukte</h2>
            </div>
          </div>

          <div class="mt-6 space-y-4">
            <div class="flex gap-3">
              <Drill class="mt-1 shrink-0 text-primary" size={22} />
              <p class="text-lg font-semibold leading-7 text-on-surface">
                Decades of proven expertise in RCC core cutting and waterproofing across Karnataka.
              </p>
            </div>
            <div class="flex gap-3">
              <ShieldCheck class="mt-1 shrink-0 text-primary" size={22} />
              <p class="leading-6 text-on-surface-variant">
                Built on trust, practical communication and structural solutions that are meant to
                last.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section class="grid grid-cols-2 gap-4 px-4">
        <div class="rounded-lg border border-outline-variant bg-surface-container-low p-5 text-center">
          <p class="text-4xl font-black text-primary">20+</p>
          <p class="mt-2 text-sm font-bold uppercase text-secondary">Years experience</p>
        </div>
        <div class="rounded-lg border border-outline-variant bg-surface-container-low p-5 text-center">
          <p class="text-4xl font-black text-primary">500+</p>
          <p class="mt-2 text-sm font-bold uppercase text-secondary">Projects completed</p>
        </div>
      </section>

      <section class="px-4 py-8">
        <div class="rounded-lg bg-primary p-5 text-white">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xs font-bold uppercase text-primary-fixed">Our core promise</p>
              <h2 class="mt-2 text-2xl font-black">Zero compromise quality</h2>
            </div>
            <ShieldCheck class="shrink-0 text-primary-fixed" size={40} />
          </div>
        </div>
      </section>

      <section class="px-4 pb-10">
        <div class="rounded-lg border border-outline-variant bg-surface-container-high p-5">
          <div class="mb-4 flex items-center gap-3">
            <MapPin class="text-primary" size={22} />
            <h2 class="text-2xl font-black text-on-surface">Find us</h2>
          </div>
          <p class="leading-7 text-on-surface-variant">
            H.no. 6-3 near gram Panchayat, Sonal Road, Kamalnagar, TQ Kamalnagar,
            Dist Bidar, Karnataka.
          </p>
          <a class="mt-5 flex items-center gap-3 border-t border-outline-variant pt-5 font-semibold text-secondary" href={emailHref}>
            <Mail size={20} class="text-primary" />
            satishbukte@gmail.com
          </a>
        </div>
      </section>
    {:else}
      <section class="px-4 py-9 text-center">
        <p class="text-xs font-bold uppercase text-primary">Contact</p>
        <h1 class="mt-2 text-4xl font-black text-on-surface">Let's plan the site work.</h1>
        <p class="mx-auto mt-3 max-w-[25ch] leading-6 text-on-surface-variant">
          Professional construction services across Karnataka.
        </p>
      </section>

      <section class="px-4">
        <a
          href={phoneHref}
          class="flex min-h-44 flex-col items-center justify-center rounded-lg bg-primary p-6 text-center text-white shadow-[0_18px_32px_rgba(152,0,27,0.18)]"
        >
          <Phone size={36} />
          <span class="mt-4 text-3xl font-black">{phone}</span>
          <span class="mt-2 text-sm font-bold uppercase">Tap to call us now</span>
        </a>
      </section>

      <section class="grid gap-4 px-4 py-8">
        <div class="flex items-start gap-4 rounded-lg border border-outline-variant bg-surface p-4">
          <MapPin class="mt-1 shrink-0 text-secondary" size={22} />
          <div>
            <h2 class="text-sm font-black uppercase text-secondary">Head office</h2>
            <p class="mt-2 leading-6 text-on-surface">
              H.no. 6-3, Sonal Road, Kamalnagar, Dist Bidar, Karnataka
            </p>
          </div>
        </div>
        <a class="flex items-center gap-4 rounded-lg border border-outline-variant bg-surface p-4" href={emailHref}>
          <Mail class="shrink-0 text-secondary" size={22} />
          <div>
            <h2 class="text-sm font-black uppercase text-secondary">Email</h2>
            <p class="mt-1 text-on-surface">satishbukte@gmail.com</p>
          </div>
        </a>
      </section>

      <section class="px-4 pb-8">
        <form
          class="rounded-lg border border-outline-variant bg-surface p-5"
          onsubmit={handleInquirySubmit}
        >
          <h2 class="text-2xl font-black text-on-surface">Send message</h2>
          <div class="mt-5 grid gap-4">
            <label class="sr-only" for="name">Your name</label>
            <input
              id="name"
              name="name"
              required
              class="h-12 rounded border border-outline-variant bg-background px-3 text-base outline-none transition focus:border-primary"
              placeholder="Your Name"
              type="text"
            />

            <label class="sr-only" for="service">Service interest</label>
            <select
              id="service"
              name="service"
              required
              class="h-12 rounded border border-outline-variant bg-background px-3 text-base outline-none transition focus:border-primary"
            >
              <option value="">Service Interest</option>
              <option>Core Cutting</option>
              <option>Rebarring</option>
              <option>Water Proofing</option>
              <option>Rock Drilling</option>
              <option>Breaker on Hire</option>
            </select>

            <label class="sr-only" for="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              class="min-h-28 rounded border border-outline-variant bg-background px-3 py-3 text-base outline-none transition focus:border-primary"
              placeholder="How can we help?"
            ></textarea>

            <button
              class="inline-flex h-12 items-center justify-center gap-2 rounded bg-primary text-sm font-bold uppercase text-white transition active:scale-[0.98]"
              type="submit"
            >
              Send inquiry
              <Send size={16} />
            </button>
          </div>

          {#if inquirySent}
            <p class="mt-4 rounded border border-primary-fixed-dim bg-primary-fixed px-3 py-2 text-sm font-semibold text-primary" aria-live="polite">
              Opening WhatsApp with your inquiry. If it does not open, call or WhatsApp the team directly.
            </p>
          {/if}
        </form>
      </section>

      <section class="px-4 pb-10">
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between gap-4 rounded-lg border border-outline-variant bg-surface-container-high p-4"
        >
          <span class="flex items-center gap-3 font-bold text-on-surface">
            <Map class="text-primary" size={22} />
            Kamalnagar, Bidar
          </span>
          <span class="text-sm font-black uppercase text-primary">Open maps</span>
        </a>
      </section>
    {/if}
  </main>

  <footer class="border-t border-outline-variant bg-surface-container px-4 py-8 pb-28 text-center">
    <div class="flex items-center justify-center gap-2">
      <img src={logo} alt="" class="h-8 w-8 object-contain" />
      <p class="font-black uppercase text-on-surface">Shivam Construction</p>
    </div>
    <p class="mx-auto mt-3 max-w-[28ch] text-sm leading-6 text-on-surface-variant">
      Core cutting, rebarring, rock drilling, breaker hire and waterproofing services.
    </p>
    <div class="mt-5 flex justify-center gap-3">
      <a class="inline-flex h-10 w-10 items-center justify-center rounded border border-outline-variant bg-surface text-secondary" href={phoneHref} aria-label="Call Shivam Construction">
        <Phone size={18} />
      </a>
      <a class="inline-flex h-10 w-10 items-center justify-center rounded border border-outline-variant bg-surface text-secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Message Shivam Construction on WhatsApp">
        <MessageCircle size={18} />
      </a>
      <a class="inline-flex h-10 w-10 items-center justify-center rounded border border-outline-variant bg-surface text-secondary" href={mapsHref} target="_blank" rel="noopener noreferrer" aria-label="Open Shivam Construction on maps">
        <MapPinned size={18} />
      </a>
    </div>
  </footer>
</div>

<nav class="bottom-nav" aria-label="Primary">
  {#each navItems as item (item.id)}
    {@const Icon = item.icon}
    <button
      type="button"
      class="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-2 text-[11px] font-bold transition {activePage === item.id ? 'text-primary' : 'text-on-surface-variant'}"
      aria-current={activePage === item.id ? 'page' : undefined}
      onclick={() => navigate(item.id)}
    >
      <Icon size={21} strokeWidth={activePage === item.id ? 2.8 : 2.1} />
      <span>{item.label}</span>
    </button>
  {/each}
</nav>
