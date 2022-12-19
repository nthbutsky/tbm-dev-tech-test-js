// Reference to the creative's various properties and elements.
const creative = {};

// Called on the window load event. 
function preInit() {
  setupDom();

// DISABLED FOR DEMO PURPOSES AND ERRORLESS STATE
  // if (Enabler.isInitialized()) {
  //   init();
  // } else {
  //   Enabler.addEventListener(
  //     studio.events.StudioEvent.INIT,
  //     init
  //   );
  // }
}

// Set up references to DOM elements.
function setupDom() {
  creative.dom = {};
  creative.dom.container = document.getElementById('container');
  creative.dom.exit = document.getElementById('exit');
  creative.dom.can = document.getElementById("can");
  creative.dom.literally = document.getElementById("literally");
  creative.dom.limited = document.getElementById("limited");
  creative.dom.now = document.getElementById("now");
  creative.dom.in = document.getElementById("in");
  creative.dom.store = document.getElementById("store");
  creative.dom.logo = document.getElementById("logo");
  creative.dom.sparkle1 = document.getElementById("sparkle1");
  creative.dom.sparkle2 = document.getElementById("sparkle2");
  creative.dom.sparkle3 = document.getElementById("sparkle3");
};

// The Enabler is now initialized and any extra modules have been loaded.
function init() {
  addListeners();
  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

// Add appropriate listeners after the creative's DOM has been set up.
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

// Shows the ad.
function show() {
  creative.dom.exit.style.display = "block";
  creative.dom.container.style.visibility = 'visible';
}

// MAIN
function exitClickHandler() {
  Enabler.exit('Background Exit');
}

// Main onload handler.
window.addEventListener('load', preInit());

// GSAP animation scenes.
function sceneLiterally() {
  const timeline = gsap.timeline();
  timeline
    .from(creative.dom.literally,
      {
        x: "-100%",
      },
    )
    .to(creative.dom.literally,
      {
        duration: 1,
        x: 0,
        ease: "power4.out",
      },
    )
    .to(creative.dom.literally,
      {
        duration: 1,
        x: "-100%",
        ease: "sine.out",
        delay: 3,
      },
    );
  return timeline;
};

function sceneCan() {
  const timeline = gsap.timeline();
  timeline
    .from(creative.dom.can,
      {
        x: "100%",
      },
    )
    .to(creative.dom.can,
      {
        duration: 1,
        x: 0,
        ease: "power4.out",
      },
    )
    .to(creative.dom.can,
      {
        duration: 1,
        x: "100%",
        ease: "sine.out",
        delay: 2.5,
      },
    );
  return timeline;
};

function sceneSparkle() {
  const timeline = gsap.timeline();
  timeline
    .from(
      [
        creative.dom.sparkle1,
        creative.dom.sparkle2,
        creative.dom.sparkle3,
      ],
      {
        opacity: 0,
        rotation: 0,
      },
    )
    .to(
      [
        creative.dom.sparkle1,
        creative.dom.sparkle2,
        creative.dom.sparkle3,
      ],
      {
        opacity: 1,
        duration: 2,
        rotation: 60,
      },
      "-=0.5"
    )
    .to(
      [
        creative.dom.sparkle1,
        creative.dom.sparkle2,
        creative.dom.sparkle3,
      ],
      {
        duration: 12,
        rotation: 180,
      },
      "-=1"
    )
    .to(
      [
        creative.dom.sparkle1,
        creative.dom.sparkle2,
        creative.dom.sparkle3,
      ],
      {
        opacity: 0,
        duration: 2,
      },
      "-=4"
    );
  return timeline;
};

function sceneLimited() {
  const timeline = gsap.timeline();
  timeline
    .from(creative.dom.limited,
      {
        y: "-100%",
      },
    )
    .to(creative.dom.limited,
      {
        duration: 1,
        y: 0,
        ease: "circ.out",
      },
    )
    .to(creative.dom.limited,
      {
        duration: 1,
        y: "100%",
        ease: "sine.out",
        delay: 3.5,
      },
    );
  return timeline;
};

function sceneNow() {
  const timeline = gsap.timeline();

  timeline
    .from(creative.dom.now,
      {
        y: "100%",
      },
    )
    .to(creative.dom.now,
      {
        duration: 1,
        y: 0,
        ease: "circ.out",
      },
    )
    .to(creative.dom.now,
      {
        duration: 1,
        y: "100%",
        ease: "sine.out",
        delay: 3,
      },
    );
  return timeline;
};

function sceneIn() {
  const timeline = gsap.timeline();

  timeline
    .from(creative.dom.in,
      {
        y: "100%",
      },
    )
    .to(creative.dom.in,
      {
        duration: 1,
        y: 0,
        ease: "circ.out",
      },
    )
    .to(creative.dom.in,
      {
        duration: 1,
        y: "100%",
        ease: "sine.out",
        delay: 2.5,
      },
    );
  return timeline;
};

function sceneStore() {
  const timeline = gsap.timeline();

  timeline
    .from(creative.dom.store,
      {
        y: "100%",
      },
    )
    .to(creative.dom.store,
      {
        duration: 1,
        y: 0,
        ease: "circ.out",
      },
    )
    .to(creative.dom.store,
      {
        duration: 1,
        y: "100%",
        ease: "sine.out",
        delay: 2,
      },
    );
  return timeline;
};

function sceneLogo() {
  const timeline = gsap.timeline();

  timeline
    .from(creative.dom.logo,
      {
        opacity: 0,
      },
    )
    .to(creative.dom.logo,
      {
        duration: 1,
        opacity: 1,
        ease: "circ.out",
      },
    )
  return timeline;
};

gsap.timeline()
  .add(
    sceneLiterally()
  ).delay(1)
  .add(
    sceneCan(),
    "-=5"
  )
  .add(
    sceneSparkle(),
    "-=4.5"
  )
  .add(
    sceneLimited(),
    "-=8"
  )
  .add(
    sceneNow(),
    "-=7.5"
  )
  .add(
    sceneIn(),
    "-=7"
  )
  .add(
    sceneStore(),
    "-=6.5"
  )
  .add(
    sceneLogo(),
    "-=2"
  );
