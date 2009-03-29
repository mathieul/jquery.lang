/*
 * String functions
 */
$.extend({
    /*
     * escapeRegExp:    Escapes any characters in the string that have special
     *                  meaning in a regular expression.
     *                  (Prototype library - http://www.prototypejs.org)
     */
    escapeRegExp: function (value) {
        return String(value).replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, '\\$1');
    },

    /*
     * htmlEncode:      Encode reserved characters to HTML entities.
     *                  (http://www.w3schools.com/tags/ref_entities.asp)
     *                  (Douglas Crockford - Javascript: The Good Parts)
     */
    htmlEncode: (function () {
        var chararcter = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;'
        };
        return function (value) {
            return value.replace(/[<>&"]/g, function (c) { return chararcter[c]; });
        };
    })(),

    /*
     * htmlDecode:      Decode reserved HTML entities to characters.
     *                  (http://www.w3schools.com/tags/ref_entities.asp)
     */
    htmlDecode: (function () {
        var entity = {
            '&lt;':     '<',
            '&gt;':     '>',
            '&amp;':    '&',
            '&quot;':   '"'
        };
        return function (value) {
            return value.replace(/(&lt;|&gt;|&amp;|&quot;)/g,
                function (c) { return entity[c]; });
        };
    })(),
    
    /*
     * sprintf:         Port of the PHP sprintf function.
     *                  (PHP.js: http://phpjs.org/functions/sprintf)
     */
    sprintf: (function () {
        var regex = /%%|%(\d+\$)?([\-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g,

            pad = function(str, len, chr, leftJustify) {
                var padding;

                if (!chr) { chr = ' '; }
                padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
                return leftJustify ? str + padding : padding + str;
            },

            justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                var diff = minWidth - value.length;

                if (diff > 0) {
                    if (leftJustify || !zeroPad) {
                        value = pad(value, minWidth, customPadChar, leftJustify);
                    } else {
                        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                    }
                }
                return value;
            },

            formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                // Note: casts negative numbers to positive ones
                var number = value >>> 0;

                prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
                value = prefix + pad(number.toString(base), precision || 0, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            },

            formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                if (precision !== null) {
                    value = value.slice(0, precision);
                }
                return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
            };

        return function () {
            var a = arguments, format = a[0], i = 1;
            return format.replace(regex, function(substring, valueIndex, flags, minWidth, _, precision, type) {
                var j,
                    number,
                    prefix,
                    method,
                    textTransform,
                    value,
                    leftJustify = false,
                    positivePrefix = '',
                    zeroPad = false,
                    prefixBaseX = false,
                    customPadChar = ' ',
                    flagsl;

                if (substring === '%%') { return '%'; }

                // parse flags
                flagsl = flags.length;
                for (j = 0; flags && j < flagsl; j += 1) {
                    switch (flags.charAt(j)) {
                        case ' ': positivePrefix = ' '; break;
                        case '+': positivePrefix = '+'; break;
                        case '-': leftJustify = true; break;
                        case "'": customPadChar = flags.charAt(j+1); break;
                        case '0': zeroPad = true; break;
                        case '#': prefixBaseX = true; break;
                    }
                }

                // parameters may be null, undefined, empty-string or real valued
                // we want to ignore null, undefined and empty-string values
                if (!minWidth) {
                    minWidth = 0;
                } else if (minWidth === '*') {
                    minWidth = +a[i];
                    i += 1;
                } else if (minWidth.charAt(0) === '*') {
                    minWidth = +a[minWidth.slice(1, -1)];
                } else {
                    minWidth = +minWidth;
                }

                // Note: undocumented perl feature:
                if (minWidth < 0) {
                    minWidth = -minWidth;
                    leftJustify = true;
                }

                if (!isFinite(minWidth)) {
                    throw new Error('sprintf: (minimum-)width must be finite');
                }

                if (!precision) {
                    precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd' ? 0 : undefined);
                } else if (precision === '*') {
                    precision = +a[i];
                    i += 1;
                } else if (precision.charAt(0) === '*') {
                    precision = +a[precision.slice(1, -1)];
                } else {
                    precision = +precision;
                }

                // grab value using valueIndex if required?
                if (valueIndex) {
                    value = a[valueIndex.slice(0, -1)];
                }
                else {
                    value = a[i];
                    i += 1;
                }

                switch (type) {
                    case 's': return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                    case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                    case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                    case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'i':
                    case 'd':
                        number = parseInt(+value, 10);
                        prefix = number < 0 ? '-' : positivePrefix;
                        value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad);
                    case 'e':
                    case 'E':
                    case 'f':
                    case 'F':
                    case 'g':
                    case 'G':
                        number = +value;
                        prefix = number < 0 ? '-' : positivePrefix;
                        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                        value = prefix + Math.abs(number)[method](precision);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                    default: return substring;
                }
            });
        };
    })()
});
