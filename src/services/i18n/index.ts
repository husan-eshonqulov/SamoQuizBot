import i18n from 'i18next';
import Backend from 'i18next-fs-backend';

import rootPath from '../../utils/rootPath';

i18n.use(Backend).init({
  fallbackLng: ['en', 'uz'],
  preload: ['en', 'uz', 'ru'],
  backend: {
    loadPath: `${rootPath}/locales/{{lng}}/{{ns}}.json`
  }
});

export default i18n;
