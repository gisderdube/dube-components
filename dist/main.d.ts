import React, { AnchorHTMLAttributes } from "react";
export const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
type FlexProps = {
    inline?: boolean;
    columnReverse?: boolean;
    rowReverse?: boolean;
    column?: boolean;
    wrapReverse?: boolean;
    noWrap?: boolean;
    justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'center';
    justifyCenter?: boolean;
    justifyAround?: boolean;
    justifyBetween?: boolean;
    justifyEnd?: boolean;
    alignItems?: 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'center';
    alignStretch?: boolean;
    alignEnd?: boolean;
    alignCenter?: boolean;
    alignBaseline?: boolean;
    alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'center';
    contentStart?: boolean;
    contentEnd?: boolean;
    contentCenter?: boolean;
    contentBetween?: boolean;
    contentAround?: boolean;
};
export const Flex: import("styled-components").StyledComponent<"div", any, FlexProps, never>;
export const Column: import("styled-components").StyledComponent<"div", any, FlexProps & {
    third?: boolean;
    quarter?: boolean;
    fifth?: boolean;
    threeQuarter?: boolean;
    twoThird?: boolean;
}, never>;
export const LeftColumn: import("styled-components").StyledComponent<"div", any, FlexProps & {
    third?: boolean;
    quarter?: boolean;
    fifth?: boolean;
    threeQuarter?: boolean;
    twoThird?: boolean;
}, never>;
export const RightColumn: import("styled-components").StyledComponent<"div", any, FlexProps & {
    third?: boolean;
    quarter?: boolean;
    fifth?: boolean;
    threeQuarter?: boolean;
    twoThird?: boolean;
}, never>;
type AlignProps = {
    center?: boolean;
    right?: boolean;
    mobileLeft?: boolean;
    mobileRight?: boolean;
    mobileCenter?: boolean;
};
type TextProps = AlignProps & {
    big?: boolean;
    bold?: boolean;
    small?: boolean;
    size?: string;
    limitWidth?: boolean;
    light?: boolean;
    margin?: boolean;
    marginBig?: boolean;
};
export function Text({ big, small, children, inline, center, right, mobileLeft, mobileRight, mobileCenter, limitWidth, light, bold, ...props }: TextProps & React.HTMLAttributes<HTMLParagraphElement> & {
    inline?: boolean;
}): JSX.Element;
type HeadingProps = AlignProps & {
    limitWidth?: boolean;
    light?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
};
export function Heading({ children, center, right, mobileLeft, mobileRight, mobileCenter, limitWidth, light, h2, h3, h4, ...props }: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>): JSX.Element;
type ButtonProps = {
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    secondary?: boolean;
};
export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
type InputProps = {
    textarea?: boolean;
    id?: string;
    label?: string;
    value: string;
    onChange: (string: any, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
    style?: React.CSSProperties;
};
export const Input: React.FC<InputProps>;
type LinkProps = {
    children: React.ReactNode;
    disableHighlight?: boolean;
    external?: boolean;
    href: string;
    lg?: boolean;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
};
export const Link: React.FC<LinkProps>;

//# sourceMappingURL=main.d.ts.map
