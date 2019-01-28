let beers = [
  {
    id: 'beer-0',
    name: 'Stiegl Zero',
    brewery: 'Stiegl',
    description: 'This is Stiegl beer zero'
  },
  {
    id: 'beer-1',
    name: 'Stiegl One',
    brewery: 'Stiegl',
    description: 'This is Stiegl beer one'
  },
  {
    id: 'beer-2',
    name: 'Zipfer Zero',
    brewery: 'Zipfer',
    description: 'This is Zipfer beer zero'
  },
  {
    id: 'beer-3',
    name: 'Zipfer One',
    brewery: 'Zipfer',
    description: 'This is Zipfer beer one'
  },
]

let breweries = [
  {
    id: 'brewery-0',
    name: 'Stiegl',
    beers: ['beer-0', 'beer-1'],
    url: 'https://www.stiegl.at/'
  },
  {
    id: 'brewery-1',
    name: 'Zipfer',
    beers: ['beer-2', 'beer-3'],
    url: 'http://www.zipfer.at/'
  }
]

let idBeerCount = beers.length

module.exports = {
  Query: {
    beers: () => beers,
    breweries: () => breweries
  },

  Mutation: {
    addBeer: (parent, args) => {
      const beer = {
        id: `beer-${idBeerCount++}`,
        name: args.name,
        brewery: args.brewery,
        description: args.description,
      }
      beers.push(beer)
      return beer
    }
  },

  Beer: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    brewery: (parent) => parent.brewery,
    description: (parent) => parent.description
  },

  Brewery: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    beers: (parent) => parent.beers,
    url: (parent) => parent.url
  },
}
