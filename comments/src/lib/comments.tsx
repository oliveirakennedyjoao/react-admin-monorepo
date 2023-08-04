import { ResourceProps } from 'react-admin';
import { CommentList } from './list';

export const CommentsResource: ResourceProps = {
  name: 'comments',
  list: <CommentList />,
};
