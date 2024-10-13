import { createI18n } from 'vue-i18n';


const messages = {
  en: {
    changeLanguage: {
      title: 'Change Language',
      message: 'Current language: English'
    }
  },
  vi: {
    changeLanguage: {
      title: 'Đổi Ngôn Ngữ',
      message: 'Ngôn ngữ hiện tại: Tiếng Việt'
    }
  }
};


const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;