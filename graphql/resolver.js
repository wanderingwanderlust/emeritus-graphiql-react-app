const Article = require('../models/article');

function articles() {
    return Article.find({});
}

function article(args) {
    return Article.findById(args.id)
}

function createArticle(args) {
    let article = new Article(args.articleInput);
    return article.save();
}

function deleteArticle(args) {
    return Article.findByIdAndRemove(args.id);
}

function updateArticle(args) {
    return Article.findByIdAndUpdate(args.id, args.articleInput, { new: true });
}


module.exports = { articles, article, createArticle, deleteArticle, updateArticle }
