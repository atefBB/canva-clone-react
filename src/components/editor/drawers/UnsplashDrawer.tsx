import React from "react";

import DrawerSearch from "./DrawerSearch";
import ImageItem from "./ImageItem";

import scrollbar from "./scrollbar.module.css";
import styles from "./UnsplashDrawer.module.css";

class UnsplashDrawer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      query: "",
      page: 1,
      popular: true,
    };
    this.addElement = this.addElement.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'fetchUnsplashPopular' does not exist on ... Remove this comment to see the full error message
    const { fetchUnsplashPopular } = this.props;
    fetchUnsplashPopular();
  }

  handleSearch(e: any) {
    this.setState({ query: e.target.value });
  }

  clearSearch() {
    this.setState({ query: "", popular: true });
  }

  submitSearch(e: any) {
    e.preventDefault();
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'fetchUnsplashQuery' does not exist on ty... Remove this comment to see the full error message
    const { fetchUnsplashQuery } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'page' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { page, query } = this.state;
    fetchUnsplashQuery(page, query);
    this.setState({ popular: false });
  }

  addElement({ width, height, full: url }: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'addElement' does not exist on type 'Read... Remove this comment to see the full error message
    const { addElement } = this.props;
    const element = {
      elementableType: "Image",
      transparency: 1,
      zIndex: 0,
      posX: 0,
      posY: 0,
      elementableAttributes: {
        url,
        width,
        height,
      },
    };
    addElement(element);
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'popularResults' does not exist on type '... Remove this comment to see the full error message
    const { popularResults, searchResults, toggleModal } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'query' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { query, popular } = this.state;
    const images = popular ? popularResults : searchResults;
    return (
      <>
        <DrawerSearch
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ placeholder: string; handleSearch: (e: any... Remove this comment to see the full error message
          placeholder="Search millions of photos"
          handleSearch={this.handleSearch}
          handleClear={this.clearSearch}
          value={query}
          handleSubmit={this.submitSearch}
        />
        <div className={scrollbar.customScroll}>
          <div className={styles.unsplashDrawer}>
            <div className={styles.masonry}>
              {images.map((image: any) => (
                <div
                  key={image.id}
                  className={styles.masonItem}
                  style={{
                    flexGrow: (image.width * 85) / image.height,
                    flexBasis: (image.width * 95) / image.height,
                  }}
                >
                  <i
                    style={{
                      paddingBottom: `${(image.height / image.width) * 100.0}%`,
                    }}
                  />
                  <ImageItem
                    /* @ts-expect-error */
                    thumb={image.thumb}
                    id={image.id}
                    image={image}
                    toggleModal={toggleModal}
                    addElement={this.addElement}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UnsplashDrawer;
