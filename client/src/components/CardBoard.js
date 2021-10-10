import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';
import CardLine from './CardLine';
import RollDice from './RollDice';
import Switcher from './Switcher';

const dbDown = [
  { id: 1, name: 'житная', mpColor: 'brown' },
  { id: 2, name: 'общ казна' },
  { id: 3, name: 'нагатинская', mpColor: 'brown' },
  { id: 4, name: 'плоти нологи' },
  { id: 5, name: ' рижская ЖД', special: 'train' },
  { id: 6, name: 'варшавское шосссе', mpColor: 'rgb(6, 136, 243);' },
  { id: 7, name: 'шанс' },
  { id: 8, name: 'огарева', mpColor: 'rgb(6, 136, 243);' },
  { id: 9, name: 'первая парковая', mpColor: 'rgb(6, 136, 243);' },
];
const dbLeft = [
  { id: 10, name: 'Тюрьма', isCorner: true, special: 'jail' },
  { id: 11, name: 'полянка', mpColor: 'rgb(236, 34, 102);' },
  { id: 12, name: 'электро' },
  { id: 13, name: 'сретенка', mpColor: 'rgb(236, 34, 102);' },
  { id: 14, name: 'ростовская наб', mpColor: 'rgb(236, 34, 102);' },
  { id: 15, name: ' Курская ЖД', special: 'train' },
  { id: 16, name: 'рязанский проспект', mpColor: 'orange' },
  { id: 17, name: 'общ казна' },
  { id: 18, name: 'вавилова', mpColor: 'orange' },
  { id: 19, name: 'рублевское шоссе', mpColor: 'orange' },
  { id: 20, name: 'Парковка', isCorner: true, special: 'parking' },
];
const dbUp = [
  { id: 21, name: 'тверская ', mpColor: 'red' },
  { id: 22, name: 'шанс' },
  { id: 23, name: 'пушкинская', mpColor: 'red' },
  { id: 24, name: 'площадь Маяковского', mpColor: 'red' },
  { id: 25, name: 'Казанский ЖД', special: 'train' },
  { id: 26, name: 'грузинский вал', mpColor: 'yellow' },
  { id: 27, name: 'чайковского', mpColor: 'yellow' },
  { id: 28, name: 'водопровод' },
  { id: 29, name: 'смоленская площадь', mpColor: 'yellow' },
];
const dbRight = [
  { id: 30, name: 'Иди в тюрьму', isCorner: true, special: 'tojail' },
  { id: 31, name: 'щусева', mpColor: 'green' },
  { id: 32, name: 'гоголевский бульвар', mpColor: 'green' },
  { id: 33, name: 'общ казна' },
  { id: 34, name: 'кутузовский проспект', mpColor: 'green' },
  { id: 35, name: ' Ленинградская ЖД', special: 'train' },
  { id: 36, name: 'шанс' },
  { id: 37, name: 'Малая бронная', mpColor: 'blue' },
  { id: 38, name: 'ПЛОТИ!' },
  { id: 39, name: 'Арбат', mpColor: 'blue' },
  { id: 0, name: 'Start', isCorner: true, special: 'start' },
];

const BoardWrapper = styled('div')`
  display: flex;
  ${(props) =>
    props.transform &&
    `transform:rotateX(40deg); -webkit-transition: background 1s linear 0s;
	-moz-transition: transform 1s linear 0s;
	-o-transition: transform 1s linear 0s;
	transition:transform 1s linear 0s`};
  ${(props) =>
    !props.transform &&
    `transform:rotateX(0deg); -webkit-transition: background 1s linear 0s;
	-moz-transition: transform 1s linear 0s;
	-o-transition: transform 1s linear 0s;
	transition:transform 1s linear 0s`};
`;
const Row = styled('div')`
  //   display: flex;
  // flex-direction:column
`;

const Center = styled('div')`
  ${(props) => props.rotate && '-webkit-transform: rotate(-45deg)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35pt;
  height: 550px;
  width: 550px;
  ${(props) => !props.rotate && 'background-color: rgb(208, 252, 242)'}
`;

function CardBoard() {
  const { transform } = useDiceContext();
  return (
    <>
      <Switcher />
      <BoardWrapper transform={transform}>
        <CardLine position={'left'} db={dbLeft} />

        <Row>
          <CardLine position={'up'} db={dbUp} />
          <Center>
            <Center rotate={true}>MONOPOLY</Center>
          </Center>
          <CardLine position={'down'} db={dbDown} />
        </Row>

        <CardLine position={'right'} db={dbRight} />
      </BoardWrapper>
      <RollDice />
    </>
  );
}

export default CardBoard;