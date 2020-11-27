import { sideFormLang } from '../util/lang'

let lang = process.env.REACT_APP_LANG

export const sideMenu = new window.PromoLiveAccountSideMenu(sideFormLang[lang].title, "", lang)