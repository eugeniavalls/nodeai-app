import '/src/styles/Home.css'
import '/src/styles/Header.css'
import '/src/styles/Portfolio.css'
import '/src/script.js'


export const Home = () => {
    return (
        <>
            <header className='Header'>
                <nav className='Header-nav'>
                    <ul className='Header-ul'>Summary</ul>
                    <ul className='Header-ul'>Holdings</ul>
                    <ul className='Header-ul'>Risk</ul>
                    <ul className='Header-ul'>Sector</ul>
                    <ul className='Header-ul Header-suggestions'>Suggestions</ul>
                    <ul className='Header-ul'>Scenario</ul>
                    <ul className='Header-ul'>Themes</ul>
                    <ul className='Header-ul'>News</ul>
                </nav>
            </header>

            <section className='Portfolio'>
                <h2 className='Portfolio-h2'>Portfolio Score Change</h2>
                <p className='Portfolio-text'>This Shows how your Portfolio Score will change if you were to execute the trades below</p>

                <div className='Container'>
                    <div className='Container-graphics'>

                        <div className='Graphic'>
                            <p className='Graphic-text'>Current Portfolio Score</p>
                            <div className='Graphic-container'>
                                <div className='Graphic-circular-progress'>
                                    <span className='Graphic-progress-value'>83%</span>
                                </div>
                            </div>
                        </div>

                        <div className='Arrow'>
                            <span className='Arrow-text'>+11,33%</span>
                            <img src="./arrow-white.svg" alt="icono-flecha" className='Arrow-img' />
                        </div>

                        <div className='Graphic'>
                            <p className='Graphic-text'>New Portfolio Score</p>
                            <div className='Graphic-container'>
                                <div className='Graphic-circular-progress'>
                                    <span className='Graphic-progress-value'>95%</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <hr className='Line'></hr>

                    <div className='Score-components'>
                        <p className='Graphic-text'>Score Components</p>

                        <div className='Component'>
                            <div className='Component-first-part'>
                                <div className='Component-icon-container'>
                                    <img src="./risk.svg" alt="risk" className='Component-icon' />
                                    <p className='Component-text'>Risk Match</p>
                                </div>

                                <div className='skills'>
                                    <div className='menu'>
                                        <div id='risk-firstbar'></div>
                                    </div>
                                    <div className='detalles'>
                                        <span>92.90% Excellent</span>
                                    </div>
                                </div>

                                {/* <div className='Bar Bar-risk-first'>Barra</div>

                                <p className='Component-score-text'>92.90% Excellent</p> */}
                            </div>
                            <div className='Component-arrow'>
                                <img src="./arrow-white.svg" alt="flecha" className='Component-arrow-img' />

                                <div className='skills'>
                                    <div className='menu'>
                                        <div id='risk-secondbar'></div>
                                    </div>
                                    <div className='detalles'>
                                        <span>96.61% Excellent</span>
                                    </div>
                                </div>

                                {/* <div className='Bar Bar-risk-result'>Barra</div>
                                <p className='Component-arrow-result'>96.61% Excellent</p> */}
                            </div>
                        </div>

                        <div className='Component'>
                            <div className='Component-first-part'>
                                <div className='Component-icon-container'>
                                    <img src="./sector.svg" alt="sector" className='Component-icon' />
                                    <p className='Component-text'>Sector Match</p>
                                </div>

                                <div className='skills'>
                                    <div className='menu'>
                                        <div id='sector-firstbar'></div>
                                    </div>
                                    <div className='detalles'>
                                        <span>71.67% Good</span>
                                    </div>
                                </div>

                                {/* <div className='Bar Bar-sector-first'>Barra</div>

                                <p className='Component-score-text'>71.67% Good</p> */}
                            </div>
                            <div className='Component-arrow'>
                                <img src="./arrow-white.svg" alt="flecha" className='Component-arrow-img' />

                                <div className='skills'>
                                    <div className='menu'>
                                        <div id='sector-secondbar'></div>
                                    </div>
                                    <div className='detalles'>
                                        <span>88.33% Very Good</span>
                                    </div>
                                </div>

                                {/* <div className='Bar Bar-sector-result'>Barra</div>
                                <p className='Component-arrow-result'>88.33% Very Good</p> */}
                            </div>
                        </div>

                        <div className='Component'>
                            <div className='Component-first-part'>
                                <div className='Component-icon-container'>
                                    <img src="./boosted.svg" alt="boosted" className='Component-icon' />
                                    <p className='Component-text'>Boosted Rec.</p>
                                </div>

                                <div className='skills'>
                                    <div className='menu'>
                                        <div id='boosted-firstbar'></div>
                                    </div>
                                    <div className='detalles'>
                                        <span>72.53% Good</span>
                                    </div>
                                </div>

                                {/* <div className='Bar Bar-boosted-first'>Barra</div>

                                <p className='Component-score-text'>72.53% Good</p> */}
                            </div>
                            <div className='Component-arrow'>
                                <img src="./arrow-white.svg" alt="flecha" className='Component-arrow-img' />

                                <div className='skills'>
                                    <div className='menu'>
                                        <div id='boosted-secondbar'></div>
                                    </div>
                                    <div className='detalles'>
                                        <span>81.67% Very Good</span>
                                    </div>
                                </div>
                                
                                {/* <div className='Bar Bar-boosted-result'>Barra</div>
                                <p className='Component-arrow-result'>81.67% Very Good</p> */}
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className='Investment'>
                <div className='Investment-first'>
                    <h3 className='Investment-h3'>Based on your portfolio investment style, we have the following recommendations for your portfolio</h3>
                    <div className='Investment-buttons'>
                        <div className='Investment-select'>
                            <img src="./positive.svg" alt="+" className='Investment-positive-img' />
                            <p className='Investment-select-text'>Select a Trade for Suggestion</p>
                        </div>

                        <div className='Investment-apply'>
                            <p className='Investment-apply-text'>Apply Trades</p>
                        </div>
                    </div>
                </div>

                <div className='Investment-suggestions'>
                    <p className='Investment-suggestions-text'>Get suggestions from</p>
                    <div className='Investment-suggestions-button'>
                        <p className='Suggestions-button-text'>Watchlist: Approved Stock List</p>
                        <img src="./open-white.svg" alt="" className='Suggestions-icon-open' />
                    </div>
                </div>

                <table className='Table'>
                    <tr className='Row-header'>
                        <th className='Row1'>Security</th>
                        <th className='Row2'>Portfolio Score</th>
                        <th className='Row3'> - </th>
                        <th className='Row4'>Weight %</th>
                        <th className='Row5'>Consensus Rec.</th>
                        <th className='Row6'>Yield</th>
                        <th className='Row7'>Risk</th>
                        <th className='Row8'>Reward</th>
                    </tr>
                    <tr className='Rows1-columns'>
                        <td className='Row1-column1'>
                            <div className='Security'>
                                <p className='Security-title'>EXPE</p>
                                <p className='Security-text'>Expedia Group, Inc.</p>
                            </div>
                            <img src="./security.svg" alt="security" className='Security-icon' />
                        </td>
                        <td className='Row1-column2 Portfolio-score'>+12.54%</td>
                        <td className='Row1-column3'>
                            <div className='Alt-button'>
                                <img src="./open-white.svg" alt="open" className='Alt-icon' />
                                <p className='Alt-text'>Alt</p>
                            </div>
                        </td>
                        <td className='Row1-column4 Weight'>
                            <p className='Weight-text'>30.00%</p>
                            <div className='Weight-result'>
                                <p className='Weight-result-text Sell'>Sell</p>
                                <img src="./arrow-white.svg" alt="Arrow" className='Weight-result-arrow' />
                            </div>
                            <p className='Weight-text'>0.00</p>
                        </td>
                        <td className='Row1-column5 Consensus'>
                            <div className='Consensus-button Consensus-sell'>
                                <p className='Consensus-text'>Sell</p>
                            </div>
                        </td>
                        <td className='Row1-column6 Yield'>
                            <p className='Yield-text'>0.00%</p>
                        </td>
                        <td className='Row1-column7 Risk'>
                            <p className='Risk-text Risk-high'>High</p>
                            <img src="./open-red.svg" alt="Arrow" className='Risk-icon' />
                        </td>
                        <td className='Row1-column8 Reward'>
                            <p className='Reward-text'>Neutral</p>
                            <img src="./negative.svg" alt="Arrow" className='Reward-icon' />
                        </td>
                    </tr>
                    <tr className='Rows2-columns'>
                        <td className='Row2-column1'>
                            <div className='Security'>
                                <p className='Security-title'>AMGN</p>
                                <p className='Security-text'> Amgen Inc.</p>
                            </div>
                            <img src="./security.svg" alt="security" className='Security-icon' />
                        </td>
                        <td className='Row2-column2 Portfolio-score'>-1.20%</td>
                        <td className='Row2-column3'>
                            <div className='Alt-button'>
                                <img src="./open-white.svg" alt="open" className='Alt-icon' />
                                <p className='Alt-text'>Alt</p>
                            </div>
                        </td>
                        <td className='Row2-column4 Weight'>
                            <p className='Weight-text'>0.00%</p>
                            <div className='Weight-result'>
                                <p className='Weight-result-text Buy'>Buy</p>
                                <img src="./arrow-white.svg" alt="Arrow" className='Weight-result-arrow' />
                            </div>
                            <p className='Weight-text'>30.00</p>
                        </td>
                        <td className='Row2-column5 Consensus'>
                            <div className='Consensus-button Consensus-buy'>
                                <p className='Consensus-text'>Buy</p>
                            </div>
                        </td>
                        <td className='Row2-column6 Yield'>
                            <p className='Yield-text'>3.21%</p>
                        </td>
                        <td className='Row2-column7 Risk'>
                            <p className='Risk-text Risk-average'>Average</p>
                            <img src="./negative.svg" alt="Arrow" className='Risk-icon' />
                        </td>
                        <td className='Row2-column8 Reward'>
                            <p className='Reward-text'>Neutral</p>
                            <img src="./negative.svg" alt="Arrow" className='Reward-icon' />
                        </td>
                    </tr>
                </table>
            </section>

            <section className='Changes' >
                <h2 className='Portfolio-h2'>Changes to Portfolio</h2>
                <p className='Portfolio-text'>This shows how your portfolio metrics will change if you were to execute the trades </p>

                <div className='Changes-container'>
                    <div className='Changes-allocation'>
                        <div className='Allocation'>
                            <p className='Changes-title'>Your Current Portfolio Allocation</p>
                            <div className='Allocation-bar'>Barra</div>
                            <div className='Allocation-percentages'>
                                <div className='Percentage'>
                                    <img src="./rectangle-red.svg" alt="Rectangle" className='Percentage-icon' />
                                    <p className='Percentage-text'>0.00% - Short</p>
                                </div>

                                <div className='Percentage'>
                                    <img src="./rectangle-green.svg" alt="Rectangle" className='Percentage-icon' />
                                    <p className='Percentage-text'>0.00% - Long</p>
                                </div>
                            </div>
                        </div>

                        <img src="./arrow-white.svg" alt="Arrow" className='Changes-allocation-arrow' />

                        <div className='Allocation'>
                            <p className='Changes-title'>New Portfolio Allocation</p>
                            <div className='Allocation-bar'>Barra</div>
                            <div className='Allocation-percentages'>
                                <div className='Percentage'>
                                    <img src="./rectangle-red.svg" alt="Rectangle" className='Percentage-icon' />
                                    <p className='Percentage-text'>0.00% - Short</p>
                                </div>

                                <div className='Percentage'>
                                    <img src="./rectangle-green.svg" alt="Rectangle" className='Percentage-icon' />
                                    <p className='Percentage-text'>0.00% - Long</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='Changes-curent'>
                        <p className='Changes-title'>Curent Dividend Yield</p>
                        <h2 className='Changes-curent-percentage'>0.66%</h2>
                    </div>

                    <div className='Changes-separate'>
                        <p className='Changes-separate-text'>+0.96%</p>
                        <img src="./arrow-white.svg" alt="Arrow" className='Changes-separate-icon' />
                    </div>

                    <div className='Changes-curent'>
                        <p className='Changes-title'>New Dividend Yield</p>
                        <h2 className='Changes-curent-percentage'>1.62%</h2>
                    </div>
                </div>
            </section>
        </>
    )
}