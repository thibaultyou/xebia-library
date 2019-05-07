import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import BookCard from './Card.component';

describe('Card component', () => {
  const props = {
    book: {
      isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
      title: "Henri Potier à l'école des sorciers",
      price: 35,
      cover: 'http://henri-potier.xebia.fr/hp0.jpg',
      synopsis: [
        "Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
      ],
    },
    addBook: jest.fn(),
  };

  it('should render all child components', () => {
    const wrapper = shallow(<BookCard {...props} classes={{}} />);
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(CardContent)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(4);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Hidden)).toHaveLength(1);
    expect(wrapper.find(CardMedia)).toHaveLength(1);
  });
});
