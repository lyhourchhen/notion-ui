/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { colors } from '../../styles';

interface MenuProps {
  title: string;
  icon?: ReactNode;
  iconUrl?: string;
  emoji?: string;
  handleClick: () => void;
}

export default function Menu(props: MenuProps): JSX.Element {
  const { title, icon, iconUrl, emoji, handleClick } = props;
  return (
    <Item onClick={handleClick}>
      {icon && icon}
      {iconUrl && <IconImg src={iconUrl} alt={title} />}
      {emoji && <Emoji>{emoji}</Emoji>}
      <span>{title}</span>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 27px;
  margin: 0;
  padding: 0 14px 0 32px;
  color: ${colors.grey60};
  line-height: 27px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey08};
  }

  & > *:nth-child(2) {
    padding-left: 8px;
  }
`;

const IconImg = styled.img`
  width: 17.75px;
  height: 17.75px;
`;

const Emoji = styled.span`
  width: 17.5px;
  color: black;
`;
