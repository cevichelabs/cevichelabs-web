module.exports = {
  experimental: {
    forceSwcTransforms: true,
    concurrentFeatures: true,
  },
  exportTrailingSlash: true,
  exportPathMap: async function (defaultPathMap) {
    return {
      "/": { page: "/" },
      "/experiencia": { page: "/experiencia" },
      "/soluciones": { page: "/soluciones" },
      "/metodologia": { page: "/metodologia" },
      "/consultar": { page: "/consultar" },
      "/planes": { page: "/planes" },
    }
  },
  compiler: {
    styledComponents: true,
  },
  images: { unoptimized: true },
}
