precision mediump float;

varying float z;

void main() {
  // vec3 green = vec3(0.4, 0.7, 0.1);
  // csm_DiffuseColor = vec4(green, 1.0);
  csm_DiffuseColor = vec4(z, z, z, 1.0);
}