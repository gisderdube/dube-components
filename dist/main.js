var $2EokO$react = require("react");
var $2EokO$styledcomponents = require("styled-components");
var $2EokO$reactjsxruntime = require("react/jsx-runtime");
var $2EokO$uuid = require("uuid");
var $2EokO$nextlink = require("next/link");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Container", () => $31d637028a5321d3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Flex", () => $d9e1691da1442c1e$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Column", () => $d9e1691da1442c1e$export$816b5d811295e6bc);
$parcel$export(module.exports, "LeftColumn", () => $d9e1691da1442c1e$export$4cb61b3787083a8b);
$parcel$export(module.exports, "RightColumn", () => $d9e1691da1442c1e$export$d274d05a02cf9d7c);
$parcel$export(module.exports, "Heading", () => $7d728357f83ae45c$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Text", () => $88a3776bdbb5bf4b$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Button", () => $be3970aed9aa91fc$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Input", () => $230195c8b3ef11e1$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Link", () => $fde1f6d1bd8ca142$export$2e2bcd8739ae039);


const $31d637028a5321d3$var$Container = (0, ($parcel$interopDefault($2EokO$styledcomponents))).div`
  padding: 35px calc((100vw - 975px) / 2);
  @media (max-width: 1015px) {
    padding: 35px 20px;
  }
`;
var $31d637028a5321d3$export$2e2bcd8739ae039 = $31d637028a5321d3$var$Container;


/* istanbul ignore file */ 
const $d9e1691da1442c1e$var$Flex = (0, ($parcel$interopDefault($2EokO$styledcomponents))).div`
  display: ${(props)=>props.inline ? "inline-flex" : "flex"};
  flex-direction: ${(props)=>{
    if (props.columnReverse) return "column-reverse";
    if (props.rowReverse) return "row-reverse";
    if (props.column) return "column";
    return "row";
}};
  flex-wrap: ${(props)=>{
    if (props.wrapReverse) return "wrap-reverse";
    else if (props.noWrap) return "nowrap";
    // Defaults to nowrap if it's column,
    // Otherwise it'd cause unexpected behaviors.
    // This is because we naturally expect column contents to expand downwards,
    // and it is extremely rare that we're gonna wrap columns.
    if (props.column) return "nowrap";
    return "wrap";
}};
  justify-content: ${(props)=>{
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return "center";
    else if (props.justifyAround) return "space-around";
    else if (props.justifyBetween) return "space-between";
    else if (props.justifyEnd) return "flex-end";
    return "flex-start";
}};
  align-items: ${(props)=>{
    if (props.alignItems) return props.alignItems;
    else if (props.alignStretch) return "stretch";
    else if (props.alignEnd) return "flex-end";
    if (props.alignCenter) return "center";
    else if (props.alignBaseline) return "baseline";
    return "flex-start";
}};
  align-content: ${(props)=>{
    if (props.alignContent) return props.alignContent;
    else if (props.contentStart) return "flex-start";
    else if (props.contentEnd) return "flex-end";
    else if (props.contentCenter) return "center";
    else if (props.contentBetween) return "space-between";
    else if (props.contentAround) return "space-around";
    return "stretch";
}};
`;
const $d9e1691da1442c1e$export$816b5d811295e6bc = (0, ($parcel$interopDefault($2EokO$styledcomponents)))($d9e1691da1442c1e$var$Flex)`
  width: ${(props)=>{
    if (props.third) return "33%";
    if (props.quarter) return "25%";
    if (props.fifth) return "20%";
    if (props.threeQuarter) return "75%";
    if (props.twoThird) return "66%";
    return "50%";
}};
  padding: 25px;
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;
var $d9e1691da1442c1e$export$2e2bcd8739ae039 = $d9e1691da1442c1e$var$Flex;
const $d9e1691da1442c1e$export$4cb61b3787083a8b = (0, ($parcel$interopDefault($2EokO$styledcomponents)))($d9e1691da1442c1e$export$816b5d811295e6bc)`
  align-items: flex-end;

  @media (max-width: 950px) {
    align-items: center;
  }
`;
const $d9e1691da1442c1e$export$d274d05a02cf9d7c = (0, ($parcel$interopDefault($2EokO$styledcomponents)))($d9e1691da1442c1e$export$816b5d811295e6bc)`
  align-items: flex-start;

  @media (max-width: 950px) {
    align-items: center;
  }
`;








const $f1468241bb96998c$export$164de7ab8df77ef0 = {
    rootSize: "16px",
    colors: {
        light: "#fff",
        dark: "#333",
        primary: "rgba(249, 100, 176, 1)",
        secondary: "rgba(145, 112, 244, 1)"
    },
    borderRadius: "0.3rem",
    fonts: {
        heading: "system-ui, sans-serif",
        body: "system-ui, sans-serif"
    }
};


const $88a3776bdbb5bf4b$export$ea729cd984bbd8bf = (0, $2EokO$styledcomponents.css)`
  text-align: ${(p)=>p.center ? "center" : p.right ? "right" : "left"};
  @media (max-width: 950px) {
    ${(props)=>props.mobileCenter && (0, $2EokO$styledcomponents.css)`
        text-align: center;
      `}
    ${(props)=>props.mobileLeft && (0, $2EokO$styledcomponents.css)`
        text-align: left;
      `}
    ${(props)=>props.mobileRight && (0, $2EokO$styledcomponents.css)`
        text-align: right;
      `}
  }
`;
const $88a3776bdbb5bf4b$var$baseStyle = (0, $2EokO$styledcomponents.css)`
  font-size: ${(props)=>props.size || (props.big ? "1.25rem" : props.small ? "0.75rem" : "1rem")};
  font-weight: ${(props)=>props.bold ? 500 : 300};
  ${(props)=>props.limitWidth && (0, $2EokO$styledcomponents.css)`
      max-width: 400px;
    `}
  color: ${(props)=>props.light ? props.theme.colors.light : props.theme.colors.dark};

  ${(props)=>props.margin && (0, $2EokO$styledcomponents.css)`
      margin-bottom: 0.6rem;
    `}

  ${(props)=>props.marginBig && (0, $2EokO$styledcomponents.css)`
      margin-bottom: 1.4rem;
    `}

  ${$88a3776bdbb5bf4b$export$ea729cd984bbd8bf}
`;
const $88a3776bdbb5bf4b$var$Block = (0, ($parcel$interopDefault($2EokO$styledcomponents))).p`
  ${$88a3776bdbb5bf4b$var$baseStyle}
`;
const $88a3776bdbb5bf4b$var$Inline = (0, ($parcel$interopDefault($2EokO$styledcomponents))).span`
  ${$88a3776bdbb5bf4b$var$baseStyle}
`;
$88a3776bdbb5bf4b$var$Block.defaultProps = $88a3776bdbb5bf4b$var$Inline.defaultProps = {
    theme: (0, $f1468241bb96998c$export$164de7ab8df77ef0)
};
function $88a3776bdbb5bf4b$export$2e2bcd8739ae039({ big: big , small: small , children: children , inline: inline , center: center , right: right , mobileLeft: mobileLeft , mobileRight: mobileRight , mobileCenter: mobileCenter , limitWidth: limitWidth = true , light: light , bold: bold , ...props }) {
    const Node = inline ? $88a3776bdbb5bf4b$var$Inline : $88a3776bdbb5bf4b$var$Block;
    return /*#__PURE__*/ (0, $2EokO$reactjsxruntime.jsx)(Node, {
        big: big,
        small: small,
        center: center,
        right: right,
        limitWidth: limitWidth,
        light: light,
        mobileLeft: mobileLeft,
        mobileRight: mobileRight,
        mobileCenter: mobileCenter,
        bold: bold,
        ...props,
        children: children
    });
}



const $7d728357f83ae45c$var$baseStyles = (0, $2EokO$styledcomponents.css)`
  ${(props)=>props.limitWidth && (0, $2EokO$styledcomponents.css)`
      max-width: 450px;
    `}
  color: ${(props)=>props.light ? props.theme.colors.light : props.theme.colors.dark};
  font-family: ${(props)=>props.theme.fonts.heading};
  margin-bottom: 0.6rem;
  ${(0, $88a3776bdbb5bf4b$export$ea729cd984bbd8bf)}
`;
const $7d728357f83ae45c$var$H1 = (0, ($parcel$interopDefault($2EokO$styledcomponents))).h1`
  ${$7d728357f83ae45c$var$baseStyles}
  font-size: 2.5rem;
`;
const $7d728357f83ae45c$var$H2 = (0, ($parcel$interopDefault($2EokO$styledcomponents))).h2`
  ${$7d728357f83ae45c$var$baseStyles}
  font-size: 1.88rem;
`;
const $7d728357f83ae45c$var$H3 = (0, ($parcel$interopDefault($2EokO$styledcomponents))).h3`
  ${$7d728357f83ae45c$var$baseStyles}
  font-size: 1.5rem;
`;
const $7d728357f83ae45c$var$H4 = (0, ($parcel$interopDefault($2EokO$styledcomponents))).h4`
  ${$7d728357f83ae45c$var$baseStyles}
  font-size: 1.25rem;
`;
$7d728357f83ae45c$var$H1.defaultProps = $7d728357f83ae45c$var$H2.defaultProps = $7d728357f83ae45c$var$H3.defaultProps = $7d728357f83ae45c$var$H4.defaultProps = {
    theme: (0, $f1468241bb96998c$export$164de7ab8df77ef0)
};
function $7d728357f83ae45c$export$2e2bcd8739ae039({ children: children , center: center , right: right , mobileLeft: mobileLeft , mobileRight: mobileRight , mobileCenter: mobileCenter , limitWidth: limitWidth = true , light: light , h2: h2 , h3: h3 , h4: h4 , ...props }) {
    const Comp = h2 ? $7d728357f83ae45c$var$H2 : h3 ? $7d728357f83ae45c$var$H3 : h4 ? $7d728357f83ae45c$var$H4 : $7d728357f83ae45c$var$H1;
    return /*#__PURE__*/ (0, $2EokO$reactjsxruntime.jsx)(Comp, {
        center: center,
        right: right,
        limitWidth: limitWidth,
        light: light,
        mobileLeft: mobileLeft,
        mobileRight: mobileRight,
        mobileCenter: mobileCenter,
        ...props,
        children: children
    });
}







const $be3970aed9aa91fc$var$StyledButton = (0, ($parcel$interopDefault($2EokO$styledcomponents))).button`
  padding: 8px 15px;
  color: ${(props)=>props.theme.colors.light};
  border: none;
  font-size: 1rem;
  outline: none;
  font-family: ${(props)=>props.theme.fonts.heading};
  cursor: pointer;
  background: ${(props)=>props.theme.colors.primary};
  border-radius: ${(props)=>props.theme.borderRadius};

  ${(props)=>props.secondary && (0, $2EokO$styledcomponents.css)`
      background: transparent;
      border: 2px solid ${(props)=>props.theme.colors.primary};
      color: ${(props)=>props.theme.colors.primary};
    `}

  ${(props)=>props.disabled && (0, $2EokO$styledcomponents.css)`
      background: #d2d2d2;
      cursor: not-allowed;

      &::after {
        display: none;
      }
    `}
`;
$be3970aed9aa91fc$var$StyledButton.defaultProps = {
    theme: (0, $f1468241bb96998c$export$164de7ab8df77ef0)
};
const $be3970aed9aa91fc$var$Button = /*#__PURE__*/ (0, $2EokO$react.forwardRef)(({ children: children , disabled: disabled , onClick: onClick , ...props }, ref)=>{
    return /*#__PURE__*/ (0, $2EokO$reactjsxruntime.jsx)($be3970aed9aa91fc$var$StyledButton, {
        ref: ref,
        disabled: disabled,
        onClick: (e)=>disabled ? null : onClick?.(e),
        ...props,
        children: children
    });
});
$be3970aed9aa91fc$var$Button.displayName = "Button";
var $be3970aed9aa91fc$export$2e2bcd8739ae039 = $be3970aed9aa91fc$var$Button;







const $230195c8b3ef11e1$var$baseStyles = (0, $2EokO$styledcomponents.css)`
  border: 1px solid #cacaca;
  padding: 7px 5px;
  border-radius: ${(props)=>props.theme.borderRadius};
  font-size: 1rem;
  font-family: inherit;
  color: ${(props)=>props.theme.colors.dark};
  outline: none;
`;
const $230195c8b3ef11e1$var$InputGroup = (0, ($parcel$interopDefault($2EokO$styledcomponents))).div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 15px;
`;
const $230195c8b3ef11e1$var$StyledLabel = (0, ($parcel$interopDefault($2EokO$styledcomponents))).label`
  font-size: 0.85rem;
  opacity: 0.6;
  cursor: pointer;
  transition: 125ms all ease-in-out;
`;
const $230195c8b3ef11e1$var$StyledInput = (0, ($parcel$interopDefault($2EokO$styledcomponents))).input`
  ${$230195c8b3ef11e1$var$baseStyles}
`;
const $230195c8b3ef11e1$var$StyledTextarea = (0, ($parcel$interopDefault($2EokO$styledcomponents))).textarea`
  ${$230195c8b3ef11e1$var$baseStyles}
  min-height: 150px;
`;
$230195c8b3ef11e1$var$StyledInput.defaultProps = $230195c8b3ef11e1$var$StyledTextarea.defaultProps = {
    theme: (0, $f1468241bb96998c$export$164de7ab8df77ef0)
};
const $230195c8b3ef11e1$var$Input = ({ id: givenId , textarea: textarea , label: label , value: value , onChange: onChange , wrapperProps: wrapperProps , style: style , ...props })=>{
    const id = (0, $2EokO$react.useMemo)(()=>{
        return givenId || (label ? `input-${label}` : (0, $2EokO$uuid.v4)());
    }, [
        givenId,
        label
    ]);
    const [isFocused, setFocused] = (0, $2EokO$react.useState)(false);
    const InputEl = textarea ? $230195c8b3ef11e1$var$StyledTextarea : $230195c8b3ef11e1$var$StyledInput;
    return /*#__PURE__*/ (0, $2EokO$reactjsxruntime.jsxs)($230195c8b3ef11e1$var$InputGroup, {
        ...wrapperProps,
        children: [
            label && /*#__PURE__*/ (0, $2EokO$reactjsxruntime.jsx)($230195c8b3ef11e1$var$StyledLabel, {
                htmlFor: id,
                style: {
                    ...isFocused && {
                        opacity: 1
                    }
                },
                children: label
            }) || null,
            /*#__PURE__*/ (0, $2EokO$reactjsxruntime.jsx)(InputEl, {
                onFocus: ()=>setFocused(true),
                onBlur: ()=>setFocused(false),
                id: id,
                value: value,
                style: {
                    ...style,
                    ...isFocused && {
                        borderColor: "black"
                    }
                },
                onChange: (e)=>onChange?.(e.target.value, e),
                ...props
            })
        ]
    });
};
var $230195c8b3ef11e1$export$2e2bcd8739ae039 = $230195c8b3ef11e1$var$Input;







const $fde1f6d1bd8ca142$var$linkStyles = (0, $2EokO$styledcomponents.css)`
  cursor: pointer;
  position: relative;
  font-size: ${(props)=>props.lg ? "1.15rem" : "inherit"};
  font-family: ${(props)=>props.theme.fonts.heading};
  color: #4a4345;
  text-decoration: none;

  &:hover {
    color: rgb(100, 100, 100);
  }

  .caption {
    position: relative;
    background-color: transparent;
  }
`;
const $fde1f6d1bd8ca142$var$StyledLink = (0, ($parcel$interopDefault($2EokO$styledcomponents))).a`
  ${$fde1f6d1bd8ca142$var$linkStyles}
`;
const $fde1f6d1bd8ca142$var$StyledNextLink = (0, ($parcel$interopDefault($2EokO$styledcomponents)))((0, ($parcel$interopDefault($2EokO$nextlink))))`
  ${$fde1f6d1bd8ca142$var$linkStyles}
`;
$fde1f6d1bd8ca142$var$StyledLink.defaultProps = $fde1f6d1bd8ca142$var$StyledNextLink.defaultProps = {
    theme: (0, $f1468241bb96998c$export$164de7ab8df77ef0)
};
const $fde1f6d1bd8ca142$var$Link = ({ external: external , ...props })=>{
    if (external) return /*#__PURE__*/ (0, $2EokO$reactjsxruntime.jsx)($fde1f6d1bd8ca142$var$StyledLink, {
        ...props
    });
    return /*#__PURE__*/ (0, $2EokO$reactjsxruntime.jsx)($fde1f6d1bd8ca142$var$StyledNextLink, {
        ...props
    });
// const Wrapper = external ? React.Fragment : NextLink
// const El = external ? StyledLink : StyledPlaceholder
// const wrapperProps = external ? {} : { href }
// return (
//   <Wrapper {...wrapperProps}>
//     <El href={external ? href : ''} {...props} lg={lg} disableHighlight={disableHighlight}>
//       {directChildren ? children : <span className="caption">{children}</span>}
//     </El>
//   </Wrapper>
// )
};
var $fde1f6d1bd8ca142$export$2e2bcd8739ae039 = $fde1f6d1bd8ca142$var$Link;




//# sourceMappingURL=main.js.map
