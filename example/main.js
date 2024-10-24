
const s3d = new S3d.S3d();  // 使用 S3d 库
s3d.printVersion();  // 打印 Cesium 版本号

console.log("S3d", S3d)
console.log("window", window)
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NGYyNWFmZC1iNDZhLTQwZDItYjMzYS1jNTU1ZDU0NGZjYTQiLCJpZCI6MTAwMzQxLCJpYXQiOjE2NTcxNTYxMDN9.P3TaIVrf-feIzOWv-NB34GX_8sU472w7_0KCQ3jz8_w';
const viewer = new Cesium.Viewer('EARTH_S3d', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
  });    

  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-15.0),
    }
  });