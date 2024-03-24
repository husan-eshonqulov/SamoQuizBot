import Context from '../../types/context';

const start = async (ctx: Context) => {
  ctx.reply(ctx.i18n('commands.help'));
};

export default start;
