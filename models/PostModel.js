import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this post.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide a content']
  },
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
