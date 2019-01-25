import { Component } from '@stencil/core';

@Component({
  tag: 'main-container',
  styleUrl: 'container.less',
  shadow: true
})
export class Container {
  images = [
    {
    url: 'https://ih0.redbubble.net/image.147730588.7244/flat,800x800,070,f.jpg',
    captionText: 'falco',
    },
    {
      url: 'https://www.ssbwiki.com/images/thumb/e/ee/Fox_SSBB.jpg/250px-Fox_SSBB.jpg',
      captionText: 'fox',
    },
    {
      url: 'https://www.ssbwiki.com/images/thumb/7/79/Marth_SSB4.png/250px-Marth_SSB4.png',
      captionText: 'marth',
    },
  ]

  render() {
    return (
      <div class="home">
        <header>
          <h3>UI Components</h3>
        </header>
        <div class="body">
          <div class="side-menu">
            Side Menu
          </div>
          <div class="display">
            <attachments-gallery imagesProp={this.images}></attachments-gallery>
          </div>
        </div>
      </div>
    );
  }
}
