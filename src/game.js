import React,{Component} from 'react';

class Box extends Component{
    selectBox = () =>{
        this.props.selectBox(this.props.row, this.props.col)
    }
    render(){
        return(
            <div
            className={this.props.boxClass}
            id={this.props.id}
            onClick={this.selectBox}
            ></div>
        );
    }
} 

class Grid extends Component{
    render(){
        const width = (this.props.cols * 16) + 1;
        var rowsArr =[];
        var boxClass = "";
        for(var i=0;i<this.props.rows;i++){
            for(var j=0;j<this.props.cols;j++){
                let boxId = i + "_" + j;
                boxClass = this.props.gridfull[i][j] ? "box on" : "box off";
                rowsArr.push(
                    <Box
                    boxClass={boxClass}
                    key={boxId}
                    row={i}
                    col={j}
                    selectBox={this.props.selectBox}
                    />
                );
            }
        }
        return(
            <div className="grid" style={{width: width}}>
                {rowsArr}
            </div>
        )
    }
}

class Main extends Component {
    constructor(){
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;
        this.state ={
            generation:0,
            gridfull: Array(this.rows).fill().map(()=>Array(this.cols).fill(false))
        }
    }
    render(){
        return(
            <div>
                <h2>JUEGO DE LA VIDA</h2>
                <Grid
                    gridfull={this.state.gridfull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox} 
                />
                <h3>Generation: {this.state.generation}</h3>
            </div>
        )
    }
}

export default Main;