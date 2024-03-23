import Context from '../../types/context';

const start = async (ctx: Context) => {
  ctx.reply(ctx.i18n('start'));
};

export default start;
