const successHandler = require('../service/successHandler');
const errorHandler = require('../service/errorHandler');

const Post = require('../models/postsModel');

const posts = {
  async getPosts(req, res) {
    const { keyword, sortby } = req.query;
    const search =
      keyword !== undefined ? { content: new RegExp(`${keyword}`) } : {};
    const sort = sortby === 'asc' ? 'createdAt' : '-createdAt';
    const posts = await Post.find(search)
      .populate({
        path: 'user',
        select: 'name photo ',
      })
      .sort(sort);
    successHandler(res, posts);
  },
  async createPost(req, res) {
    try {
      const { user, content, image, createdAt } = req.body;
      if (content !== undefined) {
        const newPost = await Post.create({
          user,
          content,
          image,
          createdAt,
        });
        successHandler(res, newPost);
      } else {
        errorHandler(res, 'content 必填');
      }
    } catch (err) {
      errorHandler(res, '資料錯誤');
    }
  },
};

module.exports = posts;
