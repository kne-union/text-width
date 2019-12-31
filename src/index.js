/**
 * @name: text-width ;
 * @author: linzp ;
 * @description: 获取字符串宽度 ;
 * */
import memoize from 'lodash/memoize';

export default memoize((text, fontSize, options) => {
    const {fontFamily, fontWeight} = Object.assign({fontFamily: 'Arial', fontWeight: 'normal'}, options);
    const canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    ctx.font = `${fontSize} ${fontFamily} ${fontWeight}`;
    return ctx.measureText(text).width;
}, (text, fontSize, options) => {
    const obj = Object.assign({}, options, {text, fontSize});
    return Object.keys(obj).map((key) => `${key}-${obj[key]}`).join(',');
});
