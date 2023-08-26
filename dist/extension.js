/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
"use-strict"




/**
 * 
 * @param {Any} value 
 * @param {type} type 
 */
function tc(value, type) {
    if(!(typeof value == type)) throw new TypeError(`required type ${type} got ${typeof value}`);
    return value
}

function ic(value, type) {
    if(! value instanceof type) throw new TypeError(`required type ${type} got ${typeof value}`);
    return value
}

function nc(value) {
    if(isNaN(value)) return 0;
    return value;
}

function oc(options) {
    const new_options = {
        angle: options ? (options.angle ? options.angle : 15) : 15,
        results: options ? (options.results ? options.results : 3) : 3,
    }
    return new_options
}

function clmp(value, max, min) {
    if(min !== undefined && value < min) {
        return min;
    }
    if(value > max) {
        return max;
    }
    return value;
}

function shift(h, angle){
    h += angle;
    while (h >= 360.0) h -= 360.0;
    while (h < 0.0) h += 360.0;
    return h;
}

class Color {

    
    
    #red;
    #green;
    #blue;

    //#region color names

    static Colors = class {
        static get BLACK() { return Color.fromHex("#000000"); }
        static get SILVER() { return Color.fromHex("#c0c0c0"); }
        static get GRAY() { return Color.fromHex("#808080"); }
        static get WHITE() { return Color.fromHex("#ffffff"); }
        static get MAROON() { return Color.fromHex("#800000"); }
        static get RED() { return Color.fromHex("#ff0000"); }
        static get PURPLE() { return Color.fromHex("#800080"); }
        static get FUCHSIA() { return Color.fromHex("#ff00ff"); }
        static get GREEN() { return Color.fromHex("#008000"); }
        static get LIME() { return Color.fromHex("#00ff00"); }
        static get OLIVE() { return Color.fromHex("#808000"); }
        static get YELLOW() { return Color.fromHex("#ffff00"); }
        static get NAVY() { return Color.fromHex("#000080"); }
        static get BLUE() { return Color.fromHex("#0000ff"); }
        static get TEAL() { return Color.fromHex("#008080"); }
        static get AQUA() { return Color.fromHex("#00ffff"); }
        static get ORANGE() { return Color.fromHex("#ffa500"); }
        static get ALICEBLUE() { return Color.fromHex("#f0f8ff"); }
        static get ANTIQUEWHITE() { return Color.fromHex("#faebd7"); }
        static get AQUAMARINE() { return Color.fromHex("#7fffd4"); }
        static get AZURE() { return Color.fromHex("#f0ffff"); }
        static get BEIGE() { return Color.fromHex("#f5f5dc"); }
        static get BISQUE() { return Color.fromHex("#ffe4c4"); }
        static get BLANCHEDALMOND() { return Color.fromHex("#ffebcd"); }
        static get BLUEVIOLET() { return Color.fromHex("#8a2be2"); }
        static get BROWN() { return Color.fromHex("#a52a2a"); }
        static get BURLYWOOD() { return Color.fromHex("#deb887"); }
        static get CADETBLUE() { return Color.fromHex("#5f9ea0"); }
        static get CHARTREUSE() { return Color.fromHex("#7fff00"); }
        static get CHOCOLATE() { return Color.fromHex("#d2691e"); }
        static get CORAL() { return Color.fromHex("#ff7f50"); }
        static get CORNFLOWERBLUE() { return Color.fromHex("#6495ed"); }
        static get CORNSILK() { return Color.fromHex("#fff8dc"); }
        static get CRIMSON() { return Color.fromHex("#dc143c"); }
        static get CYAN() { return Color.fromHex("#00ffff"); }
        static get DARKBLUE() { return Color.fromHex("#00008b"); }
        static get DARKCYAN() { return Color.fromHex("#008b8b"); }
        static get DARKGOLDENROD() { return Color.fromHex("#b8860b"); }
        static get DARKGRAY() { return Color.fromHex("#a9a9a9"); }
        static get DARKGREEN() { return Color.fromHex("#006400"); }
        static get DARKGREY() { return Color.fromHex("#a9a9a9"); }
        static get DARKKHAKI() { return Color.fromHex("#bdb76b"); }
        static get DARKMAGENTA() { return Color.fromHex("#8b008b"); }
        static get DARKOLIVEGREEN() { return Color.fromHex("#556b2f"); }
        static get DARKORANGE() { return Color.fromHex("#ff8c00"); }
        static get DARKORCHID() { return Color.fromHex("#9932cc"); }
        static get DARKRED() { return Color.fromHex("#8b0000"); }
        static get DARKSALMON() { return Color.fromHex("#e9967a"); }
        static get DARKSEAGREEN() { return Color.fromHex("#8fbc8f"); }
        static get DARKSLATEBLUE() { return Color.fromHex("#483d8b"); }
        static get DARKSLATEGRAY() { return Color.fromHex("#2f4f4f"); }
        static get DARKSLATEGREY() { return Color.fromHex("#2f4f4f"); }
        static get DARKTURQUOISE() { return Color.fromHex("#00ced1"); }
        static get DARKVIOLET() { return Color.fromHex("#9400d3"); }
        static get DEEPPINK() { return Color.fromHex("#ff1493"); }
        static get DEEPSKYBLUE() { return Color.fromHex("#00bfff"); }
        static get DIMGRAY() { return Color.fromHex("#696969"); }
        static get DIMGREY() { return Color.fromHex("#696969"); }
        static get DODGERBLUE() { return Color.fromHex("#1e90ff"); }
        static get FIREBRICK() { return Color.fromHex("#b22222"); }
        static get FLORALWHITE() { return Color.fromHex("#fffaf0"); }
        static get FORESTGREEN() { return Color.fromHex("#228b22"); }
        static get GAINSBORO() { return Color.fromHex("#dcdcdc"); }
        static get GHOSTWHITE() { return Color.fromHex("#f8f8ff"); }
        static get GOLD() { return Color.fromHex("#ffd700"); }
        static get GOLDENROD() { return Color.fromHex("#daa520"); }
        static get GREENYELLOW() { return Color.fromHex("#adff2f"); }
        static get GREY() { return Color.fromHex("#808080"); }
        static get HONEYDEW() { return Color.fromHex("#f0fff0"); }
        static get HOTPINK() { return Color.fromHex("#ff69b4"); }
        static get INDIANRED() { return Color.fromHex("#cd5c5c"); }
        static get INDIGO() { return Color.fromHex("#4b0082"); }
        static get IVORY() { return Color.fromHex("#fffff0"); }
        static get KHAKI() { return Color.fromHex("#f0e68c"); }
        static get LAVENDER() { return Color.fromHex("#e6e6fa"); }
        static get LAVENDERBLUSH() { return Color.fromHex("#fff0f5"); }
        static get LAWNGREEN() { return Color.fromHex("#7cfc00"); }
        static get LEMONCHIFFON() { return Color.fromHex("#fffacd"); }
        static get LIGHTBLUE() { return Color.fromHex("#add8e6"); }
        static get LIGHTCORAL() { return Color.fromHex("#f08080"); }
        static get LIGHTCYAN() { return Color.fromHex("#e0ffff"); }
        static get LIGHTGOLDENRODYELLOW() { return Color.fromHex("#fafad2"); }
        static get LIGHTGRAY() { return Color.fromHex("#d3d3d3"); }
        static get LIGHTGREEN() { return Color.fromHex("#90ee90"); }
        static get LIGHTGREY() { return Color.fromHex("#d3d3d3"); }
        static get LIGHTPINK() { return Color.fromHex("#ffb6c1"); }
        static get LIGHTSALMON() { return Color.fromHex("#ffa07a"); }
        static get LIGHTSEAGREEN() { return Color.fromHex("#20b2aa"); }
        static get LIGHTSKYBLUE() { return Color.fromHex("#87cefa"); }
        static get LIGHTSLATEGRAY() { return Color.fromHex("#778899"); }
        static get LIGHTSLATEGREY() { return Color.fromHex("#778899"); }
        static get LIGHTSTEELBLUE() { return Color.fromHex("#b0c4de"); }
        static get LIGHTYELLOW() { return Color.fromHex("#ffffe0"); }
        static get LIMEGREEN() { return Color.fromHex("#32cd32"); }
        static get LINEN() { return Color.fromHex("#faf0e6"); }
        static get MAGENTA() { return Color.fromHex("#ff00ff"); }
        static get FUCHSIA() { return Color.fromHex("#ff00ff"); }
        static get MEDIUMAQUAMARINE() { return Color.fromHex("#66cdaa"); }
        static get MEDIUMBLUE() { return Color.fromHex("#0000cd"); }
        static get MEDIUMORCHID() { return Color.fromHex("#ba55d3"); }
        static get MEDIUMPURPLE() { return Color.fromHex("#9370db"); }
        static get MEDIUMSEAGREEN() { return Color.fromHex("#3cb371"); }
        static get MEDIUMSLATEBLUE() { return Color.fromHex("#7b68ee"); }
        static get MEDIUMSPRINGGREEN() { return Color.fromHex("#00fa9a"); }
        static get MEDIUMTURQUOISE() { return Color.fromHex("#48d1cc"); }
        static get MEDIUMVIOLETRED() { return Color.fromHex("#c71585"); }
        static get MIDNIGHTBLUE() { return Color.fromHex("#191970"); }
        static get MINTCREAM() { return Color.fromHex("#f5fffa"); }
        static get MISTYROSE() { return Color.fromHex("#ffe4e1"); }
        static get MOCCASIN() { return Color.fromHex("#ffe4b5"); }
        static get NAVAJOWHITE() { return Color.fromHex("#ffdead"); }
        static get OLDLACE() { return Color.fromHex("#fdf5e6"); }
        static get OLIVEDRAB() { return Color.fromHex("#6b8e23"); }
        static get ORANGERED() { return Color.fromHex("#ff4500"); }
        static get ORCHID() { return Color.fromHex("#da70d6"); }
        static get PALEGOLDENROD() { return Color.fromHex("#eee8aa"); }
        static get PALEGREEN() { return Color.fromHex("#98fb98"); }
        static get PALETURQUOISE() { return Color.fromHex("#afeeee"); }
        static get PALEVIOLETRED() { return Color.fromHex("#db7093"); }
        static get PAPAYAWHIP() { return Color.fromHex("#ffefd5"); }
        static get PEACHPUFF() { return Color.fromHex("#ffdab9"); }
        static get PERU() { return Color.fromHex("#cd853f"); }
        static get PINK() { return Color.fromHex("#ffc0cb"); }
        static get PLUM() { return Color.fromHex("#dda0dd"); }
        static get POWDERBLUE() { return Color.fromHex("#b0e0e6"); }
        static get ROSYBROWN() { return Color.fromHex("#bc8f8f"); }
        static get ROYALBLUE() { return Color.fromHex("#4169e1"); }
        static get SADDLEBROWN() { return Color.fromHex("#8b4513"); }
        static get SALMON() { return Color.fromHex("#fa8072"); }
        static get SANDYBROWN() { return Color.fromHex("#f4a460"); }
        static get SEAGREEN() { return Color.fromHex("#2e8b57"); }
        static get SEASHELL() { return Color.fromHex("#fff5ee"); }
        static get SIENNA() { return Color.fromHex("#a0522d"); }
        static get SKYBLUE() { return Color.fromHex("#87ceeb"); }
        static get SLATEBLUE() { return Color.fromHex("#6a5acd"); }
        static get SLATEGRAY() { return Color.fromHex("#708090"); }
        static get SLATEGREY() { return Color.fromHex("#708090"); }
        static get SNOW() { return Color.fromHex("#fffafa"); }
        static get SPRINGGREEN() { return Color.fromHex("#00ff7f"); }
        static get STEELBLUE() { return Color.fromHex("#4682b4"); }
        static get TAN() { return Color.fromHex("#d2b48c"); }
        static get THISTLE() { return Color.fromHex("#d8bfd8"); }
        static get TOMATO() { return Color.fromHex("#ff6347"); }
        static get TURQUOISE() { return Color.fromHex("#40e0d0"); }
        static get VIOLET() { return Color.fromHex("#ee82ee"); }
        static get WHEAT() { return Color.fromHex("#f5deb3"); }
        static get WHITESMOKE() { return Color.fromHex("#f5f5f5"); }
        static get YELLOWGREEN() { return Color.fromHex("#9acd32"); }
        static get REBECCAPURPLE() { return Color.fromHex("#663399"); }
        
       
    }
    
    //#endregion color names

    //#region scheme

    getScheme(name, options) {
        return Color.createScheme(this, name, options)
    }

    static getScheme(color, name, options) {
        return Color.createScheme(color, name, options)
    }

    /**
     * 
     * @param {Color} color 
     * @param {Object} options 
     * @returns Color[]
     */
    static monochromatic(color, options){
        ic(color, Color);
        let results = oc(options).results || 3;
        let hsv = Color.toHsv(color);
        let h = hsv.h,
            s = hsv.s,
            v = hsv.v / 100;
        let result = [];
        let mod = 1 / results;


        while (results--) {
            result.push(Color.fromHsv(h, s, clmp(v * 100, 100, 0)));
            v = (v - mod) % 1;
        }

        return result;
    }

    monochromatic(options) {
        return Color.monochromatic(this, options);
    }

    /**
     * 
     * @param {Color} color 
     * @returns Color
     */
    static complementary(color){
        ic(color, Color);
        let hsl = Color.toHsl(color);
        let h = hsl.h,
            s = hsl.s,
            l = hsl.l;
        
        return Color.fromHsl(shift(h, 180), s, l)

    }

    complementary() {
        return Color.complementary(this);
    }

    /**
     * 
     * @param {Color} color 
     * @param {Object} options
     * @returns Color[3]
     */
    static splitComplementary(color, options){
        ic(color, Color);
        let hsl = Color.toHsl(color);
        let angle = oc(options).angle || 15;
        let h = hsl.h,
            s = hsl.s,
            l = hsl.l;
        
        const result = [
            color,
            Color.fromHsl(shift(h, 180 + angle), s, l),
            Color.fromHsl(shift(h, 180 - angle), s, l),
        ]

        return result;

    }

    splitComplementary(options) {
        return Color.splitComplementary(this, options);
    }

    /**
     * 
     * @param {Color} color 
     * @param {Object} options
     * @returns Color[4]
    */
    static doubleComplementary(color, options) {
        ic(color, Color);
        let hsl = Color.toHsl(color);
        let angle = oc(options).angle || 15;
        let h = hsl.h,
            s = hsl.s,
            l = hsl.l;
        const result = [
            color,
            Color.fromHsl(shift(h, 180), s, l),
            Color.fromHsl(shift(h, angle), s, l),
            Color.fromHsl(shift(h, 180 + angle), s, l),
        ]
        return result
    }

    doubleComplementary(options) {
        return Color.doubleComplementary(this, options)
    }

    /**
     * 
     * @param {Color} color 
     * @returns Color[4]
    */
    static square(color) {
        ic(color, Color);
        let hsl = Color.toHsl(color);
        let h = hsl.h,
            s = hsl.s,
            l = hsl.l;
        const result = [ color ]

        for (let i = 1; i < 4; i++) {
            h = shift(h, 90);
            result.push(Color.fromHsl(h, s, l));
        }

        return result
    }

    square() {
        return Color.square(this)
    }

    /**
     * 
     * @param {Color} color 
     * @param {Object} options
     * @returns Color[4]
    */
    static tetradic(color, options) {
        ic(color, Color);
        let hsl = Color.toHsl(color);
        let angle = oc(options).angle;
        let h = hsl.h,
            s = hsl.s,
            l = hsl.l;
        return [
            color, 
            Color.fromHsl(shift(h, 180), s, l),
            Color.fromHsl(shift(h, 180 - angle), s, l),
            Color.fromHsl(shift(h, -angle), s, l)
        ]
    }

    tetradic(options) {
        return Color.tetradic(this, options)
    }


    /**
     * 
     * @param {Color} color 
     * @returns Color[3]
    */
    static triadic(color) {
        ic(color, Color);
        let hsl = Color.toHsl(color);
        let h = hsl.h,
            s = hsl.s,
            l = hsl.l;
        return [
            color, 
            Color.fromHsl(shift(h, 120), s, l),
            Color.fromHsl(shift(h, 240), s, l)
        ]
    }

    triadic() {
        return Color.triadic(this)
    }

    /**
     * 
     * @param {Color} color 
     * @param {Object} options
     * @returns Color[3]
    */
    static analogous(color, options) {
        ic(color, Color);
        let hsl = Color.toHsl(color);
        let angle = oc(options).angle;
        let h = hsl.h,
            s = hsl.s,
            l = hsl.l;
        return [
            color, 
            Color.fromHsl(shift(h, -angle), s, l),
            Color.fromHsl(shift(h, +angle), s, l)
        ]
    }

    analogous(options) {
        return Color.analogous(this, options)
    }

    static materialPalette(color, options) {
        var opt = oc(options);
        var baseLight = opt.baseLight;
        var baseDark = opt.baseDark === "self" || !opt.baseDark ? this.multiply(color, color) : opt.baseDark;

        return {
            "50":  Color.mix(baseLight, color, 10),
            "100": Color.mix(baseLight, color, 30),
            "200": Color.mix(baseLight, color, 50),
            "300": Color.mix(baseLight, color, 70),
            "400": Color.mix(baseLight, color, 85),
            "500": Color.mix(baseLight, color, 100),
            "600": Color.mix(baseDark, color, 92),
            "700": Color.mix(baseDark, color, 83),
            "800": Color.mix(baseDark, color, 74),
            "900": Color.mix(baseDark, color, 65),

            "A100": Color.lighten(Color.saturate(Color.mix(baseDark, color, 15), 80), 65),
            "A200": Color.lighten(Color.saturate(Color.mix(baseDark, color, 15), 80), 55),
            "A400": Color.lighten(Color.saturate(Color.mix(baseLight, color, 100), 55), 10),
            "A700": Color.lighten(Color.saturate(Color.mix(baseDark, color, 83), 65), 10)
        };
    }

    materialPalette(options) {
        return Color.materialPalette(this, options);
    }


        
    /**
     * 
     * @param {Color} color 
     * @param {string} name 
     * @param {object} options 
     * @returns 
     */
    static createScheme(color, name, options){
        switch (name.toLowerCase()) {
            case "analogous":
            case "analog": return Color.analogous(color);

            case "triadic":
            case "triad": return Color.triadic(color);

            case "tetradic":
            case "tetra": return Color.tetradic(color);

            case "monochromatic":
            case "monochrome":
            case "mono": return Color.monochromatic(color, options);

            case "complementary":
            case "complement":
            case "comp": return Color.complementary(color);

            case "double-complementary":
            case "double-complement":
            case "double": return Color.doubleComplementary(color);

            case "split-complementary":
            case "split-complement":
            case "split": return Color.splitComplementary(color);

            case "square": return Color.square(color);
            case "material": return Color.materialPalette(color);
        }
    }

    //#endregion

    /**
     * 
     * @param {Number} r 
     * @param {Number} g 
     * @param {Number} b 
     */
    constructor(r, g, b) {
        if( !(( 0 <= r && r <= 255 ) && ( 0 <= g && g <= 255 ) && ( 0 <= b && b <= 255 )) ) throw new Error('Color values out of bounds (0 - 255)')
        this.#red = nc(tc(r, "number"));
        this.#green = nc(tc(g, "number"));
        this.#blue = nc(tc(b, "number"));
        this.alpha = 1;

    }

    //#region mix methods
    /**
     * 
     * @param {Color} color 
     * @param {Number} amount 
     * @returns Color
     */
    static saturate(color, amount) {
        oc(color, Color);
        tc(amount, "number")
        let hsl = color.toHsl();
        let h = hsl.h;
        let s = clmp(hsl.s + amount, 100, 0);
        let l = hsl.l;
        return Color.fromHsl(h, s, l);
    }

    /**
     * 
     * @param {Number} amount 
     * @returns Color 
     */
    saturate(amount) {
        return Color.saturate(this, amount);
    }
    /**
     * 
     * @param {Color} color 
     * @param {Number} amount 
     * @returns Color
     */
    static desaturate(color, amount) {
        oc(color, Color);
        tc(amount, "number")
        let hsl = color.toHsl();
        let h = hsl.h;
        let s = clmp(hsl.s - amount, 100, 0);
        let l = hsl.l;
        return Color.fromHsl(h, s, l);
    }

    /**
     * 
     * @param {Number} amount 
     * @returns Color 
     */
    desaturate(amount) {
        return Color.desaturate(this, amount);
    }
    
    /**
     * 
     * @param {Color} color 
     * @returns Color 
     */
    static grayscale(color) {
        return Color.desaturate(color, 100);
    }

    /**
     * 
     * @returns Color 
     */
    grayscale() {
        return Color.greyscale(this, 100);
    }

    /**
     * 
     * @param {Color} color 
     * @returns Color 
     */
    static greyscale(color) {
        return Color.desaturate(color, 100);
    }

    /**
     * 
     * @returns Color 
     */
    greyscale() {
        return Color.greyscale(this, 100);
    }

    /**
     * 
     * @param {Color} color 
     * @param {Number} amount
     * @returns Color 
     */
    static lighten(color, amount) {
        ic(color, Color)
        tc(amount, "number")

        const hsl = color.toHsl();
        let h = hsl.h;
        let s = hsl.s;
        let l = clmp(hsl.l + amount, 100, 0);

        return Color.fromHsl(h, s, l);
    }
    /** @param {Number} amount */
    lighten(amount) { return Color.lighten(this, amount) }
    
    /**
     * 
     * @param {Color} color 
     * @param {Number} amount
     * @returns Color 
     */
    static darken(color, amount) {
        return Color.lighten(color, -amount);
    }
    /** @param { Number } amount */
    darken(amount) { return Color.darken(this, amount) }


    /**
     * 
     * @param {Color} color 
     * @param {Number} amount 
     * @returns Color 
     */
    static brighten(color, amount) {
        let rgb = color.toRgb();
        
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * - (amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * - (amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * - (amount / 100))));

        return new Color(rgb.r, rgb.g, rgb.b);
    }

    /**
     * 
     * @param {Number} amount 
     * @returns Color
     */
    brighten(amount) {
        return Color.brighten(this, amount);
    }



    /** @param {Color} color @param {Number} angle  */
    static shiftHue(color, angle) {
        ic(color, Color);
        tc(angle, Number)
        let { h, s, l } = color.toHsl();
        h = shift(h, angle)
        return Color.fromHsl(h, s, l);
    }
    /** @param {Number} angle */
    shiftHue(angle) { return Color.shiftHue(this, angle) }
    
    

    /** @param {Color} color1 @param {Color} color2  */
    static multiply(color1, color2) {
        ic(color1, Color);
        ic(color2, Color);
        let { r1, g1, b1 } = color1.toRgb();
        let { r2, g2, b2 } = color2.toRgb();

        return Color.fromRgb((r1 * r2) / 255, (g1 * g2) / 255, (b1 * b2) / 255);
    }
    /** @param {Number} angle */
    multiply(color) { return Color.multiply(this, color) }
    

    /** @param {Color} color1 @param {Color} color2 @param {Number} amount */
    static mix(color1, color2, amount=50) {
        ic(color1, Color);
        ic(color1, Color);
        tc(amount, "number")
  
        const rgb1 = color1.toRgb();
        const rgb2 = color2.toRgb();

        const p = clmp(amount, 100, 0) / 100;

        const r = Math.round(((rgb2.r - rgb1.r) * p) + rgb1.r);
        const g = Math.round(((rgb2.g - rgb1.g) * p) + rgb1.g);
        const b = Math.round(((rgb2.b - rgb1.b) * p) + rgb1.b);

        return Color.fromRgb(r, g, b);
    }
    

    /** @param {Color} color1 @param {Color} color2 @param {Number} amount */
    mix(color, amount) {
        return Color.mix(this, color, amount);
    }

    /** @param {Color} color1 @param {Color} color2 @param {Number} amount */
    static lerp(color1, color2, t=0.5) {
        tc(t, "number");
        ic(color1, Color);
        ic(color2, Color);
        t = clmp(t, 1, 0);
        let rgb1 = color1.toRgb();
        let rgb2 = color2.toRgb();
        
        let r1 = rgb1.r / 255;
        let g1 = rgb1.g / 255;
        let b1 = rgb1.b / 255;
        
        let r2 = rgb2.r / 255;
        let g2 = rgb2.g / 255;
        let b2 = rgb2.b / 255;

        return Color.fromRgb(
            (r1 + (r2 - r1) * t) * 255,
            (g1 + (g2 - g1) * t) * 255,
            (b1 + (b2 - b1) * t) * 255
        );
    }

    /** @param {Color} color @param {Number} amount */
    lerp(color, t) {
        return Color.lerp(this, color, t);
    }


    /**@param {Color} color1 @param {Color} color2 */
    static add(color1, color2) {
        ic(color1, Color);
        ic(color2, Color);
        
        let rgb1 = color1.toRgb();
        let rgb2 = color2.toRgb();
        
        let r1 = rgb1.r;
        let g1 = rgb1.g;
        let b1 = rgb1.b;
        
        let r2 = rgb2.r;
        let g2 = rgb2.g;
        let b2 = rgb2.b;

        return Color.fromRgb(
            Math.round((r1 + r2) / 2),
            Math.round((g1 + g2) / 2),
            Math.round((b1 + b2) / 2),
        )

    }
    
    /** @param {Color} color */
    add(color)  {
        return Color.add(this, color);
    }
    //#endregion


    //#region from methods

    /**
     * 
     * @param {string} hex
     * @returns Color
     */
    static fromHex(hex) {
            if(!hex.match(/^#?(?:[0-9a-fA-F]{3}){1,2}$/i)) throw new Error('Invalid Hex code: "' + hex + '"');
            let r="0x00";
            let g="0x00";
            let b="0x00";
            if(hex.length == 4)
            {
                r = "0x" + hex[1] + hex[1];
                g = "0x" + hex[2] + hex[2];
                b = "0x" + hex[3] + hex[3];
            }
            else if (hex.length == 3) 
            {
                r = "0x" + hex[0] + hex[0];
                g = "0x" + hex[1] + hex[1];
                b = "0x" + hex[2] + hex[2];
            }
            else if(hex.length == 7)
            {
                r = "0x" + hex[1] + hex[2];
                g = "0x" + hex[3] + hex[4];
                b = "0x" + hex[5] + hex[6];
            }
            else if(hex.length == 6)
            {
                r = "0x" + hex[0] + hex[1];
                g = "0x" + hex[2] + hex[3];
                b = "0x" + hex[4] + hex[5];
            }
        
            const color = new Color( parseInt(r, 16), parseInt(g, 16), parseInt(b, 16) );            
            return color;

    }

    /**
     * 
     * @param {Number} r 
     * @param {Number} g 
     * @param {Number} b 
     * @returns Color
     */
    static fromRgb(r, g, b) {
        return new Color(r, g, b)
    }

    /**
     * 
     * @param {Number} hue 
     * @param {Number} sat 
     * @param {Number} lum 
     * @returns Color
     */
    static fromHsl(hue, sat, lum) {
        hue = tc(hue, "number")
        sat = tc(sat, "number")
        lum = tc(lum, "number")
        if(!( 0 <= hue && hue <= 360 )) throw new Error('HSL color values out of range, hue (0 - 360)')
        if(!( 0 <= sat && sat <= 100 )) throw new Error('HSL color values out of range, sat (0 - 100)')
        if(!( 0 <= lum && lum <= 100 )) throw new Error('HSL color values out of range, lum (0 - 100)')

        sat /= 100;
        lum /= 100;

        let c = (1 - Math.abs(2 * lum - 1)) * sat;
        let x = c * (1 - Math.abs((hue / 60) % 2 - 1));
        let m = lum - c/2;
        let r=0;
        let g=0;
        let b=0;

        if (0 <= hue && hue < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= hue && hue < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= hue && hue < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= hue && hue < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= hue && hue < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= hue && hue <= 360) {
            r = c; g = 0; b = x;
        }
        
        const red   = Math.round((r + m) * 255);
        const green = Math.round((g + m) * 255);
        const blue  = Math.round((b + m) * 255);

        const color = new Color(red, green, blue);
        
        return color;
    }

    /**
     * 
     * @param {Number} hue 
     * @param {Number} sat 
     * @param {Number} lum 
     * @returns Color
     */
    static fromHsv(hue, sat, val) {
        hue = tc(hue, "number")
        sat = tc(sat, "number")
        val = tc(val, "number")
        if(!( 0 <= hue && hue <= 360 )) throw new Error('HSL color values out of range, hue (0 - 360)')
        if(!( 0 <= sat && sat <= 100 )) throw new Error('HSL color values out of range, sat (0 - 100)')
        if(!( 0 <= val && val <= 100 )) throw new Error('HSL color values out of range, lum (0 - 100)')

        sat /= 100;
        val /= 100;
        let c = val * sat;
        let x = c * ( 1 - Math.abs( (hue/60) % 2 - 1 ) );
        let m = val - c;

        let r=0;
        let g=0;
        let b=0;

        if(0 <= hue  && hue  < 60)
        {
            r = c;
            g = x;
            b = 0;
        }
        
        else if(60 <= hue  && hue < 120)
        {
            r = x;
            g = c;
            b = 0;
        }
        
        else if(120 <= hue  && hue  < 180)
        {
            r = 0;
            g = c;
            b = x;
        }
        
        else if(180 <= hue  && hue  < 240)
        {
            r = 0;
            g = x;
            b = c;
        }
        
        else if(240 <= hue  && hue  < 300)
        {
            r = x;
            g = 0;
            b = c;
        }
        
        else if(300 <= hue  && hue  <= 360)
        {
            r = c;
            g = 0;
            b = x;
        }

        const red   = ((r + m) * 255);
        const green = ((g + m) * 255);
        const blue  = ((b + m) * 255);
        
        const color = new Color(red, green, blue);

        return color;

    }

    /**
     * 
     * @param {string} colorString 
     * @returns Color 
     */
    static fromCssString(colorString) {
        tc(colorString, "string")
        var ctx = document.createElement("canvas").getContext("2d");
        ctx.fillStyle = colorString;
        const value = ctx.fillStyle;
        if(!value) throw new Error("Invalid Color string");
        return Color.fromHex(value);
    }

    /**
     * 
     * @param {string} colorName 
     * @returns {ThisType} 
     */
    static fromName(colorName) {
        colorName = tc(colorName, "string")
        const color =  this.Colors[colorName.toUpperCase()];
        if(!color) throw new Error('Invalid Color name');
        return color;
    }

    //#endregion

    //#region to methods

    /**
     * @typedef {Object} hsl
     * @property {Number} h - hue
     * @property {Number} s - saturation
     * @property {Number} l - luminance
     */
    /**
     * @param {Color} color 
     * @returns string
     */
    static toHex(color) {
        color = ic(color, Color);
        let r = Math.round(color.#red).toString(16);
        let g = Math.round(color.#green).toString(16);
        let b = Math.round(color.#blue).toString(16);

        if (r.length == 1){
            r = "0" + r;
        }
        if (g.length == 1){
            g = "0" + g;
        }
        if (b.length == 1){
            b = "0" + b;   
        }


        return "#" + r + g + b;
    }

    /**
     * 
     * @param {Color} color
     * @returns Number[] 
     */
    static toHsl(color) {
        color = ic(color, Color);

        let h = 0;
        let s = 0;
        let l = 0;

        let r = color.#red / 255;
        let g = color.#green / 255;
        let b = color.#blue / 255;

        let cmin = Math.min(Math.min(r, g), b);
        let cmax = Math.max(Math.max(r, g), b);
        let delta = cmax - cmin;

        if (delta === 0)
        {
            h = 0;
        }
        
        else if (cmax === r)
        {
            h = ((g - b) / delta) % 6;
        }

        else if (cmax === g)
        {
            h = (b - r) / delta + 2;
        }

        else
        {
            h = (r - g) / delta + 4;
        }
  
        h = Math.round(h * 60);
  
        if (h < 0)
        {
            h += 360;  
        }

        l = (cmax + cmin) / 2;
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = parseFloat(Math.abs(s * 100));
        l = parseFloat(Math.abs(l * 100));

        return { h:nc(h), s:nc(s), l:nc(l) };

    }
    


    /**
     * @typedef {Object} hsv
     * @property {Number} h - hue
     * @property {Number} s - saturation
     * @property {Number} v - value
     */
    /**
     * @param {Color} color 
     * @returns { hsv }
     */
    static toHsv(color) {
        let h = 0;
        let s = 0;
        let v = 0;

        let r = color.#red / 255;
        let g = color.#green / 255;
        let b = color.#blue / 255;

        let cmin = Math.min(Math.min(r, g), b);
        let cmax = Math.max(Math.max(r, g), b);
        let delta = cmax - cmin;

        if (delta === 0)
        {
            h = 0;
        }
        
        else if (cmax === r)
        {
            h = ((g - b) / delta) % 6;
        }

        else if (cmax === g)
        {
            h = (b - r) / delta + 2;
        }

        else
        {
            h = (r - g) / delta + 4;
        }
  
        h = Math.round(h * 60);
  
        if (h < 0)
        {
            h += 360;  
        }

        if(cmax !== 0) 
        {
            s = (delta/cmax) * 100;
        }

        v = cmax * 100;
        return { h:nc(h), s:nc(s), v:nc(v) }; 

    }
    
    
    /**
     * @typedef {Object} rgb
     * @property {Number} r - red
     * @property {Number} g - green
     * @property {Number} b - blue
    */
    /**
     * 
     * @param {Color} color 
     * @returns { rgb }
     */
    static toRgb(color) {
        ic(color, Color);
        return { r: color.#red, g: color.#green, b: color.#blue };
    }
    
    /**
     * @typedef {Object} cmyk
     * @property {Number} c - cyan
     * @property {Number} m - magenta
     * @property {Number} y - yellow
     * @property {Number} k - black
    */
    /**
     * 
     * @param {Color} color 
     * @returns { cmyk }
     */
    static toCmyk(color) {
        ic(color, Color);
        let { r, g, b } = color.toRgb();
        let c = 1 - (r / 255);
        let m = 1 - (g / 255);
        let y = 1 - (b / 255);
        let k = Math.min(c, Math.min(m, y));
        
        c = (c - k) / (1 - k);
        m = (m - k) / (1 - k);
        y = (y - k) / (1 - k);
        
        c = nc(Math.round(c * 10000) / 100);
        m = nc(Math.round(m * 10000) / 100);
        y = nc(Math.round(y * 10000) / 100);
        k = nc(Math.round(k * 10000) / 100);

        return { c, m, y, k };
    }

    //#endregion

    //#region to methods (instance)

    /**
     * @typedef {Object} hsl
     * @property {Number} h - hue
     * @property {Number} s - saturation
     * @property {Number} l - luminance
     */
    /** @returns { hsl } */
    toHsl() {
        return Color.toHsl(this);
    }

    /**
     * @typedef {Object} hsv
     * @property {Number} h - hue
     * @property {Number} s - saturation
     * @property {Number} v - value
     */
    /** @returns { hsv } */
    toHsv() {
        return Color.toHsv(this);
    }

    /** @returns string */
    toHex() {
        return Color.toHex(this);
    }

    /**
     * @returns {rgb}
     */
    toRgb() {
        return Color.toRgb(this);
    }

    /**
     * @returns {cmyk}
     */
    toCmyk() {
        return Color.toCmyk(this);
    }

    

    //#endregion

    static random() {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255) 
        const b = Math.floor(Math.random() * 255)
        return new Color(r,g,b)
    }

    toString(type="hex") {
        tc(type, "string");
        const rgb = this.toRgb();
        const hsl = this.toHsl();
        switch(type.toLowerCase()) {
            case "hex":
                return this.toHex();
                
            case "hexa":
                let a = Math.round(this.alpha * 255).toString(16);
                if(a.length === 1) { a = "0" + a; };
                return this.toHex() + a;
                
            case "rgb":
                return `rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)})` ;
                
                
            case "rgba":
                return `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, ${this.alpha})` ;
                
            case "hsl":
                return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)` ;
                
                
            case "hsla":
                return `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%, ${this.alpha})` ;
                
            case "hsv":
                const hsv = this.toHsv();
                return `hsv(${Math.round(hsv.h)}, ${Math.round(hsv.s)}%, ${Math.round(hsv.v)}%)` ;
        
            case "cmyk":
                const cmyk = this.toCmyk();
                return `cmyk(${Math.round(cmyk.c)}%, ${Math.round(cmyk.m)}%, ${Math.round(cmyk.y)}%, ${Math.round(cmyk.k)}%)` ;
            
            default:
                "Can't convert Color to given string type";
        
        }
    }

    valueOf() {
        return parseInt("0x" + this.toHex().slice(1));
    }

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);
// module.exports = Color;

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hex_rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var hex_rgb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hex_rgb__WEBPACK_IMPORTED_MODULE_1__);



const pattern = /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;
var hexRe = new RegExp(pattern, 'i');

const float = '-?\\d*(?:\\.\\d+)';

const number = `(${float}?)`;
const percentage = `(${float}?%)`;
const numberOrPercentage = `(${float}?%?)`;

const pattern$1 = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, '');

var hsl3Re = new RegExp(pattern$1);

const pattern$2 = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${percentage}
    \\s+${percentage}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, '');

var hsl4Re = new RegExp(pattern$2);

const pattern$3 = `^
  rgba?\\(
    \\s*${number}\\s*,
    \\s*${number}\\s*,
    \\s*${number}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, '');

var rgb3NumberRe = new RegExp(pattern$3);

const pattern$4 = `^
  rgba?\\(
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, '');

var rgb3PercentageRe = new RegExp(pattern$4);

const pattern$5 = `^
  rgba?\\(
    \\s*${number}
    \\s+${number}
    \\s+${number}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
$
`.replace(/\n|\s/g, '');

var rgb4NumberRe = new RegExp(pattern$5);

const pattern$6 = `^
  rgba?\\(
    \\s*${percentage}
    \\s+${percentage}
    \\s+${percentage}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
$
`.replace(/\n|\s/g, '');

var rgb4PercentageRe = new RegExp(pattern$6);

const pattern$7 = /^transparent$/;
var transparentRe = new RegExp(pattern$7, 'i');

const clamp = (num, min, max) => Math.min(Math.max(min, num), max);

/* 500 => 255, -10 => 0, 128 => 128 */
const parseRGB = (num) => {
  let n = num;
  if (typeof n !== 'number') n = n.endsWith('%') ? (parseFloat(n) * 255) / 100 : parseFloat(n);
  return clamp(Math.round(n), 0, 255);
};

/* 200 => 100, -100 => 0, 50 => 50 */
const parsePercentage = (percentage) => clamp(parseFloat(percentage), 0, 100);

/* '50%' => 5.0, 200 => 1, -10 => 0 */
function parseAlpha(alpha) {
  let a = alpha;
  if (typeof a !== 'number') a = a.endsWith('%') ? parseFloat(a) / 100 : parseFloat(a);
  return clamp(a, 0, 1);
}

function getHEX(hex) {
  const [r, g, b, a] = hex_rgb__WEBPACK_IMPORTED_MODULE_1___default()(hex, { format: 'array' });
  return getRGB([null, ...[r, g, b, a]]);
}

function getHSL([, h, s, l, a = 1]) {
  let hh = h;
  if (hh.endsWith('turn')) {
    hh = (parseFloat(hh) * 360) / 1;
  } else if (hh.endsWith('rad')) {
    hh = Math.round((parseFloat(hh) * 180) / Math.PI);
  } else {
    hh = parseFloat(hh);
  }
  return {
    type: 'hsl',
    values: [hh, parsePercentage(s), parsePercentage(l)],
    alpha: parseAlpha(a === null ? 1 : a)
  };
}

function getRGB([, r, g, b, a = 1]) {
  return {
    type: 'rgb',
    values: [r, g, b].map(parseRGB),
    alpha: parseAlpha(a === null ? 1 : a)
  };
}

/**
 * parse-css-color
 * @version v0.1.2
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */

const parseCSSColor = (str) => {
  if (typeof str !== 'string') return null;

  const hex = hexRe.exec(str);
  if (hex) return getHEX(hex[0]);

  const hsl = hsl4Re.exec(str) || hsl3Re.exec(str);
  if (hsl) return getHSL(hsl);

  const rgb =
    rgb4NumberRe.exec(str) ||
    rgb4PercentageRe.exec(str) ||
    rgb3NumberRe.exec(str) ||
    rgb3PercentageRe.exec(str);
  if (rgb) return getRGB(rgb);

  if (transparentRe.exec(str)) return getRGB([null, 0, 0, 0, 0]);

  const cn = (color_name__WEBPACK_IMPORTED_MODULE_0___default())[str.toLowerCase()];
  if (cn) return getRGB([null, cn[0], cn[1], cn[2], 1]);

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseCSSColor);


/***/ }),
/* 4 */
/***/ ((module) => {



module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),
/* 5 */
/***/ ((module) => {



const hexCharacters = 'a-f\\d';
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

module.exports = (hex, options = {}) => {
	if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
		throw new TypeError('Expected a valid hex string');
	}

	hex = hex.replace(/^#/, '');
	let alphaFromHex = 1;

	if (hex.length === 8) {
		alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	}

	if (hex.length === 4) {
		alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
		hex = hex.slice(0, 3);
	}

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	const number = Number.parseInt(hex, 16);
	const red = number >> 16;
	const green = (number >> 8) & 255;
	const blue = number & 255;
	const alpha = typeof options.alpha === 'number' ? options.alpha : alphaFromHex;

	if (options.format === 'array') {
		return [red, green, blue, alpha];
	}

	if (options.format === 'css') {
		const alphaString = alpha === 1 ? '' : ` / ${Number((alpha * 100).toFixed(2))}%`;
		return `rgb(${red} ${green} ${blue}${alphaString})`;
	}

	return {red, green, blue, alpha};
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
const color_1 = __webpack_require__(2);
const parse_css_color_1 = __webpack_require__(3);
function parseColorString(color) {
    try {
        const p = (0, parse_css_color_1.default)(color);
        if (!p) {
            throw new Error('invalid color string');
        }
        if (p.type === "rgb") {
            const r = p.values[0];
            const g = p.values[1];
            const b = p.values[2];
            const a = p.alpha;
            return new vscode.Color(r / 255, g / 255, b / 255, a);
        }
        else {
            const h = p.values[0];
            const s = p.values[1];
            const l = p.values[2];
            const a = p.alpha;
            const { r, g, b } = color_1.default.fromHsl(h, s, l).toRgb();
            return new vscode.Color(r / 255, g / 255, b / 255, a);
        }
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
function getPos(text, index) {
    const nMatches = Array.from(text.slice(0, index).matchAll(/\n/g));
    const lineNumber = nMatches.length;
    const characterIndex = index - (nMatches[lineNumber - 1]?.index ?? -1);
    return new vscode.Position(lineNumber, characterIndex - 1);
}
class Matcher {
    static getMatches(text) {
        const matches = text.matchAll(/(#(?:[\da-f]{3,4}){2}|rgb\((?:\d{1,3},\s*){2}\d{1,3}\)|rgba\((?:\d{1,3},\s*){3}\d*\.?\d+\)|hsl\(\d{1,3}(?:,\s*\d{1,3}%){2}\)|hsla\(\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\))/gi);
        return Array.from(matches).map(match => {
            const t = match[0];
            const length = t.length;
            let type;
            if (t.startsWith('hsl(')) {
                type = "hsl";
            }
            else if (t.startsWith('hsla(')) {
                type = "hsla";
            }
            else if (t.startsWith('rgb(')) {
                type = "rgb";
            }
            else if (t.startsWith('rgba(')) {
                type = "rgba";
            }
            else if (t.startsWith('#')) {
                type = "hex";
            }
            const range = new vscode.Range(getPos(text, match.index), getPos(text, match.index + t.length));
            const col = parseColorString(t);
            if (col) {
                return {
                    color: col,
                    type,
                    length,
                    range
                };
            }
        });
    }
}
class Picker {
    constructor() {
        let subscriptions = [];
        vscode.workspace.onDidChangeTextDocument(this._onDidChangeTextDocument, this, subscriptions);
        vscode.workspace.onDidChangeConfiguration(this._onDidChangeConfiguration, this, subscriptions);
        this.register();
    }
    get languages() {
        return vscode.workspace.getConfiguration('vscode-color-picker').get('languages');
    }
    _onDidChangeTextDocument(e) {
        const editor = vscode.window.activeTextEditor;
        const document = e.document;
        const text = document.getText();
    }
    _onDidChangeConfiguration() {
    }
    register() {
        this.languages.forEach(language => {
            vscode.languages.registerColorProvider(language, {
                provideDocumentColors(document, token) {
                    const matches = Matcher.getMatches(document.getText());
                    return matches.map((match, i) => new vscode.ColorInformation(match.range, match.color));
                },
                provideColorPresentations(color, context, token) {
                    let c = color_1.default.fromRgb(color.red * 255, color.green * 255, color.blue * 255);
                    c.alpha = color.alpha;
                    let hex = c.toString('hex');
                    let hsl = c.toString('hsl');
                    let colString = context.document.getText(context.range);
                    let t = colString;
                    const presentationHex = new vscode.ColorPresentation(c.toString('hex'));
                    const presentationHexa = new vscode.ColorPresentation(c.toString('hexa'));
                    const presentationHsl = new vscode.ColorPresentation(c.toString('hsl'));
                    const presentationHsla = new vscode.ColorPresentation(c.toString('hsla'));
                    const presentationRgb = new vscode.ColorPresentation(c.toString('rgb'));
                    const presentationRgba = new vscode.ColorPresentation(c.toString('rgba'));
                    let hasAlpha = false;
                    if (t.startsWith('#') && (t.length === 9)) {
                        hasAlpha = true;
                    }
                    if (t.startsWith('hsla')) {
                        hasAlpha = true;
                    }
                    if (t.startsWith('rgba')) {
                        hasAlpha = true;
                    }
                    if (color.alpha !== 1) {
                        hasAlpha = true;
                    }
                    let withAlpha = [
                        presentationHexa,
                        presentationHsla,
                        presentationRgba
                    ];
                    let withoutAlpha = [
                        presentationHex,
                        presentationHsl,
                        presentationRgb
                    ];
                    return hasAlpha ? withAlpha : withoutAlpha;
                }
            });
        });
    }
    dispose() { }
}
function activate(context) {
    const picker = new Picker();
    context.subscriptions.push(picker);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map