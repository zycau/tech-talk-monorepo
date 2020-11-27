const countryCode = window.location.href.split('/')[3].split('-')[1]
const counAndLangUrl = `${countryCode}-${process.env.REACT_APP_LANG}`

const tacASIC = '../../why-acy/terms-and-conditions'
const tacVFSC = '../../why-acy/terms-and-conditions'
const tacFile = '../../why-acy/terms-and-conditions'

export const env = {
    countryCode,
    lang: 'en',
    imgPath: 'assets/img/',
    videoPath: 'assets/video/',
    acyUrl: `https://www.acysecurities.com/en-int/`,
    demoAccount: 'https://www.acysecurities.com/zh-int/open-demo-account/',
    tacFile
}