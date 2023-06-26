import logo from './../../images/logo.svg';
import './header.scss';

function Header({title, balance}) {
    return <header className="master rounded-4 py-2 px-4 d-flex align-items-center justify-content-between">
        <div className="balance">
            <p className="balance-text p-0"><small>{title}</small></p>
            <h3 className="title p-0">${balance}</h3>
        </div>

        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    </header>
}

export default Header;