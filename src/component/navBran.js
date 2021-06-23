import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

class NavBran extends React.Component {
	constructor(props){
	    super(props);
	    this.state={
	      countCart: 0
	    }
	}
	componentDidMount(){	

	}
	// static getDerivedStateFromProps(props, state){
		
	// }
  render(){
  	let styFlex={
  		display:"flex",
  		justifyContent:"space-between"
  	}
  	let styelementLink={
  		textDecoration:"none",
  		color:"white"
  	}
    return ( 
      <div className="NavBran">
      	<div className="logo-phone">
			<div className="wrap" style={styFlex}>
				<img src="https://i.ibb.co/6BW4ytF/logo.png" alt="logo" style={{padding:"20px"}}/>
				<div className="number-phone" style={styFlex}>
					<div className="hotline" style={{paddingRight:"60px",textAlign:"left"}}>
						<strong>Hotline</strong>
						<p>(04) 9500 9650 - (04) 9500 8850</p>
					</div>
					<div className="phone-order" style={{textAlign:"left"}}>
						<strong>Đặt hàng nhanh</strong>
						<p>(04) 9500 9650 - (04) 9500 8850</p>
					</div>
				</div>
				<div className="search">
					<input type="text" value="Tìm Kiếm..."/>
					<FontAwesomeIcon icon={faSearch} />
				</div>
			</div>
		</div>
		<div className="Nav">
			<div className="wrap">
				<nav className="navbar" style={styFlex}>
					  <div className="collapse navbar-collapse" id="navbarNav">
					    <ul className="navbar-nav" style={styFlex}>		
					    	<Link style={styelementLink} className="nav-item" to="/"><li>Trang chủ</li></Link>	
					    	<Link style={styelementLink} className="nav-item" to="/intro"><li>Giới Thiệu</li></Link>
					    	<Link style={styelementLink} className="nav-item" to="/products"><li>Sản phẩm</li></Link>
					    	<Link style={styelementLink} className="nav-item" to="/sale"><li>Tin Khuyến Mãi</li></Link>
					    	<Link style={styelementLink} className="nav-item" to="/service"><li>Dịch Vụ</li></Link>
					    	<Link style={styelementLink} className="nav-item" to="/contact"><li>Liên Hệ</li></Link>
					    </ul>
					  </div>
					  <div className="cart" style={{position: "relative", display:"flex",alignItems:"center"}}>
					  	<FontAwesomeIcon icon={faShoppingBasket}/>
					  	<p style={{position: "absolute", top:"40%", left:"60%", transform:"translate(-50%, -50%)"}} >{this.state.countCart}</p>
					  </div>					  
				</nav>
			</div>		
		</div>
      </div>
    );
  }
}

export default NavBran;