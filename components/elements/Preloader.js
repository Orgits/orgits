export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="d" className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                r
                            </span>
                            <span data-text-preloader="l" className="letters-loading">
                                g
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="g" className="letters-loading">
                                t
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                s
                            </span>
                        </div>
                    </div>   
                </div>
            </div>
        </div>


        </>
    )
}
