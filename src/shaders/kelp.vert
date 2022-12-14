precision mediump float;

uniform float uTime;

void main() {

  vec3 modifiedPosition = position;

  // float offset = smoothstep(0.0, 10.0, 20.0);
  // modifiedPosition.x += sin(position.y + uTime);
  modifiedPosition.x += sin(position.y / 20.0 + uTime * 0.5) * 4.0;
  modifiedPosition.z += sin(position.y / 10.0 + uTime * 0.5 + 2.5) * 4.0;

  // modifiedPosition.z += sin(uTime) * offset;

  csm_Position = modifiedPosition;
}