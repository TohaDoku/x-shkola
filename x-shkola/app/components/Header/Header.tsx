import './Header.css'

export default function Header() {
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header-container">
                <a className="header-logo" href="/">
                    <h3 className="h3-medium">X-SHKOLA</h3>
                </a>
                <nav className='header-nav'>
                    <ul className='header-ul'>
                        <li className='header-li'><a className='header-li-a' href="">Программа курса</a></li>
                        <li className='header-li'><a className='header-li-a' href="">Преподаватели</a></li>
                        <li className='header-li'><a className='header-li-a' href="">Бесплатное занятие</a></li>
                    </ul>
                </nav>
                <div className='header-phone'>
                    +7 495 487-01-77
                </div>
            </div>
            
        </div>
    </div>
    </>
  );
}