import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./PstrNav.css";

import { getPokemonCount, getPokemonOnPage } from "../../reducers/pageInfo";

export class PstrNav extends PureComponent {
  getPages = () => {
    const pages = Math.ceil(this.props.pokemonCount / this.props.pokemonOnPage); // Количество страниц
    const prev = 4; // Возможное количество элементов перед текущей страницей
    const currentPage = parseInt(this.props.page, 10);
    let pagesArr = [];
    let delimeterFlag = false;

    for (let i = 1; i <= pages; i++) {
      if (
        ((i < currentPage && currentPage - 1 > prev) ||
          (i > currentPage && pages - currentPage > prev)) &&
        ((i < currentPage - 2 && i > 2) ||
          (i > currentPage + 2 && i < pages - 1))
      ) {
        if (!delimeterFlag) {
          pagesArr = [...pagesArr, <span className="pstr-nav__link">...</span>];
          delimeterFlag = true;
        }
        continue;
      }

      pagesArr =
        i === currentPage
          ? [...pagesArr, this.pageRender(i, "pstr-nav__link_active")]
          : [...pagesArr, this.pageRender(i)];
      delimeterFlag = false;
    }

    return pagesArr;
  };

  pageRender = (i, activeClass) => {
    return (
      <Link
        to={`/page/${i}`}
        className={
          activeClass ? "pstr-nav__link " + activeClass : "pstr-nav__link "
        }
        key={i}
      >
        {i}
      </Link>
    );
  };

  render() {
    const pages = this.getPages();

    return <div className="pstr-nav">{pages}</div>;
  }
}

const mapStateToProps = state => ({
  pokemonCount: getPokemonCount(state),
  pokemonOnPage: getPokemonOnPage(state)
});

export default connect(mapStateToProps, null)(PstrNav);
