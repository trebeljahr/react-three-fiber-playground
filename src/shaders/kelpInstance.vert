#include <fog_pars_vertex>

// attribute vec3 normal;
// attribute vec3 position;
// attribute mat4 instanceMatrix;

// uniform mat4 viewMatrix;
// uniform mat4 projectionMatrix;

varying vec3 vNormal;

void main() {
  vNormal = (viewMatrix * instanceMatrix * vec4(normal, 0.0)).xyz;

#include <begin_vertex>
#include <fog_vertex>
#include <project_vertex>

  gl_Position =
      projectionMatrix * viewMatrix * instanceMatrix * vec4(position, 1.0);
}