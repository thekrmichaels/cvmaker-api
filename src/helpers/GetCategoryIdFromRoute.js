const routes = {
  '/contacts': '5ed62728363dde394e56354a',
  '/descriptions': '5e8c82c020b7cf79d28e846a',
  '/educations': '5f4a0d8e94d1ca3a1257b279',
  '/experiences': '60b2c0896546a8102401b23f',
  '/titles': '65522d1678ac8070930f2c27'
}

const GetCategoryIdFromRoute = (currentRoute) => {
  let categoryId

  for (const route in routes) {
    if (currentRoute.startsWith(route)) {
      categoryId = routes[route]
      break
    }
  }

  return categoryId
}

module.exports = GetCategoryIdFromRoute
