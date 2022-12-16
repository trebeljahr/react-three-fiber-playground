uniform sampler2D depthBuffer;

void mainImage(const in vec4 inputColor, const in vec2 uv,
               out vec4 outputColor) {
  float depth = texture(depthBuffer, uv).x;

  vec4 blue = vec4(0.1, 0.4, 0.6, 1.0) * (depth + 0.1);

  vec4 intermediate = inputColor * blue;
  outputColor = vec4(depth, depth, depth, 1.0);
}