import logo from "../assets/ciralogo.svg";

const Header = () => {
    return (
        <header className="flex justify-between items-center h-[9vh] fixed z-[9999] w-screen shadow-2xl bg-black">
            <div className="flex items-center gap-2">
                <img src={logo.src} alt="logo" className="pl-6" />
                <h1 className="text-white text-2xl font-['Fellix',_sans-serif]">Cira</h1>
            </div>
        </header>
    );
};

export default Header;