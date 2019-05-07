import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import { OFFERS_QUERY } from '../../../queries';
import ListQuery from './List.query';

describe('ListQuery component', () => {
  const mocks = [
    {
      request: {
        query: OFFERS_QUERY,
        variables: {
          isbns:
            'c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861',
        },
      },
      result: {
        data: {
          offers: [
            {
              type: 'percentage',
              value: 5,
            },
            {
              type: 'minus',
              value: 15,
            },
            {
              type: 'slice',
              sliceValue: 100,
              value: 12,
            },
          ],
        },
      },
    },
  ];

  const props = {
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
      {
        isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
        title: "Henri Potier à l'école des sorciers",
        price: 35,
        cover: 'http://henri-potier.xebia.fr/hp0.jpg',
        synopsis: [
          "Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
        ],
      },
    ],
    deleteBook: jest.fn(),
  };

  it('should render ListQuery component', () => {
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListQuery {...props} classes={{}} />
      </MockedProvider>,
    );
  });
});
