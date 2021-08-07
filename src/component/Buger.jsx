import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Burger.css'
class Buger extends Component {

    renderBreadMid = () => {
        // console.log(this.props.burger)
        let {burger} = this.props;
        // let content = []
        // for (let item in burger) {
        //     let breadMid = [];
        //     for(let i = 0; i < burger[item]; i++) {
        //         breadMid.push(<div key={i} className={item}></div>)
        //     }
        //     content.push(breadMid)
        // }
        // return content

        return Object.entries(burger).map(([burger,value], index) => {
            let breadMid = [];
            for(let i = 0; i < value; i++) {
                breadMid.push(<div key={i} className={burger}></div>)
            }
            return breadMid;
        })
    }

    renderMenu = () => {
        //lấy props từ redux về
        let {menu, burger} = this.props
        // console.log(burger)
        return (Object.entries(menu).map(([item, price], index) => {
            // console.log(burger[item])
            return (
                <tr key={index}>
                    <td>{item}</td>
                    <td>
                        <button onClick={() => this.props.addBreadMid(item, 1)} className="btn btn-success">+</button> 
                        {burger[item]}
                        <button onClick={() => this.props.addBreadMid(item, -1)} className="btn btn-danger">-</button></td>
                    <td>{price}</td>
                    <td>{burger[item] * price}</td>
                </tr>
            )
        }))
    }

    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-success">Bai Tap Burger</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 className="text-center text-danger">Banh burger cua ban</h3>
                        <div className="breadTop"></div>
                        {this.renderBreadMid()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-5">
                        <h3 className="text-center">Chọn thức ăn</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Thức ăn</td>
                                    <td>Tăng Giảm</td>
                                    <td>Price</td>
                                    <td>Thành Tiền</td>
                                </tr>
                                {this.renderMenu()}
                            </thead>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>Tổng Cộng</td>
                                    <td>{this.props.total}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBreadMid: (propsBurger, amount) => {
            // tạo ra 1 action?
            const action = {
                type: 'ADD_BREADMID',
                propsBurger:propsBurger,
                amount: amount
            }
            return dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buger)