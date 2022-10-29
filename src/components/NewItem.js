import React, { Component } from "react";
import empty from './empty.jpg'
export class NewItem extends Component {
  render() {
    let { key, title, description, imageUrl, url, author, date,source } = this.props;
    return (
      <div className="card" style={{ width: "22rem" }}>
        <img
          src={imageUrl?imageUrl:empty}
          style={{ height: "180px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              by {author ? author : "anynomous"} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-sm btn-secondary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewItem;
