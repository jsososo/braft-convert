"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToHTMLConfig = exports.getFromHTMLConfig = exports.blocks = exports.getHexColor = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader/patch').enterModule;

  enterModule && enterModule(module);
})();

var namedColors = {
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgreen": "#006400",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred ": "#cd5c5c",
  "indigo": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgrey": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370d8",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#d87093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
};

var getHexColor = exports.getHexColor = function getHexColor(color) {

  color = color.replace('color:', '').replace(';', '').replace(' ', '');

  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
    return color;
  } else if (namedColors[color]) {
    return namedColors[color];
  } else if (color.indexOf('rgb') === 0) {

    var rgbArray = color.split(',');
    var convertedColor = rgbArray.length < 3 ? null : '#' + [rgbArray[0], rgbArray[1], rgbArray[2]].map(function (x) {
      var hex = parseInt(x.replace(/\D/g, ''), 10).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');

    return (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(convertedColor) ? convertedColor : null
    );
  } else {
    return null;
  }
};

var blocks = exports.blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
};

var convertAtomicBlock = function convertAtomicBlock(block, contentState) {

  var contentBlock = contentState.getBlockForKey(block.key);
  var entityKey = contentBlock.getEntityAt(0);
  var entity = contentState.getEntity(entityKey);
  var mediaType = entity.getType().toLowerCase();

  var _block$data = block.data,
      float = _block$data.float,
      alignment = _block$data.alignment;

  var _entity$getData = entity.getData(),
      url = _entity$getData.url,
      link = _entity$getData.link,
      link_target = _entity$getData.link_target,
      width = _entity$getData.width,
      height = _entity$getData.height;

  if (mediaType === 'image') {

    var imageWrapStyle = {};

    if (float) {
      imageWrapStyle.float = float;
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment;
    }

    if (link) {
      return _react2.default.createElement(
        "div",
        { className: "media-wrap image-wrap", style: imageWrapStyle },
        _react2.default.createElement(
          "a",
          { style: { display: 'inline-block' }, href: link, target: link_target },
          _react2.default.createElement("img", { src: url, width: width, height: height, style: { width: width, height: height } })
        )
      );
    } else {
      return _react2.default.createElement(
        "div",
        { className: "media-wrap image-wrap", style: imageWrapStyle },
        _react2.default.createElement("img", { src: url, width: width, height: height, style: { width: width, height: height } })
      );
    }
  } else if (mediaType === 'audio') {
    return _react2.default.createElement(
      "div",
      { className: "media-wrap audio-wrap" },
      _react2.default.createElement("audio", { controls: true, src: url })
    );
  } else if (mediaType === 'video') {
    return _react2.default.createElement(
      "div",
      { className: "media-wrap video-wrap" },
      _react2.default.createElement("video", { controls: true, src: url, width: width, height: height })
    );
  } else if (mediaType === 'hr') {
    return _react2.default.createElement("hr", null);
  } else {
    return _react2.default.createElement("p", null);
  }
};

var styleToHTML = function styleToHTML(props) {
  return function (style) {

    style = style.toLowerCase();

    if (style === 'strikethrough') {
      return _react2.default.createElement("span", { style: { textDecoration: 'line-through' } });
    } else if (style === 'superscript') {
      return _react2.default.createElement("sup", null);
    } else if (style === 'subscript') {
      return _react2.default.createElement("sub", null);
    } else if (style.indexOf('color-') === 0) {
      return _react2.default.createElement("span", { style: { color: '#' + style.split('-')[1] } });
    } else if (style.indexOf('bgcolor-') === 0) {
      return _react2.default.createElement("span", { style: { backgroundColor: '#' + style.split('-')[1] } });
    } else if (style.indexOf('fontsize-') === 0) {
      return _react2.default.createElement("span", { style: { fontSize: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('lineheight-') === 0) {
      return _react2.default.createElement("span", { style: { lineHeight: style.split('-')[1] } });
    } else if (style.indexOf('letterspacing-') === 0) {
      return _react2.default.createElement("span", { style: { letterSpacing: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('indent-') === 0) {
      return _react2.default.createElement("span", { style: { paddingLeft: style.split('-')[1] + 'px', paddingRight: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('fontfamily-') === 0) {
      var fontFamily = props.fontFamilies.find(function (item) {
        return item.name.toLowerCase() === style.split('-')[1];
      });
      if (!fontFamily) return;
      return _react2.default.createElement("span", { style: { fontFamily: fontFamily.family } });
    }
  };
};

var blockToHTML = function blockToHTML(contentState) {
  return function (block) {

    var result = null;
    var blockStyle = "";

    var blockType = block.type.toLowerCase();
    var textAlign = block.data.textAlign;


    if (textAlign) {
      blockStyle = " style=\"text-align:" + textAlign + ";\"";
    }

    if (blockType === 'atomic') {
      return convertAtomicBlock(block, contentState);
    } else if (blockType === 'code-block') {

      var previousBlock = contentState.getBlockBefore(block.key);
      var nextBlock = contentState.getBlockAfter(block.key);
      var previousBlockType = previousBlock && previousBlock.getType();
      var nextBlockType = nextBlock && nextBlock.getType();
      var codeBreakLine = block.text ? '' : '<br>';

      if (previousBlockType === 'code-block' && nextBlockType === 'code-block') {
        return {
          start: "<code><div>" + codeBreakLine,
          end: '</div></code>'
        };
      } else if (previousBlockType === 'code-block') {
        return {
          start: "<code><div>" + codeBreakLine,
          end: '</div></code></pre>'
        };
      } else if (nextBlockType === 'code-block') {
        return {
          start: "<pre><code><div>" + codeBreakLine,
          end: '</div></code>'
        };
      } else {
        return {
          start: "<pre><code><div>" + codeBreakLine,
          end: '</div></code></pre>'
        };
      }
    } else if (blocks[blockType]) {
      return {
        start: "<" + blocks[blockType] + blockStyle + ">",
        end: "</" + blocks[blockType] + ">"
      };
    } else if (blockType === 'unordered-list-item') {
      return {
        start: "<li" + blockStyle + ">",
        end: '</li>',
        nestStart: '<ul>',
        nestEnd: '</ul>'
      };
    } else if (blockType === 'ordered-list-item') {
      return {
        start: "<li" + blockStyle + ">",
        end: '</li>',
        nestStart: '<ol>',
        nestEnd: '</ol>'
      };
    }
  };
};

var entityToHTML = function entityToHTML(entity, originalText) {

  var result = originalText;
  var entityType = entity.type.toLowerCase();

  if (entityType === 'link') {
    return _react2.default.createElement(
      "a",
      { href: entity.data.href, target: entity.data.target },
      originalText
    );
  } else if (entityType === 'color') {
    return _react2.default.createElement(
      "span",
      { style: { color: entity.data.color } },
      originalText
    );
  } else if (entityType === 'bg-color') {
    return _react2.default.createElement(
      "span",
      { style: { backgroundColor: entity.data.color } },
      originalText
    );
  }
};

var htmlToStyle = function htmlToStyle(props) {
  return function (nodeName, node, currentStyle) {

    if (nodeName === 'span' && node.style.color) {
      var color = getHexColor(node.style.color);
      return color ? currentStyle.add('COLOR-' + color.replace('#', '').toUpperCase()) : currentStyle;
    } else if (nodeName === 'span' && node.style.backgroundColor) {
      var _color = getHexColor(node.style.backgroundColor);
      return _color ? currentStyle.add('BGCOLOR-' + _color.replace('#', '').toUpperCase()) : currentStyle;
    } else if (nodeName === 'sup') {
      return currentStyle.add('SUPERSCRIPT');
    } else if (nodeName === 'sub') {
      return currentStyle.add('SUBSCRIPT');
    } else if (nodeName === 'span' && node.style.fontSize) {
      return currentStyle.add('FONTSIZE-' + parseInt(node.style.fontSize, 10));
    } else if (nodeName === 'span' && node.style.lineHeight) {
      return currentStyle.add('LINEHEIGHT-' + node.style.lineHeight);
    } else if (nodeName === 'span' && node.style.letterSpacing) {
      return currentStyle.add('LETTERSPACING-' + parseInt(node.style.letterSpacing, 10));
    } else if (nodeName === 'span' && node.style.indent) {
      return currentStyle.add('INDENT-' + parseInt(node.style.indent, 10));
    } else if (nodeName === 'span' && node.style.textDecoration === 'line-through') {
      return currentStyle.add('STRIKETHROUGH');
    } else if (nodeName === 'span' && node.style.fontFamily) {
      var fontFamily = props.fontFamilies.find(function (item) {
        return item.family.toLowerCase() === node.style.fontFamily.toLowerCase();
      });
      if (!fontFamily) return currentStyle;
      return currentStyle.add('FONTFAMILY-' + fontFamily.name.toUpperCase());
    } else {
      return currentStyle;
    }
  };
};

var htmlToEntity = function htmlToEntity(nodeName, node, createEntity) {

  if (nodeName === 'a' && !node.querySelectorAll('img').length) {
    var href = node.href,
        target = node.target;

    return createEntity('LINK', 'MUTABLE', { href: href, target: target });
  } else if (nodeName === 'audio') {
    return createEntity('AUDIO', 'IMMUTABLE', { url: node.src });
  } else if (nodeName === 'video') {
    return createEntity('VIDEO', 'IMMUTABLE', { url: node.src });
  } else if (nodeName === 'img') {

    var parentNode = node.parentNode;
    var url = node.src,
        width = node.width,
        height = node.height;

    width = width || 'auto';
    height = height || 'auto';

    var entityData = { url: url, width: width, height: height };

    if (parentNode.nodeName.toLowerCase() === 'a') {
      entityData.link = parentNode.href;
      entityData.link_target = parentNode.target;
    }

    return createEntity('IMAGE', 'IMMUTABLE', entityData);
  } else if (nodeName === 'hr') {
    return createEntity('HR', 'IMMUTABLE', {});
  }
};

var htmlToBlock = function htmlToBlock(nodeName, node) {

  var nodeStyle = node.style || {};

  if (node.classList && node.classList.contains('media-wrap')) {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    };
  } else if (nodeName === 'img') {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    };
  } else if (nodeName === 'hr') {

    return {
      type: 'atomic',
      data: {}
    };
  } else if (nodeStyle.textAlign && blockNames.indexOf(nodeName) > -1) {

    return {
      type: blockTypes[blockNames.indexOf(nodeName)],
      data: {
        textAlign: nodeStyle.textAlign
      }
    };
  }
};

var getFromHTMLConfig = exports.getFromHTMLConfig = function getFromHTMLConfig(props) {

  return {
    htmlToStyle: htmlToStyle(props),
    htmlToEntity: htmlToEntity,
    htmlToBlock: htmlToBlock
  };
};

var getToHTMLConfig = exports.getToHTMLConfig = function getToHTMLConfig(props) {

  return {
    styleToHTML: styleToHTML(props),
    entityToHTML: entityToHTML,
    blockToHTML: blockToHTML(props.contentState)
  };
};
;

(function () {
  var reactHotLoader = require('react-hot-loader/patch').default;

  var leaveModule = require('react-hot-loader/patch').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(namedColors, "namedColors", "src/configs.js");
  reactHotLoader.register(getHexColor, "getHexColor", "src/configs.js");
  reactHotLoader.register(blocks, "blocks", "src/configs.js");
  reactHotLoader.register(convertAtomicBlock, "convertAtomicBlock", "src/configs.js");
  reactHotLoader.register(styleToHTML, "styleToHTML", "src/configs.js");
  reactHotLoader.register(blockToHTML, "blockToHTML", "src/configs.js");
  reactHotLoader.register(entityToHTML, "entityToHTML", "src/configs.js");
  reactHotLoader.register(htmlToStyle, "htmlToStyle", "src/configs.js");
  reactHotLoader.register(htmlToEntity, "htmlToEntity", "src/configs.js");
  reactHotLoader.register(htmlToBlock, "htmlToBlock", "src/configs.js");
  reactHotLoader.register(getFromHTMLConfig, "getFromHTMLConfig", "src/configs.js");
  reactHotLoader.register(getToHTMLConfig, "getToHTMLConfig", "src/configs.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=configs.js.map