function Numpuzzle()
{
    return(
        <div className="pzl">
            <div className="container">
                <input type="button" value="1" className="box1" />
                <input type="button" value="2" className="box1" />
                <input type="button" value="3" className="box1" />
                <input type="button" value="4" className="box1" />
                <input type="button" value="5" className="box1" />
                <input type="button" value="6" className="box1" />
                <input type="button" value="7" className="box1" />
                <input type="button" value="8" className="box1" />
                <input type="button" id="box9" value=" " className="box1" />
            </div>
        </div>
    );
}

export default Numpuzzle;