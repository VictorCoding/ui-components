import { Component } from '@stencil/core';

@Component({
  tag: 'main-container',
  styleUrl: 'container.less',
  shadow: true
})
export class Container {
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
            <attachments-gallery></attachments-gallery>
          </div>
        </div>
      </div>
    );
  }
}
