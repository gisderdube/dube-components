/* istanbul ignore file */
import styled from 'styled-components'

type FlexProps = {
  inline?: boolean
  columnReverse?: boolean
  rowReverse?: boolean
  column?: boolean

  wrapReverse?: boolean
  noWrap?: boolean
  justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'center'
  justifyCenter?: boolean
  justifyAround?: boolean
  justifyBetween?: boolean
  justifyEnd?: boolean

  alignItems?: 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'center'
  alignStretch?: boolean
  alignEnd?: boolean
  alignCenter?: boolean
  alignBaseline?: boolean

  alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'center'
  contentStart?: boolean
  contentEnd?: boolean
  contentCenter?: boolean
  contentBetween?: boolean
  contentAround?: boolean
}

const Flex = styled.div<FlexProps>`
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  flex-direction: ${(props) => {
    if (props.columnReverse) return 'column-reverse'
    if (props.rowReverse) return 'row-reverse'
    if (props.column) return 'column'
    return 'row'
  }};
  flex-wrap: ${(props) => {
    if (props.wrapReverse) return 'wrap-reverse'
    else if (props.noWrap) return 'nowrap'
    // Defaults to nowrap if it's column,
    // Otherwise it'd cause unexpected behaviors.
    // This is because we naturally expect column contents to expand downwards,
    // and it is extremely rare that we're gonna wrap columns.
    if (props.column) return 'nowrap'
    return 'wrap'
  }};
  justify-content: ${(props) => {
    if (props.justifyContent) return props.justifyContent
    if (props.justifyCenter) return 'center'
    else if (props.justifyAround) return 'space-around'
    else if (props.justifyBetween) return 'space-between'
    else if (props.justifyEnd) return 'flex-end'
    return 'flex-start'
  }};
  align-items: ${(props) => {
    if (props.alignItems) return props.alignItems
    else if (props.alignStretch) return 'stretch'
    else if (props.alignEnd) return 'flex-end'
    if (props.alignCenter) return 'center'
    else if (props.alignBaseline) return 'baseline'
    return 'flex-start'
  }};
  align-content: ${(props) => {
    if (props.alignContent) return props.alignContent
    else if (props.contentStart) return 'flex-start'
    else if (props.contentEnd) return 'flex-end'
    else if (props.contentCenter) return 'center'
    else if (props.contentBetween) return 'space-between'
    else if (props.contentAround) return 'space-around'
    return 'stretch'
  }};
`

type ColumnProps = FlexProps & {
  third?: boolean
  quarter?: boolean
  fifth?: boolean
  threeQuarter?: boolean
  twoThird?: boolean
}

export const Column = styled(Flex)<ColumnProps>`
  width: ${(props) => {
    if (props.third) return '33%'
    if (props.quarter) return '25%'
    if (props.fifth) return '20%'
    if (props.threeQuarter) return '75%'
    if (props.twoThird) return '66%'
    return '50%'
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
`

export default Flex

export const LeftColumn = styled(Column)<ColumnProps>`
  align-items: flex-end;

  @media (max-width: 950px) {
    align-items: center;
  }
`

export const RightColumn = styled(Column)<ColumnProps>`
  align-items: flex-start;

  @media (max-width: 950px) {
    align-items: center;
  }
`
