import MyContext from './context';
import { Conversation } from '@grammyjs/conversations';

type MyConversation = Conversation<MyContext>;

export default MyConversation;
