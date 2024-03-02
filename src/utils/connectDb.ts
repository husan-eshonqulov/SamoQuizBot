import { connect } from 'mongoose';

const connectDb = async (uri: string) => {
  return await connect(uri);
};

export default connectDb;
