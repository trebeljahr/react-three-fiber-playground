precision mediump float;

uniform float uTime;

void main() {

  vec3 modifiedPosition = position;
  modifiedPosition.x += sin(uTime) * 10.0;

  // gl_Position = projectedPosition;

  csm_Position = modifiedPosition;
}