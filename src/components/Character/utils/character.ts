import * as THREE from "three";
import { GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();

  const loadCharacter = async (): Promise<GLTF> => {
    const gltf = await new Promise<GLTF>((resolve, reject) => {
      loader.load("/models/character.glb", resolve, undefined, reject);
    });
    const character = gltf.scene;
    const hasSkinnedMesh = character.getObjectByProperty("isSkinnedMesh", true);
    if (!hasSkinnedMesh && gltf.animations.length === 0) {
      const bounds = new THREE.Box3().setFromObject(character);
      const modelHeight = bounds.getSize(new THREE.Vector3()).y;
      if (modelHeight > 0) {
        const scale = 6.2 / modelHeight;
        character.scale.setScalar(scale);
        character.position.y = 8.8 - bounds.min.y * scale;
      }
    }
    const workstationMaterials = new Set([
      "Material.027",
      "Material.028",
      "screenlight.001",
    ]);
    [
      "screenlight",
      "Keyboard",
      "Plane",
      "Plane.002",
      "Plane.003",
      "Plane.004",
    ].forEach((name) => {
      const prop = character.getObjectByName(name);
      if (prop) {
        prop.visible = false;
      }
    });
    character.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = true;
        if (!child.geometry.getAttribute("normal")) {
          child.geometry.computeVertexNormals();
        }
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];
        if (materials.some((material) => workstationMaterials.has(material.name))) {
          child.visible = false;
        }
      }
    });
    setCharTimeline(character, camera);
    setAllTimeline();
    character.getObjectByName("foot.R")?.position.setY(3.36);
    character.getObjectByName("foot.L")?.position.setY(3.36);
    renderer.compileAsync(character, camera, scene).catch((error) => {
      console.error("Unable to precompile character shaders:", error);
    });
    return gltf;
  };

  return { loadCharacter };
};

export default setCharacter;
