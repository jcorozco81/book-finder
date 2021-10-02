const { User, bookSchema } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return await User.find({}).populate('savedBooks');
      }
    }
  };



module.exports = resolvers;