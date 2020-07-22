const Header = () => {
  return (
    <div className='wrapper'>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Company</a>
          </li>
          <li className='dropdown'>
            <a href='#'>Products</a>
            <ul className='menu-area'>
              <ul>
                <h4>Our Company</h4>
              </ul>
              <ul>
                <h4>Graphic Design</h4>
                <li>
                  <a href='#'>Logo Design</a>
                </li>
                <li>
                  <a href='#'>Site Design</a>
                </li>
                <li>
                  <a href='#'>Banner Design</a>
                </li>
              </ul>
              <ul>
                <h4>Web Design</h4>
                <li>
                  <a href='#'>Html Design</a>
                </li>
                <li>
                  <a href='#'>Wordpress Design</a>
                </li>
                <li>
                  <a href='#'>React Design</a>
                </li>
              </ul>
              <ul>
                <h4>Photography</h4>
                <li>
                  <a href='#'>Fashion Photography</a>
                </li>
                <li>
                  <a href='#'>Sports Photography</a>
                </li>
              </ul>
            </ul>
          </li>
          <li>
            <a href='#'>Rental Services</a>
          </li>
          <li>
            <a href='#'>Laboratory</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
       .wrapper {
           width:1170px;
           margin:20px auto;
         
       }
       nav{
           position:absolute;
           background:#262626
           font-size:16px;
       }
       nav > ul {
           position:relative;
           display:flex;
           justify-content:center;
           width:1170px;
           margin: 0 auto;
           padding:0;
       }
       nav a {
           display:block;
           color: #000;
           text-decoration:none;
        
       }
       nav ul li {
           color:red;
           list-style:none;
           transition:0.5s;
       }
       nav>ul>li>a{
           padding:15px 25px;
       }
       nav ul > li.dropwdown > a:after {
           position:relative;
           float:right;
           content:'';
           margin-left:10px;
           margin-top:8px;

       }

       nav >ul > li:hover {
           background:#668fc5;
       }

       nav ul.menu-area {
           padding:40px 40px 0 40px;
           background:green;
           text-align:left;
           border-top: 5px solid yellow;
           box-shadow:0 5px 10px rgba(0,0,0,0.6);
           z-index:1;
           position:absolute;
           display:flex;
           flex-wrap:wrap;
           width:1170px;
           top:-9999px;
           left:0;
       }

       nav ul li:hover ul.menu-area{
           top:100%;
       }

       nav ul.menu-area ul{
           width:%25;
           margin-bottom:40px;
           color:#262626;
       }
       nav ul.menu-area h4{
           margin-bottom:15px;
       }
        nav ul.menu-area ul li{
    display:block;
    }
        nav ul.menu-area ul li a{
            margin-top:10px;
            color:#fff;
            text-transform:none;
        }
        nav ul.menu-area ul li a:hover{
            color:#164c82;
        }

      `}</style>
    </div>
  )
}

export default Header
