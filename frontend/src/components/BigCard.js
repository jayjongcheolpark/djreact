import React from 'react'
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes'
import 'tachyons'

import './BigCard.css'
import SmallCard from './SmallCard'

const BigCard = () => (
  <div className=" mv6 w-100 w-50-m w-25-l mw6 center">
    <main className="pa4 black-80">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 center tc">
          <legend className="f1 fw6 ph0 mh0">Question #</legend>
          <div className="center">
            <div className="form center pa4 br3 shadow-5">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
        </fieldset>
      </div>
    </main>
  </div>
)

export default BigCard
