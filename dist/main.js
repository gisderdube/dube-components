import {forwardRef as $7zOsg$forwardRef, useMemo as $7zOsg$useMemo, useState as $7zOsg$useState} from "react";
import $7zOsg$styledcomponents, {css as $7zOsg$css, useTheme as $7zOsg$useTheme} from "styled-components";
import {jsx as $7zOsg$jsx, jsxs as $7zOsg$jsxs} from "react/jsx-runtime";
import {v4 as $7zOsg$v4} from "uuid";
import $7zOsg$nextlink from "next/link";



const $27dec7874a1d067d$var$Container = (0, $7zOsg$styledcomponents).div`
  padding: 35px calc((100vw - 975px) / 2);
  @media (max-width: 1015px) {
    padding: 35px 20px;
  }
`;
var $27dec7874a1d067d$export$2e2bcd8739ae039 = $27dec7874a1d067d$var$Container;


/* istanbul ignore file */ 
const $cf2b0d01669ff276$var$Flex = (0, $7zOsg$styledcomponents).div`
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
const $cf2b0d01669ff276$export$816b5d811295e6bc = (0, $7zOsg$styledcomponents)($cf2b0d01669ff276$var$Flex)`
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
var $cf2b0d01669ff276$export$2e2bcd8739ae039 = $cf2b0d01669ff276$var$Flex;
const $cf2b0d01669ff276$export$4cb61b3787083a8b = (0, $7zOsg$styledcomponents)($cf2b0d01669ff276$export$816b5d811295e6bc)`
  align-items: flex-end;

  @media (max-width: 950px) {
    align-items: center;
  }
`;
const $cf2b0d01669ff276$export$d274d05a02cf9d7c = (0, $7zOsg$styledcomponents)($cf2b0d01669ff276$export$816b5d811295e6bc)`
  align-items: flex-start;

  @media (max-width: 950px) {
    align-items: center;
  }
`;








const $dcf5675665ac2870$export$164de7ab8df77ef0 = {
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


const $c359aa252fd106b8$export$ea729cd984bbd8bf = (0, $7zOsg$css)`
  text-align: ${(p)=>p.center ? "center" : p.right ? "right" : "left"};
  @media (max-width: 950px) {
    ${(props)=>props.mobileCenter && (0, $7zOsg$css)`
        text-align: center;
      `}
    ${(props)=>props.mobileLeft && (0, $7zOsg$css)`
        text-align: left;
      `}
    ${(props)=>props.mobileRight && (0, $7zOsg$css)`
        text-align: right;
      `}
  }
`;
const $c359aa252fd106b8$var$baseStyle = (0, $7zOsg$css)`
  font-size: ${(props)=>props.size || (props.big ? "1.25rem" : props.small ? "0.75rem" : "1rem")};
  font-weight: ${(props)=>props.bold ? 500 : 300};
  ${(props)=>props.limitWidth && (0, $7zOsg$css)`
      max-width: 400px;
    `}
  color: ${(props)=>props.light ? props.theme.colors.light : props.theme.colors.dark};

  ${(props)=>props.margin && (0, $7zOsg$css)`
      margin-bottom: 0.6rem;
    `}

  ${(props)=>props.marginBig && (0, $7zOsg$css)`
      margin-bottom: 1.4rem;
    `}

  ${$c359aa252fd106b8$export$ea729cd984bbd8bf}
`;
const $c359aa252fd106b8$var$Block = (0, $7zOsg$styledcomponents).p`
  ${$c359aa252fd106b8$var$baseStyle}
`;
const $c359aa252fd106b8$var$Inline = (0, $7zOsg$styledcomponents).span`
  ${$c359aa252fd106b8$var$baseStyle}
`;
$c359aa252fd106b8$var$Block.defaultProps = $c359aa252fd106b8$var$Inline.defaultProps = {
    theme: (0, $dcf5675665ac2870$export$164de7ab8df77ef0)
};
function $c359aa252fd106b8$export$2e2bcd8739ae039({ big: big , small: small , children: children , inline: inline , center: center , right: right , mobileLeft: mobileLeft , mobileRight: mobileRight , mobileCenter: mobileCenter , limitWidth: limitWidth = true , light: light , bold: bold , ...props }) {
    const Node = inline ? $c359aa252fd106b8$var$Inline : $c359aa252fd106b8$var$Block;
    return /*#__PURE__*/ (0, $7zOsg$jsx)(Node, {
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



const $986055deb7141292$var$baseStyles = (0, $7zOsg$css)`
  ${(props)=>props.limitWidth && (0, $7zOsg$css)`
      max-width: 450px;
    `}

  color: ${(props)=>props.light ? props.theme.colors.light : props.theme.colors.dark};
  font-family: ${(props)=>props.theme.fonts.heading};
  margin-bottom: 0.6rem;
  ${(0, $c359aa252fd106b8$export$ea729cd984bbd8bf)}
`;
const $986055deb7141292$var$H1 = (0, $7zOsg$styledcomponents).h1`
  ${$986055deb7141292$var$baseStyles}
  font-size: 2.5rem;
`;
const $986055deb7141292$var$H2 = (0, $7zOsg$styledcomponents).h2`
  ${$986055deb7141292$var$baseStyles}
  font-size: 1.88rem;
`;
const $986055deb7141292$var$H3 = (0, $7zOsg$styledcomponents).h3`
  ${$986055deb7141292$var$baseStyles}
  font-size: 1.5rem;
`;
const $986055deb7141292$var$H4 = (0, $7zOsg$styledcomponents).h4`
  ${$986055deb7141292$var$baseStyles}
  font-size: 1.25rem;
`;
$986055deb7141292$var$H1.defaultProps = $986055deb7141292$var$H2.defaultProps = $986055deb7141292$var$H3.defaultProps = $986055deb7141292$var$H4.defaultProps = {
    theme: (0, $dcf5675665ac2870$export$164de7ab8df77ef0)
};
function $986055deb7141292$export$2e2bcd8739ae039({ children: children , center: center , right: right , mobileLeft: mobileLeft , mobileRight: mobileRight , mobileCenter: mobileCenter , limitWidth: limitWidth = true , light: light , h2: h2 , h3: h3 , h4: h4 , ...props }) {
    const Comp = h2 ? $986055deb7141292$var$H2 : h3 ? $986055deb7141292$var$H3 : h4 ? $986055deb7141292$var$H4 : $986055deb7141292$var$H1;
    return /*#__PURE__*/ (0, $7zOsg$jsx)(Comp, {
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







const $fff73c10f86b345c$var$StyledButton = (0, $7zOsg$styledcomponents).button`
  padding: 8px 15px;
  color: ${(props)=>props.theme.colors.light};
  border: none;
  font-size: 1rem;
  outline: none;
  font-family: ${(props)=>props.theme.fonts.heading};
  cursor: pointer;
  background: ${(props)=>props.theme.colors.primary};
  border-radius: ${(props)=>props.theme.borderRadius};

  ${(props)=>props.secondary && (0, $7zOsg$css)`
      background: transparent;
      border: 2px solid ${(props)=>props.theme.colors.primary};
      color: ${(props)=>props.theme.colors.primary};
    `}

  ${(props)=>props.disabled && (0, $7zOsg$css)`
      background: #d2d2d2;
      cursor: not-allowed;

      &::after {
        display: none;
      }
    `}
`;
$fff73c10f86b345c$var$StyledButton.defaultProps = {
    theme: (0, $dcf5675665ac2870$export$164de7ab8df77ef0)
};
const $fff73c10f86b345c$var$Button = /*#__PURE__*/ (0, $7zOsg$forwardRef)(({ children: children , disabled: disabled , onClick: onClick , ...props }, ref)=>{
    const passedTheme = (0, $7zOsg$useTheme)();
    console.log("passedTheme:", passedTheme);
    return /*#__PURE__*/ (0, $7zOsg$jsx)($fff73c10f86b345c$var$StyledButton, {
        ref: ref,
        disabled: disabled,
        onClick: (e)=>disabled ? null : onClick?.(e),
        ...props,
        children: children
    });
});
$fff73c10f86b345c$var$Button.displayName = "Button";
var $fff73c10f86b345c$export$2e2bcd8739ae039 = $fff73c10f86b345c$var$Button;







const $d8445e905bdcd2a6$var$baseStyles = (0, $7zOsg$css)`
  border: 1px solid #cacaca;
  padding: 7px 5px;
  border-radius: ${(props)=>props.theme.borderRadius};
  font-size: 1rem;
  font-family: inherit;
  color: ${(props)=>props.theme.colors.dark};
  outline: none;
`;
const $d8445e905bdcd2a6$var$InputGroup = (0, $7zOsg$styledcomponents).div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 15px;
`;
const $d8445e905bdcd2a6$var$StyledLabel = (0, $7zOsg$styledcomponents).label`
  font-size: 0.85rem;
  opacity: 0.6;
  cursor: pointer;
  transition: 125ms all ease-in-out;
`;
const $d8445e905bdcd2a6$var$StyledInput = (0, $7zOsg$styledcomponents).input`
  ${$d8445e905bdcd2a6$var$baseStyles}
`;
const $d8445e905bdcd2a6$var$StyledTextarea = (0, $7zOsg$styledcomponents).textarea`
  ${$d8445e905bdcd2a6$var$baseStyles}
  min-height: 150px;
`;
$d8445e905bdcd2a6$var$StyledInput.defaultProps = $d8445e905bdcd2a6$var$StyledTextarea.defaultProps = {
    theme: (0, $dcf5675665ac2870$export$164de7ab8df77ef0)
};
const $d8445e905bdcd2a6$var$Input = ({ id: givenId , textarea: textarea , label: label , value: value , onChange: onChange , wrapperProps: wrapperProps , style: style , ...props })=>{
    const id = (0, $7zOsg$useMemo)(()=>{
        return givenId || (label ? `input-${label}` : (0, $7zOsg$v4)());
    }, [
        givenId,
        label
    ]);
    const [isFocused, setFocused] = (0, $7zOsg$useState)(false);
    const inputProps = {
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
    };
    const inputEl = textarea ? /*#__PURE__*/ (0, $7zOsg$jsx)($d8445e905bdcd2a6$var$StyledTextarea, {
        ...inputProps
    }) : /*#__PURE__*/ (0, $7zOsg$jsx)($d8445e905bdcd2a6$var$StyledInput, {
        ...inputProps
    });
    return /*#__PURE__*/ (0, $7zOsg$jsxs)($d8445e905bdcd2a6$var$InputGroup, {
        ...wrapperProps,
        children: [
            label && /*#__PURE__*/ (0, $7zOsg$jsx)($d8445e905bdcd2a6$var$StyledLabel, {
                htmlFor: id,
                style: {
                    ...isFocused && {
                        opacity: 1
                    }
                },
                children: label
            }) || null,
            inputEl
        ]
    });
};
var $d8445e905bdcd2a6$export$2e2bcd8739ae039 = $d8445e905bdcd2a6$var$Input;







const $11db4dc39d5f8996$var$linkStyles = (0, $7zOsg$css)`
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
const $11db4dc39d5f8996$var$StyledLink = (0, $7zOsg$styledcomponents).a`
  ${$11db4dc39d5f8996$var$linkStyles}
`;
const $11db4dc39d5f8996$var$StyledNextLink = (0, $7zOsg$styledcomponents)((0, $7zOsg$nextlink))`
  ${$11db4dc39d5f8996$var$linkStyles}
`;
$11db4dc39d5f8996$var$StyledLink.defaultProps = $11db4dc39d5f8996$var$StyledNextLink.defaultProps = {
    theme: (0, $dcf5675665ac2870$export$164de7ab8df77ef0)
};
const $11db4dc39d5f8996$var$Link = ({ external: external , ...props })=>{
    if (external) return /*#__PURE__*/ (0, $7zOsg$jsx)($11db4dc39d5f8996$var$StyledLink, {
        ...props
    });
    return /*#__PURE__*/ (0, $7zOsg$jsx)($11db4dc39d5f8996$var$StyledNextLink, {
        ...props
    });
};
var $11db4dc39d5f8996$export$2e2bcd8739ae039 = $11db4dc39d5f8996$var$Link;




export {$27dec7874a1d067d$export$2e2bcd8739ae039 as Container, $cf2b0d01669ff276$export$2e2bcd8739ae039 as Flex, $cf2b0d01669ff276$export$816b5d811295e6bc as Column, $cf2b0d01669ff276$export$4cb61b3787083a8b as LeftColumn, $cf2b0d01669ff276$export$d274d05a02cf9d7c as RightColumn, $986055deb7141292$export$2e2bcd8739ae039 as Heading, $c359aa252fd106b8$export$2e2bcd8739ae039 as Text, $fff73c10f86b345c$export$2e2bcd8739ae039 as Button, $d8445e905bdcd2a6$export$2e2bcd8739ae039 as Input, $11db4dc39d5f8996$export$2e2bcd8739ae039 as Link};
//# sourceMappingURL=main.js.map
