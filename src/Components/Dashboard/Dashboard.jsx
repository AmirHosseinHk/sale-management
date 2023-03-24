import React, { useState } from 'react'
import './Dashboard.css'


function Dashboard() {

  return (
    <div className='Dashboard'>
      <div className="dashboard-firstRow">
        <div className="today-saleBox">
          <div className="saleBox-header">
            <h2>Today’s Sales</h2>
            <h6>Sales Summary</h6>
          </div>
          <div className="today-sale-boxes">
            <div className="today-sale-boxes-items">
              <img src="./img/2.png" alt="" />
              <div className="today-sale-boxes-items-txtHead">
                $5k
              </div>
              <div className="today-sale-boxes-items-txtSubHead">
                Total Sales              </div>
              <div className="today-sale-boxes-items-txtFoot today-sale-boxes-items-txtFoot-color1">
                +10% from yesterday              </div>
            </div>
            <div className="today-sale-boxes-items"><img src="./img/second.png" alt="" />
              <div className="today-sale-boxes-items-txtHead">
                500              </div>
              <div className="today-sale-boxes-items-txtSubHead">
                Total Order             </div>
              <div className="today-sale-boxes-items-txtFoot today-sale-boxes-items-txtFoot-color2">
                +8% from yesterday             </div></div>
            <div className="today-sale-boxes-items"><img src="./img/third.png" alt="" />
              <div className="today-sale-boxes-items-txtHead">
                9              </div>
              <div className="today-sale-boxes-items-txtSubHead">
                Product Sold         </div>
              <div className="today-sale-boxes-items-txtFoot today-sale-boxes-items-txtFoot-color3">
                +2% from yesterday             </div></div>
            <div className="today-sale-boxes-items"><img src="./img/fourth.png" alt="" />
              <div className="today-sale-boxes-items-txtHead">
                12              </div>
              <div className="today-sale-boxes-items-txtSubHead">
                New Customer             </div>
              <div className="today-sale-boxes-items-txtFoot today-sale-boxes-items-txtFoot-color4">
                +3% from yesterday           </div></div>
          </div>
        </div>
        <div className="levelBox">
          <div className="levelBox-head">
            Level
          </div>
          <div className="level-chart">
            <div className="firstLevel">
              <div className="firstLevel-chart"></div>
            </div>
            <div className="secondLevel">
              <div className="secondLevel-chart"></div>

            </div>
            <div className="thirdLevel">
              <div className="thirdLevel-chart"></div>

            </div>
            <div className="fourthLevel">
              <div className="fourthLevel-chart"></div>

            </div>
            <div className="fithLevel">
              <div className="fithLevel-chart"></div>

            </div>
            <div className="sixthLevel">
              <div className="sixthLevel-chart"></div>

            </div>

          </div>
          <div className="chart-section">
            <div>Volume</div>
            <div className="chart-section-devider"></div>
            <div>Service</div>
          </div>
        </div>
      </div>
      <div className="dashboard-secondRow">
        <div className="top-product-head">Top Products</div>
        <div className="topProducts-list">
          <ul className='topProduct-ul'>
            <li className="topProductHeader topProduct-li">
              <div>#</div>
              <div style={{
                marginRight: '90px',
                marginLeft: '28px'
              }}>Name</div>
              <div style={{ marginRight: '74px' }}>Popularity</div>
              <div style={{ marginRight: '10px' }}>Sale</div>
            </li>
            <div className="topProduct-border"></div>

            <li className='topProduct-li'>
              <div className="rownumber">01</div>
              <div className="topProduct-name">Home Decore Range</div>
              <div className="topProduct-range"><div className="topProduct-range-1"></div></div>
              <button className='topProduct-sale-1 '>46%</button>

            </li>
            <div className="topProduct-border"></div>
            <li className='topProduct-li'>
              <div className="rownumber">02</div>
              <div className="topProduct-name">Disney Princess Dress</div>
              <div className="topProduct-range"><div className="topProduct-range-2"></div></div>
              <button className='topProduct-sale-2 '>17%</button>

            </li>
            <div className="topProduct-border"></div>
            <li className='topProduct-li'>
              <div className="rownumber">03</div>
              <div className="topProduct-name">Bathroom Essentials</div>
              <div className="topProduct-range"><div className="topProduct-range-3"></div></div>
              <button className='topProduct-sale-3 '>19%</button>

            </li>
            <div className="topProduct-border"></div>
            <li className='topProduct-li'>
              <div className="rownumber">04</div>
              <div className="topProduct-name">Apple Smartwatch</div>
              <div className="topProduct-range"><div className="topProduct-range-4"></div></div>
              <button className='topProduct-sale-4 '>29%</button>

            </li>
          </ul>
        </div>

      </div>
      <div className="dashboard-thirdRow">
        <div className="thirdRow1">
          <div className="thirdRow1-head">
            New Design will be available on March 2023 !
          </div>
          <p className='thirdRow1-para'>
            The March 2023 art & design round-up reveals the aesthetic, functional, and sustainable inspirations of contemporary designers and there are certainly some eye-catching and impactful launches to boast about.
          </p>
          <p className='thirdRow1-para'>
            Printmaker Marimekko and furniture mega-store IKEA, for example, collaborate on the recent BASTUAA collection which draws inspiration from nature. The capsule includes a total of 26 items, ranging from furniture and textiles to glassware.
          </p>
          <p className='thirdRow1-para'>
            The Lean-On Chair is another interesting design in the March 2023 art & design round-up. The sit-stand concept brings together comfort, style, and health needs.</p>
        </div>
        <div className="thirdRow2">
          <img src="./img/download.jpg" alt="" />
        </div>
      </div>
    </div >
  )
}

export default Dashboard