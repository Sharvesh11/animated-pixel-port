import { jsxs, jsx } from "react/jsx-runtime";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, TorusKnot, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { useRef } from "react";
function Knot() {
  const ref = useRef(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.2;
      ref.current.rotation.y += dt * 0.15;
    }
  });
  return /* @__PURE__ */ jsx(Float, { speed: 1.2, rotationIntensity: 0.6, floatIntensity: 1.4, children: /* @__PURE__ */ jsx(TorusKnot, { ref, args: [1, 0.32, 200, 32], position: [2.2, 0.2, 0], children: /* @__PURE__ */ jsx(
    MeshDistortMaterial,
    {
      color: "#67e8f9",
      emissive: "#67e8f9",
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.6,
      distort: 0.35,
      speed: 2
    }
  ) }) });
}
function Ico() {
  return /* @__PURE__ */ jsx(Float, { speed: 2, rotationIntensity: 1, floatIntensity: 2, children: /* @__PURE__ */ jsx(Icosahedron, { args: [1.2, 1], position: [-2.3, 0.3, 0], children: /* @__PURE__ */ jsx(
    MeshDistortMaterial,
    {
      color: "#c084fc",
      emissive: "#a855f7",
      emissiveIntensity: 0.5,
      roughness: 0.15,
      metalness: 0.8,
      distort: 0.45,
      speed: 1.5
    }
  ) }) });
}
function Hero3DScene() {
  return /* @__PURE__ */ jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 6], fov: 50 },
      dpr: [1, 1.6],
      gl: { antialias: true, alpha: true },
      children: [
        /* @__PURE__ */ jsx("ambientLight", { intensity: 0.4 }),
        /* @__PURE__ */ jsx("pointLight", { position: [5, 5, 5], intensity: 1.2, color: "#c084fc" }),
        /* @__PURE__ */ jsx("pointLight", { position: [-5, -3, 3], intensity: 1, color: "#67e8f9" }),
        /* @__PURE__ */ jsx(Knot, {}),
        /* @__PURE__ */ jsx(Ico, {})
      ]
    }
  );
}
export {
  Hero3DScene as default
};
