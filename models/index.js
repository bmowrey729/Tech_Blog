const User = require('./User');
const Post = require('./Post');
const Comment = require('./comment');

User.hasMany(Post, {
  foreignKey: 'userId'
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postID',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
  foreignKey: 'postID',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };
