const OptionsSection = () => {
    return (
        <div>
            <div>
                <p className="trepost">
                    Trending Posts
                </p>
            </div>
            <div id="filter">
                <div>    
                     <img id="FilterImg" 
                    src="https://www.4me.com/wp-content/uploads/2020/09/4me-icon-filter1.png"/>  
                    </div>
                     <div>
                         <p className="filtercat"> Filter by Category</p>
                         </div>   
               
            </div>


            {/* <!-- categories containers --> */}

            <div className="containers" >
                <div id="activecat">
                    <a> All</a>
                </div>
                <div className="cat">
                    <a>Artificial Intelligence</a>
                </div>
                <div className="cat">
                    <a>Cloud Computing</a>
                </div>
                <div className="cat">
                    <a>DevOps</a>
                </div>
                <div className="cat">
                    <a>Programming languages</a>
                </div>
                <div className="cat">
                    <a>Mobile Application Development</a>
                </div>
                <div className="cat">
                    <a>Technology and Tools</a>
                </div>
                <div className="cat">
                    <a>Get a Job in a Tech Company</a>
                </div>
                <div className="cat">
                    <a>Others</a>
                </div>

            </div>

        </div>

    )
}
export default OptionsSection;