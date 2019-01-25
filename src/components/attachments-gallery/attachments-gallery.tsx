import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'attachments-gallery',
  styleUrl: 'attachments-gallery.less',
  shadow: true
})
export class AttachmentsGallery {
  @State() captionText = ''
  @Prop() imagesProp = []
  @State() images = []

  fileInput!: HTMLInputElement
  slideIndex = 0

  componentWillLoad() {
    this.images = this.imagesProp
    this.showSlides(this.slideIndex)
  }

  loadAttachment() {
    const file = this.fileInput.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      this.images = [...this.images, {
        url: reader.result as string,
        captionText: file.name,
      }]
    }
    reader.readAsDataURL(file)
  }

  plusSlides(direction: number) {
    this.showSlides((this.slideIndex += direction))
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides((this.slideIndex = n))
  }

  showSlides(n) {
    const slides = this.images.length;

    if (n > slides - 1) {
      this.slideIndex = 0
    }
    if (n < slides && n !== -1) {
      this.slideIndex = n
    }
    if (n === -1) {
      this.slideIndex = slides - 1
    }

    this.captionText = this.images[this.slideIndex].captionText
  }

  render() {
    return (
      <div class="slideshow-container">

        {/* full width images */}
        {this.images.map((attachment, i) =>
          <div class={`slide ${this.slideIndex === i ? 'show' : ''}`}>
            <img src={attachment.url} />
          </div>
        )}

        {/* next/prev buttons */}
        <a class="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
        <a class="next" onClick={() => this.plusSlides(1)}>&#10095;</a>

        {/* caption text */}
        <div class="caption-container">
          <p id="caption">{ this.captionText }</p>
        </div>

        {/* select file */}
        <div class="file-select-container">
          <p>
            Drag or click here to upload attachments
          </p>
          <input
            ref={(el) => this.fileInput = el}
            class="file-input"
            onChange={() => this.loadAttachment()}
            type="file"/>
        </div>

        {/* thumbnail images */}
        <div class="row">
          {this.images.map((img, i) =>
            <div class="column">
              <img
                class="demo cursor"
                src={img.url}
                onClick={() => this.currentSlide(i)}/>
            </div>
          )}
        </div>
      </div>
    )
  }
}
