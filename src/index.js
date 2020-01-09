// Zea Engine Basic Hello World
// mauro
// Froi

import "./styles.css";

const domElement = document.getElementById("app");

const scene = new window.ZeaEngine.Scene();
scene.setupGrid(7.0, 50);

const renderer = new window.ZeaEngine.GLRenderer(domElement);
renderer.setScene(scene);
renderer
  .getViewport()
  .getCamera()
  .setPositionAndTarget(
    new window.ZeaEngine.Vec3(2, 2, 1.7),
    new window.ZeaEngine.Vec3(0, 0, 0.4)
  );
renderer.resumeDrawing();

document.addEventListener("keypress", event => {
  if (event.key === "V" && event.shiftKey) {
    const vrvp = renderer.getVRViewport();
    if (vrvp) vrvp.togglePresenting();
  }
});
