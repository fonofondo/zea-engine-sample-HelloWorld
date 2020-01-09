import "./styles.css";

const domElement = document.getElementById("app");

const scene = new ZeaEngine.Scene();
scene.setupGrid(5.0, 50);

const renderer = new ZeaEngine.GLRenderer(domElement);
renderer.setScene(scene);
renderer
  .getViewport()
  .getCamera()
  .setPositionAndTarget(
    new ZeaEngine.Vec3(2, 2, 1.7),
    new ZeaEngine.Vec3(0, 0, 0.4)
  );
renderer.resumeDrawing();

document.addEventListener("keypress", event => {
  if (event.key == "V" && event.shiftKey) {
    const vrvp = renderer.getVRViewport();
    if (vrvp) vrvp.togglePresenting();
  }
});
