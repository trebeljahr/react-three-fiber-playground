varying float v_fogDepth;
varying vec3 vNormal;

void main() {
  vNormal = (viewMatrix * instanceMatrix * vec4(normal, 0.0)).xyz;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * instanceMatrix * mvPosition;
  v_fogDepth = length(mvPosition);
}