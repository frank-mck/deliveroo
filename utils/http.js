import sanityClient from '../sanity'

export const Http = {
  restaurants: (id) => {
    return sanityClient.fetch(`
      *[_type == "featured" && _id == $id] {
        ...,
        restaurant[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        },
      }[0]
      `, { id });
  },
  featCategories: () => {
    return sanityClient.fetch(
      `*[_type == "featured"] {
        ...,
        restaurant[]->{
          ...,
          dishes[]->
        }
      }`
    )
  },
  categories: () => {
    return sanityClient.fetch(`
      *[_type == "category"]
    `)
  }
}