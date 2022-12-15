precision mediump float;

uniform float uTime;
varying float hGradient;

void main() {

  vec3 modifiedPosition = position;

  // float offset = smoothstep(0.0, 10.0, 20.0);
  // modifiedPosition.x += sin(position.y + uTime);
  hGradient = position.z / 300.0;

  // modifiedPosition.x += sin(uTime * 0.8) * 20.0 * position.y * 10.0;
  // sin(position.y + uTime * 0.8) * 10.0 * y;
  modifiedPosition.y += sin(position.y + uTime * 0.8) * 10.0 * hGradient;

  // modifiedPosition.z += sin(position.y / 10.0 + uTime * 0.5 + 2.5) * 4.0;

  // modifiedPosition.z += sin(uTime) * offset;

  csm_Position = modifiedPosition;
}