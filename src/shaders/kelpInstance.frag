#include <fog_pars_fragment>

precision highp float;

varying vec3 vNormal;

void main() {

  vec3 normal = normalize(vNormal);
  vec3 green = vec3(0.55, 0.71, 0.3);
  float lighting = dot(normal, normalize(vec3(10)));
  gl_FragColor.rgb = green + lighting * 0.1;
  gl_FragColor.a = 1.0;

#include <fog_fragment>
}