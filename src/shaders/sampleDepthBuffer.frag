uniform sampler2D depthBuffer;

void mainImage(const in vec4 inputColor, const in vec2 uv,
               out vec4 outputColor) {
  float depth = texture(depthBuffer, uv).x;

  outputColor = vec4(depth, depth, depth, 1.0);
}