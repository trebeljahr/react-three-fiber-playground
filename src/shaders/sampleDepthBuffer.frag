
void mainImage(const in vec4 inputC, const in vec2 uv, out vec4 outputC) {
  // const vec4 _DepthFogDensity = vec4(0.3, 0.22, 0.3, 1.0);
  // const vec4 _Diffuse = vec4(0.0, 0.003921569, 0.16862746, 1.0);
  // const vec4 _DiffuseGrazing = vec4(0.0, 0.003921569, 0.16862746, 1);
  // const vec4 _DepthFogDensity = vec4(0.6, 0.3, 0.35, 1.0);

  float depth = texture(depthBuffer, uv).x;

  // vec4 scatterCol = mix(_Diffuse, _DiffuseGrazing, 1.0 - pow(depth, 1.0));

  // float factor = sin((depth * PI) / 2.0);
  // float t = 1.0 - exp(-_DepthFogDensity * depth);
  // vec4 blue = vec4(0.0, 0.2, 0.4, 1.0);
  // outputC = mix(inputC, blue, depth * depth);

  // 1.0 - exp(-_DepthFogDensity * depth));
  // outputC = vec4(t, t, t, 1.0);
  // outputC = mix(inputC, vec4(0.1, 0.4, 0.5, 1.0), factor);

  // vec4 intermediate = input * blue;

  // debugging!

  float clampedDepth = clamp(depth, 0.0, 1.0);
  // float t = pow((clampedDepth - 200.0) / 700.0, 0.5);
  vec4 green = vec4(0.0, 0.2, 0.18, 1);
  outputC = mix(inputC, green, clampedDepth);

  // float t = clamp(depth, 0.0, 1.0);
  // outputC = vec4(t, t, t, 1.0);
}