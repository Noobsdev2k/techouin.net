import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { ProductCard } from '@/app/components/Slider'
import React from 'react'

export default function Shop() {
  return (
    <>
      <Header hidden={true} />
      <section className="section">
        <div className="container section-container">
          {/* cards 11*/}
          <div className="cards-11">
            <div className="cards-11-head">
              <div className="cards-11-title title">New in —</div>
              <div className="cards-11-sort"><a className="cards-11-sort active" href="#">Price</a><a className="cards-11-sort" href="#">Brand</a></div>
            </div>
            <div className="cards-11-layout">
              <div className="cards-11-sidebar">
                {/* filters*/}
                <div className="filters">
                  <div className="filters-section">
                    <div className="filters-title">Colour</div>
                    <div className="filters-inner">
                      {/* colors*/}
                      <div className="colors"><label className="colors-item"><input className="colors-input" type="radio" name="color" defaultChecked /><span className="colors-bg" style={{ backgroundColor: '#222222' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg" style={{ backgroundColor: '#81D3D4' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg" style={{ backgroundColor: '#F44F18' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg" style={{ backgroundColor: '#147ABB' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg colors-bg_white" style={{ backgroundColor: '#FFFFFF' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg" style={{ backgroundColor: '#D14965' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg" style={{ backgroundColor: '#FAB35B' }} /></label></div>
                    </div>
                  </div>
                  <div className="filters-section">
                    <div className="filters-title">Size</div>
                    <div className="filters-inner filters-inner_cols"><a className="filters-link active" href="#">P</a><a className="filters-link" href="#">M</a><a className="filters-link" href="#">G</a></div>
                  </div>
                  <div className="filters-section">
                    <div className="filters-title">Style</div>
                    <div className="filters-inner"><a className="filters-link active" href="#">Casual</a><a className="filters-link" href="#">Social</a><a className="filters-link" href="#">Athleisure</a></div>
                  </div>
                  <div className="filters-section">
                    <div className="filters-title">Categories</div>
                    <div className="filters-inner"><a className="filters-link" href="#">Accessories</a><a className="filters-link" href="#">Blazers</a><a className="filters-link" href="#">Pants</a><a className="filters-link" href="#">Shirts</a></div>
                  </div>
                </div>
              </div>
              <div className="cards-11-container">
                <div className="cards-11-grid">
                  <div className="cards-11-cell cards-11-cell_lg">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell cards-11-cell_lg">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                  <div className="cards-11-cell">
                    <ProductCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* footer 5*/}
      <Footer />
    </>
  )
}
