import React from 'react';
import { shallow } from 'enzyme';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List } from './List.component';
import { PriceContainer, Cover } from './List.styles';
import Header from '../Header';

describe('List component', () => {
  const book = {
    isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
    title: "Henri Potier à l'école des sorciers",
    price: 35,
    cover: 'http://henri-potier.xebia.fr/hp0.jpg',
    synopsis: [
      "Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
    ],
  };

  const parent = {
    basket: [
      {
        isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
        title: "Henri Potier à l'école des sorciers",
        price: 35,
        cover: 'http://henri-potier.xebia.fr/hp0.jpg',
        synopsis: [
          "Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
        ],
      },
      book,
    ],
    deleteBook: jest.fn(),
  };

  const offers = [
    {
      type: 'percentage',
      value: '5',
    },
    {
      type: 'minus',
      value: '15',
    },
    {
      type: 'slice',
      sliceValue: '100',
      value: '12',
    },
  ];

  const props = {
    parent: parent,
    offers: offers,
    classes: {},
  };

  it('should render all child components', () => {
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(Table)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(TableBody)).toHaveLength(1);
    expect(wrapper.find(TableRow)).toHaveLength(2);
    expect(wrapper.find(TableCell)).toHaveLength(8);
    expect(wrapper.find(Cover)).toHaveLength(2);
    expect(wrapper.find(Typography)).toHaveLength(5);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(RemoveIcon)).toHaveLength(2);
    expect(wrapper.find(PriceContainer)).toHaveLength(1);
  });
});
