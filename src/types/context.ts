import { Context } from 'grammy';
import { ConversationFlavor } from '@grammyjs/conversations';
import { TFunction } from 'i18next';

type MyContext = Context & ConversationFlavor & { i18n: TFunction };

export default MyContext;
