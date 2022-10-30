import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import "./news.css";

export class News extends Component {
  data = {};
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      Nopages: 0,
      loading: false,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${
      this.props.country
    }&apiKey=78451590175c4947b266799e53fafd13&page=1&pageSize=${Number(
      this.props.sz
    )}`;
    this.setState({ loading: true });
    let d = await fetch(url, {
      // mode:'no-cors'
    });
    let parsedata = await d.json();
    this.setState({
      articles: parsedata.articles,
      page: 1,
      Nopages: Math.ceil(parsedata.totalResults / this.props.sz),
      loading: false,
    });
  }
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&category={this.props.category}&country=${
      this.props.country
    }&apiKey=78451590175c4947b266799e53fafd13&page=${
      this.state.page + 1
    }&pageSize=${this.props.sz}`;
    this.setState({ loading: true });
    let d = await fetch(url, {
      // mode:'no-cors'
    });
    let parsedata = await d.json();
    this.setState({
      articles: parsedata.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${
      this.props.country
    }&apiKey=78451590175c4947b266799e53fafd13&page=${
      this.state.page - 1
    }&pageSize=${this.props.sz}`;
    this.setState({ loading: true });
    let d = await fetch(url, {
      // mode:'no-cors'
    });
    let parsedata = await d.json();
    this.setState({
      articles: parsedata.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  render() {
    // const [topic]=this.props;
    return (
      <>
        <div className="container my-5">
          <h2 className="text-center my_header">
            {" "}
            {this.props.category !== "general"
              ? this.props.category
              : "Trending"}{" "}
            news
          </h2>
          {this.state.loading && <Spinner />}
          <div className="row my-5">
            {this.state.articles?.map((element) => {
              

              return (
                !this.state.loading && (
                  <div className="col col-md-4">
                    {/* console.log(element.source.id); */}

                    <NewItem
                      key={element.source.id}
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                )
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handlePrev}
              className="btn btn-secondary"
            >
              &larr; Prev
            </button>
            <button
              disabled={this.state.page >= this.state.Nopages}
              type="button"
              onClick={this.handleNext}
              className="btn btn-secondary"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
