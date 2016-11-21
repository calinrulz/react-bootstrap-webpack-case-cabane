import React from 'react';

class Features extends React.Component {
  render() {
    return (
      <div className="row cabane-features-container">
        <div className="text-center cabane-features-text">
          <h3>Lorem <span className="orange-bg">incredibly</span> ipsum dolor sit amet, consecteur.</h3>
          <p className="features-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas at nibh et eros consectetur mollis a nec nisl.
            Donec finibus massa quis neque euismod, et blandit nunc malesuada.
            Donec at laoreet eros, ut gravida est. Morbi sit amet pharetra enim.
          </p>
          <div className="cabane-features-bg">
            <img src="/img/features.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
};

export default Features;
