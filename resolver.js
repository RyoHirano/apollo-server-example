const { books } = require('./data/book')

const resolvers = {
    Query: {
        allBooks: () => books,
        getBook: (_, args) => books.find(b => b.isbn === args.isbn)
    }
}

exports.resolvers = resolvers