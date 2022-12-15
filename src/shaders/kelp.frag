precision mediump float;

varying float hGradient;

void main() {
  vec3 green = vec3(0.4, 0.7, 0.1);
  csm_DiffuseColor = vec4(green * (hGradient + 0.2), 1.0);
  // csm_DiffuseColor = vec4(hGradient, hGradient, hGradient, 1.0);
}