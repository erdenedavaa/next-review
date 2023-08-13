export function getBaseRoute(route) {
  const paths = route.split('/').filter(Boolean)

  let rootPath

  if (paths.length > 0) {
    rootPath = paths[0]
  } else {
    rootPath = ''
  }

  // return  `/${paths[0]}`

  return rootPath
}

export function subRoute(route) {
  const paths = route.split('/').filter(Boolean)

  let subPath

  if (paths.length > 0) {
    subPath = paths[paths.length - 1]
  } else {
    subPath = ''
  }

  // return  `/${paths[0]}`

  return subPath
}
