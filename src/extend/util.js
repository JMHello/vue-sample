/**
 * 转化为驼峰
 * @param { String } str
 * @example a.bb.cc转化为小驼峰aBbCc
 */
export function toCamel(str) {
    if (!str) {
        return;
    }

    if (!str.includes('.')) {
        return str;
    }

    str = str.split('.');

    str = str.map((item, index) => {
        if (index !== 0) {
            item = item.slice(0, 1).toUpperCase() + item.slice(1);
        }

        return item;
    });

    return str.join('');
}