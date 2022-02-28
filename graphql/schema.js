const{ buildSchema} = require('graphql');

const schema = buildSchema(`
    type Article {
        id: ID!
        title: String!
        content: String!
    }
    input ArticleInput {
        title: String!
        content: String!
    }
    type Query {
        article(id: ID!): Article
        articles: [Article]
    }
    type Mutation {
        createArticle(articleInput: ArticleInput): Article
        deleteArticle(id: ID!): Article
        updateArticle(id: ID!, articleInput: ArticleInput): Article!
    }
    schema {
        query: Query
        mutation: Mutation
    }
`)

module.exports = schema;