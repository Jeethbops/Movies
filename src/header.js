

const HeaderSection = () => {
    return (
        <nav id="topbar">
        <div id="left-menu">
          <div id="logo"><a href="/1page.html"><span>Shop</span>lane</a></div>
          <a href="#clothing-section">Clothing</a>
          <a href="#accessory-section">Accessories</a>
        </div>
        <div id="search-wrapper">
          <input  
          id="search-box" type="text" name="search" placeholder="Search for Clothing and Accessories"/>
          <span></span>
        </div>
        <div id="right-menu">
          <div id="cart-wrapper">
            <p id="cart-count">0</p>
            <a href="cart.html">
              <img id="cartimg" src='https://cdn-icons-png.flaticon.com/512/60/60992.png'></img></a>
          </div>
          <img src='https://simg.nicepng.com/png/small/138-1388174_login-account-icon.png'/>
        </div>
      </nav>
        

    )
}
export default HeaderSection;