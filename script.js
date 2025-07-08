// ================================
// Auto-Scrolling Logo Banner
// ================================

const scrollContainer = document.getElementById("logoScroll");
let scrollSpeed = 1.3; // Adjust for smoothness

if (scrollContainer) {
  // Clone all logos to create seamless looping effect
  scrollContainer.innerHTML += scrollContainer.innerHTML;

  // Continuously auto-scroll the container
  function autoScroll() {
    scrollContainer.scrollLeft += scrollSpeed;

    // Reset scroll position when halfway (original width)
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
  }

  autoScroll(); // Start the loop
}

// ================================
// Core Values Bar Animation on Scroll
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");
  const coreSection = document.getElementById("coreValues");

  if (bars.length > 0 && coreSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar) => bar.classList.add("animate"));
            observer.disconnect(); // Run animation only once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(coreSection);
  }
});

// ================================
// Hero Image Brightness Adjustment
// ================================

const img = document.getElementById("hero-img");
if (img) {
  img.style.filter = "brightness(0.6)";
}

// ================================
// Manual Lightbox Close Function
// ================================

function closeLightbox() {
  const closeBtn = document.querySelector(".lightbox .lb-close");
  if (closeBtn) closeBtn.click();
}

// ================================
// Show Back Button When Lightbox is Open
// ================================

const checkLightboxInterval = setInterval(() => {
  const lightbox = document.querySelector(".lightbox");
  const backButton = document.querySelector(".lb-back-button");

  if (lightbox && backButton) {
    const isLightboxOpen = lightbox.style.display === "block";
    backButton.style.display = isLightboxOpen ? "block" : "none";
  }
}, 300);

// ================================
// Play Video on Call
// ================================

function playVideo() {
  const video = document.getElementById("myVideo");
  if (video) video.play();
}

// Array of image URLs (20 total)
const imageUrls = [
  "img/tinu.jpeg",
  "img/uwaleke.webp",
  "img/world.webp",
  "img/octob.webp",
  "img/juneal.webp",
  "img/twelve.webp",
  "img/firs.webp",
  "img/glass.webp",
  "img/cbn1.webp",
  "img/app1.webp",
  "img/cash1.webp",
  "img/fairy.webp",
  "img/walex.webp",
  "img/bidy.webp",
  "img/Unknown.webp",
];

// Post data with title, intro, and full content (20 total)
const posts = [
  {
    title:
      "Nigeria’s $5 Billion Oil Loan with Aramco Hits Roadblock Amid Falling Crude Prices",
    intro:
      "Nigeria’s efforts to secure a $5 billion oil-backed loan from Saudi Aramco have stalled due to a sharp decline in global oil prices and rising concerns from potential partner banks. ",
    content: `
      <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Nigeria’s $5 Billion Oil Loan with Aramco Hits Roadblock Amid Falling Crude Prices</h2>
         <img src="img/tinu.jpeg" style="max-width: 100%; height: auto; margin: 20px 0;" />
        <p style="max-width: 900px; margin-bottom: 20px; text-align:Justify; font-size:1.1rem;">Nigeria's plan to secure a $5 billion oil-backed loan from Saudi Aramco is facing delays due to declining crude oil prices and concerns from banks expected to support the deal. President Bola Tinubu initially discussed the loan with Saudi Crown Prince Mohammed bin Salman in November 2023 during the Saudi-African Summit. If finalized, it would be Nigeria’s largest oil-backed loan and Saudi Arabia’s first major lending effort of this scale in the country. However, the fall in oil prices—from over $82 per barrel in January to around $65—has complicated negotiations. The lower price means Nigeria would need to pledge more barrels to back the loan, but the country’s oil production has been hampered by years of underinvestment, making it difficult to meet such requirements.

Tinubu recently sought approval for $21.5 billion in total foreign borrowing to support Nigeria’s budget, and this Aramco-backed loan would be part of that effort. Some Gulf and African banks involved in the talks have raised concerns over Nigeria’s ability to deliver the oil consistently, slowing progress on the deal. Nigeria is already using at least 300,000 barrels per day to repay previous oil-backed loans, one of which is expected to be cleared soon. The proposed Aramco loan would require at least 100,000 barrels per day as collateral.

With current crude prices lower, repayment of these loans takes longer and leaves less revenue for the Nigerian National Petroleum Company (NNPC) to manage operational costs and joint-venture commitments. Local firm Oando is expected to oversee the sale of physical cargoes tied to this deal. Meanwhile, NNPC is trying to boost output, and President Tinubu has issued an executive order to reduce production costs. Despite budgeting for $75 per barrel and 2 million barrels per day in production, Nigeria produced just under 1.5 million barrels per day in April 2025, according to the latest OPEC report.</p>
      </section>
    `,
  },
  {
    title:
      "Budget Gaps and Capital Markets: Nigeria’s 2025 Fiscal Turning Point",
    intro:
      "In early 2025, Professor Uche Uwaleke, a prominent capital market expert, emphasized that Nigeria must shift from debt-heavy financing to more sustainable options.",
    content: `
     <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
    Budget Gaps and Capital Markets: Nigeria’s 2025 Fiscal Turning Points
  </h2>

  <img src="img/Uwaleke.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />

  <p style="max-width: 900px; text-align: justify; font-size: 1.1rem;">
    In early 2025, Professor Uche Uwaleke, a prominent capital market expert, emphasized that Nigeria must shift from debt-heavy financing to more sustainable options. Speaking at the 50th Inaugural Lecture of Nasarawa State University, he advised the Federal Government to list state-owned enterprises (SOEs) on the Nigerian Exchange (NGX). According to him, this approach would allow Nigeria to raise long-term funds from private investors, helping to finance infrastructure and development projects without deepening public debt. He also reiterated the need for better capital expenditure utilization and adherence to responsible borrowing practices, especially after the 2024 shortfall where only ₦3.7 trillion of the ₦9.2 trillion allocated for capital expenditure was used.

    Further strengthening his case, Uwaleke welcomed the passage of the Investment and Securities Act (ISA) 2025, describing it as a timely reform that would modernize Nigeria’s capital market landscape. The new law grants more oversight powers to the Securities and Exchange Commission (SEC), introduces legal frameworks for digital assets and crypto, and improves investor protections. He pointed out, however, that while ISA 2025 is a step forward, areas like ESG reporting, fintech regulation, and retail investor support still need refinement.

    Together, these positions underscore Uwaleke's central message in 2025: Nigeria must reduce its dependence on external debt instruments like Eurobonds, improve how capital budgets are executed, and build a deeper, more transparent capital market that can support real economic development.
  </p>
</section>

    `,
  },
  {
    title: "World Bank approves $1.08 billion loan for Nigeria",
    intro:
      "The World Bank said on Wednesday April 2nd it had approved a total of $1.08 billion in concessional financing for Nigeria to enhance education quality, build household and community resilience, and improve nutrition for underserved groups.",
    content: `
      <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
    World Bank approves $1.08 billion loan for Nigeria
  </h2>

  <img src="img/world.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />

  <p style="max-width: 900px; margin-bottom: 20px; font-size: 1.3rem; text-align: justify;">
    The World Bank has approved a concessional financing package totaling $1.08 billion for Nigeria. The funding is aimed at addressing key development challenges, including improving the quality of education, enhancing household and community resilience, and tackling malnutrition, particularly among underserved and vulnerable populations.

    Originally conceptualized in response to the economic disruptions caused by the COVID-19 pandemic, the financing has now been recalibrated to align with Nigeria’s current socio-economic realities. The World Bank noted that the support is especially timely following the economic reforms implemented by the Nigerian government in 2023, which, while necessary, have placed short-term pressure on the country’s most vulnerable groups.

    According to the Bank’s statement released on Wednesday, the largest portion of the package—$500 million—will support an economic stimulus program designed to strengthen local economies, boost job creation, and build financial resilience at the household level. Another $500 million has been earmarked for the education sector, with a focus on improving learning outcomes, expanding access to quality basic education, and reducing out-of-school rates in disadvantaged regions.

    The remaining $80 million will be allocated to nutrition and health programs, targeting undernourished children and women in rural and underserved communities. This component aims to improve food security, promote early childhood development, and reduce the long-term impacts of malnutrition on productivity and human capital.

    The World Bank emphasized that the combined efforts across these sectors are intended to reinforce its long-standing development partnership with Nigeria and expand the reach and impact of its interventions.
  </p>
</section>

    `,
  },
  {
    title:
      "FAAC Disburses N1.41tn October Revenue as Federation Account Grosses N2.668tnh",
    intro:
      "The Federation Accounts Allocation Committee (FAAC) disbursed N1.411 trillion to the federal, state, and local governments, along with other stakeholders, for October 2024. This amount was N1.257 trillion less than the gross revenue of N2.668 trillion generated during the same period.",
    content: `
     <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
    FAAC Disburses N1.41tn October Revenue as Federation Account Grosses N2.668tn
  </h2>

  <img src="img/octob.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />

  <p style="max-width: 900px; margin-bottom: 20px; font-size: 1.3rem; text-align: justify;">
    The Federation Accounts Allocation Committee (FAAC) disbursed N1.411 trillion to the federal, state, and local governments, along with other stakeholders, for October 2024. This amount was N1.257 trillion less than the gross revenue of N2.668 trillion generated during the same period.

    Revenue Breakdown: Statutory Revenue: N206.319 billion Value Added Tax (VAT): N622.312 billion Electronic Money Transfer Levy (EMTL): N17.111 billion Exchange Difference Revenue: N566 billion

    Distribution of N1.411 Trillion: Federal Government: N433.021 billion State Governments: N490.696 billion Local Governments: N355.621 billion Derivation Revenue (13% mineral revenue): N132.404 billion

    Key Revenue Sources and Growth: Oil and Gas Royalty, Excise Duty, VAT, Import Duty, Petroleum Profit Tax (PPT), and Companies Income Tax (CIT) saw significant increases in October. However, Electronic Money Transfer Levy (EMTL) and CET levies declined.

    Detailed Allocations: Distributable Statutory Revenue (N206.319 billion): Federal Government: N77.562 billion State Governments: N39.341 billion Local Governments: N30.330 billion Derivation Revenue: N59.086 billion

    Distributable VAT Revenue (N622.312 billion): Federal Government: N93.347 billion State Governments: N311.156 billion Local Governments: N217.809 billion

    Electronic Money Transfer Levy (N17.111 billion): Federal Government: N2.567 billion State Governments: N8.555 billion Local Governments: N5.989 billion

    Exchange Difference Revenue (N566 billion): Federal Government: N259.545 billion State Governments: N131.644 billion Local Governments: N101.493 billion Derivation Revenue: N73.318 billion

    Key Meetings and Context: The disbursement was finalized during the FAAC meeting in November 2024 in Bauchi State, chaired by Dr. Oluwatoyin Madein, the Accountant General of the Federation. The meeting followed the 2024 National Council on Finance and Economic Development (NACOFED) hosted by Bauchi State.

    This disbursement reflects significant growth in Nigeria's revenue sources such as VAT, PPT, and CIT compared to September 2024.
  </p>
</section>

    `,
  },
  {
    title: "FG, States and LGAs share N1.35 trillionas FAAC allocation in June",
    intro:
      "In July 2024, the Federation Accounts Allocation Committee (FAAC) saw a notable increase in the monthly disbursement to the Federal, State, and Local Governments, rising from N1.143 trillion in June to N1.354 trillion.",
    content: `
      <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
        
       <img src="img/juneal.webp" style="max-width: 100%; height: auto; margin: 20px 0; />  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">FG, States and LGAs share N1.35 trillion as FAAC allocation in June</h2>
        <p style="max-width: 900px; margin-bottom: 20px; font-size:1.3rem; text-align:justify;">In July 2024, the Federation Accounts Allocation Committee (FAAC) saw a notable increase in the monthly disbursement to the Federal, State, and Local Governments, rising from N1.143 trillion in June to N1.354 trillion. The FAAC meeting, chaired by Wale Edun, the Minister of Finance and Coordinating Minister of the Economy, allocated these funds among the different tiers of government as follows: Federal Government received N459.776 billion, State Governments received N461.979 billion, Local Government Councils (LGCs) received N337.019 billion, Oil Producing States received an additional N95.598 billion as derivation (13% of mineral revenue). The communiqué from the FAAC highlighted that the total revenue distributable in June 2024 included statutory revenue of N142.514 billion, VAT revenue of N523.973 billion, EMTL revenue of N15.692 billion, N472.192 billion from exchange differences, and an augmentation of N200 billion​Additionally, the gross revenue available from VAT increased significantly to N562.685 billion in June from N497.665 billion in May, marking a rise of N65.020 billion. A breakdown showed N16.205 billion allocated for transfers, interventions, and refunds, with N16.346 billion from the EMTL distributed across the tiers of government. The communiqué also outlined the allocation of exchange differences and an augmentation, demonstrating a distribution that supports both government operations and development needs across the states and local councils​</p>
      </section>
    `,
  },
  {
    title: "12 Suprises for NEW CEOs",
    intro:
      "Stepping into the CEO role is both a thrill and a trial. No matter how prepared you think you are, leadership at the top comes with unexpected challenges that no handbook fully explains. ",
    content: `
      <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.7; margin-top:-6rem;">
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">12 Suprises for NEW CEOs</h2>
        <img src="img/twelve.webp";  />
      </section>
    `,
  },
  {
    title: "VAT filing extended till May 31st 2023",
    intro: "",
    content: `
      <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">VAT filing extended till May 31st 2023</h2>
         <img src="img/vat.webp" />
      </section>
    `,
  },
  {
    title: "FAAC allocation: FG, states, LGs share N750bn",
    intro:
      "The Federation Account Allocation Committee (FAAC) says it shared N750.174 billion among the three tiers of government in January 2023.",
    content: `
     <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top: -6rem;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
    FAAC allocation: FG, states, LGs share N750bn
  </h2>

  <img src="img/glass.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />

  <p style="max-width: 900px; width: 100%; margin-bottom: 20px; font-size: 1.3rem; text-align: justify;">
    The Federation Account Allocation Committee (FAAC) says it shared N750.174 billion among the three tiers of government in January 2023. The figure represents a decrease of N240.015 billion compared to December’s allocation of N990.189 billion. The committee disclosed this in a communique issued at the end of its latest meeting in Abuja on Monday.

    The figure comprised gross statutory revenue, value-added tax (VAT), electronic money transfer levies (EMTL), augmentation from non-mineral revenue, and an additional sum of N15 billion from savings.

    A breakdown of the N750.174 billion for the month of January shows that N277.334 billion was for the federal government, N244.975 billion for states, and N180.135 billion for local governments, while mineral-producing states received N32.730 billion as derivation (13 percent of mineral revenue).

    FAAC further said the gross revenue available from the value-added tax was N250.009 billion for the month in review. A gross statutory revenue of N653.703 billion was received for the month — lower than the sum of N1.136 trillion received in the previous month by N482.479 billion.

    Out of the gross statutory revenue, N23.494 billion was allotted to the cost of collection and a total of N241.091 billion to transfers, savings, and refunds. From the balance of N389.118 billion, the federal government received N189.745 billion, states got N95.227 billion, local governments received N73.416 billion, while derivation (13 percent to mineral-producing states) stood at N32.730 billion.

    FAAC added that from the electronic money transfer levies (EMTL) of N13.799 billion, the federal government got N1.987 billion, states received N6.624 billion, local governments received N4.636 billion, while the sum of N0.552 billion was allocated to cost of collection.

    The commission further disclosed that the augmentation of the sum of N100.000 billion from non-mineral revenue was shared as follows: federal government received N52.680 billion, states N26.720 billion, while N20.600 billion was earmarked for the local government.

    According to FAAC, oil and gas royalties, petroleum profit tax (PPT), companies income tax (CIT), and EMTL decreased tremendously. It said while value-added tax (VAT) decreased marginally, import and excise duties also increased slightly. The committee added that the balance in the excess crude account (ECA), as at February 20, 2023, stands at $473,754.57.
  </p>
</section>

    `,
  },
  {
    title: "CBN extends currency swap deadline to Feb 10th ,2023",
    intro:
      "The Central Bank of Nigeria (CBN) has announced an extension of the deadline for the currency swap initiative to February 10th, 2023, allowing Nigerians additional time to exchange their old naira notes for the redesigned ones.",
    content: `
     <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.75; margin-top:-6rem;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
    CBN extends currency swap deadline to Feb 10th, 2023
  </h2>
  
  <img src="img/cbn1.webp" style="max-width: 100%;" />
  <img src="img/cbn2.webp" style="max-width: 100%;" />
  <img src="img/cbn3.webp" style="max-width: 100%;" />
  <img src="img/cbn4.webp" style="max-width: 100%;" />
  <img src="img/cbn5.webp" style="max-width: 100%;" />
  <img src="img/cbn6.webp" style="max-width: 100%;" />
</section>

    `,
  },
  {
    title: "APPROPRIATION BILL 2023",
    intro:
      "the Central Bank of Nigeria (CBN) issued a directive as part of its cashless policy linked to the naira redesign, setting stringent limits on cash withdrawals....",
    content: `<section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.7; margin-top: -6rem;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
    APPROPRIATION BILL 2023
  </h2>

  <!-- Image Slides -->
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <img src="img/app1.webp" style="max-width: 100%;" />
    <img src="img/app2.webp" style="max-width: 100%;" />
    <img src="img/app3.webp" style="max-width: 100%;" />
    <img src="img/app4.webp" style="max-width: 100%;" />
    <img src="img/app5.webp" style="max-width: 100%;" />
    <img src="img/app6.webp" style="max-width: 100%;" />
    <img src="img/app7.webp" style="max-width: 100%;" />
    <img src="img/app8.webp" style="max-width: 100%;" />
    <img src="img/app9.webp" style="max-width: 100%;" />
    <img src="img/app10.webp" style="max-width: 100%;" />
    <img src="img/app11.webp" style="max-width: 100%;" />
    <img src="img/app12.webp" style="max-width: 100%;" />
    <img src="img/app13.webp" style="max-width: 100%;" />
    <img src="img/app14.webp" style="max-width: 100%;" />
  </div>
</section>`,
  },
  {
    title: "CASH WITHDRAWAL LIMITS",
    intro:
      "On December 6, 2022, the Central Bank of Nigeria (CBN) issued a directive as part of its cashless policy linked to the naira redesign, setting stringent limits on cash withdrawals....",
    content: `
      <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">CASH WITHDRAWAL LIMITS</h2>
         <img src="img/cash1.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />
          <img src="img/cash2.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />
       
      </section>
    `,
  },
  {
    title: "FAAC SHARES N902.053 billion Naira November 2022.",
    intro:
      "The Federation Account Allocation Committee (FAAC) has shared a total sum of 902.053 billion Naira November 2022 Federation Account Revenue to the Federal Government, States and Local Government Councils...",
    content: `
      <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
        <p>Posted On December 16th 2022</p>
      <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">FAAC SHARES N902.053 billion Naira November 2022.t</h2>
       <img src="img/fairy.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />
      <p style="max-width: 900px; margin-bottom: 20px; font-size:1.3rem; text-align:justify;">The Federation Account Allocation Committee (FAAC) has shared a total sum of 902.053 billion Naira November 2022 Federation Account Revenue to the Federal Government, States and Local Government Councils.



It contained this in a communique issued at the end of the Committee‘s meeting for December 2022. A statement by Henshaw Ogubike, Director (Information, Press and Public Relations) office of the accountant general of the federation shows that of the total distributable revenue comprised distributable statutory revenue of N681.079 billion, distributable Value Added Tax revenue of N202.839 billion, Exchange Gain revenue of N7.164 billion and N10.971 billion Electronic Money Transfer Levy (EMTL) revenue.



The balance in the Excess Crude Account (ECA) was $473,754.57.
According to the Communiqué, in November 2022, Oil and Gas Royalties and Petroleum Profit Tax (PPT) recorded significant increases while Import and Excise Duties increased marginally. However, Value Added Tax (VAT) and Companies’ Income Tax (CIT) decreased considerably.</p>
      </section>
    `,
  },
  {
    title: "Social Costs of the CBN Reforms in Nigeria ",
    intro:
      "Mr. Wale Osho, a fine young ex-banker died as a result of a brief illness after returning from a business trip from China.  He was some months back before his death a staff of one of the acquired banks before he lost his job....",
    content: `
      <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Social Costs of the CBN Reforms in Nigeria</h2>
          <p> Posted December 16th 2022</p>
        <p style="max-width: 900px; margin-bottom: 20px; font-size:1.3rem; text-align:justify;">Mr. Wale Osho, a fine young ex-banker died as a result of a brief illness after returning from a business trip from China.  He was some months back before his death a staff of one of the acquired banks before he lost his job. I visited his residence somewhere in Ojodu-Berger an outskirt town in Lagos to commiserate with his family members and mourn his death. It is likely that the pressure of meeting up with the huge cost of living (house rent, school fees, fuel for generator/car etc) after the bank job loss contributed to his illness and subsequently his death. Mr. Caleb Ogbonnaya also slumped during work hours due to health complications and pressure in a new consolidated bank. He was also a staff of an acquired bank. There are so many others that are passing through same stress, economic turmoil and financial pressure occasioned by sudden job loss, salary cut, demotions, redeployments etc.



The Central Bank of Nigeria (CBN) has as its major function the overall supervision of the Nigerian banking system. Based on the statutory returns send from the Banks and special examination conducted, financial statistics are compiled and used to monitor compliance with policy targets. From this stress audit to assess the financial health of these banks, weak banks are identified and remedial actions are articulated for implementation to protect depositors’ funds in these ailing banks. These remedial actions are articulated in a reform programme. The critical goals most times are to correct perceived institutional problems and protect depositors’ funds in banks that are identified as weak. A weak bank(s) may be merged or acquired by another bank or outrightly liquidated and taken over by NDIC.



These noble objectives are most times welcomed by both the local and international media for the value these reforms intend to create as they also puts the country’s economic landscape on the spot and projects the anchor of such reforms. 









Historically there have been 2 major banking reforms in the country in the last decade and I have personally witnessed the two  – the Professor Charles Soludo reform programme of 2004 and that of Malam Sanusi Lamido Sanusi of 2009.  



While the former pursued the reduction of banks in 2004 from a perceived high of 89 to a moderate 25 (75 banks merged while 16 were liquidated) and raised the capital base to N25 billion for all the emerging banks for competitiveness and improved capacity, Mallam Sanusi s reforms aimed at instilling discipline in the management of banks through best practice risk management framework to avoid bank failures and protect the entire banking system from collapse during the  global economic crisis of 2007 – 2009 and capital market crash of 2008 which actually trended downwards by 70% in Nigeria. In 2009 , 5 Bank CEOs were initially sacked from the intervened banks and a whopping N620 billion was injected into the system. 3 bridge banks (Enterprise bank, Mainstreet bank and Keystone bank) were established as resolution options by NDIC for 3 ailing banks (Afribank PLC, Bank PHB PLC and Spring Bank).



Earlier in 1998 , 30 banks were liquidated out of 120 banks. 



Sarah Alade (2012) in her paper in the CBN Journal for applied statistics posits that banking reform has been an integral part of the country wide economic reform programme undertaken to reposition the Nigerian economy to achieve the objective of sustained macroeconomic development stability. For the banking sector to be among the global players in the international financial market, it must effectively perform its intermediation role.  



 In as much as these reforms are necessary as confirmed by International economic agencies e.g. the World Bank, there are enormous social costs whose implications are a direct effect on the already tensed economic lives of Nigerians. The social costs pointed out above include mass retrenchments that results into loss of many jobs, demotions, outright salary cut etc which are not really given much attention to by the drivers of these reforms. 



Consequent upon this distress syndrome, bank workers usually bear the brunt. Over 15,000 bank workers were said to have been displaced aftermath of the 2004 consolidation in the sector which saw 89 banks shrink to 24. Apart from the fact that all the workers in the liquidated banks were made to join the labour market, the consolidated banks also embarked on staff rationalization, down-sizing, right-sizing , restructuring etc . All amounts to sacking staff en-masse. It was actually a competition in the surviving banks when workers were off-loaded in their thousands suddenly.

More so, over 7,500 persons lost their jobs after the CBN takeover of eight banks in 2009. The number has increased as banks continued to sack. Expressly, the current CBN governor, Lamido Sanusi had, at the beginning of the current reform process admitted that there will be job losses but the issue then was how will the economy absorb the shock created by these huge unemployment numbers?.

Many industry observers  also believe that the negative implications of these reforms might have been buried in media lingo by the drivers to prove to the world that the intention behind the reforms are beneficial to the country while discounting the terrible , detrimental economic loss and demeaning of human value through income erosion.

One of the beneficiary banks of the present reforms even gave staff of its legacy acquired bank options of choosing  ‘ the higher between gratuity or severance pay’ to entice them to leave the system. This strategy of ‘weeding out’ shows clearly that acquired staff are not wanted by the acquiring banks. This bank subsequently got an ‘award’ for its seamless transition after massive lay-offs of the staff of the acquired bank. 



A friend of mine also told me of a new vogue in the industry which is referred to as e-sacking. A particular staff on resumption for the day’s job who cannot log into the bank’s intranet is expected to report to the human resources department for his termination letter. This novel approach does not attract any form of negotiation or noise.

Mr Samuel Nzekwe, former President, Association of National Accountants of Nigeria (ANAN) says that the reforms exercise has resulted in massive job losses in the sector, and compound unemployment problems in the country. Nzekwe says that this will increase the level of poverty, with a resultant negative multiplier effect on the Gross Domestic Product (GDP) of the country.

He notes that the CBN could have put in place effective framework in the course of the banking reforms that would prevent people from losing their jobs en-masse.











Another social cost is that careers of some of the brilliant bankers of the acquired banks are cut short by this attitude of weeding out. Just few of the affected bankers might be lucky to scuttle back into any available bank while others will take up anything outside their banking careers, losing their core area of knowledge and competence for survival or run away to UK, Canada or USA to do menial and unskilled jobs to make a living. 



Kunle Adetiba, an erstwhile staff of Bank PHB said he left the country because having lost his job; he could not afford to stay behind in search for job that is not available. “I have to run away from the country because I cannot afford to stay around looking for what is not there. As a matter of fact, I have almost finished my savings when an old friend came to my rescue by facilitating my leaving the country. I think this is the best decision.” Kingsley Omankhalen, a brilliant banker in a corporate communications department did not even wait for too long in a new consolidated bank before jetting away to the United Kingdom with his family. 

Before these bank failures and distress crept into the system, bank work was very attractive and bankers were the toast of the public. Every young adult loved to work in the Bank. Recalling on how bank workers were treated in those days, a former chairperson, Association of Professional Women Bankers of Nigeria (APWB), Mrs Taiwo Ige, said they were treated next to clergy men.

According to her, apart from the fat salary, they were held in high esteem. “Everybody wanted to be associated with bankers. They were treated with respect and dignity. And it was commonly regarded as a noble profession. Every young graduate was eager to join the profession”. This story was replicated by several retired workers in the industry before these CBN reforms and the resultant massive job cut.

Today, it has now become a matter of regret. Statistic of young men that have fled abroad principally to UK, Canada, United States and elsewhere in Europe in the last few years are young bankers who were either prematurely sacked or escaped abroad which is considered a safety net before the big axe of Management could fall on them. A lot of young graduates are sceptical to apply for jobs in banks because of the general job insecurity and uncertainty associated with bank work nowadays. Something (an elaborate CBN reform) can just crop up due to no fault of theirs and suddenly a cherished job will be on the line. Bankers have been advised severally to have a plan B so that they can quickly re-integrate into the economy and earn a decent living after a job loss.



In conclusion, industry watchers believe that the CBN can do more to benefit the country using its vantage position as a critical agency of Government and impact the people positively. It is expected that the CBN should more importantly put a human face behind its reforms and ensure that job losses are reduced to the barest minimum in the acquired banks. Banks should be compelled to provide data to the CBN on number of staff retrenched relative to a benchmark to be set by it. This will reduce the resultant uncontrolled mass retrenchment and by extension the humongous economic woes that face young vibrant Nigerian bankers cut in the web of these Banking reforms. 



Mr Faisal Bidmos is a Fellow of Institute of .Chartered Accountants of Nigeria  and a former Senior Manager in a commercial bank. He runs a business consultancy outfit and is a Director in a number of companies in Nigeria . This was first published in Financialnigeria magazine , a monthly finance publication in Nigeria in May 2009 </p>
      </section>
    `,
  },
  {
    title:
      "Capital Adequacy Ratio: An imperative for stability for banks and other financial institutions . ",
    intro:
      "Capital adequacy ratio (CAR) was introduced as an anti-dote to bank failures and a stress signal to determine the volume of capital that will be sufficient to absorb any shock that may affect.....",
    content: `
    <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top: -6rem;">
      
      <h2 style="font-size: 24px; font-weight: bold; margin-bottom:1rem;">
        Capital Adequacy Ratio: An imperative  <br/>for stability for banks and other financial institutions
      </h2>
       <p> Posted December 16th 2022</p>

      <p style="max-width: 800px; text-align: justify; font-size: 1.1rem;">
       Capital adequacy ratio (CAR) was introduced as an anti-dote to bank failures and a stress signal to determine the volume of capital that will be sufficient to absorb any shock that may affect the going concern objectives of banks world-wide and other financial institutions (OFIs).  

Many banks and OFIs caught in the web of inadequate capital became inexistent thereafter (45 was closed between 1994 and 2006 in Nigeria according to NDIC). About 10 years ago, Intercontinental Bank Plc, Oceanic Bank Plc and Bank PHB Plc were all well-branded banks in Nigeria with branch expansion goals, big balance sheet size and profitability at the centre of their corporate objectives. The banks with 5 others were declared illiquid later in 2009 by CBN as they lacked adequate capital to absorb credit risk losses. They needed to be merged, acquired or nationalized. In the case of Union Bank PLC, the bank opted for investment by a core investor African Capital Alliance (ACA) who invested $500 million and there were plans to further  invest additional $250 million into the bank .



Similarly, big global banks such as Lehman Brothers, Fortis Bank, RBS, Lloyds and Northern Rock also ran into troubled waters and all became bankrupt. The collapse of these banks affected many other banks worldwide and caused fear and distrust in the banking sector. This ultimately led banks to exercise utmost caution in granting credits, reluctant to create investment outlets and generally losing their risk appetite. 

On 26 March 2008, the Financial Services Authority, UK released an internal report into the failings over handling the problems at Northern Rock. "They found that their supervision of the bank had not been carried out to a standard that is acceptable". 

The overall effect was call for stricter regulation and supervision of banks to ensure their long term stability. This informed the emphasis on CAR to support supervisory functions of regulators.

Reaction of Central Banks world-wide 

To avoid re-occurrence of bank failures, Central Banks introduced Risk management frameworks (Basel I of 1974, Basel II of 2004 and most recently Basel III with implementation in 2019)  to ensure that bank’s assets were covered from global shocks and local risks. They were also introduced to standardize risk management rules in central banks worldwide in their capital adequacy supervisory practices. 

In paper 42 published in the ECB Journal of December 2005 on the new Basel Capital framework and its implementation in the European Union by Frank Dierick , Fatima Pires , Martin Scheicher  and Kai Gereon Spitzer.



 ‘Basel II is based on three mutually reinforcing pillars: minimum capital requirements (Pillar I), the supervisory review process (Pillar II) and market discipline (Pillar III). A main innovation is that a set of increasingly sophisticated approaches is now available to banks to calculate their minimum capital requirements. Although the simplest method to calculate capital for credit risk is based on assessments by rating agencies, under the most advanced approaches, banks are allowed to use their own estimated risk parameters. Moreover, for the first time, banks are required to hold capital for operational risk.’ 
      </p>

      <img src="img/cart.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />

      <p style="max-width: 800px; text-align: justify; font-size: 1.1rem;">
        An index called CAR (Risk weighted assets ratio or capital adequacy ratio) is measured in determining compliance with Basel II which is presently being implemented in many countries and to monitor the health status of banks by central banks. It is the ratio of core capital (tier 1 and tier 2 capital) of a bank against risk weighted assets including contingent assets. In Nigeria, CAR is 10% for banks without foreign subsidiaries while it is 15% for banks with foreign subsidiaries. In most foreign countries, CAR is between 6% and 8%. Basel III asked for ratios as: 7–9.5% (4.5% + 2.5% (conservation buffer) + 0–2.5% (seasonal buffer)) forcommon equityand 8.5–11% for Tier 1 capitaland 10.5–13% for total capital.



The CBN reviewed the risk weights of some asset types upwards to ensure that banks adequately provide for any eventualities on some highly volatile sectors like the public sector where default on loans can crystallize immediately due to political reasons. Highlights of the circular released by the CBN are: increased risk weight on direct lending to government from 100 per cent to 200 per cent; and where a bank’s exposure to a particular sector of the economy exceeds 20 per cent of its total lending, the bank in question will be required to apply a risk weight of 150 per cent to its entire portfolio.

Where banks exceed the CBN stipulated large exposure limits, to prevent over-exposure to a client or group of connected clients, the CBN will, henceforth, treat such infractions as impairments to the respective bank’s capital; and the CBN tightened the circumstances under which credit transactions may take place between bank-related parties within a holding company structure.

The Central Bank of Nigeria also jacked up the Capital Adequacy Ratio for Nigerian banks with offshore subsidiaries to a minimum of 15 per cent from 10 per cent, which is the industry minimum. Though the CBN had taken other steps to ensure that the affected banks are inoculated from pressures from their offshore outlets, industry watchers believed that the CBN took this measure as an extra precaution against the pressures for additional capital from these subsidiaries.



Besides, some of the offshore subsidiaries, particularly those inherited from the acquired banks, are not doing well. This directive by the banking sector regulator has sent almost all the affected banks into the market sourcing for additional capital, to keep them clear of the new CAR requirement.



Zambia, became the latest African country to hike capital requirements to $100 million for foreign banks from $2 million, after Ghana and Kenya, as it tries to insulate its banking sectors from the effects of a weak global economy.



The new CBN’s directive affects six Nigerian banks that currently have foreign subsidiaries. They include United Bank for Africa Plc which leads with 18 subsidiaries on the continent; Access Bank Plc – nine subsidiaries; Guaranty Trust Bank Plc – five; Skye Bank Plc – four; Keystone Bank Limited – four; Diamond Bank Plc and Zenith Bank Plc – three respectively.



An international rating agency Fitch Ratings have said that the higher risk weights introduced by CBN might increase pressure on banks’ capital ratios. It, however, said that if the banks are successful in reducing sector concentrations, the changes could benefit asset quality and risk management.



A paper on New Zealand Banks’ Vulnerabilities and Capital Adequacy prepared by Byung Kyoon Jang and Masahiko Kataoka in January 2013 IMF Working Paper WP/13/7, finds that, given New Zealand’s conservative approach in implementing the Basel II framework, New Zealand banks’ headline capital ratios underestimate their capital strength.The soundness of the New Zealand banking sector was crucial to the resilience of the economy during the global financial crisis. The banking sector is dominated by four large subsidiaries of Australian banks that have proved resilient to the recent turbulence in the global financial markets. Their combined assets are close to 90 percent of total banking sector assets and about 160 percent of GDP. Bank profits are strong and nonperforming loans are less than 2 percent of total loans, low by advanced country standards. Sound regulation and supervision helped maintain stability. This can be said of French banks too such as BNP Paribas.


      </p>

      <h3 style="font-size: 20px; font-weight: bold; margin-top: 40px;">Computation of CAR</h3>
      
      <img src="img/picd1.webp" style="max-width: 100%; height: auto; margin-top: 10px;" />
      <img src="img/picd2.webp" style="max-width: 100%; height: auto; margin-top: 10px;" />
      <img src="img/picd3.webp" style="max-width: 100%; height: auto; margin-top: 10px;" />

      <h3 style="font-size: 20px; font-weight: bold; margin-top: 40px;">Concerns with high CAR</h3>

      <p style="max-width: 800px; text-align: justify; font-size: 1.1rem;">
       As much as CAR is good for the banks, there are some concerns of its implications if it is too high, non-uniformised or risk assets not properly defined by central banks the world over.

1.      Contraction of the economy

Adequacy of capital in the contemporary banking system focuses two major issues. One is the function of provision of a buffer to absorb losses that can potentially crystallize if risk assets go bad or if currency trading results in huge losses, the other issue is that it regulates the amount of credits a bank can create and give to its customers. This requirement (CAR) for a bank is in addition to other reserve requirements of the central bank such as liquidity ratio, cash reserve ratio etc.



This latter function indirectly regulates money supply activities and also gives direction on the expansion of an entire economy. Therefore the macro-economic stability of a country will be compromised as high capital requirements act to suffocate monetary and lending expansion and could in fact work against real growth of credits and stimulate labour cuts in the broader sense.



Analysts have raised concerns that high CAR implies that large amount of money is stuck in provisions or reserves , meaning that there will be fewer money left for investment or for the smooth running or creation of  bank’s credits. This is a major concern which will stifle the economy completely and ultimately lead to closure of companies and loss of jobs in a fragile environment. 



2.     Need for improvement in uniformity and pace of implementation of CAR / Basel III accord framework

There are also concerns that the Banks are not actually ready to implement fully the provisions of the Basel III accord as changes made on January 7, 2013 pushed implementation in some countries till 2019 and further amendments in 2021 like the USA. Basel III is to strengthen bank capital requirements by increasing bank liquidity and leverage ratios.

Leverage ratio 

Basel III introduced a minimum "leverage ratio". The leverage ratio was calculated by dividing Tier 1 capital by the bank's average total consolidated assets; the banks were expected to maintain the leverage ratio in excess of 3%.



Liquidity requirements 

Basel III also introduced two required liquidity ratios. 

(i)  The "Liquidity Coverage Ratio" require a bank to hold sufficient high-quality liquid assets to cover its total net cash outflows over 30 days;



(ii) The net stable funding ratio require the available amount of stable funding to exceed the required amount of stable funding over a one-year period of extended stress.

Dr Moghalu , formerly of CBN  while fielding some media questions explained: 

“Basel III, which is a response to the recent global financial crisis and will be implemented between 2013 and 2019, raises the level, quality and consistency of bank capital,” he explained.   He added: “Basically, Basel III requires important global banks to hold core Tier I capital of a minimum of 7 per cent plus an additional buffer of 2.5 per cent of core tier one capital in order to counter macro shocks from economic cycles. It is important to note that some Nigerian banks are already operating above the capital thresholds established by Basel III, but there needs to be a more uniform approach to bank capital and risk management, especially by banks with national and international authorisations.""
      </p>

      <img src="img/charty.webp" style="max-width: 100%; height: auto; margin: 20px 0;" />

      <p style="max-width: 800px; text-align: justify; font-size: 1.1rem;">
       3.      Inconsistencies in risk assets definition:

It is well-known that to make the CAR move above the benchmark set by central banks in different climates, banks up till recently place securitized loans as off balance sheet items and as such these items are discounted from the ratio. This practice is said to be common in many European banks to escape inclusion in the risk assets computation and increase CAR. 

It is also noted that some banks classify commercial papers (CP) as off balance sheet items and exclude them as contingent assets in the risk assets computation. CAR of such banks which in actual sense is suppose to be very much below benchmark ratio of 10% will wrongly be above it because a heavily discounted risk weighted assets portfolio will result in a higher CAR.The treatment of Inter-bank placements under the definition of risk assets should also be properly clarified though in most EU countries it is included in their banks’ CAR computation. 



The limitations of consistency in the definitions of risk assets can result in the problems of getting a true and accurate CAR. It should be noted that some of these banks which had to be bailed out, during the last economic crisis,  had capital in excess of 20% of risk assets, yet were found to be short of capital when losses materialised. The implication is that the distortions in the computation of their CAR gave a false impression that they were adequately covered when in actual sense they were poorly capitalized, unstable and vulnerable to shocks. 



The summary is that CAR is good for the banks to absorb shocks and facilitate their stability in the long run; the only concerns are that when it is high, there are implications on the overall economy as huge amount of money are tied down in provisions and reserves and not allowed to stimulate productivity through credit growth.



Faisal Bidmos  is a Management consultant, a Fellow Inst. Chartered Accountants of  Nigeria (FCA) and a former Senior Manager in a commercial  bank in Nigeria. He runs a business consulting outfit in Lagos, Nigeria and is a director in many companies.


      </p>
      
    </section>
  `,
  },

  {
    title: "PUBLIC NOTICE SUBMISSION OF CERTIFICATE OF ACCEPTANCE",
    intro:
      "This submission is a mandatory requirement and must be completed within the stipulated timeframe to ensure compliance with regulatory obligations.",
    content: `
    <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; zoom: 0.95; margin-top:-6rem;">
      <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
        PUBLIC NOTICE SUBMISSION OF CERTIFICATE OF ACCEPTANCE
      </h2>
      <p style="max-width: 600px; margin-bottom: 20px;">
        This submission is a mandatory requirement and must be completed within the stipulated timeframe to ensure compliance with regulatory obligations.
      </p>
      <p> Posted December 16th 2022</p>
      <img src="img/firs.webp" style="max-width: 100%; height: auto;" />
    </section>
  `,
  },
];

// Render blog previews
const blogContainer = document.getElementById("blog-posts");
posts.forEach((post, i) => {
  const col = document.createElement("div");
  col.className = "col";
  col.setAttribute("data-aos", "fade-up");

  const date = `2025-07-${((i % 30) + 1).toString().padStart(2, "0")}`;

  col.innerHTML = `
    <div class="blog-post card h-100">
      <img src="${imageUrls[i]}" alt="${post.title}" class="card-img-top" />
      <div class="card-body d-flex flex-column">
        <h5 class="blog-title mb-2">${post.title}</h5>
        <p class="blog-intro mb-3">${post.intro}</p>
        <a href="#" class="btn btn-primary mt-auto read-more-btn" data-index="${i}">Read More</a>
      </div>
    </div>
  `;

  blogContainer.appendChild(col);
});

// Full view handler
const fullView = document.getElementById("blog-full-view");
const fullTitle = document.getElementById("full-title");
const fullImage = document.getElementById("full-image");
const fullDate = document.getElementById("full-date");
const fullContent = document.getElementById("full-content");
const prevBtn = document.getElementById("prev-post");
const nextBtn = document.getElementById("next-post");
const backBtn = document.getElementById("go-back");

let currentIndex = 0;

function showFullPost(index) {
  const post = posts[index];
  currentIndex = index;

  fullTitle.textContent = "";
  fullImage.src = "";
  fullImage.style.display = "none";
  fullDate.textContent = "";
  fullDate.style.display = "none";
  fullContent.innerHTML = post.content;

  // 🔴 Hide blog grid and blog header
  document.getElementById("blog-posts").classList.add("d-none");
  document.getElementById("blog-header").classList.add("d-none");

  // ✅ Show full blog view
  document.getElementById("blog-full-view").classList.remove("d-none");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("read-more-btn")) {
    e.preventDefault();
    const index = parseInt(e.target.dataset.index);
    showFullPost(index);
  }
});

backBtn.addEventListener("click", function () {
  fullView.classList.add("d-none");
  document.getElementById("blog-posts").classList.remove("d-none");
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) showFullPost(currentIndex - 1);
});

nextBtn.addEventListener("click", function () {
  if (currentIndex < posts.length - 1) showFullPost(currentIndex + 1);
});
