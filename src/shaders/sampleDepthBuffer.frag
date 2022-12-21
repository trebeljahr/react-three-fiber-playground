uniform vec3 cameraPos;
uniform float uTime;
uniform vec3 cameraLookAt;

const vec3 up = vec3(0., 1., 0.);

struct ray {
  vec3 o;
  vec3 d;
};

struct camera {
  vec3 p;       // the position of the camera
  vec3 forward; // the camera forward vector
  vec3 left;    // the camera left vector
  vec3 up;      // the camera up vector

  vec3 center; // the center of the screen, in world coords
  vec3 i;      // where the current ray intersects the screen, in world coords
  ray ray;     // the current ray: from cam pos, through current uv projected on

  vec3 lookAt; // the lookat point
};

camera cam;

void CameraSetup(vec2 uv, vec3 position, vec3 lookAt) {
  cam.p = position;
  cam.lookAt = lookAt;
  cam.forward = normalize(cam.lookAt - cam.p);
  cam.left = cross(up, cam.forward);
  cam.up = cross(cam.forward, cam.left);

  cam.center = cam.p + cam.forward;
  cam.i = cam.center + cam.left * uv.x + cam.up * uv.y;

  cam.ray.o = cam.p;
  cam.ray.d = normalize(cam.i - cam.p);
}

float waterSurface(vec3 r) {
  float u = dot(r, up);

  vec2 p = r.xz * (cameraPos.y / r.y) * 3.;
  float t = uTime * 5.;

  float bump = sin(p.x * 2. + t + sin(p.y * .73 + t));
  bump += sin(p.x * 1.43 + t) * .5;

  bump += sin(p.x * 1.21 - t + sin(p.y * .3 - t * .34));
  bump += sin(p.x * .43 - t) * .5;

  bump += sin(p.y * .81 - t + sin(p.x * .334 - t * .34));
  bump += sin(p.y * .63 - t) * .5;

  bump *= u * smoothstep(9., 1., u);
  bump *= smoothstep(.5, 1., u) * .05;

  return bump;
}

vec4 background(vec3 r) {
  float x = atan(r.x, r.z);       // from -pi to pi
  float y = PI * 0.5 - acos(r.y); // from -1/2pi to 1/2pi

  vec3 upCol = vec3(.15, .25, .6) * 7.;

  float u = dot(r, up) * .5 + .5;

  vec3 col = mix(upCol * 0.05, upCol, u * u);

  float t = uTime * 4.; // add god rays
  float a = sin(r.x);

  float beam = clamp(sin(10. * x + a * y * 5. + t), 0., 1.);
  beam *= clamp(sin(7. * x + a * y * 3.5 - t), 0., 1.);

  float beam2 = clamp(sin(42. * x + a * y * 21. - t), 0., 1.);
  beam2 *= clamp(sin(34. * x + a * y * 17. + t), 0., 1.);

  beam += beam2;
  col *= 1. + beam * .03;

  return vec4(col.xyz, 1);
}

void mainImage(const in vec4 inputC, const in vec2 uv, out vec4 outputC) {
  // const vec4 _DepthFogDensity = vec4(0.3, 0.22, 0.3, 1.0);
  // const vec4 _Diffuse = vec4(0.0, 0.003921569, 0.16862746, 1.0);
  // const vec4 _DiffuseGrazing = vec4(0.0, 0.003921569, 0.16862746, 1);
  // const vec4 _DepthFogDensity = vec4(0.6, 0.3, 0.35, 1.0);

  CameraSetup(uv, cameraPos, cameraLookAt);
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
  // vec4 green = vec4(0.0, 0.2, 0.18, 1);

  vec4 bg = background(cam.ray.d) + waterSurface(cam.ray.d);
  outputC = bg; // mix(inputC, bg, clampedDepth);

  // float t = clamp(depth, 0.0, 1.0);
  // outputC = vec4(t, t, t, 1.0);
}