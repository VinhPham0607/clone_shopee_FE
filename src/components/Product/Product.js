import React, {Component} from 'react';
import ProductItem from './Item';

class Product extends Component {
    render() {
        return (
          <div className="home-product">
            <div className="row sm-gutter">
              {this.props.products &&
                this.props.products?.map &&
                this.props.products.map((product) => {
                  return (
                    <div className="col l-2-4 m-4 c-6">
                      <ProductItem {...product} />
                    </div>
                  );
                })}
            </div>
          </div>
        );
    }
}

export default Product;