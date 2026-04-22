let lastupdateTime = Date.now();
let colorUpdateTimer = 0.0;

let config = {
  SIM_RESOLITION: 128,
  DYE_RESOLITION: 1440,
  CAPTUDE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 3.5,
  VELOCITY_DISSIPATION: 2,
  PRESSURE: 0.1,
  PRESSURE_ITERATIONS: 20,
  CURL: 30,
  SPLAT_RADIUS: 0.5,
  SPLAT_FORCE: 6000,
  SHADING: true,
  COLOR_UPDATE_SPEED: 10,
  PAUSED: false,
  BACK_COLOR: { r: 0, g: 0, b: 0 },
  TRANSPARENT: false,
};

console.log("Ready my Config:");
console.log(config);