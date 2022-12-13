precision mediump float;

uniform float u_time;

void main() {

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.x += sin(modelPosition.y * 4.0 + u_time) * 0.8;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}