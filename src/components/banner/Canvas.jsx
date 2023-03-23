import React from "react";
import gsap from "gsap";
import SwatchWrapper from "./SwatchWrapper";

import * as THREE from "three";
// for object rotation
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// as GLB file is used
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
/// as we are not using custom lighting - pre-made lighting
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// as some online models are draco compressed
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    const { activeData } = this.props;
    if (prevProps.activeData !== activeData) {
      this.applyMaterial(activeData);
    }
  }

  componentDidMount() {
    this.initialSetup();
  }

  initialSetup = () => {
    const { handleLoading } = this.props;
    this.container = document.getElementById("container");
    this.item = this.container.getBoundingClientRect();
    this.sizes = {
      width: this.item.width,
      height: this.item.height,
    };

    // Three.js stuffs
    this.canvas = document.querySelector("canvas.webGL");
    this.scene = new THREE.Scene();

    // camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height,
      10,
      5000,
    );
    this.camera.position.set(800, 1000, 2000); // depends on the model
    this.scene.add(this.camera);

    // loading Manager -> to show user that our model is loading
    this.manager = new THREE.LoadingManager();
    this.manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const ProgressVal = (itemsLoaded / itemsTotal) * 100;
      if (ProgressVal === 100) {
        handleLoading();
      }
    };

    // Orbit Controls => for rotation
    this.orbitControls = new OrbitControls(this.camera, this.canvas);
    this.orbitControls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };
    this.orbitControls.enableDamping = true; // for smooth rotation
    this.orbitControls.autoRotate = true;
    this.orbitControls.autoRotateSpeed = 2;
    this.orbitControls.enablePan = false; // for mobile view
    this.orbitControls.enableZoom = false;
    this.orbitControls.maxPolarAngle = Math.PI / 1.9; // so that we can't see under the the model
    // this.orbitControls.minPolarAngle = - Math.PI / 1.9;
    // this.orbitControls.maxDistance=150  // for zoom
    // this.orbitControls.minDistance = 100 // for zoom

    // for rendering model
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true, // for smoothness corners
      alpha: true, // for transparent, otherwise it will be dark
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // otherwise some device may show our model blurry
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping; // for color related stuffs
    this.renderer.toneMappingExposure = 1; // brightness related
    this.renderer.outputEncoding = THREE.sRGBEncoding; // to render all RGB colors
    // this.renderer.shadowMap.enabled = true;

    const render = () => {
      this.orbitControls.update();
      this.renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(render); // continuously looping
    };
    render();
    this.loadHDR();
    this.addModel();
    window.addEventListener("resize", this.resize);
  };

  // for resizing the model
  resize = () => {
    this.sizes.width = this.container.offsetWidth;
    this.sizes.height = this.container.offsetHeight;
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  };

  // For lighting
  loadHDR = () => {
    new RGBELoader(this.manager)
      .setDataType(THREE.HalfFloatType)
      .load("/assets/default.hdr", (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.needsUpdate = true;
        // this.scene.background = texture;
        this.scene.environment = texture;
        texture.dispose();
      });
  };

  addModel = () => {
    // path correction
    const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;
    const DRACO_LOADER = new DRACOLoader(this.manager).setDecoderPath(
      `${THREE_PATH}/examples/js/libs/draco/gltf/`,
    );

    const bag = "/assets/pc.glb";
    const GltfLoader = new GLTFLoader(this.manager).setDRACOLoader(
      DRACO_LOADER,
    );

    GltfLoader.load(bag, (gltf) => {
      gltf.scene.position.set(0, -30, 0); // adjusting position
      // adding shadow to every child
      gltf.scene.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.needsUpdate = true;
        }
      });
      this.scene.add(gltf.scene);
    });
  };

  applyMaterial = (data) => {
    gsap.to(".highlight", {
      backgroundColor: data.buttonColor.background,
      ease: "power3.inOut",
      duration: 0.8,
    });
  };
  render() {
    const { activeData, swatchData, handleSwatchClick } = this.props;
    return (
      <div
        id="container"
        className="relative z-10 h-3/5 w-full lg:h-full lg:w-1/2"
      >
        {/* 3D Canvas */}
        <canvas className="webGL relative z-10 h-full w-full"></canvas>

        <SwatchWrapper
          activeData={activeData}
          swatchData={swatchData}
          handleSwatchClick={handleSwatchClick}
        />

        {/* background shape */}
        <div className="highlight absolute inset-x-40 top-0 -z-10 h-1/2 w-2/5 rounded-bl-full rounded-br-full bg-[#D7b172] opacity-50 md:inset-x-60" />
      </div>
    );
  }
}

export default Canvas;
