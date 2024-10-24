import * as Cesium from "../libs/Cesium"

class S3d {
  constructor() {
    this.version = Cesium.VERSION;
  }

  printVersion() {
    console.log(`S3d version (Cesium): ${this.version}`);
    console.log("Cesium:", Cesium)
  }
}

export default S3d;
