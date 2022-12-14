precision mediump float;

uniform float uTime;

void main() {

  vec3 modifiedPosition = position;
  modifiedPosition.x = modifiedPosition.x + 100.0;

  vec4 modelPosition = modelMatrix * vec4(modifiedPosition, 1.0);
  // float offset = smoothstep(1, -1, )

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  projectedPosition.x = projectedPosition.x + 50.0;
  gl_Position = projectedPosition;
}