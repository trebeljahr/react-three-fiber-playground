import { Camera, FrontSide, Group, Mesh, MeshStandardMaterial, PlaneGeometry, Vector2, Vector3 } from 'three'

const _MIN_CELL_SIZE = 500
const viewDistance = 10
const _MIN_CELL_RESOLUTION = 64

const utils = {
  DictIntersection: function <T>(dictA: Record<string, T>, dictB: Record<string, T>) {
    const intersection = {}
    for (let k in dictB) {
      if (k in dictA) {
        intersection[k] = dictA[k]
      }
    }
    return intersection
  },

  DictDifference: function <T>(dictA: Record<string, T>, dictB: Record<string, T>) {
    const diff = { ...dictA }
    for (let k in dictB) {
      delete diff[k]
    }
    return diff
  },
}

function key(x: number, z: number) {
  return x + '/' + z
}

function updateFixedGrid(chunks: ChunksType, camera: Camera) {
  const { x: xc, z: zc } = camera.position

  const keys = {}

  for (let x = -viewDistance; x <= viewDistance; x++) {
    for (let z = -viewDistance; z <= viewDistance; z++) {
      const k = key(x + xc, z + zc)
      keys[k] = {
        position: [x + xc, z + zc],
      }
    }
  }

  const difference = utils.DictDifference(keys, chunks)
  // const recycle = Object.values(utils.DictDifference(_chunks, keys))

  for (let k in difference) {
    if (k in chunks) {
      continue
    }

    const [xp, zp] = difference[k].position

    const offset = new Vector2(xp * _MIN_CELL_SIZE, zp * _MIN_CELL_SIZE)
    chunks[k] = {
      position: [xc, zc],
      // chunk: _CreateTerrainChunk(offset, _MIN_CELL_SIZE),
    }
  }
}

type TerrainChunkParams = {
  group: Group
  width: number
  height: number
  resolution: number
  material: MeshStandardMaterial
  offset: Vector3
}

class TerrainChunk {
  public _params: TerrainChunkParams
  private _plane: Mesh<PlaneGeometry, MeshStandardMaterial>

  constructor(params: TerrainChunkParams) {
    this._params = params
    this._Init(params)
  }

  Destroy() {
    this._params.group.remove(this._plane)
  }

  Hide() {
    this._plane.visible = false
  }

  Show() {
    this._plane.visible = true
  }

  _Init(params: TerrainChunkParams) {
    const size = new Vector3(params.width, 0, params.width)

    this._plane = new Mesh(new PlaneGeometry(size.x, size.z, params.resolution, params.resolution), params.material)
    this._plane.castShadow = false
    this._plane.receiveShadow = true
    this._plane.rotation.x = -Math.PI / 2
    this._params.group.add(this._plane)
  }

  _Rebuild() {
    const offset = this._params.offset
    this._plane.position.set(offset.x, 0, offset.y)
  }
}

type ChunksType = Record<string, Chunk>

type Chunk = {
  position: [number, number]
  chunk: TerrainChunk
}

class TerrainChunkRebuilder {
  private _pool: Record<string, TerrainChunk[]>

  constructor() {
    this._pool = {}
  }

  AllocateChunk(params) {
    const w = params.width

    if (!(w in this._pool)) {
      this._pool[w] = []
    }

    let c = null
    if (this._pool[w].length > 0) {
      c = this._pool[w].pop()
      c._params = params
    } else {
      c = new TerrainChunk(params)
    }

    c.Hide()

    return c
  }
}

type TerrainChunkManagerParams = {
  camera: Camera
}

export class TerrainChunkManager {
  private _material: MeshStandardMaterial
  private _builder: TerrainChunkRebuilder
  private _params: TerrainChunkManagerParams
  private _group: Group
  private _chunks: ChunksType

  constructor(params: TerrainChunkManagerParams) {
    this._Init(params)
  }

  _Init(params: TerrainChunkManagerParams) {
    this._params = params

    this._material = new MeshStandardMaterial({
      wireframe: false,
      wireframeLinewidth: 1,
      color: 0xffffff,
      side: FrontSide,
    })
    this._builder = new TerrainChunkRebuilder()
  }

  _CellIndex(p: Vector3) {
    const xp = p.x + _MIN_CELL_SIZE * 0.5
    const yp = p.z + _MIN_CELL_SIZE * 0.5
    const x = Math.floor(xp / _MIN_CELL_SIZE)
    const z = Math.floor(yp / _MIN_CELL_SIZE)
    return [x, z]
  }

  _CreateTerrainChunk(offset: Vector2, width: number) {
    const params = {
      group: this._group,
      material: this._material,
      width: width,
      offset: new Vector3(offset.x, offset.y, 0),
      resolution: _MIN_CELL_RESOLUTION,
    }

    return this._builder.AllocateChunk(params)
  }

  Update() {
    this._UpdateVisibleChunks_FixedGrid()
  }
}
