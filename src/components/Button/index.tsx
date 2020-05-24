/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, MouseEventHandler } from 'react';
import classnames from 'classnames';
import { colors } from 'src/styles/themes';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler;
}

export default function(props: ButtonProps) {
  const { children, className='', onClick } = props;
  return (
    <Button onClick={onClick} className={classnames('Button', className)} type="button">{children}</Button>
  )
}

const Button = styled.button`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  white-space: nowrap;
  height: 28px;
  border-width: 0;
  border-radius: 3px;
  background: ${colors.primaryLight};
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px;
  color: white;
  fill: white;
  line-height: 1.2;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
  font-weight: 500;
  outline: none;

  &:hover {
    background: ${colors.primary};
  }
  &:active {
    background: ${colors.primaryDeep};
  }
`;
