import '/src/styles/Home.css'
import '/src/styles/Header.css'
import '/src/styles/Portfolio-score.css'
import '/src/script.js'


export const Home = () => {
    return(
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

            <section>
                <h2>Portfolio Score Change</h2>
                <p>This Shows how your Portfolio Score will change if you were to execute the trades below</p>

                <div className='Container'>
                    <div className='Container-graphics'>
                    
                        <div className='Graphic'>
                            <p>Current Portfolio Score</p>
                            <div className='Graphic-container'>
                                <div className='Graphic-circular-progress'>
                                    <span className='Graphic-progress-value'>83.75%</span>
                                </div>
                            </div>
                        </div>

                        <div className='flecha'>
                            <span>+11,33%</span>
                            <img src="" alt="icono-flecha" />
                        </div>

                        <div className='Graphic'>
                            <p>Current Portfolio Score</p>
                            <div className='Graphic-container'>
                                <div className='Graphic-circular-progress'>
                                    <span className='Graphic-progress-value'>95%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}