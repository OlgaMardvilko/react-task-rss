import React from 'react';
import CategoriesList from 'components/CategoriesList';
import AddCategory from 'components/AddCategory';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 1em 0 1em 1em;
  width: 35%;
  float: left;
  padding: 0;

`;

const WrapperTasks = styled.section`
width: 100%;
padding: 0 0.3em 0 0;
overflow-y: scroll;
min-height: 100px;
height: 420px;
`;

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          name: 'Category #1',
          id: 1,
        },
        {
          name: 'Category #2',
          id: 2,
        },
        {
          name: 'Category #3',
          id: 3,
        },
      ]
    };

    this.addCategory = this.addCategory.bind(this);
  }

  addCategory(categoryName) {
    this.setState((state) => {
      const newCategories = state.categories.concat([{
        name: categoryName,
        id: Math.random(),
      }]);

      return {
        categories: newCategories,
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <AddCategory addCategory={this.addCategory} />
        <WrapperTasks>
          <CategoriesList categories={this.state.categories} />
        </WrapperTasks>
      </Wrapper>
    );
  }
}
